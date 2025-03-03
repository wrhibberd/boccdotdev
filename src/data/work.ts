interface Work {
  status?: "WIP" | "Completed" | "Ongoing";
  year?: 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024;
  title: string;
  description?: string;
  partners?: Array<{
    name: string;
    link?: string;
  }>;
  service: Array<"Design" | "Development">;
  stack: Array<
    | "Craft CMS"
    | "Sprig (HTMX)"
    | "AlpineJs"
    | "GSAP"
    | "Astro"
    | "Taxi.js"
    | "Motion One"
    | "Three.js"
    | "Vite"
    | "Webpack"
    | "Tailwind"
    | "Highway.js"
  >;
  link:
    | {
        text: string;
        url: string;
      }
    | undefined;
}

const work = [
  {
    status: "WIP",
    year: 2024,
    title: "MISTER",
    partners: [
      {
        name: "MISTER",
        link: "https://mister.studio/",
      },
    ],
    service: ["Development"],
    // link: {
    // 	url: "https://mister.studio/",
    // },
  },
  {
    status: "WIP",
    year: 2024,
    title: "Beam",
    partners: [
      {
        name: "SB8",
        link: "https://www.sb8.studio/",
      },
    ],
    service: ["Development"],
    link: {
      url: "https://bemorebeam.com/",
    },
  },
  // {
  // 	status: "In Progress",
  // 	year: 2024,
  // 	title: "ESPO",
  // 	partners: {
  // 		name: "Bellow Studio",
  // 		link: "https://twitter.com/BellowStudio",
  // 	},
  // 	service: ["Development"],
  // },
  // {
  // 	status: "In Progress",
  // 	year: 2024,
  // 	title: "Centre for Innovation in Mathematics Teaching",
  // 	partners: {
  // 		name: "Intercity",
  // 		link: "https://intercitystudio.com/",
  // 	},
  // 	service: ["Development"],
  // },
  // {
  // 	status: "In Progress",
  // 	title: "Ocean Ecology",
  // 	service: ["Design", "Development"],
  // 	stack: [
  // 		"Craft CMS",
  // 		"Sprig (HTMX)",
  // 		"AlpineJs",
  // 		"GSAP",
  // 		"Taxi.js",
  // 		"Tailwind",
  // 	],
  // },
  {
    year: 2025,
    title: "The Founder Office Blueprint",
    partners: [
      {
        name: "ThatThing",
        link: "https://deliveredbypost.com/",
      },
      {
        name: "SB8",
        link: "https://www.sb8.studio/",
      },
    ],
    service: ["Development"],
    link: {
      url: "https://thefounderoffice.com/",
    },
  },
  {
    year: 2025,
    title: "POST",
    partners: [
      {
        name: "POST",
        link: "https://deliveredbypost.com/",
      },
      {
        name: "SB8",
        link: "https://www.sb8.studio/",
      },
    ],
    service: ["Development"],
    link: {
      url: "https://deliveredbypost.com/",
    },
  },
  {
    year: 2024,
    title: "RBC",
    partners: [
      {
        name: "The Modern World",
        link: "https://themodernworld.co.uk/",
      },
    ],
    service: ["Development"],
    link: {
      url: "https://ruthbadger.com/",
    },
  },
  // {
  // 	year: 2024,
  // 	title: "Born 2 Localize",
  // 	partners: {
  // 		name: "REZ",
  // 		link: "https://www.tabrez.cc/",
  // 	},
  // 	service: ["Development"],
  // 	link: {
  // 		url: "https://born2localize.com/",
  // 	},
  // },
  {
    year: 2024,
    title: "Cicada",
    partners: [
      {
        name: "Intercity",
        link: "https://intercitystudio.com/",
      },
    ],
    service: ["Development"],
    link: {
      url: "https://experiencecicada.com/",
    },
  },
  {
    year: 2024,
    title: "Settled Culture",
    partners: [
      {
        name: "I Am Sam Creative",
        link: "https://iamsamcreative.co.uk/",
      },
    ],
    service: ["Development"],
    link: {
      url: "https://settledculture.org.uk/",
    },
  },
  {
    year: 2024,
    title: "Dice Consulting",
    partners: [
      {
        name: "POST",
        link: "https://deliveredbypost.com/",
      },
    ],
    service: ["Development"],
    link: {
      url: "https://diceconsult.co.uk/",
    },
  },
  {
    year: 2024,
    title: "Harbour House",
    partners: [
      {
        name: "Intercity",
        link: "https://intercitystudio.com/",
      },
    ],
    service: ["Development"],
    link: {
      url: "https://harbourhouse.org.uk/",
    },
  },
  {
    // status: "Ongoing",
    year: 2023,
    title: "The House Group",
    service: ["Design", "Development"],
    stack: ["Craft CMS", "Sprig (HTMX)", "AlpineJs", "Motion One", "Tailwind"],
    link: {
      url: "https://thehouse-group.com/",
    },
  },
  {
    year: 2023,
    title: "Gendering The Museum",
    partners: [
      {
        name: "Intercity",
        link: "https://intercitystudio.com/",
      },
    ],
    service: ["Development"],
    link: {
      url: "https://genderingthemuseum.co.uk/",
    },
  },
  {
    year: 2023,
    title: "Open Squash",
    partners: [
      {
        name: "Soello",
        link: "https://www.soello.com/",
      },
    ],
    service: ["Design", "Development"],
    link: {
      url: "https://opensquash.org/",
    },
  },
  // {
  // 	year: 2023,
  // 	title: "Rabble",
  // 	service: ["Design", "Development"],
  // 	link: {
  // 		url: "https://rabblefilm.co.uk/",
  // 	},
  // },
  {
    year: 2023,
    title: "Atlantica",
    partners: [
      {
        name: "Intercity",
        link: "https://intercitystudio.com/",
      },
    ],
    service: ["Design", "Development"],
    link: {
      url: "https://atlantica.art/",
    },
  },
  {
    year: 2023,
    title: "GANNI Responsibility Report 2022",
    partners: [
      {
        name: "POST",
        link: "https://deliveredbypost.com/",
      },
    ],
    service: ["Development"],
    link: {
      url: "https://responsibilityreport2022.ganni.com/",
    },
  },
  {
    year: 2023,
    title: "adidas originals x END. Bauhaus Collection",
    service: ["Development"],
    partners: [
      {
        name: "The Midnight Club",
        link: "https://themidnightclub.com/",
      },
    ],
    link: {
      url: "https://dynamic-sawine-c0fae5.netlify.app",
    },
  },
  {
    year: 2022,
    title: "Studio Knight Stokoe",
    service: ["Development"],
    partners: [
      {
        name: "AndEveryone",
        link: "https://andeveryone.com/",
      },
    ],
    link: {
      url: "https://knightstokoe.co.uk/",
    },
  },
  {
    year: 2022,
    title: "& Smith",
    service: ["Development"],
    partners: [
      {
        name: "Kaleido Grafik",
        link: "https://kaleidografik.com/",
      },
    ],
    link: {
      url: "https://andsmithdesign.com/",
    },
  },
  {
    year: 2022,
    title: "Carl Robertshaw",
    service: ["Development"],
    partners: [
      {
        name: "Ben Jones Design",
        link: "https://www.benjonesdesign.co.uk/",
      },
    ],
    link: {
      url: "https://carlrobertshaw.com/",
    },
  },
  {
    year: 2022,
    title: "Outside Devon",
    service: ["Development"],
    partners: [
      {
        name: "Intercity",
        link: "https://intercitystudio.com/",
      },
    ],
    link: {
      url: "https://www.outside-devon.com/",
    },
  },
  {
    year: 2022,
    title: "Intercity",
    service: ["Development"],
    partners: [
      {
        name: "Intercity",
        link: "https://intercitystudio.com/",
      },
    ],
    link: {
      url: "https://intercitystudio.com/",
    },
  },
  // {
  // 	year: 2022,
  // 	title: "Eric Haacht",
  // 	service: ["Development"],
  // 	partners: {
  // 		name: "Intercity",
  // 		link: "https://intercitystudio.com/",
  // 	},
  // 	link: {
  // 		url: "https://erichaacht.com/",
  // 	},
  // },
  {
    year: 2022,
    title: "Insight Film",
    service: ["Design", "Development"],
    link: {
      url: "https://insight.film/",
    },
  },
  {
    year: 2021,
    title: "Livia Lauber",
    service: ["Design", "Development"],
    link: {
      url: "https://livialauber.com/",
    },
  },
  {
    year: 2021,
    title: "Virtual 1",
    service: ["Development"],
    partners: [
      {
        name: "MUD",
        link: "https://ournameismud.co.uk/",
      },
    ],
    link: {
      url: "https://virtual1.com/",
    },
  },
  {
    year: 2020,
    title: "Established & Sons",
    service: ["Design", "Development"],
    partners: [
      {
        name: "Intercity",
        link: "https://intercitystudio.com/",
      },
    ],
    link: {
      url: "https://www.establishedandsons.com/",
    },
  },
] as Work[];

export default work;
