export const COMPANY = {
  name: "Atchaya Gold Company",
  tagline: "Sell Your Gold with Confidence & Maximum Value",
  subtext: "Instant Payment. Transparent Testing. Trusted Across Tamil Nadu.",
  email: "contact@atchayagoldcompany.com",
  phone: "8883031000",
  whatsapp: "918883031000",
} as const;

export const BRANCHES = [
  {
    city: "Panruti",
    slug: "panruti",
    address: "Main Road, Panruti, Tamil Nadu",
    phone: "8883031000",
    mapUrl: "https://maps.google.com/?q=Panruti+Tamil+Nadu",
    lat: 11.7755,
    lng: 79.5527,
  },
  {
    city: "Cuddalore",
    slug: "cuddalore",
    address: "Main Road, Cuddalore, Tamil Nadu",
    phone: "8883031000",
    mapUrl: "https://maps.google.com/?q=Cuddalore+Tamil+Nadu",
    lat: 11.7480,
    lng: 79.7714,
  },
  {
    city: "Neyveli",
    slug: "neyveli",
    address: "Main Road, Neyveli, Tamil Nadu",
    phone: "8883031000",
    mapUrl: "https://maps.google.com/?q=Neyveli+Tamil+Nadu",
    lat: 11.5975,
    lng: 79.4861,
  },
  {
    city: "Jayakondam",
    slug: "jayakondam",
    address: "Main Road, Jayakondam, Tamil Nadu",
    phone: "8883031000",
    mapUrl: "https://maps.google.com/?q=Jayankondam+Tamil+Nadu",
    lat: 11.2453,
    lng: 79.3369,
  },
  {
    city: "Thanjavur",
    slug: "thanjavur",
    address: "Main Road, Thanjavur, Tamil Nadu",
    phone: "8883031000",
    mapUrl: "https://maps.google.com/?q=Thanjavur+Tamil+Nadu",
    lat: 10.7870,
    lng: 79.1378,
  },
  {
    city: "Villupuram",
    slug: "villupuram",
    address: "Main Road, Villupuram, Tamil Nadu",
    phone: "8883031000",
    mapUrl: "https://maps.google.com/?q=Villupuram+Tamil+Nadu",
    lat: 11.9396,
    lng: 79.4930,
  },
  {
    city: "Virudhachalam",
    slug: "virudhachalam",
    address: "Main Road, Virudhachalam, Tamil Nadu",
    phone: "8883031000",
    mapUrl: "https://maps.google.com/?q=Virudhachalam+Tamil+Nadu",
    lat: 11.5153,
    lng: 79.3200,
  },
  {
    city: "Ulundurpet",
    slug: "ulundurpet",
    address: "Main Road, Ulundurpet, Tamil Nadu",
    phone: "8883031000",
    mapUrl: "https://maps.google.com/?q=Ulundurpet+Tamil+Nadu",
    lat: 11.7086,
    lng: 79.3135,
  },
] as const;

export const PURITY_FACTORS = [
  { label: "24K", factor: 1.0 },
  { label: "22K", factor: 0.9167 },
  { label: "18K", factor: 0.75 },
] as const;

export const TRUST_BADGES = [
  { icon: "Shield", title: "Government Registered", description: "Fully licensed & registered company" },
  { icon: "Lock", title: "Insured Transactions", description: "Every transaction is fully insured" },
  { icon: "Award", title: "Certified Testing", description: "Advanced XRF purity testing machine" },
  { icon: "Zap", title: "Instant Payment", description: "Immediate bank transfer on the spot" },
  { icon: "Eye", title: "No Hidden Charges", description: "100% transparent pricing always" },
  { icon: "ShieldCheck", title: "Secure Process", description: "End-to-end safe & confidential" },
] as const;

export const PROCESS_STEPS = [
  { step: 1, title: "Bring Your Gold", description: "Visit any branch or book doorstep pickup", icon: "Package" },
  { step: 2, title: "Purity Testing", description: "Certified XRF machine analysis in front of you", icon: "FlaskConical" },
  { step: 3, title: "Live Rate Calculation", description: "Fair pricing based on real-time market rates", icon: "TrendingUp" },
  { step: 4, title: "Instant Payment", description: "Receive payment immediately via bank transfer", icon: "Banknote" },
] as const;

export const FAQS = [
  {
    question: "How do I sell my gold at Atchaya Gold Company?",
    answer: "Simply visit any of our 8 branches across Tamil Nadu or book a free doorstep pickup. Our experts will test your gold purity using certified XRF machines and offer you the best market rate with instant payment.",
  },
  {
    question: "Do you buy all types of gold?",
    answer: "Yes, we buy all types of gold including jewelry, coins, bars, broken ornaments, and old gold. We accept 24K, 22K, 18K and other purity levels.",
  },
  {
    question: "How is the gold rate determined?",
    answer: "We use real-time live market rates from international gold markets. Our pricing is completely transparent with no hidden deductions.",
  },
  {
    question: "How quickly will I receive payment?",
    answer: "Payment is instant. Once the purity is tested and you agree to the price, the amount is immediately transferred to your bank account.",
  },
  {
    question: "Is the testing process transparent?",
    answer: "Absolutely. We use advanced XRF (X-Ray Fluorescence) machines for purity testing, done right in front of you. No acid testing, no damage to your gold.",
  },
  {
    question: "Do you offer doorstep gold buying service?",
    answer: "Yes! Book a free doorstep appointment and our certified expert will visit your home with portable testing equipment for a hassle-free experience.",
  },
  {
    question: "Are there any charges or deductions?",
    answer: "No hidden charges whatsoever. The price we quote is the price you receive. We believe in 100% transparency.",
  },
  {
    question: "Which areas do you serve?",
    answer: "We have branches in Panruti, Cuddalore, Neyveli, Jayakondam, Thanjavur, Villupuram, Virudhachalam, and Ulundurpet. Doorstep service is available across Tamil Nadu.",
  },
] as const;
