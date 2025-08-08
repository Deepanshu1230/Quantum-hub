import React, { useMemo, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom"; // For internal navigation
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast"; // Assuming this hook is compatible with client components
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { LineChartIcon, Shield, Wand2, ArrowRight, Sparkles, Zap, Star, Menu, X, Crown, Twitter, Github, Linkedin } from 'lucide-react';
import { useEffect } from "react"; // Add useEffect

// --- Global CSS (Embedded directly) ---
const GlobalStyles = () => (
  <style>{`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
      :root {
        --background: 222.2 84% 4.9%;
        --foreground: 210 40% 98%;
        --card: 222.2 84% 4.9%;
        --card-foreground: 210 40% 98%;
        --popover: 222.2 84% 4.9%;
        --popover-foreground: 210 40% 98%;
        --primary: 210 40% 98%;
        --primary-foreground: 222.2 84% 4.9%;
        --secondary: 217.2 32.6% 17.5%;
        --secondary-foreground: 210 40% 98%;
        --muted: 217.2 32.6% 17.5%;
        --muted-foreground: 215 20.2% 65.1%;
        --accent: 217.2 32.6% 17.5%;
        --accent-foreground: 210 40% 98%;
        --destructive: 0 62.8% 30.6%;
        --destructive-foreground: 210 40% 98%;
        --border: 217.2 32.6% 17.5%;
        --input: 217.2 32.6% 17.5%;
        --ring: 212.7 26.8% 83.9%;
        --chart-1: 220 70% 50%;
        --chart-2: 160 60% 45%;
        --chart-3: 30 80% 55%;
        --chart-4: 280 65% 60%;
        --chart-5: 340 75% 55%;
      }
    }

    @layer base {
      * {
        border-color: var(--border);
      }
      body {
        background-color: var(--background);
        color: var(--foreground);
      }
    }

    @layer utilities {
      .bg-grid-pattern {
        background-image: 
          linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
        background-size: 60px 60px;
      }
      
      .animate-gradient {
        background-size: 400% 400%;
        animation: gradient 4s ease infinite;
      }
      
      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        25% {
          background-position: 100% 50%;
        }
        50% {
          background-position: 100% 100%;
        }
        75% {
          background-position: 0% 100%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .bg-grid-white\/\[0\.02\] {
        background-image: radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        background-size: 50px 50px;
      }

      /* Custom glow effects */
      .glow-purple {
        box-shadow: 0 0 20px rgba(147, 51, 234, 0.3), 0 0 40px rgba(147, 51, 234, 0.2), 0 0 80px rgba(147, 51, 234, 0.1);
      }

      .glow-cyan {
        box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.2), 0 0 80px rgba(6, 182, 212, 0.1);
      }

      /* Enhanced animations */
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      /* Shimmer effect */
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }

      .animate-shimmer {
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
      }
    }
  `}</style>
);

// --- Header Component (internal to this file) ---
function PageHeader() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from localStorage
    const authed = localStorage.getItem("qh_authed");
    setIsLoggedIn(authed === "1");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("qh_authed");
    setIsLoggedIn(false);
    toast({ title: "Logged out successfully" });
    navigate("/login");
  };

  return (
    <header className="relative z-50 border-b border-purple-500/20 bg-black/80 backdrop-blur-2xl shadow-2xl shadow-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3">
            <div className="relative p-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg shadow-purple-500/50">
              <Zap className="w-6 h-6 text-white" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur-lg opacity-50 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white">QuantumHub</span>
              <div className="flex items-center gap-1">
                <Crown className="w-3 h-3 text-yellow-400" />
                <span className="text-xs text-yellow-400 font-semibold">PREMIUM</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative group">
              Features
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative group">
              Pricing
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative group">
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          {/* Enhanced Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-gray-800/50 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                onClick={handleLogout}
              >
                Log out
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800/50 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                    Log in
                  </Button>
                </Link>
                <Link to="/quantumhub">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 border border-purple-400/30">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-gray-300 hover:text-white rounded-xl hover:bg-gray-800/50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-purple-500/20 bg-black/50 backdrop-blur-xl rounded-b-2xl">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-gray-800/50 font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-gray-800/50 font-medium">
                Pricing
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-gray-800/50 font-medium">
                About
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-purple-500/20">
                {isLoggedIn ? (
                  <Button
                    variant="ghost"
                    className="w-full text-gray-300 hover:text-white hover:bg-gray-800/50 font-semibold py-3 rounded-xl"
                    onClick={handleLogout}
                  >
                    Log out
                  </Button>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="ghost" className="w-full text-gray-300 hover:text-white hover:bg-gray-800/50 font-semibold py-3 rounded-xl">
                        Log in
                      </Button>
                    </Link>
                    <Link to="/quantumhub">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-500/30">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// --- Footer Component (internal to this file) ---
function PageFooter() {
  return (
    <footer className="relative z-40 bg-black/80 backdrop-blur-xl border-t border-purple-500/20 shadow-inner shadow-purple-500/10 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center mb-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative p-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg shadow-purple-500/50">
              <Zap className="w-6 h-6 text-white" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur-lg opacity-50 animate-pulse" />
            </div>
            <span className="text-3xl font-black text-white">QuantumHub</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empowering your business with quantum-inspired solutions for optimization, AI predictions, and robust security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">Stay updated with our latest news and features!</p>
          </div>
        </div>

        <div className="border-t border-purple-500/10 pt-8 mt-10">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} QuantumHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// --- QuantumHub Main Component ---
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function seededRand(seed: number) {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

const QuantumHub = () => {
  // Optimize Business state
  const [cost, setCost] = useState(10000);
  const [savings, setSavings] = useState(15);
  const [optResults, setOptResults] = useState<{month: string; current: number; optimized: number;}[] | null>(null);

  // Predict AI state
  const [target, setTarget] = useState("Revenue");
  const [horizon, setHorizon] = useState(6);
  const [predResults, setPredResults] = useState<{month: string; value: number;}[] | null>(null);

  // Password state
  const [pwLength, setPwLength] = useState(16);
  const [pwCount, setPwCount] = useState(5);
  const [passwords, setPasswords] = useState<string[]>([]);

  const runOptimization = () => {
    const data = months.map((m, i) => {
      const current = cost;
      const optimized = Math.round(cost * (1 - (savings / 100) * (i + 1) / 12));
      return { month: m, current, optimized };
    });
    setOptResults(data);
    toast({ title: "Quantum optimization complete", description: "Projected savings visualized." });
  };

  const runPrediction = () => {
    const rng = seededRand(42 + horizon);
    const data = months.slice(0, horizon).map((m, i) => ({
      month: m,
      value: Math.round(100 + i * 20 + rng() * 30),
    }));
    setPredResults(data);
    toast({ title: `Prediction ready for ${target}` });
  };

  const runPasswords = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.?/";
    const generated: string[] = [];
    for (let i = 0; i < pwCount; i++) {
      const arr = new Uint32Array(pwLength);
      crypto.getRandomValues(arr);
      const pw = Array.from(arr, (n) => charset[n % charset.length]).join("");
      generated.push(pw);
    }
    setPasswords(generated);
    toast({ title: "Secure passwords generated" });
  };

  const entropyBits = useMemo(() => {
    const charsetSize = 26*2 + 10 + 24; // approximate
    const perChar = Math.log2(charsetSize);
    return Math.round(pwLength * perChar);
  }, [pwLength]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Our Solution – QuantumHub</title>
        <meta name="description" content="QuantumHub: Optimize your business, predict with AI, and generate secure passwords — all in one beautiful, no-code interface." />
        <link rel="canonical" href="/quantumhub" />
      </Helmet>
      <GlobalStyles /> {/* Apply global styles */}
      <div className="dark min-h-screen flex flex-col bg-black relative overflow-hidden">
        {/* Animated background layers - consistent with landing page */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
        <div className="fixed inset-0 bg-gradient-to-tr from-purple-950/20 via-transparent to-cyan-950/20" />
        <div className="fixed inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        
        {/* Multiple floating orbs with different animations */}
        <div className="fixed top-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-r from-purple-600/30 via-blue-600/20 to-cyan-600/30 rounded-full blur-3xl animate-pulse opacity-70" />
        <div className="fixed bottom-[-300px] right-[-300px] w-[800px] h-[800px] bg-gradient-to-r from-cyan-600/25 via-purple-600/15 to-pink-600/25 rounded-full blur-3xl animate-pulse delay-1000 opacity-60" />
        <div className="fixed top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-2xl animate-bounce opacity-40" style={{ animationDuration: '8s' }} />
        <div className="fixed bottom-1/4 left-[-100px] w-[300px] h-[300px] bg-gradient-to-r from-pink-600/25 to-orange-600/25 rounded-full blur-2xl animate-pulse delay-2000 opacity-50" />
        
        {/* Shooting stars effect */}
        <div className="fixed top-20 right-20 w-1 h-1 bg-white rounded-full animate-ping opacity-75" />
        <div className="fixed top-40 right-60 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000 opacity-60" />
        <div className="fixed top-60 right-40 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-2000 opacity-80" />

        <PageHeader />
        <header className="hero-bg border-b border-purple-500/20 bg-black/80 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
          <div className="container py-16 md:py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Our Solution — <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">QuantumHub</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Log in like any normal website, choose what you want to do, fill out a simple form, and run a quantum-inspired algorithm. See beautiful charts and results instantly.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="hero" size="lg" className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 border border-purple-400/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse" />
                <span className="relative flex items-center gap-2">
                  Run Quantum Algorithm
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              <a href="#workbench" className="inline-flex">
                <Button variant="outline" size="lg" className="border-2 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800/50 hover:border-gray-400 px-8 py-4 text-lg font-bold rounded-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                  Open Workbench
                </Button>
              </a>
            </div>
          </div>
        </header>
        <main id="workbench" className="container py-10 md:py-14 relative z-10">
          <Tabs defaultValue="optimize" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full bg-gray-900/70 backdrop-blur-xl border border-purple-500/30 rounded-xl shadow-lg shadow-purple-500/10">
              <TabsTrigger value="optimize" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/20 data-[state=active]:border data-[state=active]:border-purple-400/30 text-gray-300 hover:text-white transition-colors rounded-xl">Help me optimize my business</TabsTrigger>
              <TabsTrigger value="predict" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/20 data-[state=active]:border data-[state=active]:border-purple-400/30 text-gray-300 hover:text-white transition-colors rounded-xl">Predict something with AI</TabsTrigger>
              <TabsTrigger value="passwords" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/20 data-[state=active]:border data-[state=active]:border-purple-400/30 text-gray-300 hover:text-white transition-colors rounded-xl">Generate secure passwords</TabsTrigger>
            </TabsList>
            <TabsContent value="optimize" className="mt-6">
              <section className="grid md:grid-cols-2 gap-6">
                <Card className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/25">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Optimization Input</CardTitle>
                    <CardDescription className="text-gray-400">We’ll simulate a quantum optimization to reduce cost over the next 12 months.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cost" className="text-gray-300 text-lg font-medium">Current monthly cost ($)</Label>
                        <Input id="cost" type="number" value={cost} min={0} onChange={(e) => setCost(parseInt(e.target.value || "0"))} className="bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12 text-lg px-4" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="savings" className="text-gray-300 text-lg font-medium">Target savings (%)</Label>
                        <Input id="savings" type="number" value={savings} min={0} max={90} onChange={(e) => setSavings(parseInt(e.target.value || "0"))} className="bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12 text-lg px-4" />
                      </div>
                    </div>
                    <Button onClick={runOptimization} variant="hero" size="lg" className="w-full relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-500 hover:scale-105 border border-purple-400/30 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse" />
                      <span className="relative">Run Quantum Algorithm</span>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/25">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Projected Savings</CardTitle>
                    <CardDescription className="text-gray-400">Compare current vs optimized cost.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={optResults ?? []}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                          <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
                          <YAxis stroke="rgba(255,255,255,0.7)" />
                          <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(147,51,234,0.5)', borderRadius: '8px' }} itemStyle={{ color: 'white' }} />
                          <Line type="monotone" dataKey="current" stroke="hsl(var(--muted-foreground))" strokeWidth={2} dot={false} />
                          <Line type="monotone" dataKey="optimized" stroke="url(#gradientBrand)" strokeWidth={3} dot={false} />
                          <defs>
                            <linearGradient id="gradientBrand" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="hsl(280 65% 60%)" /> {/* Purple */}
                              <stop offset="100%" stopColor="hsl(180 60% 45%)" /> {/* Cyan */}
                            </linearGradient>
                          </defs>
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>
            <TabsContent value="predict" className="mt-6">
              <section className="grid md:grid-cols-2 gap-6">
                <Card className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/25">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Prediction Input</CardTitle>
                    <CardDescription className="text-gray-400">Describe what to predict and the time horizon.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="target" className="text-gray-300 text-lg font-medium">What to predict</Label>
                      <Input id="target" value={target} onChange={(e) => setTarget(e.target.value)} placeholder="Revenue, demand, churn, ..." className="bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12 text-lg px-4" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="horizon" className="text-gray-300 text-lg font-medium">Horizon (months)</Label>
                      <Input id="horizon" type="number" value={horizon} min={1} max={12} onChange={(e) => setHorizon(parseInt(e.target.value || "1"))} className="bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12 text-lg px-4" />
                    </div>
                    <Button onClick={runPrediction} variant="hero" size="lg" className="w-full relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-500 hover:scale-105 border border-purple-400/30 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse" />
                      <span className="relative">Run Quantum Algorithm</span>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/25">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Prediction</CardTitle>
                    <CardDescription className="text-gray-400">Quantum-inspired AI forecast.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={predResults ?? []}>
                          <defs>
                            <linearGradient id="colorBrand" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(280 65% 60%)" stopOpacity={0.8}/> {/* Purple */}
                              <stop offset="95%" stopColor="hsl(180 60% 45%)" stopOpacity={0}/> {/* Cyan */}
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                          <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
                          <YAxis stroke="rgba(255,255,255,0.7)" />
                          <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(147,51,234,0.5)', borderRadius: '8px' }} itemStyle={{ color: 'white' }} />
                          <Area type="monotone" dataKey="value" stroke="url(#colorBrand)" fillOpacity={1} fill="url(#colorBrand)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>
            <TabsContent value="passwords" className="mt-6">
              <section className="grid md:grid-cols-2 gap-6">
                <Card className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/25">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Secure Password Generator</CardTitle>
                    <CardDescription className="text-gray-400">Quantum-safe randomness using Web Crypto.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="len" className="text-gray-300 text-lg font-medium">Length</Label>
                        <Input id="len" type="number" value={pwLength} min={8} max={64} onChange={(e) => setPwLength(parseInt(e.target.value || "12"))} className="bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12 text-lg px-4" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="count" className="text-gray-300 text-lg font-medium">How many</Label>
                        <Input id="count" type="number" value={pwCount} min={1} max={20} onChange={(e) => setPwCount(parseInt(e.target.value || "1"))} className="bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12 text-lg px-4" />
                      </div>
                    </div>
                    <Button onClick={runPasswords} variant="hero" size="lg" className="w-full relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-500 hover:scale-105 border border-purple-400/30 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse" />
                      <span className="relative">Run Quantum Algorithm</span>
                    </Button>
                    <Separator className="bg-gray-700 my-6" />
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Estimated entropy: <span className="font-semibold text-white">{entropyBits} bits</span></p>
                      <div className="h-40">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={[{ name: "Entropy", bits: entropyBits }]}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis dataKey="name" stroke="rgba(255,255,255,0.7)" />
                            <YAxis stroke="rgba(255,255,255,0.7)" />
                            <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(147,51,234,0.5)', borderRadius: '8px' }} itemStyle={{ color: 'white' }} />
                            <Bar dataKey="bits" fill="url(#gradientBrandBar)" />
                            <defs>
                              <linearGradient id="gradientBrandBar" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="hsl(280 65% 60%)" /> {/* Purple */}
                                <stop offset="100%" stopColor="hsl(180 60% 45%)" /> {/* Cyan */}
                              </linearGradient>
                            </defs>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/25">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Generated Passwords</CardTitle>
                    <CardDescription className="text-gray-400">Click to copy to clipboard.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {(passwords.length ? passwords : Array.from({ length: 5 }, (_, i) => `••••••••••••••${i}`)).map((pw, idx) => (
                        <li key={idx}>
                          <button
                            className="w-full text-left px-3 py-2 rounded-md border border-gray-700 bg-gray-800/50 text-white hover:bg-gray-700/50 hover:border-purple-500 transition-colors hover:shadow-md hover:shadow-purple-500/10"
                            onClick={async () => { await navigator.clipboard.writeText(pw); toast({ title: "Copied password" }); }}
                          >
                            {pw}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>
          </Tabs>
        </main>
        <PageFooter />
      </div>
    </HelmetProvider>
  );
};

export default QuantumHub;
