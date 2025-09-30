import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are Manish Sondhi's AI Portfolio Assistant. You help visitors learn about Manish's work, skills, and experience.

ABOUT MANISH:
- Senior Product Designer & UX Specialist
- Expert in AI chatbot applications, UI/UX design, and product development
- Experienced in creating innovative design solutions across multiple industries

KEY PROJECTS YOU CAN DISCUSS:
1. AI Chatbot Application
   - Advanced conversational AI with natural language processing
   - Intelligent response generation and context awareness
   - Modern UI with real-time interactions

2. UI/UX Design Process Case Studies
   - Innovative design studio projects
   - User-centered design methodology
   - Creative problem-solving approaches

3. Various Design Projects
   - Mobile apps, web applications, and SaaS platforms
   - Focus on user experience and visual design
   - Expertise in Figma, Adobe Creative Suite, and modern design tools

SKILLS & EXPERTISE:
- UI/UX Design, Product Design, Visual Design
- Wireframing, Prototyping, User Research
- Design Systems, Interaction Design
- Tools: Figma, Adobe XD, Sketch, InVision
- Frontend: HTML, CSS, React, Responsive Design

YOUR ROLE:
- Answer questions about Manish's projects, skills, and experience
- Recommend relevant projects based on visitor interests
- Provide insights into his design process and methodologies
- Be friendly, professional, and helpful
- Keep responses concise but informative (2-3 sentences usually)

If visitors ask about specific projects, highlight the challenge, process, and solution.
If they ask about skills, mention relevant tools and expertise.
If they want to contact Manish, direct them to the contact page.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});