import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Palette, 
  ChevronLeft, 
  Github, 
  Copy, 
  Check,
  Type,
  Move,
  Radius
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TokensPage = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToken = (token: string) => {
    navigator.clipboard.writeText(token);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const colorTokens = [
    { name: "Primary", variable: "--primary", value: "222.2 47.4% 11.2%", hex: "#1a202c", usage: "Primary actions, links" },
    { name: "Secondary", variable: "--secondary", value: "210 40% 96.1%", hex: "#f1f5f9", usage: "Secondary actions" },
    { name: "Accent", variable: "--accent", value: "210 40% 96.1%", hex: "#f1f5f9", usage: "Highlights, emphasis" },
    { name: "Destructive", variable: "--destructive", value: "0 84.2% 60.2%", hex: "#ef4444", usage: "Errors, warnings" },
    { name: "Muted", variable: "--muted", value: "210 40% 96.1%", hex: "#f8fafc", usage: "Subtle backgrounds" },
    { name: "Border", variable: "--border", value: "214.3 31.8% 91.4%", hex: "#e2e8f0", usage: "Borders, dividers" },
  ];

  const spacingTokens = [
    { name: "xs", value: "0.25rem", pixels: "4px", usage: "Minimal spacing" },
    { name: "sm", value: "0.5rem", pixels: "8px", usage: "Small spacing" },
    { name: "md", value: "1rem", pixels: "16px", usage: "Medium spacing" },
    { name: "lg", value: "1.5rem", pixels: "24px", usage: "Large spacing" },
    { name: "xl", value: "2rem", pixels: "32px", usage: "Extra large spacing" },
    { name: "2xl", value: "3rem", pixels: "48px", usage: "Section spacing" },
  ];

  const typographyTokens = [
    { name: "xs", size: "0.75rem", lineHeight: "1rem", usage: "Small text, captions" },
    { name: "sm", size: "0.875rem", lineHeight: "1.25rem", usage: "Body text (small)" },
    { name: "base", size: "1rem", lineHeight: "1.5rem", usage: "Body text (default)" },
    { name: "lg", size: "1.125rem", lineHeight: "1.75rem", usage: "Large body text" },
    { name: "xl", size: "1.25rem", lineHeight: "1.75rem", usage: "Headings (small)" },
    { name: "2xl", size: "1.5rem", lineHeight: "2rem", usage: "Headings (medium)" },
    { name: "3xl", size: "1.875rem", lineHeight: "2.25rem", usage: "Headings (large)" },
    { name: "4xl", size: "2.25rem", lineHeight: "2.5rem", usage: "Display text" },
  ];

  const radiusTokens = [
    { name: "none", value: "0", usage: "Sharp corners" },
    { name: "sm", value: "0.125rem", usage: "Subtle rounding" },
    { name: "md", value: "0.375rem", usage: "Default rounding" },
    { name: "lg", value: "0.5rem", usage: "Prominent rounding" },
    { name: "xl", value: "0.75rem", usage: "Large rounding" },
    { name: "full", value: "9999px", usage: "Pills, circles" },
  ];

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
                <span className="text-blue-600 font-medium">Design Tokens</span>
                <Link to="/getting-started" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Getting Started
                </Link>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Design Tokens</h1>
          <p className="text-lg text-slate-600 mb-6">
            Design tokens are the visual design atoms of the design system. They store visual design attributes and ensure consistency across all products.
          </p>
        </div>

        <Tabs defaultValue="colors" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="colors" className="flex items-center space-x-2">
              <Palette className="w-4 h-4" />
              <span>Colors</span>
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center space-x-2">
              <Type className="w-4 h-4" />
              <span>Typography</span>
            </TabsTrigger>
            <TabsTrigger value="spacing" className="flex items-center space-x-2">
              <Move className="w-4 h-4" />
              <span>Spacing</span>
            </TabsTrigger>
            <TabsTrigger value="radius" className="flex items-center space-x-2">
              <Radius className="w-4 h-4" />
              <span>Radius</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-6">
            <div className="grid gap-4">
              <h2 className="text-2xl font-bold text-slate-900">Color Palette</h2>
              <p className="text-slate-600">Our color system is built on semantic naming and supports both light and dark themes.</p>
              
              <div className="grid gap-4">
                {colorTokens.map((token) => (
                  <Card key={token.name}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div 
                            className="w-16 h-16 rounded-lg border-2 border-slate-200" 
                            style={{ backgroundColor: token.hex }}
                          />
                          <div>
                            <h3 className="font-semibold text-lg">{token.name}</h3>
                            <p className="text-slate-600 text-sm">{token.usage}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge variant="secondary">{token.hex}</Badge>
                              <Badge variant="outline">HSL({token.value})</Badge>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToken(`var(${token.variable})`)}
                        >
                          {copiedToken === `var(${token.variable})` ? 
                            <Check className="w-4 h-4" /> : 
                            <Copy className="w-4 h-4" />
                          }
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-6">
            <div className="grid gap-4">
              <h2 className="text-2xl font-bold text-slate-900">Typography Scale</h2>
              <p className="text-slate-600">A modular scale for consistent typography across all interfaces.</p>
              
              <div className="grid gap-4">
                {typographyTokens.map((token) => (
                  <Card key={token.name}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="w-20">
                            <Badge>{token.name}</Badge>
                          </div>
                          <div>
                            <div 
                              className="font-medium text-slate-900 mb-1"
                              style={{ fontSize: token.size, lineHeight: token.lineHeight }}
                            >
                              The quick brown fox
                            </div>
                            <p className="text-slate-600 text-sm">{token.usage}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge variant="secondary">Size: {token.size}</Badge>
                              <Badge variant="outline">Line Height: {token.lineHeight}</Badge>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToken(`text-${token.name}`)}
                        >
                          {copiedToken === `text-${token.name}` ? 
                            <Check className="w-4 h-4" /> : 
                            <Copy className="w-4 h-4" />
                          }
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="spacing" className="space-y-6">
            <div className="grid gap-4">
              <h2 className="text-2xl font-bold text-slate-900">Spacing System</h2>
              <p className="text-slate-600">Consistent spacing creates rhythm and hierarchy in your layouts.</p>
              
              <div className="grid gap-4">
                {spacingTokens.map((token) => (
                  <Card key={token.name}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="w-20">
                            <Badge>{token.name}</Badge>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div 
                              className="bg-blue-500 h-8"
                              style={{ width: token.value }}
                            />
                            <div>
                              <div className="font-medium text-slate-900">{token.value}</div>
                              <div className="text-slate-600 text-sm">{token.pixels} • {token.usage}</div>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToken(`space-${token.name}`)}
                        >
                          {copiedToken === `space-${token.name}` ? 
                            <Check className="w-4 h-4" /> : 
                            <Copy className="w-4 h-4" />
                          }
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="radius" className="space-y-6">
            <div className="grid gap-4">
              <h2 className="text-2xl font-bold text-slate-900">Border Radius</h2>
              <p className="text-slate-600">Rounded corners for different components and contexts.</p>
              
              <div className="grid gap-4">
                {radiusTokens.map((token) => (
                  <Card key={token.name}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="w-20">
                            <Badge>{token.name}</Badge>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div 
                              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500"
                              style={{ borderRadius: token.value }}
                            />
                            <div>
                              <div className="font-medium text-slate-900">{token.value}</div>
                              <div className="text-slate-600 text-sm">{token.usage}</div>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToken(`rounded-${token.name}`)}
                        >
                          {copiedToken === `rounded-${token.name}` ? 
                            <Check className="w-4 h-4" /> : 
                            <Copy className="w-4 h-4" />
                          }
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TokensPage;
