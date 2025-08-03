
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Palette, 
  Search, 
  Copy, 
  Check, 
  Github, 
  ChevronLeft,
  Play,
  Eye,
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface ComponentDemo {
  name: string;
  category: string;
  description: string;
  component: React.ReactNode;
  code: string;
  props?: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
  }>;
}

const ComponentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const components: ComponentDemo[] = [
    {
      name: "Button",
      category: "Basic",
      description: "Trigger an action or event, such as submitting a form or navigating to a new page.",
      component: (
        <div className="flex gap-3 flex-wrap">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      ),
      code: `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>`,
      props: [
        { name: "variant", type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'", default: "'default'", description: "The visual style variant" },
        { name: "size", type: "'default' | 'sm' | 'lg' | 'icon'", default: "'default'", description: "The size of the button" },
        { name: "disabled", type: "boolean", default: "false", description: "Whether the button is disabled" }
      ]
    },
    {
      name: "Input",
      category: "Basic",
      description: "A form input field for text entry.",
      component: (
        <div className="space-y-3 max-w-sm">
          <Input placeholder="Default input" />
          <Input placeholder="Disabled input" disabled />
          <Input type="email" placeholder="Email input" />
        </div>
      ),
      code: `<Input placeholder="Enter text..." />
<Input placeholder="Disabled" disabled />
<Input type="email" placeholder="Enter email..." />`,
      props: [
        { name: "type", type: "string", default: "'text'", description: "The input type" },
        { name: "placeholder", type: "string", description: "Placeholder text" },
        { name: "disabled", type: "boolean", default: "false", description: "Whether the input is disabled" }
      ]
    },
    {
      name: "Card",
      category: "Layout",
      description: "A container for grouping related content and actions.",
      component: (
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">This is a card component with header and content sections.</p>
          </CardContent>
        </Card>
      ),
      code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>`,
      props: [
        { name: "className", type: "string", description: "Additional CSS classes" }
      ]
    },
    {
      name: "Badge",
      category: "Display",
      description: "A small status descriptor for UI elements.",
      component: (
        <div className="flex gap-3 flex-wrap">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      ),
      code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`,
      props: [
        { name: "variant", type: "'default' | 'secondary' | 'destructive' | 'outline'", default: "'default'", description: "The visual style variant" }
      ]
    }
  ];

  const categories = ["all", ...Array.from(new Set(components.map(c => c.category)))];

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                <span className="text-blue-600 font-medium">Components</span>
                <Link to="/tokens" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Design Tokens
                </Link>
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Components</h1>
          <p className="text-lg text-slate-600 mb-6">
            Production-ready React components built with TypeScript and Tailwind CSS.
          </p>
          
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="space-y-8">
          {filteredComponents.map((component, index) => (
            <ComponentCard key={index} component={component} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ComponentCard = ({ component }: { component: ComponentDemo }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-3">
              <span>{component.name}</span>
              <Badge variant="secondary">{component.category}</Badge>
            </CardTitle>
            <p className="text-slate-600 mt-2">{component.description}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="preview" className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center space-x-2">
              <Code2 className="w-4 h-4" />
              <span>Code</span>
            </TabsTrigger>
            <TabsTrigger value="props" className="flex items-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Props</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="mt-6">
            <div className="p-6 border-2 border-dashed border-slate-200 rounded-lg bg-white">
              {component.component}
            </div>
          </TabsContent>
          
          <TabsContent value="code" className="mt-6">
            <div className="relative">
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                <code>{component.code}</code>
              </pre>
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-2 right-2"
                onClick={copyToClipboard}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="props" className="mt-6">
            {component.props ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-medium">Prop</th>
                      <th className="text-left py-2 font-medium">Type</th>
                      <th className="text-left py-2 font-medium">Default</th>
                      <th className="text-left py-2 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {component.props.map((prop, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 font-mono text-sm text-blue-600">{prop.name}</td>
                        <td className="py-2 font-mono text-sm text-slate-600">{prop.type}</td>
                        <td className="py-2 font-mono text-sm text-slate-500">
                          {prop.default || "-"}
                        </td>
                        <td className="py-2 text-sm text-slate-600">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-slate-500 italic">No props documented yet.</p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ComponentsPage;
