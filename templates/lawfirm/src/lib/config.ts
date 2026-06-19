import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Amaro Law Firm",
    tagline: "Justice For Your Injury Claim",
    phone: "(713) 677-2439",
    phoneHref: "tel:+17136772439",
    email: "info@amarolawfirm.com",
    address: "2000 Bering Dr Suite 200",
    city: "Houston",
    serviceAreas: ["Sugar Land", "Houston", "Pasadena", "Pearland", "The Woodlands", "Galveston"],
    license: "State Bar of Texas",
    since: "2004",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "navy",
    niche: "lawfirm",
  },

  services: [
    { icon: "shield-check", title: "Personal Injury", desc: "We represent victims of various accidents, ensuring they receive fair compensation for their injuries.", urgent: false },
    { icon: "heart", title: "Wrongful Death", desc: "Our firm provides compassionate and aggressive representation for families who have lost loved ones due to negligence.", urgent: false },
    { icon: "home", title: "Pedestrian Accidents", desc: "We fight for the rights of pedestrians injured by negligent drivers, securing compensation for medical bills and suffering.", urgent: false },
    { icon: "truck", title: "18-Wheeler Accidents", desc: "Our experienced attorneys handle complex cases involving commercial truck accidents, holding responsible parties accountable.", urgent: false },
    { icon: "home", title: "Car Accidents", desc: "We help car accident victims navigate the legal process to recover damages for injuries, vehicle repairs, and lost wages.", urgent: false },
    { icon: "home", title: "Motorcycle Accidents", desc: "Motorcycle riders often face severe injuries; we advocate for their rights to ensure they receive full and just compensation.", urgent: false }
  ],

  testimonials: [
    { name: "MARINA SERRANO", location: "Houston, TX", stars: 5, text: "I highly recommend Amaro Law Firm for all your personal injury and truck wreck attorneys needs. They are the biggest help, and keep you informed all the way through the process! I am so satisfied with my overall experience and the compensation I received after my accident last year." },
    { name: "KELSEY MILLER", location: "Sugar Land, TX", stars: 5, text: "The lawyers at Amaro Law Firm fight hard everyday for you and your case. They answer any questions you have and they do an amazing job at making sure you are taken care of. As soon as I handed my car accident case over to them there was no doubt in my mind that I was in good hands and would get a great outcome." },
    { name: "RYAN SARGENT", location: "Pasadena, TX", stars: 5, text: "I highly recommend the Amaro Law firm. They have top notch lawyers and get big results. I’ve personally met James Amaro and he is passionate about his clients and has a lot of experience with wrongful death cases, trucking accidents, and car accidents. They secured a significant settlement for my family." }
  ],

  trustBadges: [
    "20+ Years Experience", "Free Case Review", "No Fee Unless We Win", "Available 24/7/365", "Client-Focused Representation"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 20, label: "Yrs Experience", suffix: "+", decimals: 0 },
    { value: 100, label: "Million Recovered", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Available 24/7/365", desc: "Our team is always ready to assist you, day or night, every day of the year." },
    { icon: "dollar-sign", title: "No Fee Unless We Win", desc: "You pay no legal fees or case costs unless we secure financial recovery for you." },
    { icon: "award", title: "20+ Years Experience", desc: "Benefit from over two decades of dedicated experience in personal injury law." },
    { icon: "thumbs-up", title: "100% Free Case Review", desc: "Get a comprehensive evaluation of your case at no cost or obligation." },
    { icon: "phone", title: "Client-Focused Approach", desc: "We prioritize your needs, providing personalized attention and clear communication." },
    { icon: "briefcase", title: "Aggressive Representation", desc: "Our lawyers fight tirelessly to protect your rights and maximize your compensation." }
  ],

  formServiceOptions: ["Personal Injury", "Wrongful Death", "Pedestrian Accidents", "18-Wheeler Accidents", "Car Accidents", "Motorcycle Accidents"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!