import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Home.css'

// Image imports
import heroImage from '../assets/images/h1.png'
import catDogFoodImg from '../assets/images/cat_dog_food.jpg'
import catCatFoodImg from '../assets/images/cat_cat_food.jpg'
import catTreatsToysImg from '../assets/images/cat_treats_toys.jpg'
import catBedsFurnitureImg from '../assets/images/cat_beds_furniture.jpg'
import catGroomingImg from '../assets/images/cat_grooming.jpg'
import catWellnessImg from '../assets/images/cat_wellness.jpg'

import b1Img from '../assets/images/b1.png'
import b2Img from '../assets/images/b2.png'
import b3Img from '../assets/images/b3.png'
import b4Img from '../assets/images/b4.png'

import a1Img from '../assets/images/a1.png'
import a2Img from '../assets/images/a2.png'
import o1Img from '../assets/images/o1.png'

import s1Img from '../assets/images/s1.jpg'
import s2Img from '../assets/images/s2.jpg'
import s3Img from '../assets/images/s3.jpg'
import s4Img from '../assets/images/s4.png'
import boneImg from '../assets/images/l1.png'
import pawImg from '../assets/images/l2.png'

// Initial Products Data
const PRODUCTS_DATA = [
  {
    id: 'prod-1',
    name: 'Happy Paws Chicken & Rice Dog Food',
    price: 2499,
    originalPrice: 2999,
    rating: 5,
    reviewsCount: 238,
    image: b1Img,
    category: 'Dog Food',
    tag: 'Best Seller',
    tagColor: 'green',
    description: 'Wholesome farm-raised chicken with brown rice, crisp sweet peas, and essential omega-3 fatty acids for optimum canine vitality.'
  },
  {
    id: 'prod-2',
    name: "Whisker's Choice Salmon Recipe Cat Food",
    price: 2199,
    originalPrice: 2650,
    rating: 5,
    reviewsCount: 176,
    image: b2Img,
    category: 'Cat Food',
    tag: 'Vet Favorite',
    tagColor: 'orange',
    description: 'Wild-caught salmon flakes simmered in rich bone broth, specially crafted for silky feline coats and digestive health.'
  },
  {
    id: 'prod-3',
    name: 'PawPlay Plush Dog Toy (With Squeaker)',
    price: 1299,
    originalPrice: 1600,
    rating: 5,
    reviewsCount: 320,
    image: b3Img,
    category: 'Treats & Toys',
    tag: 'Popular',
    tagColor: 'green',
    description: 'Ultra-durable, double-stitched eco-linen fox plush with an engaging internal squeaker that keeps tail-waggers entertained for hours.'
  },
  {
    id: 'prod-4',
    name: 'CloudPaws Pet Bed Ultra Soft & Cozy',
    price: 2999,
    originalPrice: 3800,
    rating: 5,
    reviewsCount: 189,
    image: b4Img,
    category: 'Beds & Furniture',
    tag: 'Customer Pick',
    tagColor: 'orange',
    description: 'Orthopedic circular donut bolster bed with premium high-density sherpa fleece, relieving pet joint pressure for deeper sleep.'
  }
]

// Category Data
const CATEGORIES_DATA = [
  { id: 'cat-1', name: 'Dog Food', image: catDogFoodImg, count: '48 items', color: '#F7EBE8' },
  { id: 'cat-2', name: 'Cat Food', image: catCatFoodImg, count: '36 items', color: '#E8F3EE' },
  { id: 'cat-3', name: 'Treats & Toys', image: catTreatsToysImg, count: '64 items', color: '#FFF5E5' },
  { id: 'cat-4', name: 'Beds & Furniture', image: catBedsFurnitureImg, count: '28 items', color: '#ECEEF3' },
  { id: 'cat-5', name: 'Grooming', image: catGroomingImg, count: '32 items', color: '#F5ECEB' },
  { id: 'cat-6', name: 'Health & Wellness', image: catWellnessImg, count: '40 items', color: '#EAF5EC' }
]

// Seasonal Collections Data
const SEASONAL_COLLECTIONS = [
  {
    id: 'season-1',
    title: 'Fall Essentials',
    subtitle: 'Cozy gear for cooler days',
    image: s1Img,
    category: 'Dog Food'
  },
  {
    id: 'season-2',
    title: 'Holiday Collection',
    subtitle: 'Make the season special',
    image: s2Img,
    category: 'Treats & Toys'
  },
  {
    id: 'season-3',
    title: 'Winter Warmers',
    subtitle: 'Soft, stylish & snug',
    image: s3Img,
    category: 'Beds & Furniture'
  },
  {
    id: 'season-4',
    title: 'Outdoor Adventures',
    subtitle: 'Gear for every journey',
    image: s4Img,
    category: 'Treats & Toys'
  }
]

// Trust Features Data (Continuous Marquee Ribbon)
const TRUST_FEATURES = [
  {
    id: 'feat-1',
    title: 'Free Shipping',
    desc: 'on orders over ₹999',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    )
  },
  {
    id: 'feat-2',
    title: 'Secure Payments',
    desc: '100% safe & encrypted',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    )
  },
  {
    id: 'feat-3',
    title: 'Easy Returns',
    desc: 'Hassle-free within 30 days',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )
  },
  {
    id: 'feat-4',
    title: 'Trusted by Pet Lovers',
    desc: '50,000+ happy customers',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    )
  }
]

export default function Home() {
  // Cart state
  const [cart, setCart] = useState([
    {
      id: 'prod-1',
      name: 'Happy Paws Chicken & Rice Dog Food',
      price: 2499,
      image: b1Img,
      quantity: 1
    }
  ])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [wishlist, setWishlist] = useState(['prod-2'])
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)
  const [accountModalOpen, setAccountModalOpen] = useState(false)

  // Calculate cart counts and totals
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const freeShippingThreshold = 999
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal)
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100)

  // Show toast notification
  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => {
      setToastMessage(null)
    }, 3200)
  }

  // Cart operations
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id)
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
          }
        ]
      }
    })
    showToast(`Added "${product.name}" to your cart! 🐾`)
  }

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  const removeFromCart = (id) => {
    const itemToRemove = cart.find((i) => i.id === id)
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    if (itemToRemove) {
      showToast(`Removed "${itemToRemove.name}" from cart.`)
    }
  }

  // Wishlist toggle
  const toggleWishlist = (productId, e) => {
    e.stopPropagation()
    setWishlist((prev) => {
      const exists = prev.includes(productId)
      if (exists) {
        showToast('Removed from your wishlist.')
        return prev.filter((id) => id !== productId)
      } else {
        showToast('Added to your wishlist! ❤️')
        return [...prev, productId]
      }
    })
  }

  // Handle newsletter
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setNewsletterSubmitted(true)
      showToast('Welcome to the pack! Check your inbox for 15% off. 🎁')
      setTimeout(() => {
        setNewsletterEmail('')
      }, 2000)
    }
  }

  // Search filtering
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isCartOpen || isMobileMenuOpen || quickViewProduct || accountModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isCartOpen, isMobileMenuOpen, quickViewProduct, accountModalOpen])

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    })
  }, [])

  return (
    <div className="zuvipaw-app">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="zuvipaw-toast">
          <span className="toast-paw">🐾</span>
          <span className="toast-text">{toastMessage}</span>
          <button
            className="toast-close"
            onClick={() => setToastMessage(null)}
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      )}

      {/* SECTION 1: HEADER & NAVIGATION */}
      <header className="zuvipaw-header" id="top-header">
        {/* Simple Announcement Bar */}
        <div className="announcement-bar">
          <div className="container announcement-content">
            <p className="announcement-text">
              ✨ Free Shipping on Orders Over ₹999 &nbsp;•&nbsp; Happy Pets, Happier Lives
            </p>
          </div>
        </div>

        {/* Clean Unified Navbar */}
        <div className="main-navbar">
          <div className="container nav-container">
            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            {/* Logo */}
            <a href="#top-header" className="zuvipaw-logo">
              <span className="paw-symbol" role="img" aria-label="Paw">🐾</span>
              <div className="logo-text-group">
                <span className="brand-name">Zuvipaw</span>
               
              </div>
            </a>

            {/* Navigation Links - Center */}
            <nav className="nav-links-center" aria-label="Main Navigation">
              <ul className="nav-menu">
                <li className="nav-item">
                  <a href="#top-header" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#shop-section" className="nav-link">Shop</a>
                </li>
                <li className="nav-item">
                  <a
                    href="#shop-section"
                    className="nav-link"
                    onClick={() => setSelectedCategory('Dog Food')}
                  >
                    Dogs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#shop-section"
                    className="nav-link"
                    onClick={() => setSelectedCategory('Cat Food')}
                  >
                    Cats
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#categories-section"
                    className="nav-link"
                    onClick={() => setSelectedCategory('Treats & Toys')}
                  >
                    Small Pets
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#promos-section" className="nav-link nav-deals">
                    Deals
                    <span className="deal-pill">HOT</span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Right Side Actions: Search, Account, Cart */}
            <div className="header-actions">
              {/* Search Bar */}
              <div className="header-search-bar">
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const shopSection = document.getElementById('shop-section')
                      if (shopSection) shopSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="search-input"
                  id="main-search-input"
                />
                {searchQuery && (
                  <button
                    className="search-clear-btn"
                    onClick={() => setSearchQuery('')}
                    title="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Account Button */}
              <button
                className="action-btn account-btn"
                onClick={() => setAccountModalOpen(true)}
                title="Account"
                aria-label="Open Account"
              >
                <div className="action-icon-circle">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </button>

              {/* Cart Button */}
              <button
                className="action-btn cart-btn"
                onClick={() => setIsCartOpen(true)}
                title="Shopping Cart"
                aria-label="Open Cart"
              >
                <div className="action-icon-circle cart-circle">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  {totalCartItems > 0 && (
                    <span className="cart-badge-count">{totalCartItems}</span>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide Drawer Menu */}
      <div
        className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="mobile-menu-panel">
          <div className="mobile-menu-header">
            <div className="zuvipaw-logo small">
              <span className="paw-symbol">🐾</span>
              <span className="brand-name">Zuvipaw</span>
            </div>
            <button
              className="close-drawer-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="mobile-search-wrap">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mobile-search-input"
            />
          </div>

          <ul className="mobile-nav-list">
            <li>
              <a href="#top-header" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#shop-section" onClick={() => { setSelectedCategory('All'); setIsMobileMenuOpen(false) }}>Shop All</a>
            </li>
            <li>
              <a href="#shop-section" onClick={() => { setSelectedCategory('Dog Food'); setIsMobileMenuOpen(false) }}>Dogs</a>
            </li>
            <li>
              <a href="#shop-section" onClick={() => { setSelectedCategory('Cat Food'); setIsMobileMenuOpen(false) }}>Cats</a>
            </li>
            <li>
              <a href="#categories-section" onClick={() => { setSelectedCategory('Treats & Toys'); setIsMobileMenuOpen(false) }}>Small Pets</a>
            </li>
            <li>
              <a href="#promos-section" onClick={() => setIsMobileMenuOpen(false)} className="mobile-deals-link">
                Deals & Specials <span className="deal-pill">SALE</span>
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-free-shipping">
              <span className="shipping-icon">🚚</span>
              <span>Free Shipping on all orders ₹999+</span>
            </div>
            <button
              className="mobile-cart-btn"
              onClick={() => {
                setIsMobileMenuOpen(false)
                setIsCartOpen(true)
              }}
            >
              View Cart ({totalCartItems} items) — ₹{subtotal.toLocaleString('en-IN')}
            </button>
          </div>
        </div>
      </div>

      <main>
        {/* SECTION 2: HERO SECTION */}
        <section className="hero-section" id="hero-section">
          {/* Full Size Background Image */}
          <div className="hero-bg-wrapper">
            <img
              src={heroImage}
              alt="Golden retriever and tabby cat resting together on a cozy blanket"
              className="hero-bg-full-img"
              loading="eager"
            />
            <div className="hero-bg-overlay"></div>
          </div>

          <div className="container hero-container">
            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-badge" data-aos="fade-down" data-aos-delay="100">
                <span className="badge-sparkle">🐾</span>
                <span className="badge-text">LOVE. CARE. SHOP.</span>
              </div>

              <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
                Everything Your <br className="hero-title-break" />
                <span className="hero-title-accent">Pet Needs</span>
              </h1>

              <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
                Premium products for happier, healthier pets.
              </p>

              <div className="hero-cta-group" data-aos="fade-up" data-aos-delay="400">
                <a
                  href="#shop-section"
                  className="btn-peach-hero"
                  id="hero-shop-now-btn"
                >
                  <span>Shop Now</span>
                  <span className="btn-arrow">→</span>
                </a>
              </div>

              {/* Three Small Benefits */}
              <div className="hero-benefits-row" data-aos="fade-up" data-aos-delay="500">
                <div className="hero-benefit-item">
                  <div className="benefit-icon-circle nutrition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7.002 7.002 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7.002 7.002 0 0 1 11 3.07V3a1 1 0 0 1 2 0v.07A7.002 7.002 0 0 1 13 16.93z"></path>
                    </svg>
                  </div>
                  <span className="benefit-label">Better Nutrition</span>
                </div>

                <div className="hero-benefit-item">
                  <div className="benefit-icon-circle pets">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <span className="benefit-label">Happier Pets</span>
                </div>

                <div className="hero-benefit-item">
                  <div className="benefit-icon-circle brands">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <span className="benefit-label">Trusted Brands</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SHOP BY CATEGORY */}
        <section className="categories-section" id="categories-section">
          {/* Floating Bone Biscuit Decor in Right Corner */}
          <div className="floating-bone-decor right-corner" aria-hidden="true" title="Yummy treat!">
            <img
              src={boneImg}
              alt="Decorative Floating Dog Bone"
              className="floating-bone-img"
            />
          </div>

          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-pill">BROWSE BY PET NEEDS</span>
              <h2 className="section-title">Shop by Category</h2>
              <p className="section-description">
                Tailored collections crafted with utmost care for every tail-wag, purr, and playful moment.
              </p>
            </div>

            <div className="categories-grid">
              {CATEGORIES_DATA.map((cat, index) => (
                <div
                  key={cat.id}
                  className={`category-card ${selectedCategory === cat.name ? 'category-active' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  onClick={() => {
                    setSelectedCategory(cat.name === selectedCategory ? 'All' : cat.name)
                    const shopSection = document.getElementById('shop-section')
                    if (shopSection) {
                      shopSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Shop ${cat.name}`}
                >
                  <div className="category-circle-wrapper" style={{ backgroundColor: cat.color }}>
                    <div className="category-image-container">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="category-image"
                        loading="lazy"
                      />
                    </div>
                    <span className="category-hover-overlay">
                      <span className="overlay-arrow">→</span>
                    </span>
                  </div>
                  <h3 className="category-name">{cat.name}</h3>
                  <span className="category-count">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: BEST-SELLING PRODUCTS */}
        <section className="products-section" id="shop-section">
          {/* Floating Paw Print Decor in Left Corner */}
          <div className="floating-paw-decor left-corner" aria-hidden="true" title="Pets Make Life Brighter 🐾">
            <img
              src={pawImg}
              alt="Decorative Floating Paw Print"
              className="floating-paw-img"
            />
          </div>

          <div className="container">
            <div className="best-sellers-header" data-aos="fade-up">
              <h2 className="best-sellers-title">Best Selling Products</h2>
              <a
                href="#shop-section"
                className="best-sellers-view-all"
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
              >
                <span>View All</span>
                <span className="view-all-arrow">→</span>
              </a>
            </div>

            {/* Product Cards Grid */}
            <div className="best-sellers-grid">
              {filteredProducts.length === 0 ? (
                <div className="no-products-found">
                  <span className="no-products-icon">🔍</span>
                  <h3>No products found</h3>
                  <p>Try resetting the category filter or clearing your search term.</p>
                  <button
                    className="btn-reset-filter"
                    onClick={() => { setSelectedCategory('All'); setSearchQuery('') }}
                  >
                    View All Products
                  </button>
                </div>
              ) : (
                filteredProducts.map((product, index) => (
                  <article key={product.id} className="best-seller-card" data-aos="fade-up" data-aos-delay={index * 100}>
                    {/* Product Media & Image */}
                    <div
                      className="best-seller-img-box"
                      onClick={() => setQuickViewProduct(product)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View details for ${product.name}`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="best-seller-img"
                        loading="lazy"
                      />
                    </div>

                    {/* Product Content Details */}
                    <div className="best-seller-details">
                      <h3
                        className="best-seller-name"
                        title={product.name}
                        onClick={() => setQuickViewProduct(product)}
                      >
                        {product.name}
                      </h3>

                      {/* 5-Star Rating & Review Count */}
                      <div className="best-seller-rating-row">
                        <div className="best-seller-stars" aria-label="5 out of 5 stars">
                          ★★★★★
                        </div>
                        <span className="best-seller-reviews-count">
                          ({product.reviewsCount})
                        </span>
                      </div>

                      {/* Price & Add to Cart Circle Button */}
                      <div className="best-seller-bottom-row">
                        <span className="best-seller-price">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>

                        <button
                          className="best-seller-cart-btn"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAddToCart(product)
                          }}
                          id={`add-to-cart-${product.id}`}
                          aria-label={`Add ${product.name} to cart`}
                          title="Add to cart"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>

        {/* SECTION: SEASONAL COLLECTION (MATCHING REFERENCE UI) */}
        <section className="seasonal-section" id="seasonal-section" aria-label="Seasonal Collection">
          <div className="container">
            <div className="seasonal-header" data-aos="fade-up">
              <h2 className="seasonal-heading">Seasonal Collection</h2>
              <a
                href="#shop-section"
                className="seasonal-view-all"
                onClick={() => {
                  setSelectedCategory('All')
                  showToast('Showing all seasonal collections 🐾')
                }}
              >
                <span>View All</span>
              </a>
            </div>

            <div className="seasonal-grid">
              {SEASONAL_COLLECTIONS.map((item, index) => (
                <article
                  key={item.id}
                  className="seasonal-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  onClick={() => {
                    setSelectedCategory(item.category)
                    showToast(`Viewing ${item.title} collection ✨`)
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${item.title}`}
                >
                  <div className="seasonal-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="seasonal-card-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="seasonal-card-content">
                    <div className="seasonal-card-top-row">
                      <h3 className="seasonal-card-title">{item.title}</h3>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="seasonal-chevron"
                        aria-hidden="true"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                    <p className="seasonal-card-subtitle">{item.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PROMOTIONAL BANNERS */}
        <section className="promos-section" id="promos-section">
          <div className="container">
            <div className="promos-grid">
              {/* Left Promo Card: Light Peach Background with Script Title and a1.png */}
              <div className="promo-card promo-card-peach" data-aos="fade-right" data-aos-delay="100">
                <div className="promo-card-content">
                  <h3 className="promo-title promo-title-script">
                    Play More<br />Wag More
                  </h3>
                  <p className="promo-text">
                    Explore our toy collection for endless fun!
                  </p>
                  <a
                    href="#shop-section"
                    className="promo-btn btn-promo-peach"
                    onClick={() => setSelectedCategory('Treats & Toys')}
                  >
                    <span>Shop Toys</span>
                    <span className="promo-arrow">→</span>
                  </a>
                </div>

                <div className="promo-image-wrapper">
                  <img
                    src={a1Img}
                    alt="Happy puppy with ball"
                    className="promo-cutout-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Promo Card: Light Sky Blue Background with a2.png */}
              <div className="promo-card promo-card-blue" data-aos="fade-left" data-aos-delay="200">
                <div className="promo-card-content">
                  <h3 className="promo-title promo-title-heading">
                    Healthy Pets<br />Happier Tomorrows
                  </h3>
                  <p className="promo-text">
                    Save up to 30% on select wellness products.
                  </p>
                  <a
                    href="#categories-section"
                    className="promo-btn btn-promo-blue"
                    onClick={() => setSelectedCategory('Health & Wellness')}
                  >
                    <span>Shop Wellness</span>
                    <span className="promo-arrow">→</span>
                  </a>
                </div>

                <div className="promo-image-wrapper">
                  <img
                    src={a2Img}
                    alt="Cat with wellness supplements"
                    className="promo-cutout-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FIRST DOG WALK DISCOUNT PROMO BANNER */}
        <section className="dog-walk-promo-section" aria-label="First Dog Walk Discount">
          <div className="container">
            <div className="dog-walk-banner">
              {/* Meadow Grass Accents */}
              <div className="banner-meadow-bg" aria-hidden="true"></div>

              {/* Left Column: Running Dog (from assets/images/o1.png) */}
              <div className="banner-dog-col" data-aos="fade-right" data-aos-delay="100">
                <img
                  src={o1Img}
                  alt="Joyful dog running on green grass"
                  className="banner-dog-img"
                  loading="lazy"
                />
              </div>

              {/* Offer Text Column */}
              <div className="banner-offer-col" data-aos="fade-up" data-aos-delay="150">
                <span className="banner-tag-script">New Here?</span>
                <h3 className="banner-offer-heading">Get 20% OFF</h3>
                <span className="banner-sub-script">Your First Dog Walk!</span>
              </div>

              {/* Paw Icon Center Decoration */}
              <div className="banner-paw-col" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#FDDDA2">
                  <circle cx="7.5" cy="8" r="2.2" />
                  <circle cx="16.5" cy="8" r="2.2" />
                  <circle cx="12" cy="5.2" r="2.2" />
                  <path d="M12 11c-2.7 0-4.9 2-4.9 4.6 0 1.5.8 2.8 2.1 3.4 1 .5 2 .5 2.8.5s1.8 0 2.8-.5c1.3-.6 2.1-1.9 2.1-3.4 0-2.6-2.2-4.6-4.9-4.6z" />
                </svg>
              </div>

              {/* Action Column: Voucher Code & CTA Button */}
              <div className="banner-action-col" data-aos="fade-up" data-aos-delay="250">
                <span className="coupon-label">Use code:</span>
                <button
                  type="button"
                  className="coupon-dashed-box"
                  onClick={() => {
                    navigator.clipboard?.writeText('FIRSTWALK')
                    showToast('Coupon "FIRSTWALK" copied! 20% discount applied 🐾')
                  }}
                  title="Click to copy code"
                  aria-label="Copy promo code FIRSTWALK"
                >
                  <span className="coupon-code-text">FIRSTWALK</span>
                </button>
                <button
                  type="button"
                  className="btn-book-walk"
                  onClick={() => showToast('Walk booking appointment requested! 🐕')}
                >
                  <span>Book a Walk Today</span>
                  <span className="btn-walk-arrow" aria-hidden="true">→</span>
                </button>
              </div>

              {/* Right Column: Handwritten Quote */}
              <div className="banner-quote-col" aria-label="Small Walks Big Happiness" data-aos="fade-left" data-aos-delay="300">
                <span className="quote-line-1">Small</span>
                <span className="quote-line-2">- Walks</span>
                <span className="quote-line-3">♡ — Big</span>
                <span className="quote-line-4">Happiness</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Features Marquee Bar */}
        <section className="trust-features-section trust-marquee-section" aria-label="Store Benefits">
          <div className="trust-marquee-track">
            {[1, 2].map((groupNum) => (
              <div key={`marquee-group-${groupNum}`} className="trust-marquee-group" aria-hidden={groupNum > 1}>
                {[...TRUST_FEATURES, ...TRUST_FEATURES].map((item, idx) => (
                  <div key={`${groupNum}-${item.id}-${idx}`} className="trust-item">
                    <div className="trust-icon-box">{item.icon}</div>
                    <div className="trust-details">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* SECTION 6: FOOTER (SIMPLE, CLEAN & LIGHT) */}
      <footer className="zuvipaw-footer" id="main-footer">
        <div className="container footer-content-wrap">
          {/* Brand Info */}
          <div className="footer-brand-side" data-aos="fade-up" data-aos-delay="100">
            <div className="zuvipaw-logo">
              <span className="paw-symbol" role="img" aria-label="Paw">🐾</span>
              <div className="logo-text-group">
                <span className="brand-name">Zuvipaw</span>
                <span className="brand-tagline">For Happier Paws, Every Day.</span>
              </div>
            </div>
            <p className="footer-bio">
              Thoughtfully chosen essentials for happier pets and the families who love them.
            </p>
            <div className="footer-social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="YouTube"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="footer-links-group" data-aos="fade-up" data-aos-delay="200">
            <div className="footer-nav-col">
              <h4 className="footer-title">Shop</h4>
              <ul className="footer-list">
                <li><a href="#shop-section" onClick={() => setSelectedCategory('Dog Food')}>Dog Food</a></li>
                <li><a href="#shop-section" onClick={() => setSelectedCategory('Cat Food')}>Cat Food</a></li>
                <li><a href="#shop-section" onClick={() => setSelectedCategory('Treats & Toys')}>Treats & Toys</a></li>
                <li><a href="#shop-section" onClick={() => setSelectedCategory('Beds & Furniture')}>Beds & Mats</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-title">Help & Info</h4>
              <ul className="footer-list">
                <li><a href="#top-header" onClick={() => showToast('Email: support@zuvipaw.com')}>Contact Us</a></li>
                <li><a href="#top-header" onClick={() => showToast('Help Center open 24/7')}>FAQs</a></li>
                <li><a href="#top-header" onClick={() => showToast('Free Shipping over ₹999')}>Shipping Policy</a></li>
                <li><a href="#top-header" onClick={() => showToast('Hassle-free 30-day returns')}>Returns</a></li>
              </ul>
            </div>
          </div>

          {/* Clean Simple Newsletter Column */}
          <div className="footer-newsletter-col" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-title">Stay in Touch</h4>
            <p className="footer-subtext">Join for pet wellness tips and member discounts.</p>
            <form className="footer-simple-form" onSubmit={handleNewsletterSubmit}>
              <div className="simple-input-box">
                <input
                  type="email"
                  placeholder="Your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="simple-email-input"
                />
                <button type="submit" className="simple-submit-btn">
                  {newsletterSubmitted ? 'Joined!' : 'Subscribe'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-simple">
          <div className="container footer-bottom-flex">
            <p className="copyright-simple">
              © 2026 Zuvipaw. All rights reserved.
            </p>
            <div className="legal-simple">
              <a href="#top-header">Privacy Policy</a>
              <span>•</span>
              <a href="#top-header">Terms of Service</a>
              <span>•</span>
              <a href="#top-header">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

      {/* SLIDE-OVER SHOPPING CART DRAWER */}
      <div className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}>
        <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="cart-drawer-header">
            <div className="cart-title-row">
              <span className="cart-drawer-paw">🐾</span>
              <h3 className="cart-drawer-title">Your Pet Cart ({totalCartItems})</h3>
            </div>
            <button
              className="cart-close-btn"
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
            >
              ✕
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="shipping-progress-banner">
            <div className="shipping-text-row">
              {amountToFreeShipping > 0 ? (
                <span>Add <strong>₹{amountToFreeShipping.toLocaleString('en-IN')}</strong> more to get <strong>FREE SHIPPING!</strong></span>
              ) : (
                <span className="free-shipping-unlocked">🎉 You unlocked <strong>FREE SHIPPING!</strong></span>
              )}
            </div>
            <div className="shipping-progress-track">
              <div
                className="shipping-progress-bar"
                style={{ width: `${freeShippingProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="cart-items-body">
            {cart.length === 0 ? (
              <div className="empty-cart-state">
                <span className="empty-cart-icon">🛒</span>
                <h4>Your cart is empty</h4>
                <p>Spoil your companion with our wholesome organic foods and plush play toys!</p>
                <button
                  className="btn-start-shopping"
                  onClick={() => {
                    setIsCartOpen(false)
                    const shop = document.getElementById('shop-section')
                    if (shop) shop.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <ul className="cart-items-list">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item-row">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <div className="cart-item-price-line">
                        <span className="cart-unit-price">₹{item.price.toLocaleString('en-IN')} each</span>
                      </div>
                      <div className="cart-qty-row">
                        <div className="qty-stepper">
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            –
                          </button>
                          <span className="qty-number">{item.quantity}</span>
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="cart-remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-total">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Cart Drawer Footer */}
          {cart.length > 0 && (
            <div className="cart-drawer-footer">
              <div className="cart-summary-line subtotal-line">
                <span>Subtotal</span>
                <strong>₹{subtotal.toLocaleString('en-IN')}</strong>
              </div>
              <div className="cart-summary-line shipping-line">
                <span>Estimated Shipping</span>
                <span>{amountToFreeShipping === 0 ? 'FREE' : '₹99'}</span>
              </div>
              <div className="cart-summary-line total-line">
                <span>Total</span>
                <span className="cart-grand-total">
                  ₹{(subtotal + (amountToFreeShipping === 0 ? 0 : 99)).toLocaleString('en-IN')}
                </span>
              </div>

              <button
                className="btn-checkout"
                onClick={() => {
                  showToast('Checkout simulated! Thank you for trusting Zuvipaw. 🐶')
                  setIsCartOpen(false)
                }}
              >
                Proceed to Checkout →
              </button>
              <p className="cart-checkout-guarantee">
                🔒 Safe 256-bit SSL encrypted checkout
              </p>
            </div>
          )}
        </div>
      </div>

      {/* QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div className="quickview-overlay" onClick={() => setQuickViewProduct(null)}>
          <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="quickview-close-btn"
              onClick={() => setQuickViewProduct(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="quickview-content-grid">
              <div className="quickview-image-wrap">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="quickview-img"
                />
              </div>
              <div className="quickview-info">
                <span className="quickview-badge">{quickViewProduct.tag}</span>
                <h3 className="quickview-title">{quickViewProduct.name}</h3>
                <div className="quickview-rating-row">
                  <span className="star-icon">★</span>
                  <strong>{quickViewProduct.rating}</strong>
                  <span>({quickViewProduct.reviewsCount} customer reviews)</span>
                </div>
                <div className="quickview-price-row">
                  <span className="quickview-price">₹{quickViewProduct.price.toLocaleString('en-IN')}</span>
                  <span className="quickview-orig">₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}</span>
                </div>
                <p className="quickview-desc">{quickViewProduct.description}</p>
                <div className="quickview-specs">
                  <div>✓ 100% Certified Organic & Non-GMO</div>
                  <div>✓ Vet Recommended & Batch Tested</div>
                  <div>✓ Free 2-3 Day Delivery on Orders ₹999+</div>
                </div>
                <div className="quickview-actions">
                  <button
                    className="quickview-add-btn"
                    onClick={() => {
                      handleAddToCart(quickViewProduct)
                      setQuickViewProduct(null)
                    }}
                  >
                    Add to Cart — ₹{quickViewProduct.price.toLocaleString('en-IN')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ACCOUNT MODAL */}
      {accountModalOpen && (
        <div className="quickview-overlay" onClick={() => setAccountModalOpen(false)}>
          <div className="account-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="quickview-close-btn"
              onClick={() => setAccountModalOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="account-modal-header">
              <span className="paw-icon-large">🐾</span>
              <h3>Welcome to Zuvipaw</h3>
              <p>Sign in to manage your pet profiles, subscriptions, and reward points.</p>
            </div>
            <div className="account-modal-body">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@petparent.com" className="modal-input" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" className="modal-input" />
              </div>
              <button
                className="btn-modal-primary"
                onClick={() => {
                  showToast('Welcome back, Pet Parent! 🐕')
                  setAccountModalOpen(false)
                }}
              >
                Sign In to Zuvipaw
              </button>
              <div className="modal-divider">or</div>
              <button
                className="btn-modal-secondary"
                onClick={() => {
                  showToast('New account created! Welcome to the family. 🐾')
                  setAccountModalOpen(false)
                }}
              >
                Create a Free Pet Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
