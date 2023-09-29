interface Work {
	status?: "In Progress" | "Completed" | "Ongoing";
	year?: 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024;
	title: string;
	description?: string;
	partner:
		| {
				name: string;
				link: string;
		  }
		| undefined;
	service: Array<"Design" | "Development" | "Hosting" | "Maintenance">;
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
        status: "In Progress",
		year: 2023,
		title: "Rabble",
	},
	{
		status: "In Progress",
		title: "Ocean Ecology",
		service: ["Design", "Development", "Hosting", "Maintenance"],
		stack: [
			"Craft CMS",
			"Sprig (HTMX)",
			"AlpineJs",
			"GSAP",
			"Taxi.js",
			"Tailwind",
		],
	},
	{
		status: "Ongoing",
		title: "The House Group",
		service: ["Design", "Development", "Hosting", "Maintenance"],
		stack: [
			"Craft CMS",
			"Sprig (HTMX)",
			"AlpineJs",
			"Motion One",
			"Tailwind",
		],
		link: {
			url: "https://thehouse-group.com/",
		},
	},
	// {
	// 	year: 2023,
	// 	title: "University of Exeter - Bare Life",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	service: ["Development", "Hosting", "Maintenance"],
	// 	stack: ["Craft CMS", "AlpineJs", "Tailwind"],
	// 	link: {
	// 		url: "https://barelife.art/",
	// 	},
	// },
	// {
	// 	year: 2023,
	// 	title: "University of Exeter - MA Curation Archive",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	link: {
	// 		url: "https://uofecuration.art/",
	// 	},
	// },
	// {
	// 	year: 2023,
	// 	title: "Moulsecoomb Place",
	// 	partner: {
	// 		name: "Kaleido Graphik",
	// 		link: "https://kaleidografik.com/",
	// 	},
	// 	link: {
	// 		url: "https://moulsecoombplace.com/",
	// 	},
	// },
	{
		year: 2023,
		title: "GANNI Responsibility Report 2022",
		partner: {
			name: "POST",
			link: "https://deliveredbypost.com/",
		},
		link: {
			url: "https://responsibilityreport2022.ganni.com/",
		},
	},
	{
		year: 2023,
		title: "adidas originals x END. Bauhaus Collection",
		partner: {
			name: "The Midnight Club",
			link: "https://themidnightclub.com/",
		},
		link: {
			url: "https://www.bauhausbyend.com/",
		},
	},
	// {
	// 	year: 2023,
	// 	title: "OLO Global",
	// 	partner: {
	// 		name: "Kaleido Graphik",
	// 		link: "https://kaleidografik.com/",
	// 	},
	// 	link: {
	// 		url: "https://olo.global/",
	// 	},
	// },
	{
		year: 2022,
		title: "Studio Knight Stokoe",
		partner: {
			name: "AndEveryone",
			link: "https://andeveryone.com/",
		},
		link: {
			url: "https://knightstokoe.co.uk/",
		},
	},
	// {
	// 	year: 2022,
	// 	title: "Beam",
	// 	link: {
	// 		url: "https://www.bemorebeam.com/",
	// 	},
	// },
	// {
	// 	year: 2022,
	// 	title: "Sibyl Studio",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	link: {
	// 		url: "https://www.sibylstudio.com/",
	// 	},
	// },
	{
		year: 2022,
		title: "& Smith",
		partner: {
			name: "Kaleido Graphik",
			link: "https://kaleidografik.com/",
		},
		link: {
			url: "https://andsmithdesign.com/",
		},
	},
	// {
	// 	year: 2022,
	// 	title: "University of Exeter - Creative Peninsula",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	link: {
	// 		url: "https://creativepeninsula.org/",
	// 	},
	// },
	{
		year: 2022,
		title: "Carl Robertshaw",
		partner: {
			name: "Ben Jones Design",
			link: "https://www.benjonesdesign.co.uk/",
		},
		link: {
			url: "https://carlrobertshaw.com/",
		},
	},
	// {
	// 	year: 2022,
	// 	title: "Nike MR US Tour Recap",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	link: {
	// 		text: "link on request",
	// 	},
	// },
	{
		year: 2022,
		title: "Outside Devon",
		partner: {
			name: "Intercity Studio",
			link: "https://intercitystudio.com/",
		},
		link: {
			url: "https://www.outside-devon.com/",
		},
	},
	// {
	// 	year: 2022,
	// 	title: "Nike 50th Anniversary Recap",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	link: {
	// 		text: "link on request",
	// 	},
	// },
	{
		year: 2022,
		title: "Intercity Studio",
		partner: {
			name: "Intercity Studio",
			link: "https://intercitystudio.com/",
		},
		link: {
			url: "https://intercitystudio.com/",
		},
	},
	// {
	// 	year: 2022,
	// 	title: "University of Exeter - Now’s The Time",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	link: {
	// 		url: "https://nowsthetime.art/",
	// 	},
	// },
	// {
	// 	year: 2022,
	// 	title: "Radley Cook",
	// 	link: {
	// 		url: "https://radleycook.com/",
	// 	},
	// },
	{
		year: 2022,
		title: "Eric Haacht",
		partner: {
			name: "Intercity Studio",
			link: "https://intercitystudio.com/",
		},
		link: {
			url: "https://erichaacht.com/",
		},
	},
	{
		year: 2022,
		title: "Insight Film",
		link: {
			url: "https://insight.film/",
		},
	},
	// {
	// 	year: 2021,
	// 	title: "University of Exeter - Anitbodies",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	link: {
	// 		url: "https://antibodies.art/",
	// 	},
	// },
	// {
	// 	year: 2021,
	// 	title: "The Food Buyer",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	link: {
	// 		url: "https://thefoodbuyer.com/",
	// 	},
	// },
	// {
	// 	year: 2021,
	// 	title: "Bywater Properties",
	// 	partner: {
	// 		name: "Kaleido Graphik",
	// 		link: "https://kaleidografik.com/",
	// 	},
	// 	link: {
	// 		url: "https://bywaterproperties.com/",
	// 	},
	// },
	{
		year: 2021,
		title: "Livia Lauber",
		link: {
			url: "https://livialauber.com/",
		},
	},
	// {
	// 	year: 2021,
	// 	title: "The Worlds To Do List",
	// 	partner: {
	// 		name: "MUD",
	// 		link: "https://ournameismud.co.uk/",
	// 	},
	// 	link: {
	// 		url: "https://worldstodolist.org/",
	// 	},
	// },
	// {
	// 	year: 2021,
	// 	title: "Mirror",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	link: {
	// 		url: "https://mirrorplymouth.com/",
	// 	},
	// },
	{
		year: 2021,
		title: "Virtual 1",
		partner: {
			name: "MUD",
			link: "https://ournameismud.co.uk/",
		},
		link: {
			url: "https://virtual1.com/",
		},
	},
	// {
	// 	year: 2020,
	// 	title: "Martha de Lacey",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	link: {
	// 		url: "https://marthadelacey.com/",
	// 	},
	// },
	// {
	// 	year: 2020,
	// 	title: "Gemma Blackshaw Art Historian & Curator",
	// 	partner: {
	// 		name: "Intercity Studio",
	// 		link: "https://intercitystudio.com/",
	// 	},
	// 	link: {
	// 		url: "https://www.gemmablackshaw.com/",
	// 	},
	// },
	{
		year: 2020,
		title: "Established & Sons",
		partner: {
			name: "Intercity Studio",
			link: "https://intercitystudio.com/",
		},
		link: {
			url: "https://www.establishedandsons.com/",
		},
	},
] as Work[];

export default work;