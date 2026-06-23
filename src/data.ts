import { ProductCategory, CustomerReview } from "./types";
import festiveHamperImg from "./assets/images/gg_festive_hamper_1782197606201.jpg";
import cookiesBrowniesImg from "./assets/images/gg_cookies_brownies_1782197621622.jpg";
import brownieBitesImg from "./assets/images/gg_brownie_bites_1782208513761.jpg";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "hampers",
    title: "Festive Hampers",
    description: "Curated gift collections housed in rustic jute baskets, tied with terracotta ribbons and dotted with twinkling details. Perfectly styled for celebration drop days.",
    image: festiveHamperImg,
    highlight: "Best Seller for Holi & Lohri",
    items: ["Signature Thandai-Spiced Granola", "Scented Soy Wax Candle", "Indulgence Cookies", "Glass Jar of Spiced Cocoa"]
  },
  {
    id: "cookies",
    title: "Cookies & Brownies",
    description: "Decadent, cookie-jar favorites made with premium organic flours, dark origin chocolates, and hand-sprinkled sea salt flakes. Crispy edges, ultra-gooey centers.",
    image: cookiesBrowniesImg,
    highlight: "Gooey & Small-Batch",
    items: ["Sea Salt Double Chocolate Chunk", "Brown Butter Pistachio Cookie", "Fudgy Terracotta Brownies", "Cardamom White Chocolate Blondie"]
  },
  {
    id: "snacks",
    title: "Brownie Bites",
    description: "Fudgy, gooey, and dangerously good. Bite-sized squares of pure chocolate decadence made with origin dark chocolate, melted butter, and hand-sprinkled sea salt flakes.",
    image: brownieBitesImg,
    highlight: "Fudgy, Gooey & Dangerously Good",
    items: ["Signature Fudge Bites", "Salted Caramel Brownie Cups", "Walnut Chunk Bites", "Sesame Jaggery Brownie Drops"]
  },
  {
    id: "cakes",
    title: "Celebration Cakes",
    description: "Intimate, single-tier micro-cakes that prioritize deep flavor and minimal, rustic floral aesthetics over artificial frosting. Baked with custom-milled flour.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    highlight: "By Pre-order Only",
    items: ["Dark Chocolate Ganache & Rose", "Spiced Carrot Cake with Orange Zest", "Coconut & Roasted Almond Naked Cake"]
  },
  {
    id: "specials",
    title: "Seasonal Specials",
    description: "Limited-run bakes capture the turning cycles of Indian weather. Think mango custard tarts in high summer or warming winter spices.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    highlight: "Changes Every Quarter",
    items: ["Alphanso Mango Puff Galette", "Winter Spiced Hot Honey Nut Cake", "Lohri Sesame Jaggery Brittle Shortbread"]
  }
];

export const STORIES = [
  {
    tag: "The Seed",
    title: "Born from an obsessive love for baking.",
    desc: "GG's Bakehouse started as a passion project — late nights, warm ovens, and the obsession with getting every bite just right. We're a creator-run home bakery from Delhi, and everything we make is handcrafted in small batches, packed with intention, and made to be gifted or devoured."
  },
  {
    tag: "The Method",
    title: "No preservatives, no shortcuts.",
    desc: "We use heirloom grains, pure unrefined jaggery, local dairy from selected micro-farms, and cold-pressed cold-matured oils. Each cookie is shaped with love, each hamper packed individually with jute rope and local flower petals."
  },
  {
    tag: "The Spirit",
    title: "Made for sharing. Or keeping.",
    desc: "We are not a mass-market operation. We release micro-drops — strictly limited batches during festive intervals. This keeps our quality pristine and our bakes intimately special. When a drop goes live, it's a celebration."
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    name: "Ananya S.",
    location: "Delivered in New Delhi",
    text: "The Holi hamper was the most thoughtful gift my family received this season. The thandai-spiced brownie bites are spiritual. I literally had to hide them from my guests!",
    tags: ["Warmth in a Box", "Elegant Gifting"]
  },
  {
    id: "rev-2",
    name: "Priya M.",
    location: "Delivered in Delhi NCR",
    text: "Most bakeries make everything way too sweet, but GG's balances salt, spice and premium cocoa perfectly. The chocolate chunk cookies are next-level.",
    tags: ["Balanced Flavors", "Best Chocolate"]
  },
  {
    id: "rev-3",
    name: "Rohan K.",
    location: "Delivered in New Delhi",
    text: "The Brownie Bites became our daily family obsession. It feels like high-end luxury chocolate grazing but completely handcrafted. Incredible gifting experience!",
    tags: ["Gooey & Dangerously Good", "Aesthetic Packaging"]
  }
];

export const FAQS = [
  {
    q: "How do your drops work?",
    a: "Because we function out of a pristine artisan kitchen with a small team, we bake in pre-scheduled batches. Every few weeks, we announce a drop. Members of our priority waitlist receive an SMS and email invitation with a private link to order before it's announced publicly. Once sold out, the kitchen closes until the next drop."
  },
  {
    q: "Do you ship pan-India?",
    a: "Yes! Our Hampers, Cookies, Brownie Bites, and Seasonal Specials are carefully sealed and shipped in custom-padded boxes with fast shipping across India (usually arriving within 24-48 hours). Celebration Cakes, however, are exclusively available for local hand-delivery within Delhi."
  },
  {
    q: "Can I customize corporate or festive hampers?",
    a: "Absolutely! We love crafting custom layouts for festivals like Holi, weddings, baby showers, or corporate thank-yous. We design custom sleeve options, personalized handwritten tags, and customizable product assortments. Contact us directly through waitlist priority email."
  },
  {
    q: "Are there refined-sugar-free or organic options?",
    a: "Yes! We deeply care about mindful indulgence. Most of our custom treats use organic flour, ragi, amaranth, or organic seeds. We sweeten extensively with organic date powder, jaggery, and raw wildflower honey instead of white table sugars."
  }
];
