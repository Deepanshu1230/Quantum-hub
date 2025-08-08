import { Button } from "@/components/ui/button";
import { LineChartIcon, Shield, Wand2, ArrowRight, Sparkles, Zap, Star, Menu, X, Crown, Twitter, Github, Linkedin } from 'lucide-react';
import { useState } from "react";

// Header Component (formerly components/layout/Header.tsx)
function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a href="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800/50 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                Log in
              </Button>
            </a>
            <a href="/quantumhub">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 border border-purple-400/30">
                Get Started
              </Button>
            </a>
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
                <a href="/login">
                  <Button variant="ghost" className="w-full text-gray-300 hover:text-white hover:bg-gray-800/50 font-semibold py-3 rounded-xl">
                    Log in
                  </Button>
                </a>
                <a href="/quantumhub">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-500/30">
                    Get Started
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Footer Component (formerly components/layout/Footer.tsx)
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


// Main Index Component (formerly app/page.tsx)
export default function Index() {
  return (
    <>
      <title>QuantumHub - Optimize, Predict, Secure</title>
      <meta name="description" content="QuantumHub: A beautiful, no-code hub to optimize business, run AI predictions, and generate secure passwords." />
      
      <div className="dark min-h-screen flex flex-col bg-black relative overflow-hidden">
        {/* Animated background layers */}
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
        
        <main className="flex-1 relative z-10">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-32 text-center relative">
            {/* Premium badge */}
            <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-500/30 backdrop-blur-xl mb-12 shadow-2xl shadow-purple-500/20">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Premium Dark Theme • Enterprise SaaS
              </span>
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
            
            {/* Main heading with enhanced gradients */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] relative">
              <span className="block mb-4 text-white drop-shadow-2xl">Accelerate with</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient drop-shadow-2xl relative">
                QuantumHub
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent blur-2xl opacity-50 animate-pulse" />
              </span>
            </h1>
            
            {/* Enhanced description */}
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
              Log in, choose your task, fill a simple form — then run a{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                quantum-inspired algorithm
              </span>{" "}
              and instantly see{" "}
              <span className="font-semibold text-white relative">
                beautiful charts and results
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
              </span>
              .
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
              <a href="/quantumhub" className="group">
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-500 hover:scale-110 border border-purple-400/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse" />
                  <span className="relative flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    Open Our Solution
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </a>
              <a href="/login" className="group">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800/50 hover:border-gray-400 px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-xl transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center gap-3">
                    Log in
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </span>
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Lightning Fast</span>
              </div>
            </div>
          </section>

          {/* Enhanced Features Section */}
          <section className="container mx-auto px-4 pb-32 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features for{" "}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Modern Business
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Everything you need to optimize, predict, and secure your business operations
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
              {/* Feature 1 */}
              <article className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/10 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
                  <div className="flex items-start gap-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-400/40 shadow-lg shadow-purple-500/25">
                      <Wand2 className="w-8 h-8 text-purple-300" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                        Optimize your business
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                        Find savings and efficiencies instantly using quantum-inspired heuristics and advanced machine learning algorithms.
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-purple-400 font-semibold">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Feature 2 */}
              <article className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/10 to-cyan-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-10 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
                  <div className="flex items-start gap-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border border-cyan-400/40 shadow-lg shadow-cyan-500/25">
                      <LineChartIcon className="w-8 h-8 text-cyan-300" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                        Predict with AI
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                        Run guided predictions and visualize outcomes with beautiful, interactive charts powered by cutting-edge AI.
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Feature 3 */}
              <article className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-orange-600/10 to-pink-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-pink-500/30 rounded-3xl p-10 hover:border-pink-400/50 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25">
                  <div className="flex items-start gap-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-600/30 to-orange-600/30 border border-pink-400/40 shadow-lg shadow-pink-500/25">
                      <Shield className="w-8 h-8 text-pink-300" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-pink-300 transition-colors">
                        Generate secure passwords
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                        One-click, high-entropy passwords with comprehensive strength insights and military-grade security analysis.
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-pink-400 font-semibold">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>
        <PageFooter />
      </div>
    </>
  );
}
