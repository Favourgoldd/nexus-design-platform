
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Palette, 
  ChevronLeft, 
  Github, 
  Copy, 
  Check,
  Download,
  Package,
  Zap,
  BookOpen,
  Code,
  Figma
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const GettingStartedPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const installationCode = `npm install @designhub/ui @designhub/tokens`;
  
  const importCode = `import { Button, Input, Card } from '@designhub/ui';
import '@designhub/ui/styles.css';`;

  const usageCode = `import { Button, Card, CardHeader, CardTitle, CardContent } from '@designhub/ui';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}`;

  const tailwindConfig = `module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@designhub/ui/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Design system colors
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
      }
    }
  },
  plugins: []
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <ChevronLeft className="w-4 h-4" />
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  DesignHub
                </span>
              </Link>
              
              <div className="hidden md:flex space-x-6">
                <Link to="/components" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Components
                </Link>
                <Link to="/tokens" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Design Tokens
                </Link>
                <span className="text-blue-600 font-medium">Getting Started</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Getting Started</h1>
          <p className="text-lg text-slate-600 mb-6">
            Get up and running with DesignHub in minutes. Follow this guide to integrate our design system into your project.
          </p>
        </div>

        <div className="space-y-12">
          {/* Quick Start */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h2 className="text-2xl font-bold text-slate-900">Installation</h2>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Install via NPM</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(installationCode)}
                  >
                    {copiedCode === installationCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                  <code>{installationCode}</code>
                </pre>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Package className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-medium">@designhub/ui</h4>
                  <p className="text-sm text-slate-600">Core components</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Palette className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-medium">@designhub/tokens</h4>
                  <p className="text-sm text-slate-600">Design tokens</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-medium">TypeScript</h4>
                  <p className="text-sm text-slate-600">Full type support</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Import Components */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h2 className="text-2xl font-bold text-slate-900">Import Components</h2>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Basic Import</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(importCode)}
                  >
                    {copiedCode === importCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                  <code>{importCode}</code>
                </pre>
              </CardContent>
            </Card>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900">Tree Shaking</h4>
                  <p className="text-blue-700 text-sm">
                    Our components are built with tree shaking in mind. Only import what you need to keep bundle sizes minimal.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Usage Example */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h2 className="text-2xl font-bold text-slate-900">Usage Example</h2>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Basic Component Usage</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(usageCode)}
                  >
                    {copiedCode === usageCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{usageCode}</code>
                </pre>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <Card className="max-w-sm">
                  <CardHeader>
                    <CardTitle>Welcome</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button>Get Started</Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Tailwind Configuration */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <h2 className="text-2xl font-bold text-slate-900">Tailwind Configuration</h2>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">tailwind.config.js</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(tailwindConfig)}
                  >
                    {copiedCode === tailwindConfig ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{tailwindConfig}</code>
                </pre>
              </CardContent>
            </Card>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-orange-900">Important</h4>
                  <p className="text-orange-700 text-sm">
                    Make sure to include the DesignHub UI path in your Tailwind content configuration for proper styling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Resources */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/components">
                <Card className="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white">
                        <Code className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Component Library</h3>
                        <p className="text-slate-600 text-sm">Browse all available components with live examples</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/tokens">
                <Card className="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                        <Palette className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Design Tokens</h3>
                        <p className="text-slate-600 text-sm">Explore colors, typography, and spacing tokens</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">GitHub Repository</h3>
                      <p className="text-slate-600 text-sm">View source code and contribute to the project</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white">
                      <Figma className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Figma Library</h3>
                      <p className="text-slate-600 text-sm">Access design files and component library in Figma</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedPage;
