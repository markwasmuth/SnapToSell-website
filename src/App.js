import React, { useState, useEffect } from 'react';
import { Camera, Shield, AlertTriangle, CheckCircle, Search, TrendingUp, Users, DollarSign, Zap, Star, ArrowRight, Menu, X } from 'lucide-react';

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
      color: "purple"
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
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                SnapToSell
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#scams" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Scam Database</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-red-600 transition-colors font-medium">How It Works</a>
              <a href="#waitlist" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Join Waitlist</a>
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                Report a Scam
              </button>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#scams" className="block text-gray-700 hover:text-red-600 py-2">Scam Database</a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-red-600 py-2">How It Works</a>
              <a href="#waitlist" className="block text-gray-700 hover:text-red-600 py-2">Join Waitlist</a>
              <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full font-semibold">
                Report a Scam
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-300 px-4 py-2 rounded-full mb-8">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="text-sm font-semibold text-red-900">62% of marketplace users have been scammed</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Never Get{' '}
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Scammed
              </span>
              {' '}on Marketplace Again
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              SnapToSell verifies every photo, every seller, every listing. AI-powered scam detection with zero tolerance for fraud. The marketplace where scammers can't hide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Waitlist</h3>
                <p className="text-gray-600 mb-6">Get early access when we launch. Be among the first protected sellers.</p>
                
<iframe src="https://tally.so/embed/mJ5Rkz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="400" frameborder="0" marginheight="0" marginwidth="0" title="SnapToSell Waitlist"></iframe>

                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <IconComponent className="w-8 h-8 text-red-600 mb-2 mx-auto" />
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                "I Lost $600 to a Fake iPhone Seller"
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                "The photos looked real. The seller had 5-star reviews. I sent the money through Zelle like they asked. The iPhone never came. When I reported it to Facebook, they said there was nothing they could do. I lost $600."
              </p>
              <p className="text-lg text-gray-400 italic">— Sarah M., verified victim</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-red-900/30 border border-red-700 rounded-xl p-6">
                <div className="text-4xl font-bold text-red-400 mb-2">147,293</div>
                <div className="text-gray-300">Marketplace scams reported in 2024</div>
              </div>
              <div className="bg-red-900/30 border border-red-700 rounded-xl p-6">
                <div className="text-4xl font-bold text-red-400 mb-2">$2.7B</div>
                <div className="text-gray-300">Lost to marketplace fraud annually</div>
              </div>
              <div className="bg-red-900/30 border border-red-700 rounded-xl p-6">
                <div className="text-4xl font-bold text-red-400 mb-2">62%</div>
                <div className="text-gray-300">Of users have been scammed or know someone who has</div>
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

      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our 3-Layer Scam Shield
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every listing goes through three levels of protection before it reaches you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:border-red-200 transition-all h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto`}>
                      {item.step}
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                      <IconComponent className={`w-6 h-6 text-${item.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">100% Scam-Free Guarantee</h3>
                <p className="text-gray-700 text-lg">
                  If you get scammed on SnapToSell, we'll refund your money. Period. Unlike other platforms, we actually protect our users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="scams" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Crowdsourced Scam Database
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Over 10,000 scams reported and verified by our community. Search before you buy.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder='Search scams: "iPhone 15", "rental deposit", "puppy"...'
                className="w-full pl-14 pr-4 py-4 border-2 border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 text-red-600 mr-2" />
              Top Scams This Week
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scamDatabase.slice(0, 6).map((scam) => (
                <div 
                  key={scam.id}
                  onClick={() => setSelectedScam(scam)}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-red-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">{scam.title}</h4>
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        {scam.platform}
                      </span>
                    </div>
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 ml-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Reported</div>
                      <div className="text-lg font-bold text-gray-900">{scam.reported}x</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Avg Loss</div>
                      <div className="text-lg font-bold text-red-600">${scam.avgLoss.toLocaleString()}</div>
                    </div>
                  </div>

                  <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Been Scammed? Help Others.</h3>
            <p className="text-xl text-red-100 mb-6">
              Report scams you've encountered. Your report could save someone else from losing money.
            </p>
            
            <button className="bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
              Report a Scam You Encountered
            </button>
            
            <p className="text-sm text-red-100 mt-4">Anonymous reporting available • Takes 2 minutes</p>
          </div>
        </div>
      </section>

      {selectedScam && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedScam(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedScam.title}</h3>
                <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  {selectedScam.platform}
                </span>
              </div>
              <button onClick={() => setSelectedScam(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-red-50 rounded-xl">
              <div>
                <div className="text-sm text-gray-600">Times Reported</div>
                <div className="text-2xl font-bold text-gray-900">{selectedScam.reported}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Average Loss</div>
                <div className="text-2xl font-bold text-red-600">${selectedScam.avgLoss.toLocaleString()}</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">How It Works</h4>
              <p className="text-gray-700 leading-relaxed">{selectedScam.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                Red Flags to Watch For
              </h4>
              <ul className="space-y-2">
                {selectedScam.redFlags.map((flag, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-green-900 mb-1">Protected on SnapToSell</h4>
                  <p className="text-sm text-green-800">Our AI would automatically flag and block this type of scam before it reaches you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Real People, Real Protection
            </h2>
            <p className="text-xl text-gray-600">Stories from sellers who avoided scams with SnapToSell</p>
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
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Saved</div>
                    <div className="text-xl font-bold text-green-600">{testimonial.saved}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-20 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Stop Losing Money to Scammers
          </h2>
          <p className="text-xl text-red-100 mb-10">
            Join 2,847 people on the waitlist. Get early access when we launch in December 2024.
          </p>
          
<iframe src="https://tally.so/embed/mJ5Rkz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="400" frameborder="0" marginheight="0" marginwidth="0" title="SnapToSell Waitlist"></iframe>

            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">SnapToSell</span>
              </div>
              <p className="text-sm">The marketplace where scammers can't hide.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#scams" className="hover:text-white transition-colors">Scam Database</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#waitlist" className="hover:text-white transition-colors">Join Waitlist</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Scam Prevention Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report a Scam</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 SnapToSell. All rights reserved. Fighting marketplace fraud, one listing at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SnapToSellLanding;