export interface CityService {
  name: string;
  href: string;
  desc: string;
}

export interface CityFAQ {
  q: string;
  a: string;
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  county: string;
  distanceFromCeres: string;
  heroPhrases: string[];
  heroDesc: string;
  intro: string;
  services: CityService[];
  neighborhoods: string[];
  permitInfo: { office: string; note: string };
  whyUs: string;
  faq: CityFAQ[];
  metaTitle: string;
  metaDesc: string;
}

export const cities: CityData[] = [
  {
    slug: 'modesto',
    name: 'Modesto',
    state: 'CA',
    county: 'Stanislaus County',
    distanceFromCeres: '10 miles',
    heroPhrases: ['ADU Construction', 'Residential Framing', 'Room Additions', 'Licensed & Insured'],
    heroDesc: 'C Hernandez Construction serves Modesto homeowners with licensed framing, ADU construction, room additions, roofing, and remodeling. Free estimates — call (209) 241-3765.',
    intro: 'Modesto is one of the fastest-growing cities in the Central Valley, and with that growth comes rising demand for ADUs, room additions, and residential remodels. C Hernandez Construction has been serving Modesto homeowners for years. We\'re based in nearby Ceres, which means we\'re on-site fast and know Stanislaus County\'s building department requirements inside and out.',
    services: [
      { name: 'ADU Construction', href: '/services/adu', desc: 'Detached, attached, and garage conversion ADUs fully permitted in Modesto.' },
      { name: 'Structural Framing', href: '/services/framing', desc: 'Platform framing for new homes, additions, and two-story projects.' },
      { name: 'Room Additions', href: '/services/additions', desc: 'Bedroom, family room, and second-story additions tied into your existing structure.' },
      { name: 'Roof Shingles', href: '/services/roofing', desc: 'Full re-roofs and new shingle installation for Modesto residential properties.' },
      { name: 'Drywall & Painting', href: '/services/drywall', desc: 'Hang, tape, texture and interior paint for ADUs and remodels.' },
      { name: 'General Contractor', href: '/services/general-contractor', desc: 'Full project management — permits, framing, and trade coordination.' },
    ],
    neighborhoods: ['Creekwood', 'Village One', 'Dry Creek', 'Airport District', 'West Side', 'Salida (unincorporated)', 'Briggsmore', 'Sylvan'],
    permitInfo: {
      office: 'City of Modesto Community & Economic Development',
      note: 'ADU applications in Modesto go through the Planning Division. Standard review takes 4–8 weeks. Modesto follows California\'s streamlined ADU rules — most detached ADUs under 850 sq ft are exempt from impact fees.',
    },
    whyUs: 'We\'ve framed homes and built ADUs throughout Modesto\'s established and new-growth neighborhoods. We know which inspectors work which districts and what they look for — that means fewer correction cycles and faster project completion for you.',
    faq: [
      { q: 'Do you serve all of Modesto?', a: 'Yes — we work throughout the City of Modesto and surrounding unincorporated Stanislaus County areas including Salida and Woodland Avenue corridor.' },
      { q: 'How long does an ADU permit take in Modesto?', a: 'With complete plans, the City of Modesto typically reviews ADU applications in 4–8 weeks. California law requires approval within 60 days.' },
      { q: 'What\'s the minimum setback for an ADU in Modesto?', a: 'Generally 4 feet from side and rear property lines for detached ADUs. Front setback matches the main house. We\'ll confirm exact requirements for your specific lot.' },
      { q: 'Can I build an ADU on my Modesto property?', a: 'Most single-family lots in Modesto are eligible. Key factors include lot size, existing structures, and utilities. We can assess your property for free.' },
    ],
    metaTitle: 'General Contractor Modesto CA | ADU, Framing & Additions | C Hernandez Construction',
    metaDesc: 'Licensed general contractor in Modesto, CA. ADU construction, structural framing, room additions, and roofing. Lic. #1106454 · Free estimates · (209) 241-3765.',
  },

  {
    slug: 'turlock',
    name: 'Turlock',
    state: 'CA',
    county: 'Stanislaus County',
    distanceFromCeres: '15 miles',
    heroPhrases: ['ADU Construction', 'Framing Contractor', 'Room Additions', 'Licensed Lic. #1106454'],
    heroDesc: 'Licensed framing and ADU contractor serving Turlock, CA. C Hernandez Construction builds ADUs, additions, and new construction for Turlock homeowners. Free estimates.',
    intro: 'Turlock is a growing city with an active housing market and a city government that has embraced California\'s ADU laws. Whether you\'re a homeowner near California State University Stanislaus looking to add rental income, or a property owner in the established East Side neighborhoods wanting to expand your living space, C Hernandez Construction brings licensed, permitted construction to your project.',
    services: [
      { name: 'ADU Construction', href: '/services/adu', desc: 'Detached and garage conversion ADUs — common in Turlock\'s large-lot neighborhoods.' },
      { name: 'Structural Framing', href: '/services/framing', desc: 'New home framing and addition framing throughout Turlock and surrounding areas.' },
      { name: 'Room Additions', href: '/services/additions', desc: 'Bedroom and family room additions for Turlock\'s growing families.' },
      { name: 'Remodeling', href: '/services/remodeling', desc: 'Kitchen, bathroom and open-concept remodels for Turlock homes.' },
      { name: 'Doors & Windows', href: '/services/doors-windows', desc: 'Interior and exterior door and window installation and replacement.' },
      { name: 'Carpentry & Trim', href: '/services/carpentry', desc: 'Finish carpentry, crown molding, and built-in shelving.' },
    ],
    neighborhoods: ['East Turlock', 'West Turlock', 'North Turlock', 'University Area', 'Monte Vista', 'Turlock Estates', 'Downtown Turlock', 'Golden State Blvd corridor'],
    permitInfo: {
      office: 'City of Turlock Building Division',
      note: 'Turlock\'s Building Division processes ADU and addition permits. The city follows California\'s AB 68 and SB 9 streamlining rules. Turlock has a reputation for efficient processing — most ADU applications move through plan check in 4–6 weeks.',
    },
    whyUs: 'Turlock\'s mix of older established homes and newer subdivisions requires a contractor who can adapt — whether it\'s tying a new addition into a 1970s ranch-style home or framing a modern detached ADU on a newer lot. We\'ve done both and everything in between.',
    faq: [
      { q: 'Do you work in Turlock?', a: 'Yes — Turlock is one of our primary service areas. We\'re based in Ceres, just 15 miles away, and work throughout Turlock regularly.' },
      { q: 'How much does a garage conversion ADU cost in Turlock?', a: 'A typical garage conversion in Turlock runs $65,000–$120,000 depending on size, existing condition, and finish level. We\'ll give you a detailed written estimate after a free site visit.' },
      { q: 'Does Turlock charge ADU impact fees?', a: 'ADUs under 750 sq ft are exempt from impact fees under California law. Larger ADUs may be subject to school fees and utility connection fees. We account for all of these in your estimate.' },
      { q: 'Can you add a second story to my Turlock home?', a: 'Yes — second-story additions are a specialty. We assess your existing foundation and first-floor framing, work with a structural engineer, and frame the addition to code.' },
    ],
    metaTitle: 'Contractor in Turlock CA | ADU Construction & Framing | C Hernandez Construction',
    metaDesc: 'Licensed contractor serving Turlock, CA. ADU construction, residential framing, room additions, and remodeling. Lic. #1106454 · Call (209) 241-3765 for a free estimate.',
  },

  {
    slug: 'stockton',
    name: 'Stockton',
    state: 'CA',
    county: 'San Joaquin County',
    distanceFromCeres: '40 miles',
    heroPhrases: ['ADU Contractor', 'Framing & Additions', 'Licensed & Insured', 'Free Estimates'],
    heroDesc: 'C Hernandez Construction serves Stockton homeowners with ADU construction, structural framing, room additions, and remodeling. Licensed general contractor Lic. #1106454.',
    intro: 'Stockton is San Joaquin County\'s largest city and one of the most active residential construction markets in the Central Valley. With a large inventory of older single-family homes and a city government that has supported ADU construction, Stockton presents strong opportunities for homeowners looking to add value and rental income to their properties. C Hernandez Construction brings licensed, permitted construction to Stockton — from garage conversion ADUs in South Stockton to full framing projects in the growing North Stockton area.',
    services: [
      { name: 'ADU Construction', href: '/services/adu', desc: 'Garage conversions and detached ADUs — San Joaquin County permitted.' },
      { name: 'Structural Framing', href: '/services/framing', desc: 'Residential framing for new construction and additions throughout Stockton.' },
      { name: 'Room Additions', href: '/services/additions', desc: 'Bedroom and family room additions for Stockton\'s established neighborhoods.' },
      { name: 'Roof Shingles', href: '/services/roofing', desc: 'Re-roofs and shingle installation for Stockton\'s older residential stock.' },
      { name: 'Drywall & Painting', href: '/services/drywall', desc: 'Drywall, texture, and interior painting for ADUs and remodels.' },
      { name: 'New Construction', href: '/services/new-construction', desc: 'Custom home framing and new residential construction in Stockton.' },
    ],
    neighborhoods: ['North Stockton', 'South Stockton', 'Lincoln Village', 'Weston Ranch', 'Sherwood Manor', 'March Lane Corridor', 'Downtown Stockton', 'Hammer Lane area'],
    permitInfo: {
      office: 'City of Stockton Development Services Department',
      note: 'Stockton Development Services handles building permits for ADUs and construction projects. San Joaquin County has its own department for unincorporated areas. Stockton has been working to improve permit turnaround times — expect 5–9 weeks for ADU plan review.',
    },
    whyUs: 'Stockton has a wide range of housing stock — from 1920s craftsman bungalows in South Stockton to 2000s tract homes in the north. We\'re experienced working with older foundations and existing structures that need careful assessment before additions begin. We also know when to involve a structural engineer and when standard framing details are sufficient.',
    faq: [
      { q: 'Do you build ADUs in Stockton?', a: 'Yes — we regularly work in Stockton and San Joaquin County. We handle permits with the City of Stockton Development Services Department and are familiar with their requirements.' },
      { q: 'How far is Stockton from your base?', a: 'About 40 miles from Ceres. We factor in travel time on projects but do not charge extra trip fees for Stockton projects — it\'s part of our standard service area.' },
      { q: 'What types of ADUs work best in Stockton?', a: 'Garage conversion ADUs tend to be the most cost-effective in Stockton because many older properties have detached garages that convert well. Detached ADUs work well on the larger lots common in North Stockton.' },
      { q: 'Does Stockton allow ADUs on all residential lots?', a: 'Most single-family and multi-family lots in Stockton are eligible under California\'s ADU laws. The city has adopted the state\'s streamlined ADU approval process.' },
    ],
    metaTitle: 'General Contractor Stockton CA | ADU Construction & Framing | C Hernandez Construction',
    metaDesc: 'Licensed general contractor serving Stockton, CA. ADU construction, residential framing, room additions, and remodeling. Lic. #1106454 · Free estimates · (209) 241-3765.',
  },

  {
    slug: 'tracy',
    name: 'Tracy',
    state: 'CA',
    county: 'San Joaquin County',
    distanceFromCeres: '50 miles',
    heroPhrases: ['ADU Construction', 'Room Additions', 'Framing Contractor', 'Lic. #1106454'],
    heroDesc: 'Licensed contractor serving Tracy, CA. C Hernandez Construction builds ADUs, framing, and room additions for Tracy homeowners. Free estimates — call (209) 241-3765.',
    intro: 'Tracy is one of the fastest-growing cities in California, attracting Bay Area transplants looking for more space at lower prices. That growth means a surge in room addition and ADU projects — homeowners want to maximize the value of their larger Tracy lots. C Hernandez Construction travels to Tracy for ADU construction, framing, and room additions. We bring the same licensed, permitted approach we use throughout the Central Valley to Tracy\'s active residential market.',
    services: [
      { name: 'ADU Construction', href: '/services/adu', desc: 'Detached ADUs ideal for Tracy\'s larger residential lots and active rental market.' },
      { name: 'Room Additions', href: '/services/additions', desc: 'Bedroom and family room additions — common request from Tracy\'s growing families.' },
      { name: 'Structural Framing', href: '/services/framing', desc: 'New home framing for Tracy\'s new-construction developments and custom builds.' },
      { name: 'Remodeling', href: '/services/remodeling', desc: 'Kitchen and bathroom remodels for Tracy\'s tract home owners.' },
      { name: 'Drywall & Painting', href: '/services/drywall', desc: 'Interior drywall and painting for ADUs, additions, and remodels.' },
      { name: 'Doors & Windows', href: '/services/doors-windows', desc: 'Door and window installation and replacement.' },
    ],
    neighborhoods: ['Gretchen Gianini area', 'Patterson Ranch', 'Lammers Road area', 'Grant Line area', 'Downtown Tracy', 'Schulte Road corridor', 'Tracy Hills', 'Ellis'],
    permitInfo: {
      office: 'City of Tracy Community Development Department',
      note: 'Tracy processes building permits through the Community Development Department. As a newer, faster-growing city, Tracy\'s permit department has invested in technology — they offer online permit applications. ADU review typically takes 4–7 weeks. Tracy follows California\'s state ADU streamlining rules.',
    },
    whyUs: 'Tracy homeowners often have larger lots than their Bay Area counterparts, making detached ADUs especially viable. We\'ve framed ADUs in San Joaquin County and understand the nuances of working on newer tract home foundations versus custom lots. If you\'re a Bay Area commuter who bought in Tracy, we make it easy — one call, free estimate, and we handle everything.',
    faq: [
      { q: 'Do you travel to Tracy for projects?', a: 'Yes — Tracy is part of our service area. It\'s about 50 miles from our Ceres base. We regularly take on ADU and addition projects in Tracy and throughout San Joaquin County.' },
      { q: 'Is Tracy a good place to build an ADU?', a: 'Yes — Tracy\'s lot sizes are typically larger than Bay Area suburbs, making detached ADUs feasible. Tracy also has a strong rental market due to Bay Area commuters, so ADU rental income potential is good.' },
      { q: 'How much does a room addition cost in Tracy?', a: 'Room additions in Tracy typically run $120,000–$200,000 for 400–600 sq ft, depending on the scope and finishes. We provide detailed written estimates after a free site visit.' },
      { q: 'Can you frame a new home in Tracy?', a: 'Yes — we do new residential construction framing. If you have land in Tracy and architectural plans, contact us to discuss framing for your new build.' },
    ],
    metaTitle: 'Contractor in Tracy CA | ADU Construction & Room Additions | C Hernandez Construction',
    metaDesc: 'Licensed contractor serving Tracy, CA. ADU construction, room additions, structural framing and remodeling. Lic. #1106454 · Free estimates · Call (209) 241-3765.',
  },

  {
    slug: 'manteca',
    name: 'Manteca',
    state: 'CA',
    county: 'San Joaquin County',
    distanceFromCeres: '35 miles',
    heroPhrases: ['ADU Contractor', 'Residential Framing', 'Room Additions', 'Free Estimates'],
    heroDesc: 'C Hernandez Construction serves Manteca homeowners with ADU construction, framing, room additions, and remodeling. Licensed general contractor Lic. #1106454.',
    intro: 'Manteca is a rapidly expanding city in San Joaquin County with a housing market that continues to draw homeowners from more expensive Bay Area cities. C Hernandez Construction serves Manteca with the full range of residential construction services — from ADU construction on large corner lots to framing additions onto existing tract homes.',
    services: [
      { name: 'ADU Construction', href: '/services/adu', desc: 'Detached and garage conversion ADUs for Manteca\'s residential lots.' },
      { name: 'Structural Framing', href: '/services/framing', desc: 'Framing for additions and new construction throughout Manteca.' },
      { name: 'Room Additions', href: '/services/additions', desc: 'Bedroom, bathroom, and family room additions.' },
      { name: 'Roofing', href: '/services/roofing', desc: 'Full re-roofs and shingle installation.' },
      { name: 'Remodeling', href: '/services/remodeling', desc: 'Kitchen and bathroom remodels.' },
      { name: 'General Contractor', href: '/services/general-contractor', desc: 'Full project management for larger residential builds.' },
    ],
    neighborhoods: ['Old Town Manteca', 'Woodward Park', 'Lathrop area', 'French Camp area', 'Airport Way corridor', 'Manteca Estates'],
    permitInfo: {
      office: 'City of Manteca Building Division',
      note: 'Manteca\'s Building Division handles permits for residential projects. ADU applications follow California\'s state streamlining rules. Typical review time is 4–7 weeks for complete submittals.',
    },
    whyUs: 'Manteca\'s growth has attracted a mix of long-time residents and newer arrivals, all with different construction needs. We adapt to both — whether it\'s matching the character of an older Manteca home or framing a modern ADU on a newer subdivision lot.',
    faq: [
      { q: 'Do you serve Manteca?', a: 'Yes — Manteca is about 35 miles from our Ceres base and is part of our regular service area in San Joaquin County.' },
      { q: 'What ADU options work in Manteca?', a: 'Detached ADUs work well on Manteca\'s larger lots. Garage conversions are popular on older properties. We can evaluate your specific lot during our free site visit.' },
      { q: 'Do you handle Manteca building permits?', a: 'Yes — we coordinate all permits with the City of Manteca Building Division. You don\'t need to manage the permit process yourself.' },
    ],
    metaTitle: 'Contractor in Manteca CA | ADU & Framing | C Hernandez Construction',
    metaDesc: 'Licensed contractor serving Manteca, CA. ADU construction, framing, room additions, and remodeling. Lic. #1106454 · Free estimates · (209) 241-3765.',
  },
];

export function getCity(slug: string): CityData | undefined {
  return cities.find(c => c.slug === slug);
}
