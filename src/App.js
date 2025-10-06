import React, { useState, useEffect } from 'react';
import { Camera, Shield, AlertTriangle, CheckCircle, Search, TrendingUp, Users, DollarSign, Star, ArrowRight, Menu, X } from 'lucide-react';

const SnapToSellLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedScam, setSelectedScam] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scamDatabase = [
    {
      id: 1,
      title: "iPhone 15 Pro - Fake Zelle Payment Screenshot",
      platform: "Facebook Marketplace",
      reported: 347,
      avgLoss: 850,
      description: "Scammer sends fake Zelle confirmation screenshot. Item never ships. Money is gone.",
      redFlags: ["New seller account", "Refuses to meet in person", "Only accepts Zelle/CashApp", "Price too good to be true"]
    },
    {
      id: 2,
      title: "Moving Sale - Empty House Scam",
      platform: "Craigslist",
      reported: 284,
      avgLoss: 1200,
      description: "Scammer lists furniture from rental property they don't own. Asks for deposit, then disappears.",
      redFlags: ["Wants deposit before viewing", "Can't meet during normal hours", "Vague about exact address"]
    },
    {
      id: 3,
      title: "PS5/Xbox - Box Only Scam",
      platform: "eBay",
      reported: 219,
      avgLoss: 450,
      description: "Listing says 'PS5' but fine print says 'box only'. Buyer pays full price for empty box.",
      redFlags: ["Stock photos only", "Unusual wording in description", "No returns accepted"]
    },
    {
      id: 4,
      title: "Rental Deposit - Fake Landlord",
      platform: "Facebook Marketplace",
      reported: 156,
      avgLoss: 2100,
      description: "Scammer poses as landlord for property they don't own. Collects deposit and first month rent.",
      redFlags: ["Can't meet in person", "Wants wire transfer", "Pressure to pay immediately", "Won't provide lease"]
    },
    {
      id: 5,
      title: "Designer Purse - Counterfeit Goods",
      platform: "OfferUp",
      reported: 193,
      avgLoss: 380,
      description: "High-quality counterfeit designer bags sold as authentic. No returns, seller blocks after sale.",
      redFlags: ["No authentication papers", "Price significantly below retail", "Seller has many 'authentic' items"]
    },
    {
      id: 6,
      title: "Puppy Sale - Pet That Doesn't Exist",
      platform: "Craigslist",
      reported: 421,
      avgLoss: 650,
      description: "Scammer uses stolen photos of puppies. Asks for deposit to 'hold' the puppy. Pet doesn't exist.",
      redFlags: ["Won't video call", "Unusual payment methods", "Wants shipping for local pickup", "Multiple excuses why you can't visit"]
    }
  ];

  const stats = [
    { value: "2,847", label: "Scams Blocked", icon: Shield },
    { value: "$1.2M", label: "Protected", icon: DollarSign },
    { value: "10,284", label: "Safe Sellers", icon: Users },
    { value: "4.9★", label: "Trust Score", icon: Star }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "AI Photo Verification",
      description: "Every image checked against our database of 2M+ known scam photos. Duplicate detection catches fake listings instantly.",
      icon: Camera,
      color: "blue"
    },
    {
      step: "2",
      title: "Seller Background Check",
      description: "Phone verification, ID verification, and history review. No anonymous scammers allowed on our platform.",
      icon: Shield,
      color: "orange"
    },
    {
      step: "3",
      title: "Secure Escrow Payment",
      description: "Money held until item confirmed received. Automatic refund protection. Never lose money to a scammer again.",
      icon: CheckCircle,
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-700' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                SnapToSell
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#scams" className="text-slate-300 hover:text-orange-400 transition-colors font-medium">Scam Database</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-orange-400 transition-colors font-medium">How It Works</a>
              <a href="#waitlist" className="text-slate-300 hover:text-orange-400 transition-colors font-medium">Join Waitlist</a>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105">
                Report a Scam
              </button>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              <a href="#scams" className="block text-slate-300 hover:text-orange-400 py-2">Scam Database</a>
              <a href="#how-it-works" className="block text-slate-300 hover:text-orange-400 py-2">How It Works</a>
              <a href="#waitlist" className="block text-slate-300 hover:text-orange-400 py-2">Join Waitlist</a>
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold">
                Report a Scam
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">62% of marketplace users have been scammed</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Never Get{' '}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Scammed
              </span>
              {' '}on Marketplace Again
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              SnapToSell verifies every photo, every seller, every listing. AI-powered scam detection with zero tolerance for fraud. The marketplace where scammers can't hide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-xl p-8 max-w-md mx-auto w-full">
                <h3 className="text-2xl font-bold text-white mb-4">Join the Waitlist</h3>
                <p className="text-slate-400 mb-6">Get early access when we launch. Be among the first protected sellers.</p>
                
                <iframe src="https://tally.so/embed/mJ5Rkz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="400" frameBorder="0" marginHeight="0" marginWidth="0" title="SnapToSell Waitlist"></iframe>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-xl">
                    <IconComponent className="w-8 h-8 text-orange-400 mb-2 mx-auto" />
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                "I Lost $600 to a Fake iPhone Seller"
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-8"></div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-8 backdrop-blur-sm">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                "The photos looked real. The seller had 5-star reviews. I sent the money through Zelle like they asked. The iPhone never came. When I reported it to Facebook, they said there was nothing they could do. I lost $600."
              </p>
              <p className="text-lg text-slate-400 italic">— Sarah M., verified victim</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-orange-400 mb-2">147,293</div>
                <div className="text-slate-300">Marketplace scams reported in 2024</div>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-orange-400 mb-2">$2.7B</div>
                <div className="text-slate-300">Lost to marketplace fraud annually</div>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-orange-400 mb-2">62%</div>
                <div className="text-slate-300">Of users have been scammed or know someone who has</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-2xl font-bold text-white mb-4">
                This Won't Happen on SnapToSell. Here's Why ▼
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our 3-Layer Scam Shield
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Every listing goes through three levels of protection before it reaches you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => {
              const IconComponent = item.icon;
              const colors = {
                blue: { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400' },
                orange: { gradient: 'from-orange-500 to-orange-600', bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400' },
                green: { gradient: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400' }
              };
              const colorScheme = colors[item.color];
              return (
                <div key={index} className="relative">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-xl hover:border-orange-500/30 transition-all h-full backdrop-blur-sm">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorScheme.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto shadow-lg`}>
                      {item.step}
                    </div>
                    <div className={`w-12 h-12 ${colorScheme.bg} border ${colorScheme.border} rounded-xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm`}>
                      <IconComponent className={`w-6 h-6 ${colorScheme.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
                    <p className="text-slate-400 text-center leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">100% Scam-Free Guarantee</h3>
                <p className="text-slate-300 text-lg">
                  If you get scammed on SnapToSell, we'll refund your money. Period. Unlike other platforms, we actually protect our users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="scams" className="py-20 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Crowdsourced Scam Database
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Over 10,000 scams reported and verified by our community. Search before you buy.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-6 h-6 text-slate-500" />
              <input
                type="text"
                placeholder='Search scams: "iPhone 15", "rental deposit", "puppy"...'
                className="w-full pl-14 pr-4 py-4 bg-slate-800/50 border-2 border-slate-700 rounded-xl text-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 text-orange-400 mr-2" />
              Top Scams This Week
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scamDatabase.slice(0, 6).map((scam) => (
                <div 
                  key={scam.id}
                  onClick={() => setSelectedScam(scam)}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-orange-500/10 transition-all cursor-pointer hover:border-orange-500/50 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2 line-clamp-2">{scam.title}</h4>
                      <span className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full text-sm font-medium">
                        {scam.platform}
                      </span>
                    </div>
                    <AlertTriangle className="w-6 h-6 text-orange-400 flex-shrink-0 ml-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-slate-500">Reported</div>
                      <div className="text-lg font-bold text-white">{scam.reported}x</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Avg Loss</div>
                      <div className="text-lg font-bold text-orange-400">${scam.avgLoss.toLocaleString()}</div>
                    </div>
                  </div>

                  <button className="w-full bg-slate-700/50 border border-slate-600 text-slate-300 py-2 rounded-lg hover:bg-slate-700 transition-colors font-medium">
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white text-center shadow-xl shadow-orange-500/20">
            <h3 className="text-3xl font-bold mb-4">Been Scammed? Help Others.</h3>
            <p className="text-xl text-orange-100 mb-6">
              Report scams you've encountered. Your report could save someone else from losing money.
            </p>
            
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
              Report a Scam You Encountered
            </button>
            
            <p className="text-sm text-orange-100 mt-4">Anonymous reporting available • Takes 2 minutes</p>
          </div>
        </div>
      </section>

      {selectedScam && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedScam(null)}>
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedScam.title}</h3>
                <span className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full text-sm font-medium">
                  {selectedScam.platform}
                </span>
              </div>
              <button onClick={() => setSelectedScam(null)} className="text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
              <div>
                <div className="text-sm text-slate-400">Times Reported</div>
                <div className="text-2xl font-bold text-white">{selectedScam.reported}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400">Average Loss</div>
                <div className="text-2xl font-bold text-orange-400">${selectedScam.avgLoss.toLocaleString()}</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-white mb-2">How It Works</h4>
              <p className="text-slate-300 leading-relaxed">{selectedScam.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
                Red Flags to Watch For
              </h4>
              <ul className="space-y-2">
                {selectedScam.redFlags.map((flag, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-300">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl p-4">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-300 mb-1">Protected on SnapToSell</h4>
                  <p className="text-sm text-emerald-200">Our AI would automatically flag and block this type of scam before it reaches you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Real People, Real Protection
            </h2>
            <p className="text-xl text-slate-400">Stories from sellers who avoided scams with SnapToSell</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI flagged a listing as suspicious. Turns out it was a known scammer with 15 different aliases. Facebook had done nothing about it.",
                author: "Mike R.",
                role: "Vintage Collector",
                saved: "$1,200"
              },
              {
                quote: "I was about to send money for a 'rental deposit' when SnapToSell's verification caught it. The address didn't exist. Saved me $2,100.",
                author: "Jennifer T.",
                role: "First-time Renter",
                saved: "$2,100"
              },
              {
                quote: "After being scammed twice on Facebook Marketplace, I only use SnapToSell now. The escrow payment gives me peace of mind.",
                author: "David K.",
                role: "Electronics Reseller",
                saved: "$850"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400">Saved</div>
                    <div className="text-xl font-bold text-emerald-400">{testimonial.saved}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-20 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Stop Losing Money to Scammers
          </h2>
          <p className="text-xl text-orange-100 mb-10">
            Join 2,847 people on the waitlist. Get early access when we launch in December 2024.
          </p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
            <iframe src="https://tally.so/embed/mJ5Rkz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="400" frameBorder="0" marginHeight="0" marginWidth="0" title="SnapToSell Waitlist"></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">SnapToSell</span>
              </div>
              <p className="text-sm">The marketplace where scammers can't hide.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#scams" className="hover:text-orange-400 transition-colors">Scam Database</a></li>
                <li><a href="#how-it-works" className="hover:text-orange-400 transition-colors">How It Works</a></li>
                <li><a href="#waitlist" className="hover:text-orange-400 transition-colors">Join Waitlist</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Scam Prevention Guide</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Safety Tips</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Report a Scam</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2024 SnapToSell. All rights reserved. Fighting marketplace fraud, one listing at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SnapToSellLanding;
