
// Mock products data
export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  currency: string;
  discountPercentage?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  sizeVariants: SizeVariant[];
  keyIngredients: string[];
  howToUse: string[];
  benefits: string[];
}

export interface SizeVariant {
  id: string;
  name: string;
  size: string;
  price: number;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
}

// Mock product data
export const featuredProduct: Product = {
  id: "prod_001",
  name: "Luminous Glow Facial Cream",
  description: "Hydrating & Brightening Formula",
  fullDescription: "Our bestselling Luminous Glow Facial Cream is a luxurious moisturizer that delivers intense hydration while improving skin's radiance. Formulated with hyaluronic acid, vitamin C, and botanical extracts, it helps to brighten, plump and restore the skin's natural moisture barrier.",
  price: 48.00,
  currency: "$",
  discountPercentage: 0,
  rating: 4.8,
  reviewCount: 124,
  images: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=987&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570194065650-d99fb4a8e9ae?q=80&w=987&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1610705267928-1b9382137345?q=80&w=987&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=987&auto=format&fit=crop",
  ],
  sizeVariants: [
    {
      id: "size_001",
      name: "Travel Size",
      size: "15ml",
      price: 24.00
    },
    {
      id: "size_002",
      name: "Regular",
      size: "50ml",
      price: 48.00
    },
    {
      id: "size_003",
      name: "Large",
      size: "100ml",
      price: 78.00
    }
  ],
  keyIngredients: [
    "Hyaluronic Acid: Hydrates and plumps the skin",
    "Vitamin C: Brightens and protects against environmental damage",
    "Niacinamide: Reduces appearance of pores and improves skin texture",
    "Rose Extract: Soothes and calms irritated skin"
  ],
  howToUse: [
    "Apply to clean, dry skin morning and evening",
    "Gently massage a pea-sized amount onto face and neck using upward strokes",
    "For best results, use after serum and before SPF (morning) or facial oil (evening)"
  ],
  benefits: [
    "Intensely hydrates for up to 72 hours",
    "Visibly brightens dull complexion",
    "Reduces the appearance of fine lines",
    "Suitable for all skin types, including sensitive skin"
  ]
};

// Mock reviews
export const productReviews: Review[] = [
  {
    id: "rev_001",
    user: "Emily L.",
    rating: 5,
    date: "April 12, 2025",
    comment: "This cream has completely transformed my skin! I've been using it for about 3 months now and I've noticed such a difference in my skin's texture and brightness. My dark spots are fading and my skin feels so much more hydrated.",
    helpful: 42
  },
  {
    id: "rev_002",
    user: "Sarah K.",
    rating: 4,
    date: "March 23, 2025",
    comment: "I love the texture of this cream, it's lightweight but very hydrating. The scent is subtle and pleasant. I took off one star because the packaging is a bit difficult to use when the product is running low.",
    helpful: 18
  },
  {
    id: "rev_003",
    user: "Michael T.",
    rating: 5,
    date: "March 15, 2025",
    comment: "As someone with sensitive skin, finding products that work without causing irritation is challenging. This cream is perfect - soothing, hydrating, and it gives my skin a healthy glow without any redness or reaction.",
    helpful: 27
  },
  {
    id: "rev_004",
    user: "Jessica R.",
    rating: 5,
    date: "February 28, 2025",
    comment: "Worth every penny! My skin looks so much healthier and more radiant since I started using this. I've received so many compliments on my complexion lately.",
    helpful: 31
  },
];

// Related products
export const relatedProducts: Product[] = [
  {
    id: "prod_002",
    name: "Clarifying Facial Serum",
    description: "Pore-Minimizing Formula",
    fullDescription: "A powerful serum that targets enlarged pores and improves skin texture.",
    price: 38.00,
    currency: "$",
    rating: 4.6,
    reviewCount: 98,
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=987&auto=format&fit=crop"
    ],
    sizeVariants: [
      {
        id: "size_001",
        name: "Regular",
        size: "30ml",
        price: 38.00
      }
    ],
    keyIngredients: [],
    howToUse: [],
    benefits: []
  },
  {
    id: "prod_003",
    name: "Overnight Renewal Mask",
    description: "Rejuvenating Treatment",
    fullDescription: "Wake up to renewed, radiant skin with this nourishing overnight mask.",
    price: 52.00,
    currency: "$",
    discountPercentage: 15,
    rating: 4.9,
    reviewCount: 75,
    images: [
      "https://images.unsplash.com/photo-1601049676869-702ea24cfd76?q=80&w=987&auto=format&fit=crop"
    ],
    sizeVariants: [
      {
        id: "size_001",
        name: "Regular",
        size: "75ml",
        price: 52.00
      }
    ],
    keyIngredients: [],
    howToUse: [],
    benefits: []
  },
  {
    id: "prod_004",
    name: "Vitamin C Eye Cream",
    description: "Brightening & De-puffing",
    fullDescription: "Reduce dark circles and puffiness with this antioxidant-rich eye cream.",
    price: 42.00,
    currency: "$",
    rating: 4.7,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1611765083444-a3ce30f1c885?q=80&w=987&auto=format&fit=crop"
    ],
    sizeVariants: [
      {
        id: "size_001",
        name: "Regular",
        size: "15ml",
        price: 42.00
      }
    ],
    keyIngredients: [],
    howToUse: [],
    benefits: []
  },
  {
    id: "prod_005",
    name: "Gentle Exfoliating Scrub",
    description: "For All Skin Types",
    fullDescription: "Remove dead skin cells and reveal smoother, more radiant skin.",
    price: 34.00,
    currency: "$",
    rating: 4.5,
    reviewCount: 87,
    images: [
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=987&auto=format&fit=crop"
    ],
    sizeVariants: [
      {
        id: "size_001",
        name: "Regular",
        size: "100ml",
        price: 34.00
      }
    ],
    keyIngredients: [],
    howToUse: [],
    benefits: []
  }
];
