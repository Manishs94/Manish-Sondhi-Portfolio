import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ExternalLink, Mail, Expand, Minimize, Minus, Download, Sparkles, Brain, Lightbulb, BookOpen, Code, Palette, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  content: string;
  sender: 'ai' | 'user';
  timestamp: Date;
  hasActions?: boolean;
  type?: string;
}

export default function AIChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    content: "👋 Hi! I'm your enhanced AI portfolio assistant. I can provide detailed insights about projects, analyze design patterns, suggest improvements, and help you navigate the portfolio. What would you like to explore?",
    sender: 'ai',
    timestamp: new Date(),
    hasActions: true,
  }]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (customMessage?: string) => {
    const messageText = customMessage || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      sender: 'user',
      timestamp: new Date(),
      hasActions: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const doFetch = async () => {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          history: messages.map((m) => ({ content: m.content, sender: m.sender })),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      return json.response;
    };

    try {
      const aiText = await doFetch();
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), content: aiText, sender: 'ai', timestamp: new Date(), hasActions: true },
      ]);
    } catch (firstErr) {
      console.warn('First fetch failed, retrying...', firstErr);
      // Retry once
      try {
        const aiText = await doFetch();
        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString(), content: aiText, sender: 'ai', timestamp: new Date(), hasActions: true },
        ]);
      } catch (secondErr) {
        console.warn('Retry failed, scheduling final attempt...', secondErr);
        // Leave isTyping true and do a final attempt in background
        setTimeout(async () => {
          try {
            const aiText = await doFetch();
            setMessages((prev) => [
              ...prev,
              { id: Date.now().toString(), content: aiText, sender: 'ai', timestamp: new Date(), hasActions: true },
            ]);
          } catch (finalErr) {
            console.error('Final retry failed:', finalErr);
            // Final fallback: use local static responder to ensure user still gets an answer
            try {
              const local = generateAIResponse(messageText);
              setMessages((prev) => [
                ...prev,
                { id: Date.now().toString(), content: local.content, sender: 'ai', timestamp: new Date(), hasActions: local.hasActions || false, type: local.type },
              ]);
            } catch (localErr) {
              console.error('Local responder failed:', localErr);
              setMessages((prev) => [
                ...prev,
                { id: Date.now().toString(), content: "I'm having trouble reaching the AI right now. Please try again.", sender: 'ai', timestamp: new Date(), hasActions: false },
              ]);
            }
          } finally {
            setIsTyping(false);
          }
        }, 2000);
      } finally {
        if (!isTyping) setIsTyping(false);
      }
    } finally {
      // Ensure typing state is turned off unless waiting for final retry
      if (isTyping) setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Scroll to bottom on new messages
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  // Detect user intent from message
  const detectUserIntent = (message: string): string => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('recruiter') || lowerMsg.includes('hire') || lowerMsg.includes('team') || lowerMsg.includes('fit')) {
      return 'hiring-fit';
    }
    if (lowerMsg.includes('deep') || lowerMsg.includes('detail') || lowerMsg.includes('how') || lowerMsg.includes('explain')) {
      return 'deep-dive';
    }
    if (lowerMsg.includes('case study') || lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('bbc') || lowerMsg.includes('borrowing')) {
      return 'project-evaluation';
    }
    if (lowerMsg.includes('fintech') || lowerMsg.includes('enterprise') || lowerMsg.includes('loan') || lowerMsg.includes('compliance') || lowerMsg.includes('workflow')) {
      return 'domain-specific';
    }
    if (lowerMsg.includes('process') || lowerMsg.includes('methodology') || lowerMsg.includes('think') || lowerMsg.includes('approach')) {
      return 'philosophy';
    }
    if (lowerMsg.match(/^\w+/) && message.length < 30) {
      return 'exploration';
    }
    return 'general';
  };

  const generateAIResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    const intent = detectUserIntent(userMessage);
    
    if (message.includes('portfolio') || message.includes('overview')) {
      const isRecruiter = intent === 'hiring-fit';
      return {
        content: isRecruiter 
          ? "🎨 **Leadership Profile**\n\nI'm a Senior Product & UX Designer with 8+ years of success across enterprise fintech, B2B SaaS, and consumer banking.\n\n**Why I'm Valuable for Teams:**\n• **Systems Thinker:** I don't design features—I architect platforms. CYNC platform oversight proves multi-product leadership.\n• **Enterprise DNA:** 4 years at Bank of America (68M+ users). I understand compliance, security, and organizational complexity.\n• **Collaborative:** Cross-functional leadership with PMs, engineers, risk teams, and compliance specialists.\n• **Proven Impact:** 25% adoption increase (BoA), 20% engagement lift (CYNC), compliance-ready workflows.\n\n**Current Positioning:**\nLead Product Designer for CYNC's modular enterprise lending platform—designing decision-support workflows for underwriters, loan officers, and risk teams.\n\n👉 **For recruitment discussions:** I excel on mission-critical, high-complexity products where design directly impacts business outcomes.\n\nWhat specific domains or team structures are you exploring?"
          : "🎨 **Professional Overview**\n\nI'm a Senior Product & UX Designer with 8+ years delivering enterprise fintech, SaaS, and consumer banking solutions.\n\n**Core Expertise:**\n• Enterprise platform architecture (CYNC)\n• Workflow design for compliance-heavy systems\n• AI-assisted UX and decision-support interfaces\n• Accessibility-first design (WCAG 2.2)\n• Cross-functional team leadership\n\n**Experience Snapshot:**\n• **CYNC (2022-Present):** Lead Designer, loan origination, collateral, analytics platforms\n• **Bank of America (2018-2022):** 25% adoption lift on Bill Payment redesign, 15% mobile usability boost\n• **Innovative Design Studio (2018):** Responsive design, user research, accessibility\n\n**What I Focus On:**\n• Guided workflows that reduce user errors\n• Real-time feedback and transparency\n• Scalable, modular design systems\n• AI-ready UX patterns\n\nWould you like to explore specific case studies or my design philosophy?",
        hasActions: true,
        type: 'overview'
      };
    }

    if (message.includes('experience') || message.includes('background')) {
      const isDiveDeep = intent === 'deep-dive';
      return {
        content: isDiveDeep
          ? "💼 **Career Evolution & Systems Thinking**\n\n**CYNC Software (2022-Present) - Lead Product Designer**\n*Enterprise Fintech Platform Architecture*\n\n• **Scope:** Multi-product ecosystem (loan origination, collateral mgmt, analytics, compliance, risk)\n• **Leadership:** Direct collaboration with CPO, CTO, compliance, business analysts, product managers\n• **Approach:** Platform-first design—how workflows interconnect, how data flows, how decisions compound\n• **Example Decisions:** Guided workflows for underwriters (reduce errors), transparency dashboards (build trust), configurable interfaces (scale with customer needs)\n• **AI Integration:** Early adopter of LLM-based systems for document analysis, risk assessment UX\n\n**Bank of America (2018-2022) - UI/UX Designer**\n*Consumer Banking at Scale (68M+ Users)*\n\n• **Bill Payment Redesign:** +25% adoption, -40% drop-off rates\n  - Insight: Users were confused by redundant step. Removed. Adoption jumped immediately.\n  - Teaching: Design elegance = removing friction, not adding features.\n• **Mobile Optimization:** 15% usability lift\n  - Technique: Heatmap analysis + user interviews revealed thumb-reach patterns\n  - Implementation: Redesigned tap targets, reduced cognitive load\n• **Accessibility Mandate:** WCAG 2.2 compliance across product\n  - Philosophy: Accessibility isn't feature—it's foundation. Every design decision filters through it.\n• **Process:** Prototyping → usability testing → A/B validation → full rollout\n\n**Innovative Design Studio (2018) - UI/UX Designer**\n*Freelance & Contract Work*\n\n• Built design systems for 3 different products\n• Ran 20+ user research sessions\n• Shipped responsive web/mobile interfaces\n\n**Education & Continuous Learning:**\n• Bachelor of Science in Information Technology (SNHU)\n• Google UX Design Professional Certificate\n• GenAI for UX Designers Certification\n• Active in design leadership communities\n\n**Career Arc:**\nEach role progressively increased scope: freelance → enterprise design → team leadership → platform architecture. I'm most energized by systems-level problems where design directly impacts business outcomes."
          : "💼 **Professional Experience**\n\n**CYNC Software (2022-Present) - Lead UI/UX Designer**\n• Lead end-to-end product design for modular lending platform\n• Oversee portfolio of products: loan origination, collateral, analytics, compliance workflows\n• Direct collaboration with engineering, product, risk, and compliance teams\n• Architected accessible, compliance-ready interface patterns\n\n**Bank of America (2018-2022) - UI/UX Designer**\n• Led Bill Payment Feature redesign, driving 25% adoption increase\n• Improved mobile app usability by 15%\n• Implemented WCAG 2.2 accessibility standards across products\n• Designed for 68M+ users across web and mobile\n\n**Innovative Design Studio (2018) - UI/UX Designer**\n• Wireframing, user flows, and prototyping for web/mobile applications\n• User research and usability testing programs\n• Responsive design systems and visual standards\n\n**Education:**\n• Bachelor of Science in Information Technology (SNHU)\n• Google UX Design Professional Certificate\n• GenAI for UX Designers Certification\n\n👉 **Interested in deeper context?** Ask about specific projects like Borrowing Base, loan origination workflows, or my design philosophy.",
        hasActions: true,
        type: 'experience'
      };
    }

    if (message.includes('skills') || message.includes('technologies') || message.includes('tech')) {
      const isDiveDeep = intent === 'deep-dive';
      return {
        content: isDiveDeep
          ? "🛠 **Technical Skills & Design Tools**\n\n**Design & Prototyping (Expert)**\n• **Figma:** Design systems, interactive prototypes, design tokens, component libraries\n  - Specialty: Accessibility-first patterns, responsive component design\n  - Experience: 50+ projects, 20,000+ components\n• **Adobe XD:** High-fidelity prototypes, animation, user testing\n• **Miro:** Whiteboarding, journey mapping, team collaboration\n• **HTML/CSS:** Hand-coding high-fidelity prototypes when precision matters\n\n**Research & Testing (Advanced)**\n• **User Interviews:** Structured + unstructured, transcription, affinity mapping\n• **Usability Testing:** Moderated + unmoderated (Maze, UserTesting, Optimal Workshop)\n• **A/B Testing:** Experiment design, statistical significance, lift calculations\n• **Analytics:** Google Analytics, Mixpanel, Hotjar heatmaps\n• **Accessibility Testing:** axe DevTools, WAVE, screen reader testing (NVDA, JAWS)\n\n**Development Collaboration (Intermediate)**\n• **HTML5/CSS3:** Semantic markup, flexbox, grid, CSS variables\n• **JavaScript:** ES6+, DOM manipulation, event handling\n• **React:** Component thinking, hooks, state management (basic)\n• **TypeScript:** Type safety, interface definition, collaborating with engineers\n• **API Design:** RESTful principles, JSON, documentation\n\n**Specializations**\n\n**Enterprise Fintech UX:**\n• Compliance workflow design (regulatory requirements, audit trails)\n• Decision-support interface patterns\n• Risk dashboard design\n• Accessibility-first for regulated industries\n• Multi-stakeholder workflow complexity\n\n**Accessibility & Compliance:**\n• WCAG 2.2 AAA standards\n• Screen reader optimization\n• Keyboard navigation\n• Color-blind safe palettes\n• Focus management\n• ARIA patterns\n\n**AI-Assisted UX (Growing Focus):**\n• LLM integration patterns\n• Explainability design (making AI decisions visible)\n• Predictive UX interfaces\n• Prompt engineering for design workflows\n• Responsible AI design principles\n\n**Current Learning Stack:**\n• Vercel/Next.js (designing for modern full-stack)\n• Tailwind CSS (design systems at scale)\n• React advanced patterns\n• AI/ML model outputs → UX translation\n\n**Collaboration Tools:**\n• Jira (agile workflow)\n• Confluence (documentation)\n• Slack (team communication)\n• GitHub (design + code version control)\n• Figma API (automation)\n\n**Why This Stack Matters:**\nI don't just *design* enterprise systems—I understand how they're *built*. This means:\n• I write specs engineers actually enjoy implementing\n• I understand technical constraints and design around them\n• I can evaluate feasibility in real-time\n• I can prototype interactive features, not just static screens"
          : "🛠 **Skills & Technologies**\n\n**Design Tools (Expert)**\n• Figma (design systems, interactive prototypes, components)\n• Adobe XD, Miro, Sketch\n\n**Research & Testing**\n• User interviews, usability testing (Maze, UserTesting)\n• A/B testing, analytics, accessibility testing (axe DevTools)\n• Heatmap analysis\n\n**Development**\n• HTML5, CSS3, JavaScript (ES6+)\n• React, TypeScript, basic API design\n\n**Specializations**\n• **Enterprise Fintech:** Compliance workflows, decision-support interfaces, risk dashboards\n• **Accessibility:** WCAG 2.2 AAA, screen readers, keyboard navigation\n• **AI-Assisted UX:** LLM integration, explainability, predictive interfaces\n\n**Collaboration**\n• Jira, Confluence, Slack, GitHub, Figma API\n\n**Why It Matters:**\nI understand *how* enterprise systems are built, so I design specs engineers actually enjoy implementing.\n\n🔗 **Want examples?** Ask about how I've applied these in specific projects.",
        hasActions: true,
        type: 'skills'
      };
    }

    if (message.includes('bank') || message.includes('boa') || message.includes('america')) {
      const isDiveDeep = intent === 'deep-dive';
      return {
        content: isDiveDeep
          ? "🏦 **Bank of America - Design at Scale (68M+ Users)**\n\n**Context:**\nDesigning for consumer banking means regulatory complexity + massive scale + high transaction risk. One wrong interaction = millions of dollars of support costs.\n\n**The Challenge:**\nBill Payment feature had:\n• 3-step flow (borrower → check bank → confirm)\n• 40% drop-off at confirmation\n• Users completing transfers incorrectly\n• Low feature adoption vs. competitors\n\n**Discovery Phase (2 weeks)**\n• Shadowed customer support (saw actual errors)\n• User testing (5 sessions): revealed confirmation step was confusing\n• Analytics review: heatmaps showed users re-reading screens\n• Competitive analysis: what were others doing better?\n\nKey insight: Users weren't confused by options—they were confused by the *need* for confirmation.\n\n**Design Direction:**\nRemove confirmation step. Instead:\n• Show transaction summary on single screen\n• Use progressive disclosure (amount → payee → confirm in context)\n• Add visual feedback (green checkmark animation)\n• Build undo capability (\"Undo transfer\" for 30 seconds)\n\n**Results:**\n• **+25% adoption** (users willing to use feature)\n• **-40% drop-off** at confirmation\n• **15% improvement** in task completion\n• **20% reduction** in support tickets\n\n**The Lesson:**\nDesign elegance = removing obstacles, not adding features.\n\n**Mobile Optimization Work (2020-2021)**\n\n**Problem:**\nMobile Bill Payment had different issues than web:\n• Thumbs can't reach top navigation\n• Small screens squeeze important information\n• Users in low-light environments\n• Intermittent connectivity\n\n**Solution:**\n• Bottom-sheet navigation (reachable thumb zones)\n• Card-based layout (scannable, touch-friendly)\n• Offline-first approach (app works without connection)\n• High contrast for outdoor readability\n\n**WCAG 2.2 Accessibility (2021-2022)**\n\nWhen BoA decided to go AAA (highest level) for accessibility:\n• Audited entire Bill Payment feature\n• Worked with accessibility specialist\n• Screen reader testing (NVDA, JAWS)\n• Keyboard-only navigation\n• Color contrast fixes (4.5:1 minimum)\n\nWhat surprised me: Accessibility made UX *better* for everyone.\n• Keyboard nav was faster for power users\n• Better contrast helped older users\n• Clear labeling helped non-native speakers\n\n**Impact Across Portfolio:**\n• 20% increase in app satisfaction scores\n• 15% improvement in mobile usability\n• 10% reduction in payment errors\n• 20% cost savings from fewer redesign cycles (early prototyping caught issues)\n\n**Team Structure:**\nWorked directly with:\n• Product managers (roadmap, business metrics)\n• Engineers (Angular, TypeScript)\n• QA (edge case testing)\n• Compliance (regulatory requirements)\n• Customer support (real user pain points)\n\n**Key Learnings from 4-Year Tenure:**\n1. Scale changes everything (68M users = tiny UX issues become big problems)\n2. Regulatory constraints are *design* constraints (not obstacles)\n3. Accessibility is business advantage (legal, user satisfaction, team morale)\n4. Support data is gold (tells you what users actually struggle with)\n5. Prototyping > meetings (show, don't tell)"
          : "🏦 **Bank of America (2018-2022) - 68M+ Users**\n\n**Bill Payment Redesign**\n• Challenge: 40% drop-off at confirmation step\n• Solution: Removed confirmation; showed summary on single screen\n• Result: +25% adoption, -40% drop-off\n\n**Mobile Optimization**\n• Redesigned for touch: bottom-sheet navigation, card-based layout\n• Offline-first approach (works without connection)\n• 15% improvement in mobile usability scores\n\n**Accessibility (WCAG 2.2 AAA)**\n• Complete audit and redesign\n• Screen reader optimization, keyboard navigation\n• Color contrast upgrades\n• Outcome: Accessibility improved UX for all users\n\n**Key Achievements:**\n• 20% increase in app satisfaction\n• 15% improvement in task completion\n• 10% reduction in payment errors\n• 20% cost savings from early prototyping\n\n**Key Learnings:**\nScale changes everything. Tiny UX issues become big support costs with 68M users.\n\n🔗 **Want deeper dive?** Ask about specific workflows or accessibility approach.",
        hasActions: true,
        type: 'project'
      };
    }

    if (message.includes('cync') || message.includes('loan')) {
      const isDiveDeep = intent === 'deep-dive';
      return {
        content: isDiveDeep
          ? "💰 **CYNC Platform - Complete Overview**\n\n**What is CYNC?**\nA modular enterprise lending platform for financial institutions. Instead of monolithic systems, CYNC provides configurable workflows for: loan origination, collateral management, analytics, compliance, risk assessment.\n\n**My Role: Lead Product Designer**\nI don't design individual features. I architect how workflows interconnect. How borrowers submit. How underwriters review. How risk officers make decisions. How regulators audit.\n\n**Core Platforms I've Designed:**\n\n**1. Loan Origination System (LOS)**\n• Challenge: Underwriters were splitting time between system, spreadsheets, email\n• Solution: Guided workflow that pulls all decision-critical data into one view\n• Impact: 40% faster loan processing, fewer manual errors\n• Key Design: Transparency dashboard (show borrower what's needed), what-if scenarios (test rate changes)\n\n**2. Borrowing Base Certificate (BBC)**\n• Challenge: Accounts receivable/inventory reporting was spreadsheet-based, error-prone, hard to audit\n• Solution: Configurable template + real-time validation + audit trail\n• Impact: Reduced borrower friction, strengthened compliance\n• Philosophy: Make the right action the easy action\n\n**3. Collateral Management**\n• Design Focus: How do you make property, equipment, fleet data searchable and auditable?\n• Solution: Tag-based filtering, linked workflows, compliance-ready dashboards\n\n**4. Analytics & Risk Dashboards**\n• Strategic Question: How do risk officers make better decisions faster?\n• Design Answer: Predictive alerts, configurable metrics, drill-down capabilities\n\n**Design Principles for Enterprise Fintech:**\n1. **Transparency over Automation:** Users need to see WHY decisions are made\n2. **Guided Over Free:** Constrain options to \"right\" path, but make it visible\n3. **Compliance First:** Every design decision filters through regulatory lens\n4. **Scalability:** One design pattern works for SMB and enterprise customers\n5. **Accessibility:** WCAG 2.2 compliance—not optional, it's foundation\n\n**Team Structure:**\nI work directly with:\n- Product managers (roadmap prioritization)\n- Engineers (implementation feasibility)\n- Compliance/risk teams (regulatory alignment)\n- Business analysts (customer feedback translation)\n- Customer success (post-launch validation)\n\n**Innovation Frontier:**\nCurrently exploring: AI-assisted risk assessment UX, predictive borrower guidance, automated compliance documentation.\n\n👉 **Want to see specific case studies?** Ask about Borrowing Base workflow or loan origination design decisions."
          : "💰 **CYNC Software - Product Leadership**\n\n**Enterprise Lending Platform**\nCYNC is modular—loan origination, collateral management, analytics, compliance workflows.\n\n**Key Products I've Designed:**\n• **Loan Origination System:** Guided workflow for underwriters (40% faster processing)\n• **Borrowing Base Certificate:** Enterprise-grade accounts receivable workflow\n• **Collateral Management:** Property, equipment, fleet asset tracking\n• **Analytics & Risk Dashboards:** Decision-support for risk officers\n\n**Design Philosophy:**\n• Enterprise-first (compliance, auditability, transparency)\n• Guided workflows (reduce errors, guide right decisions)\n• Accessible (WCAG 2.2 standard)\n• Configurable (scale from SMB to enterprise)\n\n**Team Collaboration:**\nDirect work with product, engineering, compliance, business analysts, customer success.\n\n**Current Focus:**\nAI-assisted risk assessment, predictive borrower guidance, automated compliance documentation.\n\n🔗 **Explore deeper:** Ask about Borrowing Base Certificate or loan origination workflows.",
        hasActions: true,
        type: 'project'
      };
    }

    if (message.includes('bbc') || message.includes('borrowing base') || message.includes('borrowing')) {
      return {
        content: "📋 **Borrowing Base Certificate - Case Study**\n\n**The Challenge:**\nBorrowing Base Certificates (BBC) are accounts receivable/inventory reports that lenders require regularly. Historically, borrowers assembled these via:\n• Spreadsheets (formula fragility)\n• Email (audit nightmare)\n• Manual validation (error-prone)\n• Weak compliance trails\n\n**The Opportunity:**\nTransform from spreadsheet-based to guided, digital, audit-ready workflow.\n\n**My Design Approach:**\n\n**Phase 1: Discovery**\n• Shadowed borrower finance teams\n• Interviewed lenders' credit analysts\n• Mapped regulatory requirements\n• Identified error points\n\n**Phase 2: Solution Architecture**\n• **Guided Templates:** Pre-configured forms (don't make users decide structure)\n• **Real-Time Validation:** Red/yellow/green feedback as they enter data\n• **Transparency Dashboard:** Show lenders exactly what was submitted and when\n• **What-If Scenarios:** Let borrowers test different AR/inventory levels\n• **Audit Trail:** Complete history (who changed what, when, why)\n\n**Phase 3: Implementation & Validation**\n• Built in Figma (80+ screens)\n• User tested with 3 borrower companies, 2 lender credit teams\n• Iterated on validation feedback UX\n• Launched with WCAG 2.2 compliance\n\n**Key Design Decisions:**\n1. **Guided, Not Free:** Borrowers follow standard structure—reduces lender confusion\n2. **Validation = Trust:** Real-time red/yellow/green builds confidence\n3. **Transparency = Speed:** Lenders see complete audit trail—faster credit review\n4. **Accessibility First:** Screen reader tested, keyboard navigable, color-blind safe\n5. **Mobile-Ready:** Borrowers can submit from field (not always at desk)\n\n**Impact:**\n• Reduced borrower friction (\"easier than spreadsheets\")\n• Increased submission accuracy (guided + validation)\n• Strengthened compliance (audit trails built-in)\n• Faster lender review cycles\n\n**View Full Case Study:**\n🔗 https://bbc-module-8t5opxq.gamma.site/\n\n**Related Workflows:**\nInterested in how loan origination connects to BBC? Ask about LOS design.",
        hasActions: true,
        type: 'project'
      };
    }

    if (message.includes('design') || message.includes('process') || message.includes('methodology') || message.includes('philosophy')) {
      const isDiveDeep = intent === 'philosophy' || intent === 'deep-dive';
      return {
        content: isDiveDeep
          ? "🎯 **Design Philosophy & Process**\n\n**Core Belief:**\n*Design is the medium through which strategy becomes behavior.*\n\nPretty pixels don't matter if users don't understand *why* they're making a decision. Or if they make the wrong one.\n\n**Principle 1: Transparency Over Automation**\nIn enterprise fintech, users need to see the reasoning. Don't auto-fill without showing why. Don't hide logic in backend. Make decision-making visible.\n\nExample: Loan underwriter needs to see:\n• What borrower submitted\n• What system calculated\n• What rules triggered alerts\n• Why rate is what it is\n\n**Principle 2: Guided Paths (Not Free Choice)**\nComplexity is inevitable. Don't ask users to solve it—constrain options to the \"right\" path, but make it visible.\n\nExample: BBC data entry\n• Don't: \"Enter your AR data however you want\"\n• Do: \"Select AR category → enter amounts → system validates → submit\"\n• Visual: Each step is clear; user knows exactly what's needed\n\n**Principle 3: Errors Are Design Failures**\nIf 30% of submissions have errors, the interface failed—not the user.\n\nTactics:\n• Real-time validation (red/yellow/green feedback *during* entry)\n• Prevent invalid states (disable invalid options)\n• Clear error messages (not technical jargon)\n• Suggest corrections (don't just say \"wrong\")\n\n**Principle 4: Accessibility = Readiness**\nWCAG 2.2 compliance isn't feature—it's foundation.\n• Screen readers must work\n• Keyboard navigation must work\n• Color-blind safe palettes\n• Sufficient contrast ratios\n\nWhy? Because when compliance teams audit your product, accessibility is *their* risk too.\n\n**Principle 5: Systems Over Features**\nI don't design screens—I design systems.\n\nQuestions I ask:\n• How does this workflow connect to others?\n• What data is required from upstream?\n• What downstream systems depend on this?\n• How does scale affect UX?\n• What happens when regulations change?\n\n**My Design Process:**\n\n**1. Research (2-3 weeks)**\n• Stakeholder interviews (borrowers, lenders, compliance, engineers)\n• Competitive analysis (what exists, what fails)\n• Regulatory deep-dive (what's required, what's risk)\n• Pain point mapping\n\n**2. Strategy (1 week)**\n• Define design principles specific to *this* product\n• Map user journeys (not just happy path—include exceptions)\n• Identify critical decisions (where wrong choice = big impact)\n• Decide: guided vs. free, visible vs. hidden, simple vs. powerful\n\n**3. Exploration (1-2 weeks)**\n• Low-fidelity sketches (5+ directions)\n• Whiteboard workflows\n• Competitive feature audit\n• Team alignment on direction\n\n**4. Design (2-4 weeks)**\n• High-fidelity prototypes in Figma\n• Design system documentation\n• Accessibility testing (WCAG compliance)\n• Engineering handoff (specs, interactions, edge cases)\n\n**5. Validation (2-3 weeks)**\n• Moderated usability testing (5-8 users per round)\n• A/B testing (if appropriate)\n• Accessibility audit with screen reader\n• Iteration based on feedback\n\n**6. Launch & Learn (ongoing)**\n• Heatmap analysis (where users struggle)\n• Support ticket analysis (common issues)\n• Usage metrics (feature adoption)\n• Quarterly improvements\n\n**Tools I Use:**\n• **Design:** Figma (primary), Adobe XD (legacy)\n• **Research:** Miro, Notion, user interview scripts\n• **Testing:** Maze, UserTesting, axe DevTools (accessibility)\n• **Collaboration:** Confluence, Jira, Slack\n• **Prototyping:** Figma interactive, HTML/CSS for high-fidelity\n\n**How I Think About Complexity:**\nEnterprise products are *inherently* complex. The job isn't to simplify reality—it's to make complexity navigable.\n\nDon't hide complexity → users get surprised.\nDo: Guide users through complexity → they understand and trust decisions.\n\n**Current Learning Edge:**\nAI-assisted UX.\n• How do you explain AI decision-making to users?\n• When should AI suggest vs. decide?\n• How do you maintain user agency when AI is involved?\n\nI'm actively experimenting with LLM-based document analysis, predictive borrower guidance, and compliance automation UX."
          : "🎯 **Design Process & Thinking**\n\n**My Philosophy:**\n*Design isn't about pretty—it's about clarity and guidance.*\n\nIn enterprise fintech, users need to understand *why* decisions are made. My job is to make complex workflows feel inevitable, not overwhelming.\n\n**Core Principles:**\n1. **Transparency:** Show decision-making, don't hide logic\n2. **Guided Paths:** Constrain options to right choices, but make it visible\n3. **Error Prevention:** Real-time validation, clear feedback\n4. **Accessibility First:** WCAG 2.2 is foundation, not feature\n5. **Systems Thinking:** Every screen connects to others\n\n**My Process:**\n1. Research (interviews, competitive analysis, regulatory review)\n2. Strategy (define principles, map user journeys, identify critical decisions)\n3. Exploration (5+ design directions, team alignment)\n4. Design (high-fidelity, WCAG compliance, engineering handoff)\n5. Validation (usability testing, accessibility audit, iteration)\n6. Launch (heatmaps, usage metrics, continuous improvement)\n\n**Tools:**\nFigma, Adobe XD, Miro, UserTesting, axe DevTools, Jira, Confluence\n\n**Current Focus:**\nAI-assisted UX: explainability, user agency, predictive guidance\n\n👉 **Want specifics?** Ask about how I approached Borrowing Base or loan origination.",
        hasActions: true,
        type: 'process'
      };
    }

    // Hiring fit assessment
    if (message.includes('hire') || message.includes('fit') || message.includes('team') || message.includes('recruit')) {
      return {
        content: "👥 **Hiring Fit & Collaboration Style**\n\n**Am I Right For Your Team?**\n\nI excel on teams where:\n• Product complexity is high (fintech, healthcare, supply chain)\n• User needs are in tension (security vs. simplicity, compliance vs. speed)\n• Cross-functional collaboration is essential\n• Design impacts business outcomes directly\n\n**My Collaboration Style:**\n• **With PMs:** I ask hard questions about tradeoffs. I help translate ambiguity into design direction.\n• **With Engineers:** I respect technical constraints and explain why design matters. I ship specs they enjoy building.\n• **With Compliance/Risk:** I see constraints as *design requirements*, not obstacles. I build compliance into UX foundation.\n• **With Customers:** I listen for what they're *actually* struggling with, not what they ask for.\n\n**Red Flags (Places I Won't Thrive):**\n• \"Move fast and break things\" → I believe moving fast *and* being thoughtful is possible\n• Design as decoration → I need problems to solve, not screens to polish\n• Siloed decisions → I need cross-functional input to make good choices\n• One-off projects → I'm strongest building platforms, not features\n\n**What I Bring:**\n• Enterprise complexity expertise (compliance, multi-stakeholder, scale)\n• Accessibility-first thinking (legal advantage + user satisfaction)\n• Ops mindset (How will this scale? How will support handle edge cases?)\n• Teaching ability (I explain *why* design decisions matter)\n\n**Growth Areas:**\n• Consumer/viral product thinking (my strength is enterprise, not consumer delight)\n• Design trends/motion (not my focus; I prioritize clarity over aesthetics)\n\n**Questions to Ask Me:**\n• \"Tell me about a time you disagreed with engineering\"\n  → Answer: I fought for real-time validation UX; they wanted silent saves. We landed on visible feedback + background saves. Both won.\n• \"How do you handle ambiguity?\"\n  → Answer: I run small research sprints to clarify. Ambiguity often means stakeholders have different mental models. Surface that first.\n• \"Give me an example of learning from failure\"\n  → Answer: BBC first design didn't show submission status. Users were nervous about accuracy. Added transparency dashboard after user testing. Trust increased 40%.\n\n**Current Hiring Interests:**\nI'm actively looking for roles where:\n• Enterprise fintech, B2B SaaS, or healthcare (regulatory complexity excites me)\n• I can own design for a product area (not just individual features)\n• Leadership is valued (mentoring, design systems, design direction)\n• AI + UX is an active frontier\n\n👉 **Next step?** Let's talk about your specific challenges. What's the hardest design problem your team is facing?",
        hasActions: true,
        type: 'hiring'
      };
    }

    // Accessibility expertise
    if (message.includes('access') || message.includes('wcag') || message.includes('inclusive') || message.includes('screen reader')) {
      return {
        content: "♿ **Accessibility & Inclusive Design**\n\n**Why I'm Passionate About This:**\nWCAG 2.2 compliance isn't legal checkbox—it's good design. When you remove barriers for disabled users, you improve UX for *everyone*.\n\n**My Accessibility Approach:**\n\n**1. Foundation Level (WCAG 2.2 AAA)**\n• Keyboard navigation (every interaction, no mouse required)\n• Screen reader optimization (semantic HTML, ARIA when needed)\n• Color contrast (4.5:1 for normal text, 3:1 for large text)\n• Focus management (visible focus indicators, logical tab order)\n• Text alternatives (alt text, captions, transcripts)\n\n**2. Enterprise-Specific**\n• Forms: Clear labels, error messages, inline validation\n• Tables: Proper headers, row/column associations\n• Complex workflows: Clear step indicators, progress tracking\n• Data visualization: Accessible dashboards (color-blind safe, alternative data views)\n\n**3. Testing Process**\n• Automated testing (axe DevTools, WAVE)\n• Manual testing (keyboard-only, screen readers: NVDA, JAWS)\n• User testing with disabled users (the best feedback)\n• Compliance audit (third-party validation)\n\n**Real Impact from BoA Work:**\nWhen we redesigned Bill Payment for AAA:\n• Older users loved higher contrast (better for presbyopia)\n• Power users loved keyboard shortcuts (faster than mouse)\n• Non-native speakers loved clear labels (easier to understand)\n• Everyone appreciated simpler flows (fewer distractions)\n\n**Common Misconception:**\n\"Accessibility makes design complicated.\"\n\nTruth: Good accessibility makes design *clearer* because it forces you to:\n• Explain interactions explicitly (not relying on visual convention)\n• Simplify workflows (fewer edge cases)\n• Test with real users (catch actual problems)\n\n**For Compliance Teams:**\nAccessibility = reduced liability + better audit story.\n\n**For Product Teams:**\nAccessibility = competitive advantage (larger addressable market) + better UX (everyone benefits).\n\n👉 **Questions?** Ask about how to implement specific patterns (forms, modals, data tables, etc.)",
        hasActions: true,
        type: 'accessibility'
      };
    }

    // Default response
    return {
      content: "I can help you explore:\n\n**🎨 About Me**\n• Portfolio overview\n• Professional background & experience\n• Design philosophy & process\n• Skills & technologies\n\n**💼 Case Studies**\n• CYNC enterprise platform\n• Borrowing Base Certificate workflow\n• Bank of America Bill Payment redesign\n\n**🎯 Design Expertise**\n• Enterprise fintech thinking\n• Accessibility (WCAG 2.2)\n• AI-assisted UX\n• Workflow design\n\n**👥 Collaboration**\n• Hiring fit & team dynamics\n• How I work with PMs, engineers, compliance\n• Leadership & mentoring\n\n**What interests you?**",
      hasActions: true,
      type: 'general'
    };

  };

  return (
    <div className="relative">
      {isMinimized ? (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6 text-portfolio-accent" />
              <span className="font-medium text-sm">Portfolio Assistant</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(false)}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 w-8 h-8 p-0"
              >
                <Expand className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {!isOpen && (
            <Button
              onClick={() => setIsOpen(true)}
              className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-xl z-40 transition-all duration-300 bg-gradient-to-r from-portfolio-accent to-blue-600 hover:shadow-2xl hover:scale-110"
              size="sm"
            >
              <div className="relative">
                <MessageCircle className="w-7 h-7" />
              </div>
            </Button>
          )}

          <div
        className={`fixed ${
          isExpanded 
            ? 'inset-4' 
            : 'bottom-6 right-6 w-[420px] h-[600px]'
        } bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-50 transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <Card className="h-full flex flex-col overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-portfolio-accent to-blue-600 text-white rounded-t-xl flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="font-semibold text-lg">Portfolio Assistant</span>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI Enhanced
                  </Badge>
                  <span className="text-xs">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
              >
                {isExpanded ? <Minimize className="w-4 h-4" /> : <Expand className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(true)}
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsOpen(false);
                  setIsExpanded(false);
                  setIsMinimized(false);
                  setInputValue('');
                  setMessages([{
                    id: '1',
                    content: "👋 Hi! I'm your enhanced AI portfolio assistant. I can provide detailed insights about projects, analyze design patterns, suggest improvements, and help you navigate the portfolio. What would you like to explore?",
                    sender: 'ai',
                    timestamp: new Date(),
                    hasActions: true,
                  }]);
                }}
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 mb-4 ${message.sender === 'ai' ? 'items-start' : 'items-start flex-row-reverse'}`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'ai' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      {message.sender === 'ai' ? (
                        <Bot className="w-5 h-5 text-blue-600" />
                      ) : (
                        <User className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <div
                      className={`flex-1 max-w-[80%] p-4 rounded-lg ${
                        message.sender === 'ai'
                          ? 'bg-white border border-gray-200'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                        {message.content}
                      </div>
                      {message.hasActions && message.sender === 'ai' && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {(message.type === 'overview' || message.type === 'hiring') && (
                            <>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Tell me about CYNC and loan origination")}>
                                CYNC Platform
                              </Button>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Bank of America deep dive")}>
                                BoA Work
                              </Button>
                            </>
                          )}
                          {message.type === 'skills' && (
                            <>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("How do you approach accessibility?")}>
                                Accessibility
                              </Button>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Show me enterprise fintech work")}>
                                Fintech Examples
                              </Button>
                            </>
                          )}
                          {message.type === 'project' && (
                            <>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Walk me through your design process")}>
                                My Process
                              </Button>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Show me more case studies")}>
                                More Projects
                              </Button>
                            </>
                          )}
                          {message.type === 'process' && (
                            <>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Show me Borrowing Base details")}>
                                BBC Project
                              </Button>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Accessibility approach?")}>
                                Accessibility
                              </Button>
                            </>
                          )}
                          {message.type === 'experience' && (
                            <>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Tell me about CYNC")}>
                                CYNC Details
                              </Button>
                              <Button size="sm" variant="secondary" onClick={() => handleQuickQuestion("Bank of America work")}>
                                BoA Details
                              </Button>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 mb-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 animate-pulse">
                      <Brain className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 max-w-[80%] p-3 rounded-lg bg-white border border-gray-200">
                      <div className="text-sm text-gray-700">Thinking</div>
                    </div>
                  </div>
                )}

                {messages.length === 1 && (
                  <div className="max-w-2xl mx-auto space-y-4">
                    <p className="text-sm text-gray-600 pl-2">💡 Quick start (pick your role):</p>
                    <div className="grid gap-2">
                      <Button
                        variant="outline"
                        className="justify-start h-auto py-3 px-4 text-left hover:bg-blue-50/80 hover:border-blue-200 transition-colors"
                        onClick={() => handleQuickQuestion("Is this designer right for our team? What's your collaboration style?")}
                      >
                        <div className="flex items-center gap-3">
                          <Target className="w-4 h-4" />
                          <div className="text-left">
                            <div className="text-sm font-medium">Recruiter / Hiring Manager</div>
                            <div className="text-xs text-gray-500">Assess team fit</div>
                          </div>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start h-auto py-3 px-4 text-left hover:bg-blue-50/80 hover:border-blue-200 transition-colors"
                        onClick={() => handleQuickQuestion("Show me enterprise fintech case studies. What problems did you solve?")}
                      >
                        <div className="flex items-center gap-3">
                          <Lightbulb className="w-4 h-4" />
                          <div className="text-left">
                            <div className="text-sm font-medium">Product Manager / PM</div>
                            <div className="text-xs text-gray-500">Case studies & impact</div>
                          </div>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start h-auto py-3 px-4 text-left hover:bg-blue-50/80 hover:border-blue-200 transition-colors"
                        onClick={() => handleQuickQuestion("Walk me through your design process. How do you think about complex workflows?")}
                      >
                        <div className="flex items-center gap-3">
                          <Brain className="w-4 h-4" />
                          <div className="text-left">
                            <div className="text-sm font-medium">Designer / Design Director</div>
                            <div className="text-xs text-gray-500">Philosophy & methodology</div>
                          </div>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start h-auto py-3 px-4 text-left hover:bg-blue-50/80 hover:border-blue-200 transition-colors"
                        onClick={() => handleQuickQuestion("Tell me about the Borrowing Base Certificate project. What was hard?")}
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4" />
                          <div className="text-left">
                            <div className="text-sm font-medium">Deep Dive</div>
                            <div className="text-xs text-gray-500">Project walkthrough</div>
                          </div>
                        </div>
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 pl-2">Or just ask me anything—I'll adapt to your interests</p>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="p-4 border-t bg-white dark:bg-gray-800 flex-shrink-0">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="flex-1"
                  placeholder="Type your message..."
                  disabled={isTyping}
                />
                <Button 
                  onClick={() => handleSendMessage()} 
                  className="bg-portfolio-accent hover:bg-blue-700"
                  disabled={isTyping || !inputValue.trim()}
                >
                  {isTyping ? (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    </div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
          </div>
        </>
      )}
    </div>
  );
}