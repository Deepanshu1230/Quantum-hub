import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Zap } from 'lucide-react'; // For the logo in the card

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      toast({ title: "Passwords do not match" });
      return;
    }
    setLoading(true);
    try {
      // Demo auth: create local session
      localStorage.setItem("qh_authed", "1");
      toast({ title: "Welcome to QuantumHub" });
      navigate("/quantumhub", { replace: true });
    } catch (e) {
      toast({ title: "Sign up failed", description: "Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign up | QuantumHub</title>
        <meta name="description" content="Create your QuantumHub account to optimize your business, predict with AI, and generate secure passwords." />
        <link rel="canonical" href="/signup" />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-black">
        {/* Animated background layers - consistent with landing page */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
        <div className="fixed inset-0 bg-gradient-to-tr from-purple-950/20 via-transparent to-cyan-950/20" />
        <div className="fixed inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        
        {/* Floating orbs - subtle presence */}
        <div className="fixed top-[-100px] left-[-100px] w-64 h-64 bg-gradient-to-r from-purple-600/20 to-blue-600/10 rounded-full blur-3xl animate-pulse opacity-50" />
        <div className="fixed bottom-[-100px] right-[-100px] w-56 h-56 bg-gradient-to-r from-cyan-600/20 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000 opacity-40" />

        <Card className="w-full max-w-md relative z-10 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/25">
          <CardHeader className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative p-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg shadow-purple-500/50">
                <Zap className="w-6 h-6 text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur-lg opacity-50 animate-pulse" />
              </div>
              <span className="text-3xl font-black text-white">QuantumHub</span>
            </div>
            <CardTitle className="text-3xl font-bold text-white">Create your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 text-lg font-medium">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12 text-lg px-4" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300 text-lg font-medium">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} className="bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12 text-lg px-4" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm" className="text-gray-300 text-lg font-medium">Confirm password</Label>
                <Input id="confirm" type="password" placeholder="••••••••" value={confirm} onChange={(e) => setConfirm(e.target.value)} required minLength={8} className="bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12 text-lg px-4" />
              </div>
              <Button type="submit" size="lg" disabled={loading} className="w-full relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-500 hover:scale-105 border border-purple-400/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse" />
                <span className="relative">
                  {loading ? "Creating account..." : "Sign up"}
                </span>
              </Button>
              <p className="text-sm text-gray-400 text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="underline text-purple-400 hover:text-purple-300 transition-colors">
                  Log in
                </Link>
              </p>
             
            </form>
          </CardContent>
        </Card>
      </main>
    </HelmetProvider>
  );
};

export default SignupPage;
