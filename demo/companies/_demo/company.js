/* ==========================================================================
   COMPANY FILE — the ONLY file that changes per HVAC company.
   Everything else (design, layout, animations) lives in index.html.

   Rules:
   - Leave a field as "" or null to use the smart default.
   - Only use facts found on the company's website / Google profile.
   - Photos: leave "" to use Flight Sites stock photos. To use the company's
     own photos, download them into this folder and write e.g.
     "companies/<slug>/hero.jpg".
   ========================================================================== */
window.COMPANY = {
  // ---- Identity ----------------------------------------------------------
  name: "Summit Air",                        // Short name used in headlines
  legalName: "Summit Air Heating & Cooling", // Full name for footer
  logo: "companies/_demo/logo.png",         // "" = clean wordmark of the name
  logoIcon: "",                              // optional square emblem shown next to the name (when there's no good full logo)
  brandColor: "#0b6bcb",                     // Their main brand color (auto-adjusted for readability)

  // ---- Contact -----------------------------------------------------------
  phone: "(303) 555-0142",
  email: "hello@summitair.example",
  address: "1450 Wazee St, Denver, CO 80202",
  city: "Denver",
  state: "CO",
  hours: "Mon–Sat, 7am–7pm",
  emergency247: true,                        // true = shows 24/7 emergency messaging
  license: "Licensed & insured · Lic. #HVAC-00000",
  licensedInsured: true,                     // true ONLY if their site says licensed/insured → hero badge, FAQ, footer
  upfrontPricing: true,                      // true ONLY if their site claims upfront/flat/transparent pricing → hero badge
  services: ["AC repair", "Furnace repair", "Heat pumps", "Installation", "Maintenance", "Duct cleaning", "Water heaters", "Indoor air quality", "Thermostats"], // what they fix (chips above the fold)
  trustPoints: ["Family-owned"],               // verified trust claims (hero trust row)
  sameDay: true,                               // ONLY if they claim same-day
  freeEstimates: true,                         // ONLY if they claim free estimates

  // ---- Trust -------------------------------------------------------------
  foundedYear: 1998,
  rating: 4.9,                               // Google rating
  reviewCount: 1284,                         // Number of Google reviews
  brands: ["Carrier", "Trane", "Lennox", "Rheem"], // Brands they install (optional)

  // ---- Hero (optional overrides) ----------------------------------------
  headline: "",                              // real companies: "Line one.|Line two." in their voice, max 14 chars/line
  subheadline: "",                           // real companies: 1–2 sentences in their voice ("" = generic default)

  // ---- Offers ------------------------------------------------------------
  financing: { enabled: true, monthlyFrom: 89 },   // enabled:false hides financing
  plan: { name: "Comfort Club", price: "$15/mo" }, // maintenance plan, or null
  guarantee: "100% satisfaction guarantee",

  // ---- Where they work ---------------------------------------------------
  serviceAreas: ["Denver", "Aurora", "Lakewood", "Littleton", "Englewood", "Arvada", "Westminster", "Centennial", "Highlands Ranch", "Wheat Ridge"],

  // ---- Reviews (real Google reviews, 3–6 of them) ------------------------
  reviews: [
    { name: "Sarah M.", town: "Lakewood", text: "Our furnace died on the coldest night of the year. They had someone here in under two hours, explained everything, and the price was exactly what they quoted. Unreal service." },
    { name: "David K.", town: "Aurora", text: "Replaced our 20-year-old AC. The crew wore shoe covers, cleaned up better than they found it, and the new system is whisper quiet. Our upstairs is finally cool." },
    { name: "Priya R.", town: "Denver", text: "Booked online at 9pm, tech was here at 8am the next morning. He texted when he was on the way and showed me photos of the problem. This is how every company should work." },
    { name: "Mike & Jenna T.", town: "Littleton", text: "Third year on their maintenance plan. They catch small stuff before it becomes a big bill. Friendly, on time, and never pushy." },
    { name: "Carlos V.", town: "Arvada", text: "Got three quotes for a new heat pump. They weren't the cheapest but they were the only ones who actually measured the house. Worth every penny." }
  ],

  // ---- Photos ("" = stock) -----------------------------------------------
  heroPosition: "",  // optional focal point for the hero photo, e.g. "50% 30%"
  photos: {
    hero: "",        // REQUIRED for real companies: their own best photo (van, team, techs at work)
    technician: "",  // Their tech or team, smiling
    equipment: "",   // Outdoor unit / install
    thermostat: "",  // Thermostat or maintenance
    home: "",        // Home exterior (used full-width at the bottom)
    interior: ""     // Bright interior
  },

  // ---- FAQs (optional; "" or [] = smart defaults) ------------------------
  faqs: []
};
