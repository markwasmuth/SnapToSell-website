import React, { useState, useRef } from 'react';
import { Camera, Upload, DollarSign, Heart, Shield, Zap, Search, MapPin, Globe, Facebook, MessageCircle, Home, Plus, User, Filter, Star, Eye, MessageSquare, Edit, Trash2, CheckCircle } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

const SnapToSellApp = () => {
  const [currentView, setCurrentView] = useState('camera');
  const [capturedImage, setCapturedImage] = useState(null);
  const [itemData, setItemData] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [donationPercentage, setDonationPercentage] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [aiConfirmed, setAiConfirmed] = useState(false);
  const [myListings, setMyListings] = useState([
    {
      id: 1,
      title: "iPhone 13 Pro 128GB",
      price: 750,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      platform: "eBay",
      status: "Active",
      views: 23,
      messages: 5,
      datePosted: "2 days ago",
      condition: "Excellent"
    },
    {
      id: 2,
      title: "Vintage Band T-Shirt",
      price: 45,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      platform: "SnapToSell",
      status: "Sold",
      views: 18,
      messages: 3,
      datePosted: "1 week ago",
      condition: "Good"
    },
    {
      id: 3,
      title: "Coffee Table - Mid Century",
      price: 185,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
      platform: "Facebook",
      status: "Active",
      views: 41,
      messages: 8,
      datePosted: "3 days ago",
      condition: "Good"
    }
  ]);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Mock marketplace data
  const mockListings = [
    {
      id: 1,
      title: "iPhone 14 Pro Max 128GB",
      price: 899,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      location: "San Francisco, CA",
      platform: "SnapToSell",
      condition: "Like New",
      seller: "TechSeller23",
      rating: 4.8
    },
    {
      id: 2,
      title: "Nike Air Jordan 1 Retro High",
      price: 145,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      location: "Los Angeles, CA", 
      platform: "eBay",
      condition: "Good",
      seller: "SneakerHead99",
      rating: 4.9
    },
    {
      id: 3,
      title: "KitchenAid Stand Mixer Classic",
      price: 195,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      location: "Austin, TX",
      platform: "Facebook",
      condition: "Excellent",
      seller: "HomeCook42",
      rating: 5.0
    },
    {
      id: 4,
      title: "MacBook Air M2 2022",
      price: 999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
      location: "Seattle, WA",
      platform: "SnapToSell",
      condition: "Like New",
      seller: "AppleFan88",
      rating: 4.7
    },
    {
      id: 5,
      title: "Vintage Leather Jacket",
      price: 85,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
      location: "New York, NY",
      platform: "OfferUp",
      condition: "Good",
      seller: "VintageStyle",
      rating: 4.6
    },
    {
      id: 6,
      title: "Canon EOS R6 Camera",
      price: 1899,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop",
      location: "Denver, CO",
      platform: "eBay",
      condition: "Excellent",
      seller: "PhotoPro2023",
      rating: 4.9
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: Globe },
    { id: 'electronics', name: 'Electronics', icon: Zap },
    { id: 'fashion', name: 'Fashion', icon: Heart },
    { id: 'home', name: 'Home & Garden', icon: Home },
    { id: 'sports', name: 'Sports', icon: Star }
  ];

  const platforms = [
    { id: 'all', name: 'All Platforms', color: 'blue' },
    { id: 'snaptosell', name: 'SnapToSell', color: 'purple' },
    { id: 'ebay', name: 'eBay', color: 'yellow' },
    { id: 'facebook', name: 'Facebook', color: 'blue' },
    { id: 'offerup', name: 'OfferUp', color: 'green' }
  ];

  // Mock AI analysis function
  const analyzeItem = async (imageData) => {
    setIsAnalyzing(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock analysis result
    const mockResults = [
      {
        item: "iPhone 14 Pro Max 256GB",
        category: "Electronics > Smartphones",
        originalPrice: 1199,
        estimatedValue: 849,
        condition: "Good",
        confidence: 94,
        platforms: [
          { name: "SnapToSell Only", fee: "3%", audience: "SnapToSell users", avgSaleTime: "5 days", icon: Heart },
          { name: "eBay", fee: "10%", audience: "Global", avgSaleTime: "7 days", icon: Globe },
          { name: "Facebook Marketplace", fee: "5%", audience: "Local", avgSaleTime: "3 days", icon: Facebook },
          { name: "OfferUp", fee: "7%", audience: "Local mobile", avgSaleTime: "4 days", icon: MapPin },
        ]
      },
      {
        item: "Nike Air Jordan 1 Retro High",
        category: "Fashion > Sneakers",
        originalPrice: 170,
        estimatedValue: 95,
        condition: "Used",
        confidence: 88,
        platforms: [
          { name: "eBay", fee: "10%", audience: "Global", avgSaleTime: "5 days", icon: Globe },
          { name: "Facebook Marketplace", fee: "5%", audience: "Local", avgSaleTime: "4 days", icon: Facebook },
          { name: "OfferUp", fee: "7%", audience: "Local mobile", avgSaleTime: "6 days", icon: MapPin },
        ]
      },
      {
        item: "KitchenAid Stand Mixer Classic",
        category: "Home & Kitchen > Appliances",
        originalPrice: 329,
        estimatedValue: 195,
        condition: "Good",
        confidence: 91,
        platforms: [
          { name: "Facebook Marketplace", fee: "5%", audience: "Local", avgSaleTime: "4 days", icon: Facebook },
          { name: "OfferUp", fee: "7%", audience: "Local mobile", avgSaleTime: "5 days", icon: MapPin },
          { name: "eBay", fee: "10%", audience: "Global", avgSaleTime: "8 days", icon: Globe },
        ]
      }
    ];
    
    const result = mockResults[Math.floor(Math.random() * mockResults.length)];
    setItemData(result);
    setIsAnalyzing(false);
    setCurrentView('results');
  };

  const handleImageCapture = (imageData) => {
    setCapturedImage(imageData);
    analyzeItem(imageData);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleImageCapture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);
    
    const imageData = canvas.toDataURL('image/jpeg');
    handleImageCapture(imageData);
    
    // Stop camera stream
    if (video.srcObject) {
      video.srcObject.getTracks().forEach(track => track.stop());
    }
  };

  const formatPrice = (price) => `$${price.toLocaleString()}`;

  const calculateDonationAmount = () => {
    if (!itemData) return 0;
    return Math.round((itemData.estimatedValue * donationPercentage) / 100);
  };

  const calculateNetProceeds = () => {
    if (!itemData) return 0;
    return itemData.estimatedValue - calculateDonationAmount();
  };

  React.useEffect(() => {
    if (currentView === 'camera') {
      startCamera();
    }
  }, [currentView]);

  if (currentView === 'camera') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col">
        {/* Header */}
        <div className="p-6 text-center relative">
          <h1 className="text-3xl font-bold text-white mb-2">SnapToSell</h1>
          <p className="text-blue-100">AI-powered item identification & selling</p>
        </div>

        {/* Tutorial Overlay */}
        {showTutorial && (
          <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto relative">
              <button
                onClick={() => setShowTutorial(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
              <h3 className="text-xl font-bold text-gray-900 mb-4">How it works</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <p className="text-sm">Take a photo of any item you want to sell</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <p className="text-sm">AI identifies the item and finds market pricing</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-semibold text-sm">3</span>
                  </div>
                  <p className="text-sm">Get recommendations for best selling platforms</p>
                </div>
              </div>
              <button
                onClick={() => setShowTutorial(false)}
                className="w-full bg-blue-600 text-white py-3 rounded-xl mt-6 font-semibold hover:bg-blue-700 transition-colors"
              >
                Got it, let's start!
              </button>
            </div>
          </div>
        )}

        {/* Camera View */}
        <div className="flex-1 px-6 pb-6">
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl h-full relative">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="w-full h-full object-cover"
            />
            <canvas ref={canvasRef} className="hidden" />
            
            {/* Camera overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-4 border-2 border-white/30 rounded-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/60 text-center">
                <Search className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Point camera at item to identify</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-6 flex justify-center space-x-6">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors"
          >
            <Upload className="w-6 h-6" />
          </button>
          
          <button
            onClick={capturePhoto}
            className="bg-white text-blue-600 p-8 rounded-full shadow-xl hover:bg-gray-100 transition-all transform hover:scale-105 animate-pulse"
          >
            <Camera className="w-10 h-10" />
          </button>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="flex justify-around py-3">
            <button className="flex flex-col items-center text-white">
              <Camera className="w-6 h-6 mb-1" />
              <span className="text-xs">Sell</span>
            </button>
            <button 
              onClick={() => setCurrentView('browse')}
              className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
            >
              <Search className="w-6 h-6 mb-1" />
              <span className="text-xs">Browse</span>
            </button>
            <button 
              onClick={() => setCurrentView('listings')}
              className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
            >
              <User className="w-6 h-6 mb-1" />
              <span className="text-xs">My Listings</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'browse') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm p-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search items across all platforms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Categories */}
          <div className="flex space-x-2 mb-4 overflow-x-auto">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Platform Filter */}
          <div className="flex space-x-2 overflow-x-auto">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  platform.id === 'all'
                    ? 'bg-blue-100 text-blue-700'
                    : platform.color === 'purple'
                    ? 'bg-purple-100 text-purple-700'
                    : platform.color === 'yellow'
                    ? 'bg-yellow-100 text-yellow-700'
                    : platform.color === 'green'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {searchQuery ? `Results for "${searchQuery}"` : 'Popular Items'}
            </h2>
            <span className="text-sm text-gray-500">{mockListings.length} items</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {mockListings.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-lg font-bold text-blue-600 mb-1">
                    ${item.price.toLocaleString()}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>{item.location}</span>
                    <span className={`px-2 py-1 rounded-full font-medium ${
                      item.platform === 'SnapToSell' ? 'bg-purple-100 text-purple-700' :
                      item.platform === 'eBay' ? 'bg-yellow-100 text-yellow-700' :
                      item.platform === 'Facebook' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {item.platform}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 ml-1">{item.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">{item.condition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="flex justify-around py-3">
            <button 
              onClick={() => setCurrentView('camera')}
              className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Camera className="w-6 h-6 mb-1" />
              <span className="text-xs">Sell</span>
            </button>
            <button className="flex flex-col items-center text-blue-600">
              <Search className="w-6 h-6 mb-1" />
              <span className="text-xs">Browse</span>
            </button>
            <button 
              onClick={() => setCurrentView('listings')}
              className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors"
            >
              <User className="w-6 h-6 mb-1" />
              <span className="text-xs">My Listings</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'listings') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm p-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Listings</h1>
          <div className="flex space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-600">2 Active</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
              <span className="text-gray-600">1 Sold</span>
            </div>
          </div>
        </div>

        {/* Listings */}
        <div className="p-4">
          <div className="space-y-4">
            {myListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex space-x-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={listing.image} 
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {listing.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        listing.status === 'Active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {listing.status}
                      </span>
                    </div>
                    
                    <p className="text-lg font-bold text-blue-600 mb-2">
                      ${listing.price.toLocaleString()}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className={`px-2 py-1 rounded-full font-medium ${
                        listing.platform === 'SnapToSell' ? 'bg-purple-100 text-purple-700' :
                        listing.platform === 'eBay' ? 'bg-yellow-100 text-yellow-700' :
                        listing.platform === 'Facebook' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {listing.platform}
                      </span>
                      <span>{listing.datePosted}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{listing.views}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          <span>{listing.messages}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {listing.status === 'Active' ? (
                        <>
                          <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            View Messages
                          </button>
                          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                            <Trash2 className="w-4 h-4 text-gray-600" />
                          </button>
                        </>
                      ) : (
                        <div className="flex items-center text-green-600 text-sm font-medium">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Sold {listing.datePosted}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Add New Listing Button */}
          <div className="mt-6">
            <button 
              onClick={() => setCurrentView('camera')}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              List Another Item
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="flex justify-around py-3">
            <button 
              onClick={() => setCurrentView('camera')}
              className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Camera className="w-6 h-6 mb-1" />
              <span className="text-xs">Sell</span>
            </button>
            <button 
              onClick={() => setCurrentView('browse')}
              className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Search className="w-6 h-6 mb-1" />
              <span className="text-xs">Browse</span>
            </button>
            <button className="flex flex-col items-center text-blue-600">
              <User className="w-6 h-6 mb-1" />
              <span className="text-xs">My Listings</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Analyzing your item...</h2>
          <p className="text-blue-100">AI is identifying and pricing your item</p>
        </div>
      </div>
    );
  }

  if (currentView === 'results' && itemData) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => setCurrentView('camera')}
              className="text-blue-600 hover:text-blue-800"
            >
              ← New Scan
            </button>
            <Shield className="w-6 h-6 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{itemData.item}</h1>
          <p className="text-gray-600">{itemData.category}</p>
          <div className="mt-2 flex items-center">
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
              {itemData.confidence}% confident
            </div>
          </div>
        </div>

        {/* Image */}
        {capturedImage && (
          <div className="px-6 py-4">
            <img 
              src={capturedImage} 
              alt="Captured item" 
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>
        )}

        {/* AI Confirmation */}
        <div className="px-6 py-4">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Confirm AI Identification</h3>
            
            {/* Item Details */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">{itemData.item}</h4>
              <p className="text-sm text-gray-600 mb-2">{itemData.description}</p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span>Category: {itemData.category}</span>
                <span>Condition: {itemData.condition}</span>
                <span>AI Confidence: {itemData.confidence}%</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="aiConfirmation"
                checked={aiConfirmed}
                onChange={(e) => setAiConfirmed(e.target.checked)}
                className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <div className="flex-1">
                <label htmlFor="aiConfirmation" className="text-sm text-gray-700 cursor-pointer">
                  <span className="font-medium">Yes, this identification and description are correct</span>
                  <br />
                  <span className="text-xs text-gray-500">
                    Check this box to proceed with pricing and listing options
                  </span>
                </label>
              </div>
            </div>
            {!aiConfirmed && (
              <div className="mt-3 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-200">
                Please confirm the AI identification is correct before proceeding to pricing and listing options.
              </div>
            )}
          </div>
        </div>

        {/* Pricing */}
        {aiConfirmed && (
          <>
            <div className="px-6 py-4">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Pricing Analysis</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Original Retail</p>
                    <p className="text-xl font-bold text-gray-400 line-through">
                      {formatPrice(itemData.originalPrice)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Estimated Value</p>
                    <p className="text-2xl font-bold text-green-600">
                      {formatPrice(itemData.estimatedValue)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick SnapToSell Listing */}
            <div className="px-6 py-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">List on SnapToSell</h3>
                    <p className="text-purple-100 text-sm">Lowest fees, best features</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">3%</p>
                    <p className="text-purple-100 text-xs">fee only</p>
                  </div>
                </div>
                <button className="w-full bg-white text-purple-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  List for {formatPrice(itemData.estimatedValue)} on SnapToSell
                </button>
              </div>
            </div>
          </>
        )}

        {/* Donation Section */}
        {aiConfirmed && (
          <div className="px-6 py-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-center mb-4">
                <Heart className="w-5 h-5 text-pink-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Give Back</h3>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-2">
                  Donate percentage to 501(c)(3) organizations
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={donationPercentage}
                  onChange={(e) => setDonationPercentage(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0%</span>
                  <span className="font-semibold text-pink-600">{donationPercentage}%</span>
                  <span>100%</span>
                </div>
              </div>
              
              {donationPercentage > 0 && (
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Donation</p>
                    <p className="text-lg font-bold text-pink-600">
                      {formatPrice(calculateDonationAmount())}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Your proceeds</p>
                    <p className="text-lg font-bold text-green-600">
                      {formatPrice(calculateNetProceeds())}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Platform Recommendations */}
        {aiConfirmed && (
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold mb-4">Other Platform Options</h2>
            <div className="space-y-3">
              {itemData.platforms.slice(1).map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{platform.name}</h3>
                          <p className="text-sm text-gray-600">{platform.audience}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Fee: {platform.fee}</p>
                        <p className="text-sm text-gray-600">{platform.avgSaleTime}</p>
                      </div>
                    </div>
                    <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      List on {platform.name}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Privacy Notice */}
        <div className="px-6 py-4 pb-8">
          <div className="bg-gray-100 rounded-xl p-4">
            <div className="flex items-center mb-2">
              <Shield className="w-4 h-4 text-green-500 mr-2" />
              <p className="text-sm font-semibold text-gray-900">Privacy Protected</p>
            </div>
            <p className="text-xs text-gray-600">
              Your data is never sold or shared. All processing happens securely and your photos are deleted after analysis.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const SnapToSellAppWithAnalytics = () => {
  return (
    <>
      <SnapToSellApp />
      <Analytics />
    </>
  );
};

export default SnapToSellAppWithAnalytics;