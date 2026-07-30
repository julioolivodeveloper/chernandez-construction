export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'tip'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: ContentBlock[];
}

const BASE = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

export const posts: BlogPost[] = [
  {
    slug: 'adu-cost-california-2025',
    title: 'How Much Does an ADU Cost in California in 2025?',
    excerpt: 'ADU construction costs in California range from $50,000 to $300,000+ depending on type, size, and location. Here\'s a realistic breakdown to help you plan your budget.',
    date: 'July 28, 2025',
    category: 'ADU',
    readTime: '6 min read',
    image: BASE + 'adu.png',
    content: [
      { type: 'p', text: 'Accessory Dwelling Units — commonly called ADUs or "granny flats" — have become one of the most popular home improvement projects in California. They add living space, generate rental income, and increase property value. But one of the first questions every homeowner asks is: how much does it actually cost?' },
      { type: 'p', text: 'The honest answer is that costs vary significantly depending on the type of ADU, your lot conditions, local permit fees, and the level of finishes you choose. In this guide, we break down realistic cost ranges for 2025 so you can plan your budget with confidence.' },

      { type: 'h2', text: 'ADU Cost by Type' },
      { type: 'table', headers: ['ADU Type', 'Typical Cost Range', 'Best For'], rows: [
        ['Detached ADU', '$180,000 – $320,000', 'Maximum privacy, highest rental value'],
        ['Attached ADU', '$120,000 – $220,000', 'Shared wall with main house, lower cost'],
        ['Garage Conversion', '$60,000 – $130,000', 'Fastest & most affordable option'],
        ['Junior ADU (JADU)', '$30,000 – $80,000', 'Interior conversion, no new foundation'],
      ]},
      { type: 'p', text: 'These ranges reflect construction costs in the Central Valley (Ceres, Modesto, Turlock area). Costs in the Bay Area or Los Angeles typically run 30–50% higher.' },

      { type: 'h2', text: 'What Drives the Cost Up?' },
      { type: 'ul', items: [
        'Size — every additional square foot adds cost. A 400 sq ft studio costs significantly less than an 800 sq ft one-bedroom.',
        'Foundation type — a new slab foundation adds $15,000–$30,000 to the budget vs. using an existing concrete floor in a garage conversion.',
        'Utility connections — hooking up water, sewer, and electrical from the main house to a detached ADU can cost $15,000–$40,000 depending on distance and local fees.',
        'Permit and impact fees — California has reduced ADU fees, but you can still expect $5,000–$20,000 in permit costs depending on your city.',
        'Finishes — standard finishes (basic cabinets, vinyl flooring, standard fixtures) keep costs low. Upgraded finishes can add $20,000–$50,000.',
      ]},

      { type: 'h2', text: 'Hidden Costs to Budget For' },
      { type: 'p', text: 'Beyond construction, make sure you budget for these often-overlooked expenses:' },
      { type: 'ul', items: [
        'Architectural plans and engineering: $5,000–$15,000',
        'Soil report (if required by city): $1,500–$4,000',
        'Title 24 energy compliance report: $800–$2,000',
        'Landscaping and site cleanup after construction: $2,000–$8,000',
        'Furnishing the unit if renting it out: varies widely',
      ]},

      { type: 'h2', text: 'How to Maximize Your Investment' },
      { type: 'p', text: 'A well-built ADU in the Central Valley typically rents for $1,200–$2,000 per month depending on size and location. That means a $180,000 garage conversion ADU can pay for itself in 8–12 years through rental income alone — while also adding $150,000–$250,000 to your property value.' },
      { type: 'tip', text: 'Pro Tip: The most cost-effective ADU is often a garage conversion. If you have a detached garage that\'s at least 400 sq ft, converting it eliminates the need for a new foundation and can cut your budget by 40–50% compared to a detached build.' },

      { type: 'h2', text: 'Why Hire a Licensed Contractor for Your ADU?' },
      { type: 'p', text: 'ADU construction in California requires permits, inspections, and work that meets building code. An unlicensed contractor might quote you a lower price, but unpermitted work can result in fines, forced demolition, and major headaches when you try to sell or refinance.' },
      { type: 'p', text: 'At C Hernandez Construction (Lic. #1106454), we\'ve built ADUs across Ceres, Modesto, Milpitas, and the Central Valley. We handle permits, framing, drywall, roofing, and coordinate with specialty trades so you have one point of contact from start to finish. Contact us for a free, no-obligation estimate on your ADU project.' },
    ],
  },

  {
    slug: 'adu-permits-ceres-modesto',
    title: 'ADU Permits in Ceres and Modesto: A Step-by-Step Guide',
    excerpt: 'Getting a permit for your ADU in Stanislaus County doesn\'t have to be complicated. Here\'s exactly what to expect, step by step, from application to final inspection.',
    date: 'July 22, 2025',
    category: 'ADU',
    readTime: '5 min read',
    image: BASE + 'framing1.jpg',
    content: [
      { type: 'p', text: 'Since 2020, California has passed a series of laws making it easier and cheaper to build ADUs. Impact fees are reduced, setback requirements are relaxed, and most ADUs under 850 sq ft are exempt from parking requirements. But you still need a permit — and understanding the process in Ceres and Modesto specifically will save you time and money.' },

      { type: 'h2', text: 'Why You Must Pull a Permit' },
      { type: 'p', text: 'Some homeowners are tempted to build without a permit to save money and time. This is a serious mistake. Unpermitted ADUs:' },
      { type: 'ul', items: [
        'Cannot be legally rented out',
        'Must be disclosed when selling your home — and can kill deals',
        'May need to be demolished if discovered by the city',
        'Are not covered by your homeowner\'s insurance',
        'Can result in fines of $500–$5,000 per violation per day',
      ]},
      { type: 'tip', text: 'California law now requires cities to approve ADU applications within 60 days. If your city misses that deadline, the permit is automatically deemed approved.' },

      { type: 'h2', text: 'Step-by-Step Permit Process in Ceres & Modesto' },
      { type: 'ol', items: [
        'Pre-application meeting (optional but recommended) — Meet with the planning department to confirm your lot is eligible and discuss setbacks, height limits, and utility requirements. Costs nothing and saves weeks later.',
        'Hire a designer or architect — You need stamped plans showing floor plan, elevations, foundation, framing details, and electrical/plumbing layouts. A good designer familiar with local requirements costs $4,000–$10,000 and prevents costly corrections.',
        'Submit permit application — Submit plans to the Building Department with the application fee ($2,000–$8,000 depending on project size). In Ceres, this is done at City Hall. Modesto uses an online portal.',
        'Plan review — The city reviews for zoning compliance, building code, energy code (Title 24), and structural requirements. Expect 3–6 weeks for first review. They may issue corrections requiring plan revisions.',
        'Permit issuance — Once plans are approved, you pay any remaining fees and receive your building permit. Construction can begin.',
        'Inspections during construction — The city inspector must visit at key stages: foundation, framing (before drywall), rough electrical/plumbing, insulation, and final. Your contractor schedules these.',
        'Final inspection and certificate of occupancy — Once the inspector signs off on everything, you receive your Certificate of Occupancy. The ADU is now legally permitted and can be occupied or rented.',
      ]},

      { type: 'h2', text: 'Timeline: What to Realistically Expect' },
      { type: 'table', headers: ['Phase', 'Typical Duration'], rows: [
        ['Plans and design', '3–6 weeks'],
        ['Permit review (first submission)', '3–6 weeks'],
        ['Plan corrections (if needed)', '2–4 weeks'],
        ['Permit issuance', '1 week'],
        ['Construction', '3–6 months'],
        ['Final inspection', '1–2 weeks'],
        ['Total (typical)', '6–12 months'],
      ]},

      { type: 'h2', text: 'What a Licensed Contractor Handles For You' },
      { type: 'p', text: 'When you work with C Hernandez Construction, we coordinate the entire permit process: we work with your designer or can refer you to one familiar with Ceres and Modesto requirements, schedule all city inspections, and make sure every phase of construction is ready when the inspector arrives.' },
      { type: 'p', text: 'We\'ve been through this process dozens of times in Stanislaus County. We know what inspectors look for and how to avoid the most common corrections that delay projects. Call us at (209) 241-3765 for a free estimate and to discuss your specific property.' },
    ],
  },

  {
    slug: 'structural-framing-guide',
    title: 'Structural Framing 101: The Skeleton Every Home Depends On',
    excerpt: 'Framing is the structural skeleton of your home. Get it wrong and everything built on top of it is compromised. Here\'s what every homeowner should understand about residential framing.',
    date: 'July 15, 2025',
    category: 'Framing',
    readTime: '5 min read',
    image: BASE + 'framing.jpg',
    content: [
      { type: 'p', text: 'When you look at a finished home — the smooth drywall, the trim, the windows, the roof — it\'s easy to forget that underneath all of it is a carefully engineered skeleton of wood that holds everything together. That skeleton is the frame, and it\'s the most important structural element of any residential building.' },
      { type: 'p', text: 'Whether you\'re building a new home, adding a room, or constructing an ADU, understanding what framing is and why it matters will help you ask the right questions and make better decisions about your project.' },

      { type: 'h2', text: 'What Is Structural Framing?' },
      { type: 'p', text: 'Structural framing refers to the system of lumber — studs, joists, rafters, beams, and headers — that forms the skeleton of a building. This framework carries the weight of the roof, floors, and walls, and transfers all those loads down to the foundation.' },
      { type: 'p', text: 'In California residential construction, platform framing (also called Western framing) is the standard. Each floor is built as a separate platform, with wall studs sitting on top of the floor platform below.' },

      { type: 'h2', text: 'Key Components of a Residential Frame' },
      { type: 'ul', items: [
        'Sill plate — the bottom horizontal member that sits on top of the foundation. It must be pressure-treated lumber because it contacts concrete.',
        'Studs — vertical members spaced 16" or 24" on center that make up the walls. Exterior walls typically use 2x6 studs for insulation depth; interior walls often use 2x4.',
        'Top plate — two horizontal members at the top of the wall that tie studs together and support the floor or roof above.',
        'Headers — horizontal beams over door and window openings that carry the load around the opening. Undersized headers are a common framing defect.',
        'Jack studs and king studs — the vertical members that support headers on each side of openings.',
        'Floor joists — horizontal members that span between beams or bearing walls to support the floor. Common sizes are 2x10 and 2x12.',
        'Rafters and roof trusses — the sloped members that form the roof structure. Trusses are engineered components; site-built rafters offer more flexibility for complex roof lines.',
        'Beams and posts — carry concentrated loads in open-plan areas, loft spaces, or where walls are removed.',
      ]},

      { type: 'h2', text: 'Why Framing Quality Matters So Much' },
      { type: 'p', text: 'Poor framing creates problems that compound over time and affect every trade that comes after:' },
      { type: 'ul', items: [
        'Out-of-plumb walls make drywall finishing and tile work nearly impossible to do cleanly.',
        'Undersized headers cause doors and windows to stick or crack as the opening deflects under load.',
        'Improperly blocked walls create hollow spots and squeaks in floors and walls.',
        'Missing or incorrectly installed hurricane ties and hold-downs put the structure at risk in seismic events — California requires specific lateral bracing.',
        'Incorrect spacing between studs or joists can cause inspection failures and require expensive tear-out and redo.',
      ]},
      { type: 'tip', text: 'In California, framing must pass a city inspection before drywall can be installed. An inspector will check plumb, spacing, header sizing, blocking, and all required seismic straps and hold-downs. If it doesn\'t pass, you pay for re-inspection and corrections — which is why doing it right the first time saves money.' },

      { type: 'h2', text: 'Questions to Ask a Framing Contractor' },
      { type: 'ul', items: [
        'Are you licensed with the CSLB? (Verify at www.cslb.ca.gov)',
        'Will you pull the framing permit, or does the general contractor?',
        'Do you work from engineered plans, or do you estimate lumber on the fly?',
        'How do you handle corrections if the framing inspection fails?',
        'Can I see past framing projects similar to mine?',
      ]},

      { type: 'h2', text: 'Working With C Hernandez Construction' },
      { type: 'p', text: 'Structural framing is our core specialty. We\'ve framed new homes, two-story additions, ADUs, and complex roof structures across the Central Valley. We work from your architect\'s plans, pull the required permits, and build to California code so every inspection passes the first time.' },
      { type: 'p', text: 'If you\'re planning a room addition, ADU, or new construction in Ceres, Modesto, or surrounding areas, contact us for a free framing estimate.' },
    ],
  },

  {
    slug: 'questions-before-hiring-contractor',
    title: '5 Questions to Ask Before Hiring a General Contractor in California',
    excerpt: 'Hiring the wrong contractor is one of the most expensive mistakes a homeowner can make. These 5 questions — and how to verify the answers — will protect your investment.',
    date: 'July 8, 2025',
    category: 'Tips',
    readTime: '4 min read',
    image: BASE + 'framing344.jpg',
    content: [
      { type: 'p', text: 'Every year, thousands of California homeowners lose money to unlicensed, uninsured, or simply incompetent contractors. The construction industry has a higher rate of fraud and disputes than almost any other service industry. But protecting yourself doesn\'t require being an expert — it just requires asking the right questions before you sign anything.' },
      { type: 'p', text: 'Here are the five questions that matter most, and exactly how to verify the answers.' },

      { type: 'h2', text: '1. Are You Licensed with the CSLB?' },
      { type: 'p', text: 'In California, any construction project over $500 in labor and materials requires a licensed contractor. The Contractors State License Board (CSLB) issues and maintains all contractor licenses.' },
      { type: 'p', text: 'How to verify: Go to www.cslb.ca.gov and look up the contractor\'s license number. You\'ll see the license status (active/inactive), the classifications they\'re licensed for, and any complaints or disciplinary actions. Do this for every contractor you consider — no exceptions.' },
      { type: 'tip', text: 'C Hernandez Construction holds California General Contractor License #1106454. You can verify this directly at www.cslb.ca.gov.' },

      { type: 'h2', text: '2. Are You Insured — and Can I See the Certificate?' },
      { type: 'p', text: 'A licensed contractor is required to carry workers\' compensation insurance (if they have employees) and should also carry general liability insurance. If a worker gets hurt on your property and the contractor has no workers\' comp, you can be held liable.' },
      { type: 'p', text: 'How to verify: Ask for a Certificate of Insurance and call the insurance company on the certificate to confirm it\'s current. Don\'t accept a verbal confirmation — get the document.' },

      { type: 'h2', text: '3. Will You Pull All Required Permits?' },
      { type: 'p', text: 'Any structural work — framing, additions, ADUs, electrical, plumbing — requires permits in California. A contractor who offers to "skip the permits to save you money" is a red flag. Unpermitted work can result in forced demolition, fines, and major problems when selling your home.' },
      { type: 'p', text: 'A legitimate contractor will include permit fees in the estimate and handle all permit applications. If a contractor asks you to pull the permit as an "owner-builder," be cautious — this transfers legal liability for the work to you.' },

      { type: 'h2', text: '4. What Does the Contract Include — and Exclude?' },
      { type: 'p', text: 'California law requires written contracts for projects over $500. Your contract should clearly specify:' },
      { type: 'ul', items: [
        'Full scope of work — what exactly is included',
        'Materials — brand, grade, and quantities',
        'Payment schedule — tied to project milestones, not arbitrary dates',
        'Start and estimated completion date',
        'Change order process — how additional work is priced and approved',
        'Warranty on workmanship',
      ]},
      { type: 'p', text: 'Never pay more than 10% or $1,000 down (whichever is less) before work begins. This is required by California law for home improvement contracts.' },

      { type: 'h2', text: '5. Can I See Recent Projects and Talk to Past Clients?' },
      { type: 'p', text: 'A confident, experienced contractor will have no problem showing you completed projects and connecting you with past clients. Ask for references from projects similar to yours in size and type — a contractor who\'s built dozens of ADUs is more reliable for your ADU than one who mostly does kitchens.' },
      { type: 'p', text: 'Check their Google reviews, Yelp, and BuildZoom profile. Look for patterns in negative reviews — complaints about communication, timeline, and "different from quote" pricing are common warning signs.' },

      { type: 'h2', text: 'The Bottom Line' },
      { type: 'p', text: 'Taking 30 minutes to verify a contractor\'s license, insurance, and references can save you tens of thousands of dollars and months of headaches. The cheapest bid is almost never the best value.' },
      { type: 'p', text: 'C Hernandez Construction is fully licensed (Lic. #1106454), insured, and has a 5.0 rating on Google. We\'re happy to show you past projects and connect you with clients in the Ceres and Modesto area. Contact us for a free estimate.' },
    ],
  },

  {
    slug: 'room-addition-vs-adu',
    title: 'Room Addition vs. ADU: Which Is the Better Investment for Your Property?',
    excerpt: 'Both room additions and ADUs add space and value, but they serve different purposes and have very different costs, timelines, and ROI. Here\'s how to choose the right one for your situation.',
    date: 'July 1, 2025',
    category: 'Planning',
    readTime: '5 min read',
    image: BASE + 'framing73763673.jpg',
    content: [
      { type: 'p', text: 'One of the most common questions we get from Central Valley homeowners is: "Should I add a room to my house, or build an ADU on my property?" Both options increase your living space and property value, but they\'re very different projects with different costs, timelines, and financial outcomes. The right choice depends on your goals.' },

      { type: 'h2', text: 'What\'s the Difference?' },
      { type: 'p', text: 'A room addition expands your existing home\'s footprint — adding a bedroom, bathroom, family room, or second story. The new space is connected to your main house and shares utilities, HVAC, and the existing structure.' },
      { type: 'p', text: 'An ADU (Accessory Dwelling Unit) is a separate or semi-separate living unit on your property. It has its own entrance, kitchen, bathroom, and living space. It can be detached (separate building), attached (connected to the house), or converted from an existing space like a garage.' },

      { type: 'h2', text: 'Cost Comparison' },
      { type: 'table', headers: ['Project', 'Typical Cost (Central Valley)', 'Added Value'], rows: [
        ['Room Addition (400 sq ft)', '$100,000 – $180,000', '60–80% of cost'],
        ['Second Story Addition', '$160,000 – $280,000', '50–70% of cost'],
        ['Detached ADU (600 sq ft)', '$200,000 – $300,000', '100–130% of cost'],
        ['Garage Conversion ADU', '$60,000 – $130,000', '120–160% of cost'],
      ]},
      { type: 'p', text: 'ADUs generally have higher ROI because they add rentable space. A garage conversion ADU renting for $1,400/month generates $16,800/year in income — making it one of the highest-return investments available to California homeowners.' },

      { type: 'h2', text: 'Choose a Room Addition If...' },
      { type: 'ul', items: [
        'You need more space for your family (new baby, aging parent moving in, kids needing separate rooms)',
        'You want the new space fully integrated with the existing home — same HVAC, same floor plan flow',
        'You don\'t need a separate kitchen or entrance',
        'Your lot doesn\'t have enough room for a separate structure (ADUs require setbacks from property lines)',
        'Your goal is personal comfort, not rental income',
      ]},

      { type: 'h2', text: 'Choose an ADU If...' },
      { type: 'ul', items: [
        'You want to generate rental income to offset your mortgage or build wealth',
        'You have aging parents who need nearby but independent living (multigenerational living)',
        'You have a garage, bonus room, or basement that\'s underutilized',
        'You\'re planning long-term and want a property that will appeal strongly to future buyers',
        'You\'re in California — state law has made ADUs faster and cheaper to permit than ever before',
      ]},

      { type: 'h2', text: 'Permit and Timeline Comparison' },
      { type: 'table', headers: ['Factor', 'Room Addition', 'ADU'], rows: [
        ['Permit timeline', '6–12 weeks', '8–16 weeks'],
        ['Construction time', '2–4 months', '3–6 months'],
        ['Permit fees', 'Moderate', 'Lower (AB 2221/SB 897 limits fees)'],
        ['Impact fees', 'Standard', 'Waived for ADUs under 750 sq ft'],
      ]},

      { type: 'h2', text: 'The Financial Reality' },
      { type: 'p', text: 'If your primary goal is financial return, ADUs almost always win — especially garage conversions. The rental income potential makes them the most financially efficient use of residential land in California right now, thanks to the housing shortage and the state laws that have streamlined the process.' },
      { type: 'p', text: 'If your primary goal is improving your family\'s daily life — more bedrooms, a larger kitchen, a home office — a room addition integrates more naturally into your existing home and is often the faster project.' },
      { type: 'tip', text: 'Can\'t decide? Many homeowners do both over time — starting with a garage conversion ADU for income, then using that income to fund a room addition a few years later. We\'ve helped several families in the Ceres and Modesto area execute exactly this strategy.' },

      { type: 'h2', text: 'Let\'s Talk About Your Property' },
      { type: 'p', text: 'The right choice depends on your specific lot, your home\'s current layout, your budget, and your goals. At C Hernandez Construction, we provide free estimates for both room additions and ADUs, and we\'re happy to walk through the options with you before you commit.' },
      { type: 'p', text: 'Call us at (209) 241-3765 or fill out the estimate form on this site. We serve Ceres, Modesto, Turlock, Salida, Riverbank, Patterson, and the surrounding Central Valley.' },
    ],
  },
  {
    slug: 'what-is-a-jadu-california',
    title: 'What Is a Junior ADU (JADU)? California\'s Most Affordable ADU Option',
    excerpt: 'A Junior ADU converts existing space inside your home into a permitted dwelling unit — often for under $50,000. Here\'s what qualifies, what\'s required, and whether a JADU is right for your property.',
    date: 'July 25, 2025',
    category: 'ADU',
    readTime: '4 min read',
    image: BASE + 'framing88484.jpg',
    content: [
      { type: 'p', text: 'Most homeowners have heard of ADUs — backyard cottages, garage conversions, and detached guesthouses. But fewer know about the Junior ADU, or JADU: a lower-cost, faster-to-permit option that converts existing space inside your primary home into a separate dwelling unit. California law specifically created the JADU category to make smaller-scale ADUs accessible to more homeowners.' },

      { type: 'h2', text: 'What Exactly Is a JADU?' },
      { type: 'p', text: 'A Junior ADU is a dwelling unit of up to 500 square feet created entirely within the walls of an existing single-family home. It must have its own separate entrance (though it can share an entrance with the main house through a common interior corridor), an efficiency kitchen with a cooking appliance, and a food prep area.' },
      { type: 'p', text: 'Unlike a full ADU, a JADU does not need its own bathroom — it can share the main home\'s bathroom. This is the key reason JADUs are so much cheaper: you\'re often converting a bedroom, den, or bonus room without touching plumbing systems.' },

      { type: 'h2', text: 'JADU vs. ADU: Key Differences' },
      { type: 'table', headers: ['Feature', 'JADU', 'Standard ADU'], rows: [
        ['Max size', '500 sq ft', 'Up to 1,200 sq ft'],
        ['Location', 'Inside existing home', 'Inside, attached, or detached'],
        ['Bathroom required', 'No (can share)', 'Yes'],
        ['Full kitchen required', 'No (efficiency kitchen OK)', 'Yes'],
        ['Owner occupancy', 'Required in CA', 'Not required (AB 3182)'],
        ['Typical cost', '$20,000–$60,000', '$60,000–$300,000+'],
        ['Permit timeline', '30–60 days', '60–120 days'],
      ]},

      { type: 'h2', text: 'What Spaces Can Become a JADU?' },
      { type: 'ul', items: [
        'An attached garage (most common) — convert one bay of a two-car garage while keeping the other.',
        'A large bedroom — add a kitchenette alcove and an exterior door.',
        'A den or bonus room — typically already has a door, just needs a cooking surface and proper egress.',
        'A finished basement — California basements are rare but ideal for JADUs when they exist.',
        'An in-law suite that lacks a full kitchen — upgrading to JADU standards makes it legally rentable.',
      ]},

      { type: 'h2', text: 'What Does a JADU Require by California Law?' },
      { type: 'ol', items: [
        'A separate exterior entrance — can share an interior corridor with the main home.',
        'An efficiency kitchen — must include a cooking appliance (cooktop, range, or microwave), counter space for food prep, and a sink.',
        'Maximum 500 sq ft — the unit cannot exceed this size.',
        'Owner occupancy — unlike full ADUs, California law requires the property owner to live on-site (in either the main home or the JADU). This is a key distinction.',
        'A building permit — JADUs still require a permit, but cities must approve complete applications within 60 days.',
      ]},

      { type: 'tip', text: 'JADUs are exempt from impact fees, connection fees, and capacity charges in California — by state law. This alone can save $5,000–$20,000 compared to a standard ADU in many jurisdictions.' },

      { type: 'h2', text: 'Is a JADU Right for You?' },
      { type: 'p', text: 'A JADU makes sense if you have underutilized space inside your home, you plan to live on the property, you want a lower-cost rental unit or suite for a family member, and you want the fastest path to a permitted dwelling unit.' },
      { type: 'p', text: 'If you need a fully private, separate unit with its own bathroom, or if you want to rent it without living on-site, a standard ADU is the better fit.' },
      { type: 'p', text: 'At C Hernandez Construction, we help homeowners in Ceres, Modesto, Turlock, and the Central Valley evaluate both options and build the one that fits their property and goals. Contact us for a free walkthrough and estimate.' },
    ],
  },

  {
    slug: 'how-to-finance-adu-california',
    title: 'How to Finance an ADU in California: Loans, HELOCs, and State Programs',
    excerpt: 'Building an ADU costs $60,000–$300,000. These are the most practical financing options available to California homeowners in 2025 — including programs most people don\'t know about.',
    date: 'July 18, 2025',
    category: 'ADU',
    readTime: '5 min read',
    image: BASE + 'framing344.jpg',
    content: [
      { type: 'p', text: 'One of the most common questions we get after homeowners decide they want an ADU is: "How do I pay for it?" Construction costs are real, but so is the return on investment. The good news is that California has more ADU financing options than most states, and home equity in the Central Valley has grown significantly over the past few years.' },

      { type: 'h2', text: '1. Home Equity Line of Credit (HELOC)' },
      { type: 'p', text: 'A HELOC lets you borrow against the equity in your home up to a set limit, drawing funds as needed during construction. It\'s the most flexible option — you only pay interest on what you draw.' },
      { type: 'ul', items: [
        'Best for: Homeowners with 30%+ equity and good credit (720+)',
        'Typical rate: Prime + 0.5% to 2% (variable)',
        'Draw period: Usually 5–10 years',
        'Repayment: Interest-only during draw period, then principal + interest',
        'Advantage: Flexibility — draw what you need as construction progresses',
      ]},

      { type: 'h2', text: '2. Cash-Out Refinance' },
      { type: 'p', text: 'Replace your existing mortgage with a larger one and take the difference in cash. Works well if your current rate is already competitive or if you need a large lump sum upfront.' },
      { type: 'ul', items: [
        'Best for: Homeowners who need the full ADU budget upfront and have significant equity',
        'Consideration: You\'ll reset your mortgage term and potentially your rate',
        'Advantage: One monthly payment, fixed rate available',
      ]},

      { type: 'h2', text: '3. Construction Loan' },
      { type: 'p', text: 'A short-term loan specifically for building. Funds are released in draws as construction milestones are completed, then converted to a permanent mortgage (construction-to-permanent loan).' },
      { type: 'ul', items: [
        'Best for: Larger detached ADU projects where you want dedicated construction financing',
        'Typical term: 12–18 months construction, then converts to 30-year mortgage',
        'Lender requirement: Usually requires licensed contractor with fixed-price contract',
      ]},

      { type: 'h2', text: '4. CalHFA ADU Grant Program' },
      { type: 'p', text: 'The California Housing Finance Agency (CalHFA) has offered pre-development grants of up to $40,000 to cover ADU predevelopment costs: architectural plans, permits, soil reports, and other soft costs. Funds have been limited and competitive — check CalHFA.ca.gov for current availability.' },
      { type: 'tip', text: 'The CalHFA ADU grant does not cover construction costs — only predevelopment (design, permits, engineering). It\'s most useful for reducing the upfront cash needed to get to the construction phase.' },

      { type: 'h2', text: '5. Local and County ADU Loan Programs' },
      { type: 'p', text: 'Several California counties and cities offer low-interest ADU construction loans, often targeting moderate-income homeowners. Programs vary by location and availability. In the Central Valley, check with your county\'s housing authority for current programs.' },

      { type: 'h2', text: '6. Personal/Unsecured Loans' },
      { type: 'p', text: 'For smaller projects like JADUs or garage conversions under $80,000, some homeowners use personal loans. Rates are higher (8–20%) but approval is faster and doesn\'t require home equity. Works best for shorter payoff timelines.' },

      { type: 'h2', text: 'The ROI Case: Why ADU Financing Often Makes Sense' },
      { type: 'table', headers: ['Scenario', 'Details'], rows: [
        ['Garage conversion ADU', '$90,000 to build, rents for $1,400/mo'],
        ['Annual rental income', '$16,800/year'],
        ['HELOC at 8% on $90k', '~$600/month interest-only'],
        ['Net monthly cash flow', '+$800/month from day one'],
        ['Payoff timeline', '~6 years (rental income pays off the build)'],
      ]},
      { type: 'p', text: 'The math often works in the homeowner\'s favor — especially with garage conversions in the Central Valley where rental demand is strong. Contact C Hernandez Construction for a free estimate on your ADU project and we can help you understand the real numbers before you talk to a lender.' },
    ],
  },

  {
    slug: 'roof-repair-vs-replacement',
    title: 'Roof Repair vs. Full Replacement: How to Know Which One You Need',
    excerpt: 'Not every roofing problem requires a full tear-off. But waiting too long on a replacement can cost far more than the roof itself. Here\'s how to tell the difference.',
    date: 'July 10, 2025',
    category: 'Roofing',
    readTime: '4 min read',
    image: BASE + 'roofing4744e4.jpg',
    content: [
      { type: 'p', text: 'One of the most common questions homeowners ask us is: "Does my roof need to be replaced, or can it be repaired?" The honest answer is that it depends on the age of the roof, the extent of the damage, and the cost comparison between the two options.' },
      { type: 'p', text: 'A reputable roofing contractor will give you a straight assessment. Here\'s what we look at when evaluating a roof.' },

      { type: 'h2', text: 'Signs That Repair Is Enough' },
      { type: 'ul', items: [
        'Isolated damage in one area — a few missing shingles after a storm, a single area of lifted flashing, or one small section of granule loss.',
        'Roof is less than 15 years old — if your shingles have significant life remaining, a targeted repair extends that lifespan cost-effectively.',
        'No underlying deck damage — if the plywood decking under the shingles is solid, a surface repair is viable.',
        'Single leak with clear cause — a flashing failure at a chimney, vent pipe, or skyline is often a clean repair.',
        'The repair cost is well under 30% of a full replacement — if the numbers make sense, repair first.',
      ]},

      { type: 'h2', text: 'Signs That Replacement Is the Right Call' },
      { type: 'ul', items: [
        'Roof is 20+ years old — most dimensional shingles are rated 25–30 years, but Central Valley heat accelerates aging. A roof over 20 years is often near the end of its cost-effective life.',
        'Multiple leak points — if you\'re seeing water intrusion in multiple areas, the shingles have reached the end of their weatherproofing ability.',
        'Widespread granule loss — granules protect shingles from UV damage. Bare patches across large areas of the roof mean the shingles are failing.',
        'Sagging or soft spots — if the roof deck (the plywood) is soft, rotten, or visibly sagging, the structural layer needs replacement, not just the surface.',
        'Shingles curling or buckling across the roof — this is a systemic issue, not isolated damage. The whole roof is aging uniformly.',
        'You\'re planning to sell in 2–3 years — a new roof is a meaningful selling point and avoids renegotiation over roof condition during escrow.',
      ]},

      { type: 'tip', text: 'In the Central Valley, roofs take more UV punishment than in coastal California. Ceres, Modesto, and Turlock average 260+ sunny days per year — that accelerates asphalt shingle degradation. A roof that would last 30 years in Seattle may last 22–25 years here.' },

      { type: 'h2', text: 'What a Full Re-Roof Includes' },
      { type: 'ol', items: [
        'Tear-off — remove existing shingles and inspect decking.',
        'Deck repair — replace any rotten or damaged plywood sections.',
        'Underlayment — install new synthetic or felt underlayment for a waterproof base layer.',
        'Starter strips and drip edge — proper edge flashing is critical and often skipped by low-bid contractors.',
        'New shingles — we install dimensional (architectural) shingles, which provide better weather resistance and a longer warranty than 3-tab.',
        'Ridge cap and all flashing — chimney, pipe boots, valleys, and rakes must all be properly flashed.',
      ]},

      { type: 'h2', text: 'What Does a Re-Roof Cost in the Central Valley?' },
      { type: 'p', text: 'A typical single-story home re-roof in Ceres, Modesto, or Turlock runs $8,000–$16,000 depending on square footage, pitch, and existing layers. Two-story homes and complex roof lines cost more. We provide detailed, itemized written estimates so you can compare apples to apples.' },
      { type: 'p', text: 'C Hernandez Construction does roofing right — proper tear-off, quality underlayment, and clean flashing work. Contact us for a free roof inspection and estimate.' },
    ],
  },

  {
    slug: 'open-concept-remodel-load-bearing-walls',
    title: 'Open Concept Remodel: What to Know Before Removing a Wall',
    excerpt: 'Removing a wall to open up your floor plan sounds simple. But if it\'s load-bearing, the wrong approach can be dangerous and expensive. Here\'s what the process actually involves.',
    date: 'July 3, 2025',
    category: 'Remodeling',
    readTime: '5 min read',
    image: BASE + 'cocina.jpg',
    content: [
      { type: 'p', text: 'Open concept floor plans remain one of the most requested home remodels in the Central Valley. Homeowners want the kitchen, dining, and living areas to flow together — more light, more space, better connection between rooms. The challenge is that the walls separating those spaces are often doing structural work.' },
      { type: 'p', text: 'Removing a load-bearing wall without proper engineering and structural support is one of the most dangerous and costly mistakes in residential remodeling. Here\'s what the process actually looks like when done correctly.' },

      { type: 'h2', text: 'First: Is the Wall Load-Bearing?' },
      { type: 'p', text: 'Not every wall can simply be removed. Load-bearing walls carry the weight of the structure above them — whether that\'s a second floor, roof rafters, or ceiling joists. Non-load-bearing (partition) walls can usually be removed with minimal structural work.' },
      { type: 'p', text: 'Indicators a wall may be load-bearing:' },
      { type: 'ul', items: [
        'The wall runs perpendicular to floor joists or ceiling joists',
        'It sits above a beam, post, or another wall in the floor below (stacked walls)',
        'It\'s located in the center of the house',
        'It runs parallel to the ridge of the roof',
        'The house is two stories and the wall is on the first floor',
      ]},
      { type: 'tip', text: 'Never assume a wall is non-load-bearing just because it looks thin or you\'ve seen similar walls removed elsewhere. The only way to know for certain is to have a structural engineer or experienced contractor assess the framing in your attic or crawlspace.' },

      { type: 'h2', text: 'The Process for Removing a Load-Bearing Wall' },
      { type: 'ol', items: [
        'Structural engineer assessment — A licensed engineer reviews your framing plan and specifies the beam size required to carry the load the wall was supporting. This is not optional for load-bearing walls. Engineered drawings are typically required for the permit.',
        'Building permit — Wall removal and beam installation require a permit in California. An inspector must sign off on the structural work before it\'s covered by drywall.',
        'Temporary shoring — Before demolition, we install temporary walls or posts to carry the load while the permanent beam is being installed. This protects the structure during construction.',
        'Wall demolition — Once shoring is in place, the wall framing is removed. We\'re looking for any hidden plumbing, electrical, or HVAC runs that need to be relocated.',
        'Beam and post installation — The engineered beam is set in place, supported by posts that carry the load down to the foundation. The size and material (LVL, steel, or dimensional lumber) depend on the span and load.',
        'Mechanical relocation — Any plumbing, electrical, or HVAC in the removed wall must be rerouted. This adds cost but is unavoidable.',
        'Framing inspection — The city inspector reviews the beam, posts, and connections before drywall.',
        'Drywall, tape, and texture — Patch the ceiling and adjacent walls to blend with existing surfaces.',
      ]},

      { type: 'h2', text: 'How Much Does It Cost?' },
      { type: 'table', headers: ['Scope', 'Typical Cost'], rows: [
        ['Non-load-bearing wall removal', '$1,500–$4,000'],
        ['Load-bearing wall with beam (no mechanicals)', '$6,000–$14,000'],
        ['Load-bearing wall with electrical relocation', '$9,000–$18,000'],
        ['Load-bearing wall with plumbing relocation', '$12,000–$25,000+'],
        ['Structural engineer fee', '$800–$2,500'],
      ]},
      { type: 'p', text: 'The biggest variable is whether plumbing runs through the wall. Moving drains is significantly more expensive than moving electrical.' },

      { type: 'h2', text: 'Working With C Hernandez Construction' },
      { type: 'p', text: 'We\'ve completed open concept conversions throughout Ceres, Modesto, and the Central Valley. We handle the structural assessment, coordinate with the engineer, pull the permit, and manage the framing, mechanical relocation, and drywall in one project. Contact us for a free walkthrough and estimate.' },
    ],
  },

  {
    slug: 'drywall-texture-guide',
    title: 'Drywall Textures Explained: Orange Peel, Knockdown, Skip Trowel & More',
    excerpt: 'Choosing the wrong texture can make patched walls look mismatched forever. Here\'s a guide to the most common drywall textures used in Central Valley homes and how to match existing walls.',
    date: 'June 26, 2025',
    category: 'Remodeling',
    readTime: '4 min read',
    image: BASE + 'pintura.jpg',
    content: [
      { type: 'p', text: 'When we finish drywall on a new room addition, ADU, or remodel, one of the most important decisions is texture — and it\'s one that homeowners often underestimate. Choose the wrong texture (or have it applied by someone unfamiliar with the technique) and you\'ll have a room that never quite looks like the rest of the house.' },
      { type: 'p', text: 'Here\'s a guide to the most common drywall textures in Central Valley homes and what you need to know about each one.' },

      { type: 'h2', text: 'Orange Peel' },
      { type: 'p', text: 'The most common texture in newer California homes (built roughly 1990–present). Named for its resemblance to the skin of an orange — a subtle, bumpy pattern applied by spraying diluted joint compound through a hopper gun.' },
      { type: 'ul', items: [
        'Appearance: Small, uniform bumps with no pattern',
        'Application: Spray — fast and consistent on large surfaces',
        'Difficulty to match: Moderate — nozzle size, pressure, and compound dilution must all match the existing texture',
        'Common in: Most tract homes in Ceres, Modesto, Turlock built after 1985',
      ]},

      { type: 'h2', text: 'Knockdown' },
      { type: 'p', text: 'A step up from orange peel in visual interest. Joint compound is sprayed or applied in splatter patterns, then "knocked down" with a drywall knife — flattening the peaks and leaving irregular flat patches separated by low-relief texture.' },
      { type: 'ul', items: [
        'Appearance: Irregular flat "islands" with visible texture between them — looks like stucco or plaster',
        'Application: Spray or hand-applied, then knocked with a blade',
        'Difficulty to match: Harder than orange peel — the timing of the knockdown pass is critical',
        'Common in: Homes built 1970s–2000s, also used in bathrooms and kitchens',
      ]},

      { type: 'h2', text: 'Skip Trowel' },
      { type: 'p', text: 'A hand-applied texture that creates a handcrafted, Mediterranean look. Joint compound is applied in irregular overlapping arcs with a curved trowel, leaving skip patterns. No two skip trowel walls look exactly the same.' },
      { type: 'ul', items: [
        'Appearance: Irregular arcing, overlapping flat patches — more variation than knockdown',
        'Application: Hand-applied only — requires skilled technique',
        'Difficulty to match: Difficult — highly skill-dependent and variable',
        'Common in: Custom homes, upscale remodels, Spanish or Mediterranean-style properties',
      ]},

      { type: 'h2', text: 'Smooth (Level 5)' },
      { type: 'p', text: 'Perfectly smooth walls with no texture. Requires a Level 5 drywall finish — multiple coats of compound, skim coat over the entire surface, and flawless sanding. Any imperfection is visible under raking light.' },
      { type: 'ul', items: [
        'Appearance: Flat, no visible texture',
        'Application: Full skim coat + extensive sanding',
        'Difficulty to match: Very difficult — any patch will show unless the entire wall is recoated',
        'Common in: Modern/contemporary homes, high-end remodels',
      ]},

      { type: 'tip', text: 'When we\'re patching or adding to an existing room, we always spray a test patch on a scrap piece of drywall and hold it next to the existing wall in the same lighting before touching the actual surface. Getting texture to match is part science, part experience.' },

      { type: 'h2', text: 'Matching Existing Texture: What Makes It Hard' },
      { type: 'p', text: 'Matching existing texture is one of the hardest finishing tasks in drywall work. The original texture may have been applied 20–30 years ago with different equipment and compound. It has been painted multiple times, which softens and fills the texture pattern over time. Lighting conditions dramatically change how texture reads.' },
      { type: 'p', text: 'At C Hernandez Construction, our finishing crew has matched textures in hundreds of homes across the Central Valley. We don\'t just spray and hope — we take time to get it right before touching your walls. Contact us for drywall, texture, and painting on your next project.' },
    ],
  },

  {
    slug: 'second-story-addition-guide',
    title: 'Adding a Second Story: What\'s Involved and Is Your House a Good Candidate?',
    excerpt: 'A second-story addition doubles your living space without losing backyard. But not every home is a good candidate. Here\'s what determines feasibility, cost, and timeline.',
    date: 'June 19, 2025',
    category: 'Planning',
    readTime: '6 min read',
    image: BASE + 'framing73763673.jpg',
    content: [
      { type: 'p', text: 'Second-story additions are one of the most dramatic ways to expand a home. Instead of encroaching on your lot, you build up — potentially doubling your square footage while keeping your backyard intact. But second-story additions are also the most complex residential construction projects a homeowner can undertake.' },
      { type: 'p', text: 'Here\'s an honest guide to what\'s involved, what it costs, and how to know if your home is a good candidate.' },

      { type: 'h2', text: 'Can My House Support a Second Story?' },
      { type: 'p', text: 'This is the first and most critical question. Not every foundation and first-floor framing system can support the additional load of a second story without significant — and expensive — reinforcement.' },
      { type: 'p', text: 'Factors a structural engineer will evaluate:' },
      { type: 'ul', items: [
        'Foundation type and condition — a post-tension slab or continuous concrete perimeter foundation in good condition can often support a second story; a raised wood foundation may need reinforcement.',
        'First-floor wall framing — walls must be capable of carrying the additional vertical load. Undersized plates, missing cripple walls, or non-standard stud spacing can require remediation.',
        'Existing beam and header sizing — openings for doors and windows on the first floor have headers carrying load. Second-story weight increases those loads and headers may need upsizing.',
        'Soil conditions — some Central Valley soils have expansion and contraction characteristics that affect foundation performance under added load.',
        'Age of construction — homes built before 1960 often have lighter framing conventions that need engineering review.',
      ]},
      { type: 'tip', text: 'A structural engineer assessment for a second-story addition costs $1,500–$4,000. It\'s the most important money you\'ll spend early in the process — it tells you whether the project is feasible, what reinforcement is needed, and what beam sizes the framing crew must use.' },

      { type: 'h2', text: 'Homes That Are Good Candidates' },
      { type: 'ul', items: [
        'Single-story ranch homes on a concrete slab with 2x6 exterior wall framing',
        'Homes where the interior space is limited but the lot doesn\'t allow for horizontal expansion',
        'Properties with ADU restrictions that prevent a backyard structure',
        'Homes where the homeowner wants to stay in the neighborhood but needs significantly more space',
        'Post-1978 construction (generally better-documented framing)',
      ]},

      { type: 'h2', text: 'What the Construction Process Looks Like' },
      { type: 'ol', items: [
        'Structural engineering — engineer reviews the existing structure and designs the second-floor framing system, specifying beam sizes, post locations, and any first-floor reinforcement required.',
        'Architectural plans — you need full plans showing floor layout, exterior elevations, and roof design for permit submittal.',
        'Permit submittal and plan check — expect 6–12 weeks for permit approval. Cities require full structural review for second-story additions.',
        'First-floor reinforcement — before framing begins, any required upgrades to the foundation, walls, or headers are completed.',
        'Roof removal — the existing roof must come off to expose the top plates and allow second-floor framing to begin.',
        'Second-floor framing — floor system, wall framing, and new roof structure are built in sequence.',
        'Rough mechanicals — electrical, HVAC ductwork, and plumbing are roughed in before insulation and drywall.',
        'Inspections — framing, rough electrical, rough plumbing, insulation, and drywall inspections throughout construction.',
        'Finish work — drywall, texture, trim, flooring, fixtures, and paint.',
        'Final inspection — city inspector signs off and issues occupancy.',
      ]},

      { type: 'h2', text: 'Cost and Timeline' },
      { type: 'table', headers: ['Item', 'Typical Range'], rows: [
        ['Structural engineering', '$2,000–$4,000'],
        ['Architectural plans', '$8,000–$18,000'],
        ['Permit fees', '$5,000–$15,000'],
        ['Construction (1,000 sq ft addition)', '$200,000–$350,000'],
        ['Total project', '$215,000–$387,000+'],
        ['Construction timeline', '6–10 months'],
      ]},

      { type: 'h2', text: 'Is It Worth It?' },
      { type: 'p', text: 'In the Central Valley, second-story additions typically recover 60–80% of cost in added property value immediately. But the real value comes from staying in a neighborhood you love, avoiding a move, and getting the space your family actually needs. Many of our clients tell us it was the best home investment they made.' },
      { type: 'p', text: 'C Hernandez Construction has framed second-story additions in Ceres, Modesto, and surrounding cities. We work from your engineer\'s plans, pull all permits, and manage the framing and rough-in work through to a complete structure ready for finish trades. Contact us to discuss your project.' },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}
