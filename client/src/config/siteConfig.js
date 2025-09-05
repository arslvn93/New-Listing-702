/**
 * Site Configuration
 * This file contains all configurable content for the website
 * Last updated: 2025-09-05T21:20:05.896Z
 */

// contactInfo configuration
export const contactInfo = {
  agent: {
    name: "Arslan Ahmed",
    photo: "https://app.salesgenius.co/api/user-images/6e5f208c-ba60-4fa0-8e9a-abaabd25ded0?v=49b5bb0651a74a8f76b17f07911294534cc1945bf9f041389da6a5f3660dda8d",
    phone: "4166554850",
    email: "arslan@salesgenius.co",
    company: "Executive Homes Realty Inc",
    license: "RECO #84397152",
    repo: "New-Listing-702"
  },
  social: {
    instagram: "https://www.instagram.com/executivehomesrealtyinc/",
    facebook: "https://www.facebook.com/ExecutiveHomesRealty",
    twitter: "https://twitter.com/executivehomesrealtyinc",
    linkedin: "https://linkedin.com/company/executivehomesrealtyinc"
  }
};

// galleryImages configuration
export const galleryImages = [
  {
    id: 1,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004589506-2912-80 John St-01.jpg",
    alt: "The immediate brightness and depth of the main space—you see the larger island, the clean sightlines, and the floor-to-ceiling windows all at once at 80 John St #2912",
    category: "interior"
  },
  {
    id: 2,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004602781-2912-80 John St-04.jpg",
    alt: "The immediate brightness and depth of the main space—you see the larger island, the clean sightlines, and the floor-to-ceiling windows all at once at 80 John St #2912",
    category: "kitchen"
  },
  {
    id: 3,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004609515-2912-80 John St-14.jpg",
    alt: "The immediate brightness and depth of the main space—you see the larger island, the clean sightlines, and the floor-to-ceiling windows all at once at 80 John St #2912",
    category: "bedroom"
  },
  {
    id: 4,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004627198-2912-80 John St-20.jpg",
    alt: "The immediate brightness and depth of the main space—you see the larger island, the clean sightlines, and the floor-to-ceiling windows all at once at 80 John St #2912",
    category: "bathroom"
  },
  {
    id: 5,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004643105-2912-80 John St-11.jpg",
    alt: "The immediate brightness and depth of the main space—you see the larger island, the clean sightlines, and the floor-to-ceiling windows all at once at 80 John St #2912",
    category: "exterior"
  }
];

// heroVideo configuration
export const heroVideo = {
  url: "https://tours.openhousemedia.ca/sites/80-john-st-2912-toronto-on-m5v-3x4-15850296/branded",
  type: "video/mp4",
  autoplay: true,
  loop: true,
  muted: true,
  playsInline: true
};

// homeShowcaseSections configuration  
export const homeShowcaseSections = [
  {
    id: "section1",
    title: "2 Bedrooms",
    description: "The immediate brightness and depth of the main space—you see the larger island, the clean sightlines, and the floor-to-ceiling windows all at once. It feels bigger than the square footage.",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004589506-2912-80 John St-01.jpg"
  },
  {
    id: "section2",
    title: "2 Bathrooms",
    description: "",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004602781-2912-80 John St-04.jpg"
  },
  {
    id: "section3",
    title: "1249 SqFt",
    description: "",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004609515-2912-80 John St-14.jpg"
  },
  {
    id: "section4",
    title: "$$1,495,000",
    description: "Bathroom tiling is floor-to-ceiling on all walls, which looks luxe and improves durability/moisture protection.",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004627198-2912-80 John St-20.jpg"
  }
];

// neighborhood configuration
export const neighborhood = {
  name: "Toronto",
  city: "Toronto",
  description: "Toronto's premier destination for culture, dining, and urban living.",
  highlights: [
    "Steps to theaters, dining, and entertainment venues",
    "Direct access to PATH underground walkway", 
    "TTC subway and streetcar connections",
    "Walk to financial district and shopping",
    "Vibrant urban lifestyle with excellent walk score"
  ]
};

// neighborhoodAmenities configuration
export const neighborhoodAmenities = [
  {
    id: 1,
    name: "Local Grocery Store",
    distance: "0.2 miles",
    category: "shopping",
    iconName: "ShoppingBag"
  },
  {
    id: 2,
    name: "Nearby Park",
    distance: "0.1 miles", 
    category: "recreation",
    iconName: "Leaf"
  },
  {
    id: 3,
    name: "Public School",
    distance: "0.6 miles",
    category: "education", 
    iconName: "School"
  },
  {
    id: 4,
    name: "Fine Dining",
    distance: "0.2 miles",
    category: "dining",
    iconName: "Wine"
  },
  {
    id: 5,
    name: "Casual Dining",
    distance: "0.4 miles",
    category: "dining",
    iconName: "Utensils"
  },
  {
    id: 6,
    name: "Transit Station",
    distance: "0.4 miles",
    category: "transportation",
    iconName: "Train"
  }
];

// neighborhoodStats configuration
export const neighborhoodStats = [
  {
    id: 1,
    title: "Walk Score",
    value: "95/100",
    caption: "Walker's Paradise",
    iconName: "BadgeCheck",
    color: "bg-green-500"
  },
  {
    id: 2,
    title: "Transit Score", 
    value: "94/100",
    caption: "Excellent Transit",
    iconName: "Compass",
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "School Rating",
    value: "8/10", 
    caption: "Great Schools",
    iconName: "School",
    color: "bg-indigo-500"
  },
  {
    id: 4,
    title: "Commute Time",
    value: "8 min",
    caption: "To Financial District",
    iconName: "Clock", 
    color: "bg-amber-500"
  }
];

// openHouseBenefits configuration
export const openHouseBenefits = [
  {
    id: 1,
    title: "Detailed Floor Plans",
    description: "Complete architectural layouts showing the 2 bedroom, 2 bathroom configuration with precise measurements.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Recent Neighborhood Sales",
    description: "Comparative market analysis of recent Condo Apartment sales in Toronto.",
    iconName: "BarChart2"
  },
  {
    id: 3,
    title: "School District Information", 
    description: "Boards: Toronto District School Board (TDSB) & Toronto Catholic District School Board (TCDSB).",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Property Inspection Report",
    description: "Professional assessment highlighting recent upgrades and maintenance history.",
    iconName: "CheckSquare"
  },
  {
    id: 5,
    title: "Financing Options Guide",
    description: "Current mortgage rates and financing programs available for this price range.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Neighborhood Amenities Map",
    description: "Interactive guide to nearby amenities and transportation options.",
    iconName: "Map"
  }
];

// openHouseDetails configuration
export const openHouseDetails = {
  nextDate: "Saturday, Saturday, September 6, 2025",
  time: "1:00 PM - 4:00 PM",
  host: "Arslan Ahmed",
  phone: "4166554850",
  email: "arslan@salesgenius.co",
  ctaText: "RSVP for Open House",
  virtualTourAvailable: true,
  virtualTourUrl: "https://tours.openhousemedia.ca/sites/80-john-st-2912-toronto-on-m5v-3x4-15850296/branded"
};

// packageItems configuration
export const packageItems = [
  {
    id: 1,
    title: "Detailed Floor Plans",
    description: "Complete architectural layouts showing the 2 bedroom, 2 bathroom configuration with precise measurements.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Recent Neighborhood Sales",
    description: "Comparative market analysis of recent Condo Apartment sales in Toronto.",
    iconName: "BarChart2"
  },
  {
    id: 3,
    title: "School District Information", 
    description: "Boards: Toronto District School Board (TDSB) & Toronto Catholic District School Board (TCDSB).",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Property Inspection Report",
    description: "Professional assessment highlighting recent upgrades and maintenance history.",
    iconName: "CheckSquare"
  },
  {
    id: 5,
    title: "Financing Options Guide",
    description: "Current mortgage rates and financing programs available for this price range.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Neighborhood Amenities Map",
    description: "Interactive guide to nearby amenities and transportation options.",
    iconName: "Map"
  }
];

// property configuration
export const property = {
  name: "80 John St #2912",
  address: {
    street: "80 John St #2912",
    city: "Toronto",
    state: "Ontario",
    zip: "M5V 3X4",
    country: "Canada"
  },
  price: "$1,495,000",
  beds: 2,
  baths: 2,
  sqft: 1249,
  lotSize: "30 x 120 ft",
  yearBuilt: 2010,
  type: "Condo Apartment",
  status: "For Sale",
  description: "That first look into a sun-washed living/dining framed by full-height glass—no bulkheads, just an uninterrupted wall of light.",
  shortDescription: "2 BEDS + 2 BATHS in Toronto",
  longDescription: "rue floor-to-ceiling windows (no bulkheads): maximum light, bigger views, dramatic feel.  $90K (2021) renovation: custom kitchen with enlarged island (added storage + built-in power) and both bathrooms fully retiled floor-to-ceiling with new vanities/fixtures.  Smart 2-Bed + Den, 2-Bath “Loren” layout (1249 sf) + 143 sf outdoor space: great flow and real room sizes.  Southeast exposure: bright, consistent natural light without the late-day harshness.  Parking + owned locker: turnkey downtown convenience.",
  mainFeatures: [],
  propertyType: "Condo Apartment",
  heroImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004589506-2912-80 John St-01.jpg",
  heroCaption: "Floor-to-Ceiling Windows + Renovated Kitchen + Outdoor Space = Your Perfect Luxury Condo Just Listed!"
};

// propertyFeatures configuration
export const propertyFeatures = [
  "Island storage on the seating side + integrated outlet (perfect for laptops, small appliances, and entertaining).",
  "Bathroom tiling is floor-to-ceiling on all walls, which looks luxe and improves durability/moisture protection.",
  "Den that actually works (quiet office/guest spot without stealing from the main living area).",
  "Consistent renovation spec across kitchen and baths—materials, finishes, and hardware match, which elevates the whole feel.",
  "Practical outdoor space (143 sf)—usable for dining/seating rather than a token balcony.",
  "Full-height glazing in the living spaces (many “Loren” suites have bulkheads/knee walls that cut the glass and the view).",
  "Truly turnkey: the kitchen and both baths were done together to a cohesive spec—no piecemeal upgrades required.",
  "Function-first island upgrade: larger footprint, cabinet storage on the seating side, and a built-in outlet (rare but incredibly useful).",
  "Well-balanced light + privacy: SE outlook gives airy daylight and skyline feel without being overly exposed to afternoon heat/glare."
];

// siteBranding configuration
export const siteBranding = {
  logoUrl: "/logo.svg",
  logoAlt: "80 John St #2912",
  favicon: "/favicon.ico",
  colors: {
    primary: "#D9A566",
    primaryDark: "#8B6839", 
    primaryLight: "#E6C38C",
    dark: "#111111",
    light: "#FFFFFF"
  },
  heroImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004589506-2912-80 John St-01.jpg",
  footer: {
    copyrightText: "© 2024 80 John St #2912. All rights reserved.",
    disclaimer: "This website is for informational purposes only. Details are subject to change."
  }
};

// siteMetadata configuration
export const siteMetadata = {
  title: "80 John St #2912 | Condo Apartment | Toronto",
  description: "Floor-to-Ceiling Windows + Renovated Kitchen + Outdoor Space = Your Perfect Luxury Condo Just Listed!",
  keywords: "condo apartment, Toronto real estate, 2 bedroom, 2 bathroom, $1,495,000",
  ogImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004589506-2912-80 John St-01.jpg",
  ogType: "website",
  twitterCard: "summary_large_image",
  canonical: "https://80johnst#2912.com"
};

// testimonials configuration
export const testimonials = [
  {
    id: 1,
    name: "David Chen",
    role: "Recent Homebuyer", 
    content: "Arslan Ahmed provided exceptional service and found us exactly what we were looking for in Toronto.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 2,
    name: "Jennifer Liu",
    role: "Interior Designer",
    content: "The attention to detail and quality of finishes in this property is outstanding. Arslan Ahmed presented every detail clearly.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Mark Williams", 
    role: "Neighborhood Resident",
    content: "Living in this area, you appreciate the convenience and lifestyle. Arslan Ahmed knows the market incredibly well.",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg"
  }
];