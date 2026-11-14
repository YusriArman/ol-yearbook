import type { Achievement, ExcobodTerm, PmapmPeriod } from './types'

// Achievements. Add an optional `link` to show a “See More” button on a card.
export const achievements: Achievement[] = [
  {
    "name": "Phoon Yuk Guan",
    "achievement": "Designer of OP 2024 (Celestial)",
    "summary": "Designer of OP 2024 (Celestial)",
    "description": "Designed all the elements and assets for Celestial Orientation Party 2024.",
    "image": "/images/fame/celestialdesign.jpg",
    "alt": "Phoon Yuk Guan",
    "keywords": "Designer of OP 2024 (Celestial)"
  },
  {
    "name": "Victor Wong",
    "achievement": "Web Developer for OP 2024 Ticketing",
    "summary": "Ticketing System Developer (OP 2024)",
    "description": "Built a ticketing system for OP 2024 that allowed freshmen to RSVP to the event.",
    "image": "/images/fame/celestialticketingsystem.jpg",
    "alt": "Victor Wong",
    "keywords": "Ticketing System Developer"
  },
  {
    "name": "Eugenie Ngu",
    "achievement": "Book Of OL",
    "summary": "Book Of OL",
    "description": "Celebrates the history of OL and current achievements in one publication.",
    "image": "/images/fame/bookofol.jpg",
    "alt": "Eugenie Ngu",
    "keywords": "Book Of OL"
  },
  {
    "name": "Yong Tung Joe & Eugenie Ngu",
    "achievement": "First Initiator of TOL Election Day",
    "summary": "First Initiator of TOL Election Day",
    "description": "Initiated and planned the first-ever physical TOL election in 2024.",
    "image": "/images/fame/tolelection2024.jpg",
    "alt": "First Initiator of TOL Election Day",
    "keywords": "First TOL Election Day"
  },
  {
    "name": "Kong Yen Ee",
    "achievement": "Creator of Head, Shoulders, Knees & Ducks of Freshie Games September 2023",
    "summary": "Creator of Head, Shoulders, Knees & Ducks Game",
    "description": "Head, Shoulders, Knees & Ducks has consistently been a top freshie favourite game.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "Head, Shoulders, Knees & Ducks Game",
    "keywords": "Creator of Head, Shoulders, Knees & Ducks of Freshie Games September 2023"
  },
  {
    "name": "Chern Qiao Le",
    "achievement": "Designer of CNS Fest 2025 T-Shirt",
    "summary": "Designer of CNS Fest 2025 T-Shirt",
    "description": "Designed the T shirt for 2025 CNS Fest.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "CNS Fest 2025 T-Shirt",
    "keywords": "Designer of CNS Fest 2025 T-Shirt"
  },
  {
    "name": "Lee Zoe, Eng Xin Yu & Chern Qiao Le",
    "achievement": "Creator of Capture the Duck",
    "summary": "Creator of Capture the Duck",
    "description": "“Capture the Duck” is an activity created for freshmen and students during CNS, successfully sparking high participation and boosting social media engagement.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "Capture the Duck Engagement Game",
    "keywords": "Creator of Capture the Duck Engagement Game in CNS"
  },
  {
    "name": "Phoon Yuk Guan",
    "achievement": "Creator of Engagement Day Circle Floor Plan",
    "summary": "Creator of Engagement Day Circle Floor Plan",
    "description": "The seating arrangement in a circle that is widely used in most of the engagement days for grouping was created in Jan 2024.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "Engagement Day Circle Floor Plan",
    "keywords": "Creator of Engagement Day Circle Floor Plan"
  },
  {
    "name": "Nur Alyssa & Evelyn Wong",
    "achievement": "Designer of OP 2025 (Eclipse)",
    "summary": "Designer of OP 2025 (Eclipse)",
    "description": "Designed all the elements and assets for Eclipse Orientation Party 2025.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "OP 2025 Eclipse Design",
    "keywords": "Designer of OP 2025 (Eclipse)"
  },
  {
    "name": "Ho Zanna",
    "achievement": "Designer of TBC Shirt 2025",
    "summary": "Designer of TBC Shirt 2025",
    "description": "Designed the T-Shirt for TBC 2025.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "TBC Shirt 2025",
    "keywords": "Designer of TBC Shirt 2025"
  },
  {
    "name": "Leong Jia Hui",
    "achievement": "Designer of TBC Shirt 2024",
    "summary": "Designer of TBC Shirt 2024",
    "description": "Designed the T-Shirt for TBC 2024.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "TBC Shirt 2024",
    "keywords": "Designer of TBC Shirt 2024"
  },
  {
    "name": "Cyndi Lee",
    "achievement": "Designer of Social Night AUG 2025 (Enchanta)",
    "summary": "Designed all the elements and assets for Social Night AUG 2025 (Enchanta)",
    "description": "Designed all the elements and assets for Social Night AUG 2025 (Enchanta).",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "Social Night AUG 2025 Enchanta Design",
    "keywords": "Designer of Social Night AUG 2025 (Enchanta)"
  },
  {
    "name": "Ho Jia Rou",
    "achievement": "Designer of TOL Polo Shirt 24/25",
    "summary": "Designer of TOL Polo Shirt 24/25",
    "description": "Designed the Polo Shirt for Term 24/25.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "TOL Polo Shirt 24/25",
    "keywords": "Designer of TOL Polo Shirt 24/25"
  },
  {
    "name": "Jeremy Kan Ren Wei",
    "achievement": "Designer of OL Varsity Jacket",
    "summary": "Designer of OL Varsity Jacket",
    "description": "Designed the OL Varsity Jacket for 2025.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "OL Varsity Jacket 2025",
    "keywords": "Designer of OL Varsity Jacket"
  },
  {
    "name": "Lim En Yui",
    "achievement": "Designer of TBC Shirt 2023",
    "summary": "Designer of TBC Shirt 2023",
    "description": "Designed the T-Shirt for TBC 2023.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "TBC Shirt 2023",
    "keywords": "Designer of TBC Shirt 2023"
  },
  {
    "name": "Nurul Natasya",
    "achievement": "The OL Met Gala Appreciation Dinner Mug Designer",
    "summary": "The OL Met Gala Appreciation Dinner Mug Designer",
    "description": "Designed the mug that was given to Orientation Leaders during the Appreciation Dinner.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "OL Met Gala Appreciation Dinner Mug",
    "keywords": "The OL Met Gala Appreciation Dinner Mug Designer"
  },
  {
    "name": "Phoon Yuk Guan",
    "achievement": "TOL 24/25 Yearbook Website",
    "summary": "TOL 24/25 Yearbook Website",
    "description": "Developed and designed the yearbook website entirely from scratch.",
    "image": "/images/fame/pmapm-generic.jpg",
    "alt": "TOL 24/25 Yearbook Website",
    "keywords": "TOL 24/25 Yearbook Website"
  }
]

// PMAPMs by month, newest first.
export const pmapm: PmapmPeriod[] = [
  {
    "period": "DEC 2025",
    "events": [
      {
        "title": "OL Retreat",
        "people": [
          "Lai Wei Qi",
          "Hing Hai Yun",
          "Jacqueline Lo Jia En",
          "Joanne Phang Zi Xuan",
          "Pelicia Tang Ying Jing"
        ]
      }
    ]
  },
  {
    "period": "NOV 2025",
    "events": [
      {
        "title": "Sports Day",
        "people": [
          "Ho Zan Na",
          "Chin Li Yuan",
          "Hong Min Thong"
        ]
      }
    ]
  },
  {
    "period": "OCT 2025",
    "events": [
      {
        "title": "The Haunted OLloween Party",
        "people": [
          "Jessica Laurent",
          "Aishath Zuha",
          "Chryseis Ng Ke Sin",
          "Elvina Laurencia Ryanto",
          "Jacqueline Lo Jia En",
          "Rianna Tseu Lar Yon"
        ]
      }
    ]
  },
  {
    "period": "SEPT 2025",
    "events": [
      {
        "title": "Pre Orientation Briefing",
        "people": [
          "Aleesya Izzhana Binti Syaiful Izdihar",
          "Elvina Laurencia Ryanto"
        ]
      },
      {
        "title": "Academic Briefing",
        "people": [
          "Pelicia Tang Ying Jing",
          "Hing Hai Yun",
          "Jesselyn Liew Yi Zhen",
          "Rafidah Tan Xue Rou"
        ]
      },
      {
        "title": "FLAME",
        "people": [
          "Khoo Han Qian",
          "Karmila Hismawadi"
        ]
      },
      {
        "title": "Engagement Day",
        "people": [
          "Serene Tang Yu Xuan",
          "Bryan Cheng Yi Khai",
          "Felice",
          "Joel John Tan Juner"
        ]
      },
      {
        "title": "Workshops",
        "people": [
          "Chou Wen Wei",
          "Cindy Chuah Chin Li",
          "Khoo Xiao Ming"
        ]
      },
      {
        "title": "Orientation Party",
        "people": [
          "Joshua Sam Jo Ken",
          "Bob Loh Yong Shuen",
          "Evelyn Wong Hui Jia",
          "Lai Pei Xi",
          "Nur Alyssa"
        ]
      },
      {
        "title": "CNS Fest",
        "people": [
          "Eng Xin Yu",
          "Chern Qiao Le",
          "Lee Zoe"
        ]
      },
      {
        "title": "Content Creator Team Sept 2025",
        "people": [
          "Ellee Siew Zhi Yin",
          "Iris Kwai Kit Ying",
          "Wong Ki Hurn"
        ]
      }
    ]
  },
  {
    "period": "AUG 2025",
    "events": [
      {
        "title": "Pre Orientation Briefing",
        "people": [
          "Ivan Joshua George",
          "Vivienne Siew Ruo-Qing"
        ]
      },
      {
        "title": "Academic Briefing",
        "people": [
          "Khor Vi Ken",
          "Jaydon Julius"
        ]
      },
      {
        "title": "Engagement Day",
        "people": [
          "Gabrielle Yap Ning Xuan",
          "Aryan Kashyap",
          "Ellee Siew Zhi Yin"
        ]
      },
      {
        "title": "Workshops",
        "people": [
          "Chia Xin Xuan",
          "Joel Chong",
          "Yap Wai Yi"
        ]
      },
      {
        "title": "Taylor’s Explorer",
        "people": [
          "Tan Ming Reo",
          "Joanne Angelina Chong",
          "Teoh Wen Han"
        ]
      },
      {
        "title": "Social Night",
        "people": [
          "Ng Poh Yen",
          "Choo Lin Ling",
          "Lee Sam Yee Cyndi",
          "Md Rumaiut Islam (Sabid)"
        ]
      },
      {
        "title": "FLAME",
        "people": [
          "Iris Kwai Kit Ying"
        ]
      },
      {
        "title": "Content Creator Team Aug 2025",
        "people": [
          "Lai Wei Qi",
          "Jacqueline Lo Jia En",
          "Wong Ki Hurn"
        ]
      }
    ]
  },
  {
    "period": "JULY 2025",
    "events": [
      {
        "title": "Roots to Riches",
        "people": [
          "Hong Min Thong",
          "Dena Choong Zi En"
        ]
      }
    ]
  },
  {
    "period": "May 2025",
    "events": [
      {
        "title": "Appreciation Dinner",
        "people": [
          "Sri Vaishnevi",
          "Abirah Yasmin",
          "Cindy Cornelia Liempahala",
          "Shaohanna Joy"
        ]
      }
    ]
  },
  {
    "period": "APR 2025",
    "events": [
      {
        "title": "Pre Orientation Briefing",
        "people": [
          "Ivan Joshua George",
          "Lucas Lim Yan Jun"
        ]
      },
      {
        "title": "Academic Briefing & FLAME",
        "people": [
          "Nur Alyssa",
          "Lai Pei Xi",
          "Syarifah Syaza"
        ]
      },
      {
        "title": "Engagement Day",
        "people": [
          "Chin Li Yuan",
          "Yusri Arman"
        ]
      },
      {
        "title": "Workshops",
        "people": [
          "Khoo Jia Yi",
          "Thomas Mok Tien Yuen"
        ]
      },
      {
        "title": "Humans of Taylor’s",
        "people": [
          "Ng Poh Yen",
          "Goh Wayen"
        ]
      },
      {
        "title": "Freshie Games",
        "people": [
          "Lee Zoe",
          "Young Zhi Xuan",
          "Lorraine Lim"
        ]
      },
      {
        "title": "CNS Fest",
        "people": [
          "Chloe Wong Wan Qing",
          "Bob Loh Yong Shuen",
          "Chan Cheok Hua"
        ]
      }
    ]
  },
  {
    "period": "MARCH 2025",
    "events": [
      {
        "title": "The Bewitched Academy Workshop",
        "people": [
          "Evelyn Wong Hui Jia",
          "Cindy Cornelia Liempahala"
        ]
      }
    ]
  },
  {
    "period": "FEBRUARY 2025",
    "events": [
      {
        "title": "Huat a time with OL",
        "people": [
          "Syarifah Syaza",
          "Ivan Joshua George"
        ]
      }
    ]
  },
  {
    "period": "JAN 2025",
    "events": [
      {
        "title": "Academic Briefing & FLAME",
        "people": [
          "Anandleen Kaur",
          "Teh Su Wei",
          "Yong Tung Joe"
        ]
      },
      {
        "title": "Engagement Day",
        "people": [
          "Hong Min Thong",
          "Lee Yi Jing",
          "Nur Alyssa"
        ]
      },
      {
        "title": "Workshops",
        "people": [
          "Joshua Sam Jo Ken",
          "Lai Pei Xi"
        ]
      },
      {
        "title": "Freshie Games",
        "people": [
          "Jeremy Kan Ren Wei",
          "Vivienne Siew"
        ]
      }
    ]
  },
  {
    "period": "DEC 2024",
    "events": [
      {
        "title": "OL Retreat",
        "people": [
          "Ivan Joshua George",
          "Chee Xin Yi",
          "Lai Weng Kit",
          "Lucas Lim Yan Jun",
          "Bob Loh Yong Shuen"
        ]
      }
    ]
  },
  {
    "period": "OCT 2024",
    "events": [
      {
        "title": "Bond Beyond The Game:",
        "people": [
          "Ho Jia Rou",
          "Angie Choo Ai Qi",
          "Evelyn Wong Hui Jia",
          "Shermaine"
        ]
      },
      {
        "title": "Sports Day",
        "people": [
          "Syarifah Syaza",
          "Hue Wan Teng",
          "Poh Zi Qian"
        ]
      }
    ]
  },
  {
    "period": "SEPT 2024",
    "events": [
      {
        "title": "Academic Briefing",
        "people": [
          "Yuen Ji Shaun",
          "Lai Pei Xi",
          "Olivia Cheong",
          "Wong Hui Yeng"
        ]
      },
      {
        "title": "Engagement Day",
        "people": [
          "Eng Xin Yu",
          "Joshua Sam",
          "Lee Zoe",
          "Young Zhi Xuan"
        ]
      },
      {
        "title": "Workshops",
        "people": [
          "Felicia Indrayana",
          "Brandon Tan",
          "Celine Yusda"
        ]
      },
      {
        "title": "FLAME",
        "people": [
          "Wan Hanim Syauqina",
          "Ng Min Hsuen"
        ]
      },
      {
        "title": "Orientation Party",
        "people": [
          "Elisha Paulraj",
          "Pang Peying",
          "Phoon Yuk Guan",
          "Victor Wong Yi Ming",
          "Kong Yen Ee"
        ]
      },
      {
        "title": "CNS",
        "people": [
          "Keh Zyi Yenn",
          "Ayesha Ibrahim",
          "Wong Khye Qing"
        ]
      },
      {
        "title": "Content Creator Team Sept 2024",
        "people": [
          "Kei",
          "Nurul Natasya"
        ]
      }
    ]
  },
  {
    "period": "AUG 2024",
    "events": [
      {
        "title": "Academic Briefing",
        "people": [
          "Cindy Cornelia Liempahala",
          "Ivan Joshua George",
          "Bob Loh Yong Shuen"
        ]
      },
      {
        "title": "Engagement Day",
        "people": [
          "Teoh Wen Han",
          "Yap Eu Wey"
        ]
      },
      {
        "title": "Workshop",
        "people": [
          "Lai Weng Kit",
          "Chee Xin Yi",
          "Lucas Lim Yan Jun"
        ]
      },
      {
        "title": "Freshie Games",
        "people": [
          "Nur Alyssa",
          "Fynn Anneliese",
          "Nurul Natasya"
        ]
      },
      {
        "title": "FLAME",
        "people": [
          "Abirah Yasmin",
          "Lakshanduray"
        ]
      },
      {
        "title": "Humans of Taylor’s",
        "people": [
          "Khoo Jia Yi",
          "Ho Zan na",
          "Tai Zhe Yong"
        ]
      },
      {
        "title": "Social Night",
        "people": [
          "Chin Yun Xien",
          "Charista Elliani Andriana",
          "Vivienne Siew Ruo-Qing",
          "Thomas Mok Tien Yuen"
        ]
      },
      {
        "title": "Content Creator Team Aug 2024",
        "people": [
          "Teh Su Wei",
          "Sarah Akram"
        ]
      }
    ]
  },
  {
    "period": "JULY 2024",
    "events": [
      {
        "title": "Appreciation Dinner",
        "people": [
          "Tan Jia Yee",
          "Angel Tan Xin Kei",
          "Ayesha Ibrahim",
          "Kong Cai Yi"
        ]
      },
      {
        "title": "Apprentice Starting Point Workshop",
        "people": [
          "Hong Min Thong",
          "Yap Yong Liang"
        ]
      }
    ]
  },
  {
    "period": "APRIL 2024",
    "events": [
      {
        "title": "Academic Briefing & FLAME",
        "people": [
          "Chloe Wong Wan Qing",
          "Crystal Chan",
          "Hue Wan Teng"
        ]
      },
      {
        "title": "Engagement Day",
        "people": [
          "Ng Poh Yen",
          "Wong Khye Qing"
        ]
      },
      {
        "title": "Workshop",
        "people": [
          "Lim En Yu",
          "Goh Wayen"
        ]
      },
      {
        "title": "Freshie Games",
        "people": [
          "Coco Kuan",
          "Chin Yun Xien"
        ]
      },
      {
        "title": "Social Night",
        "people": [
          "Wan Nadzirah",
          "Hong Min Thong",
          "Lorraine Lim"
        ]
      },
      {
        "title": "CNS Fest",
        "people": [
          "Rachel Tan",
          "Merissa Quah",
          "Nicole Tan"
        ]
      }
    ]
  },
  {
    "period": "FEB 2024",
    "events": [
      {
        "title": "How to be an OL 101 Workshop",
        "people": [
          "Pang Peying",
          "Chin Yun Xien",
          "Ooi Kee Zoe",
          "Michael Tan"
        ]
      },
      {
        "title": "Long Long Reunion Chinese New Year Party",
        "people": [
          "Loh Jynshwen",
          "Chan Cheok Hua"
        ]
      }
    ]
  },
  {
    "period": "JAN 2024",
    "events": [
      {
        "title": "Academic Briefing",
        "people": [
          "Yap Yong Liang",
          "Natalie Loo",
          "Parveen Raj"
        ]
      },
      {
        "title": "Engagement Day",
        "people": [
          "Phoon Yuk Guan",
          "Goh Wayen"
        ]
      },
      {
        "title": "Workshops",
        "people": [
          "Syarifah Syaza",
          "Ayesha Ibrahim"
        ]
      },
      {
        "title": "Indoor Freshie & Campus Tour",
        "people": [
          "Hong Min Thong",
          "Ooi Kee Zoe"
        ]
      },
      {
        "title": "FLAME",
        "people": [
          "Wong Khye Qing",
          "Jeremy Kan Ren Wei"
        ]
      },
      {
        "title": "Social Night",
        "people": [
          "Eugenie Ngu Jing Yi",
          "Darren Chin Tze Hen",
          "Keh Zyi Yenn"
        ]
      }
    ]
  }
]

// EXCOBOD line-ups by term.
export const excobods: ExcobodTerm[] = [
  {
    "term": "EXCOBOD Term 22/23",
    "image": "/images/fame/excobod-2223.jpg",
    "alt": "EXCOBOD 22/23",
    "roles": [
      {
        "role": "President",
        "name": "Natalie Wong Hwei Ming"
      },
      {
        "role": "Vice President",
        "name": "Rehana Kaur Godrei"
      },
      {
        "role": "Secretary",
        "name": "Wan Nadzirah Binti Wan Nadhri"
      },
      {
        "role": "Treasurer",
        "name": "Nicole Tan Suet Lynn"
      },
      {
        "role": "Director Members’ Dev",
        "name": "Lorraine Lim Xing Sien"
      },
      {
        "role": "Asst. Director Members’ Dev",
        "name": "Winnie Tan Sangueza"
      },
      {
        "role": "Director Sponsorship",
        "name": "Hoo Jia Xin"
      },
      {
        "role": "Asst. Director Sponsorship",
        "name": "Au Jing Yee"
      },
      {
        "role": "Director Public Relations",
        "name": "Teh Su Mynn"
      },
      {
        "role": "Asst. Director Public Relations",
        "name": "Lew Chye Wei (Sherlyn)"
      },
      {
        "role": "Director Resource Management",
        "name": "Lau Yong Qi"
      },
      {
        "role": "Asst. Director Resource Management",
        "name": "Ho Jia Xuan"
      }
    ]
  },
  {
    "term": "EXCOBOD Term 23/24",
    "image": "/images/fame/excobod-2324.jpg",
    "alt": "EXCOBOD 23/24",
    "roles": [
      {
        "role": "President",
        "name": "Yong Tung Joe"
      },
      {
        "role": "Vice President",
        "name": "Eugenie Ngu Jing Yi"
      },
      {
        "role": "Secretary",
        "name": "Sri Vaishnevi A/P S.Ramis"
      },
      {
        "role": "Treasurer",
        "name": "Ameer Shahril"
      },
      {
        "role": "Director Members’ Dev",
        "name": "Loh Jynshwen"
      },
      {
        "role": "Asst. Director Members’ Dev",
        "name": "Chan Cheok Hua"
      },
      {
        "role": "Director Sponsorship",
        "name": "Yusri Arman"
      },
      {
        "role": "Asst. Director Sponsorship",
        "name": "Wong Wan Qing (Chloe)"
      },
      {
        "role": "Director Public Relations",
        "name": "Kong Cai Yi"
      },
      {
        "role": "Asst. Director Public Relations",
        "name": "Angel Tan Xin Kei"
      },
      {
        "role": "Director Resource Management",
        "name": "Kan Ren Wei (Jeremy)"
      },
      {
        "role": "Asst. Director Resource Management",
        "name": "Ng Poh Yen"
      }
    ]
  },
  {
    "term": "EXCOBOD Term 24/25",
    "image": "/images/fame/excobod-2425.jpg",
    "alt": "EXCOBOD 24/25",
    "roles": [
      {
        "role": "President",
        "name": "Yusri Arman"
      },
      {
        "role": "Vice President",
        "name": "Phoon Yuk Guan"
      },
      {
        "role": "Secretary",
        "name": "Vivienne Siew-Ruo Qing"
      },
      {
        "role": "Treasurer",
        "name": "Lai Weng Kit"
      },
      {
        "role": "Director Members’ Dev",
        "name": "Syarifah Syaza"
      },
      {
        "role": "Asst. Director Members’ Dev",
        "name": "Ivan Joshua George"
      },
      {
        "role": "Director Sponsorship",
        "name": "Lucas Lim Yan Jun"
      },
      {
        "role": "Asst. Director Sponsorship",
        "name": "Chee Xin Yi"
      },
      {
        "role": "Asst. Director Sponsorship",
        "name": "Khoo Jia Yi"
      },
      {
        "role": "Director Public Relations",
        "name": "Nurul Natasya"
      },
      {
        "role": "Asst. Director Public Relations",
        "name": "Kong Yen Ee"
      },
      {
        "role": "Director Resource Management",
        "name": "Ho Jia Rou"
      },
      {
        "role": "Asst. Director Resource Management",
        "name": "Mok Tien Yuen (Thomas)"
      }
    ]
  }
]
