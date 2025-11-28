// Static data for front-end only site (no database)

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    city: "Hinjewadi",
    rating: 5,
    review_text: "Excellent service! The technician was professional and fixed my AC cooling issue quickly. Highly recommended."
  },
  {
    id: 2,
    name: "Priya Sharma",
    city: "Wakad",
    rating: 5,
    review_text: "Very satisfied with the deep cleaning service. AC is working like new. Fair pricing and on-time service."
  },
  {
    id: 3,
    name: "Amit Deshmukh",
    city: "Kothrud",
    rating: 5,
    review_text: "Professional team, transparent pricing. They explained everything clearly before starting the work."
  }
];

export const faqItems = [
  {
    id: 1,
    category: "Service",
    question: "How long does AC servicing take?",
    answer: "Basic servicing typically takes 45-60 minutes. Deep cleaning may take 1.5-2 hours depending on the AC condition.",
    sort_order: 1
  },
  {
    id: 2,
    category: "Service",
    question: "Do you provide warranty on service?",
    answer: "Yes, we provide 30-day service warranty on all our work. If any issue occurs due to our service, we will fix it free of cost.",
    sort_order: 2
  },
  {
    id: 3,
    category: "Booking",
    question: "Do you offer emergency or same-day service?",
    answer: "Yes, we offer same-day service based on availability. Contact us on WhatsApp or call for emergency AC repairs.",
    sort_order: 3
  },
  {
    id: 4,
    category: "Coverage",
    question: "What areas do you cover?",
    answer: "We serve Pune and Pimpri Chinchwad regions including Hinjewadi, Wakad, Kothrud, Akurdi, and many more areas. Check our Service Areas page for full list.",
    sort_order: 4
  },
  {
    id: 5,
    category: "Booking",
    question: "How can I book or reschedule a service?",
    answer: "You can book via our website contact form, call us directly, or message us on WhatsApp. For rescheduling, just call or WhatsApp us.",
    sort_order: 5
  },
  {
    id: 6,
    category: "Payment",
    question: "What payment modes do you accept?",
    answer: "We accept cash, UPI, bank transfer, and all major payment methods. Payment is required after service completion.",
    sort_order: 6
  },
  {
    id: 7,
    category: "Service",
    question: "What is included in basic AC servicing?",
    answer: "Basic servicing includes filter cleaning, indoor unit cleaning, outdoor unit cleaning, gas pressure check, and general inspection.",
    sort_order: 7
  },
  {
    id: 8,
    category: "Pricing",
    question: "Are the prices on the website final?",
    answer: "Prices shown are starting prices. Final price is confirmed after inspection based on AC condition and any additional parts needed. No work is done without your approval.",
    sort_order: 8
  },
  {
    id: 9,
    category: "Service",
    question: "Do you service all AC brands?",
    answer: "Yes, we service all brands including LG, Samsung, Voltas, Daikin, Hitachi, Carrier, Blue Star, and more.",
    sort_order: 9
  },
  {
    id: 10,
    category: "AMC",
    question: "What is the benefit of AMC?",
    answer: "AMC provides regular preventive maintenance, priority support, reduced breakdown frequency, and discounted rates on repairs. It extends your AC's life and ensures optimal performance.",
    sort_order: 10
  }
];

export const serviceAreas = [
  // Pune areas
  { id: 1, city: "Pune", area_name: "Hinjewadi", is_active: true },
  { id: 2, city: "Pune", area_name: "Wakad", is_active: true },
  { id: 3, city: "Pune", area_name: "Kothrud", is_active: true },
  { id: 4, city: "Pune", area_name: "Kalyani Nagar", is_active: true },
  { id: 5, city: "Pune", area_name: "Viman Nagar", is_active: true },
  { id: 6, city: "Pune", area_name: "Koregaon Park", is_active: true },
  { id: 7, city: "Pune", area_name: "Baner", is_active: true },
  { id: 8, city: "Pune", area_name: "Aundh", is_active: true },
  { id: 9, city: "Pune", area_name: "Shivajinagar", is_active: true },
  { id: 10, city: "Pune", area_name: "Deccan", is_active: true },
  { id: 11, city: "Pune", area_name: "Khadki", is_active: true },
  { id: 12, city: "Pune", area_name: "Pashan", is_active: true },
  { id: 13, city: "Pune", area_name: "Bavdhan", is_active: true },
  { id: 14, city: "Pune", area_name: "Warje", is_active: true },
  { id: 15, city: "Pune", area_name: "Karve Nagar", is_active: true },
  
  // PCMC areas
  { id: 16, city: "Pimpri Chinchwad", area_name: "Akurdi", is_active: true },
  { id: 17, city: "Pimpri Chinchwad", area_name: "Pimpri", is_active: true },
  { id: 18, city: "Pimpri Chinchwad", area_name: "Chinchwad", is_active: true },
  { id: 19, city: "Pimpri Chinchwad", area_name: "Nigdi", is_active: true },
  { id: 20, city: "Pimpri Chinchwad", area_name: "Bhosari", is_active: true },
  { id: 21, city: "Pimpri Chinchwad", area_name: "Pimple Saudagar", is_active: true },
  { id: 22, city: "Pimpri Chinchwad", area_name: "Pimple Nilakh", is_active: true },
  { id: 23, city: "Pimpri Chinchwad", area_name: "Rahatani", is_active: true },
  { id: 24, city: "Pimpri Chinchwad", area_name: "Sangvi", is_active: true },
  { id: 25, city: "Pimpri Chinchwad", area_name: "Thergaon", is_active: true },
  { id: 26, city: "Pimpri Chinchwad", area_name: "Kasarwadi", is_active: true },
  { id: 27, city: "Pimpri Chinchwad", area_name: "Dapodi", is_active: true }
];

export const galleryImages = [
  {
    id: "1",
    title: "Split AC Installation",
    image_url: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&auto=format&fit=crop",
    description: "Professional split AC installation service"
  },
  {
    id: "2",
    title: "AC Deep Cleaning",
    image_url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop",
    description: "Thorough AC deep cleaning service"
  },
  {
    id: "3",
    title: "AC Repair Service",
    image_url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop",
    description: "Expert AC repair and troubleshooting"
  },
  {
    id: "4",
    title: "Commercial AC Service",
    image_url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop",
    description: "Office and commercial AC maintenance"
  },
  {
    id: "5",
    title: "AC Gas Refilling",
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    description: "Professional gas refilling service"
  },
  {
    id: "6",
    title: "Window AC Service",
    image_url: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&auto=format&fit=crop",
    description: "Window AC repair and maintenance"
  }
];
