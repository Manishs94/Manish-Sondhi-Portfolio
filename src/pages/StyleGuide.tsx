
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-heading">Design System</h1>
          <p className="section-subheading">
            Component documentation and style guide for the portfolio website.
          </p>

          {/* Typography */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Typography</h2>
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-2">Heading 1</h1>
                <p className="text-muted-foreground">font-size: 3rem, font-weight: 700</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
                <p className="text-muted-foreground">font-size: 2.25rem, font-weight: 700</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Heading 3</h3>
                <p className="text-muted-foreground">font-size: 1.5rem, font-weight: 600</p>
              </div>
              <div>
                <p className="text-lg mb-2">Body Large</p>
                <p className="text-muted-foreground">font-size: 1.125rem</p>
              </div>
              <div>
                <p className="mb-2">Body Regular</p>
                <p className="text-muted-foreground">font-size: 1rem</p>
              </div>
              <div>
                <p className="text-sm mb-2">Body Small</p>
                <p className="text-muted-foreground">font-size: 0.875rem</p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Colors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-primary rounded-lg"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-muted-foreground">--primary</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-secondary rounded-lg"></div>
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs text-muted-foreground">--secondary</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-muted rounded-lg"></div>
                <p className="text-sm font-medium">Muted</p>
                <p className="text-xs text-muted-foreground">--muted</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-destructive rounded-lg"></div>
                <p className="text-sm font-medium">Destructive</p>
                <p className="text-xs text-muted-foreground">--destructive</p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Buttons */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Buttons</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">⚙</Button>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Form Elements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Form Elements</h2>
            <div className="space-y-6 max-w-md">
              <div>
                <label className="text-sm font-medium mb-2 block">Input</label>
                <Input placeholder="Enter text..." />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Textarea</label>
                <Textarea placeholder="Enter message..." />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox" />
                <label htmlFor="checkbox" className="text-sm font-medium">Checkbox</label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="switch" />
                <label htmlFor="switch" className="text-sm font-medium">Switch</label>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Slider</label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Progress</label>
                <Progress value={65} />
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Badges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Badges</h2>
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Cards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is a basic card component with header and content.</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This card has hover effects for better interaction.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
