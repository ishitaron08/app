import React, { useState } from 'react';
import { Zap, Brain, Shield, ChevronRight, Menu, X, Check, Star } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      alert(`Thanks for signing up with ${email}! We'll be in touch soon.`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">MindFlow</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition">Testimonials</a>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Pricing</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Testimonials</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">AI-Powered Productivity</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Workflow <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              With AI Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            MindFlow uses cutting-edge AI to automate tasks, organize thoughts, and boost your productivity by 10x. 
            Stop working harder, start working smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              onClick={handleSubmit}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/50"
            >
              <span>Get Started</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-gray-400 text-sm">Free 14-day trial • No credit card required</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Powerful Features Built for You
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-8 hover:scale-105 transition">
              <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Process tasks in milliseconds with our advanced AI engine. Never wait for results again.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-8 hover:scale-105 transition">
              <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart AI</h3>
              <p className="text-gray-300">
                Our AI learns your patterns and adapts to your workflow, making intelligent suggestions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-8 hover:scale-105 transition">
              <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Private</h3>
              <p className="text-gray-300">
                Enterprise-grade encryption ensures your data stays safe. Your privacy is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Simple, Transparent Pricing
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$9</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>100 AI requests/day</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Unlimited AI requests</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>API access</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition shadow-lg shadow-purple-500/50">
                Get Started
              </button>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>SLA guarantee</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Loved by Thousands
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "Product Manager", text: "MindFlow has completely transformed how I manage my projects. I'm 3x more productive!" },
              { name: "James Wilson", role: "Entrepreneur", text: "The AI suggestions are incredibly accurate. It's like having a personal assistant that knows me." },
              { name: "Maya Patel", role: "Designer", text: "Best investment I've made for my workflow. The interface is beautiful and intuitive." }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{testimonial.text}</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-3xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 50,000+ users who are already working smarter with MindFlow
          </p>
          <button className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition text-lg shadow-lg shadow-purple-500/50">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold text-white">MindFlow</span>
          </div>
          <p>© 2024 MindFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}