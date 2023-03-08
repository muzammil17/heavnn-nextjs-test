import Images from "@/themes/images";

export const HOME_ROUTE = "/";
export const BLOG_ROUTE = "/blog";
export const PLACES_ROUTE = "/places/";
export const PLACE_ROUTE = "/place/";
export const BLOGDETAIL_ROUTE = "/blog/:slug";
export const TERMS_ROUTE = "/terms-and-conditions";
export const PRIVACY_ROUTE = "/privacy-policy";

export const SERVICES = [
	{
		key: "all-services",
		label: "All Services",
	},
	{
		key: "groomers",
		label: "Groomers",
	},
	{
		key: "veterinarians",
		label: "Veterinarians",
	},
	{
		key: "boarding",
		label: "Boarding",
	},
	{
		key: "training",
		label: "Training",
	},
	{
		key: "pet-stores",
		label: "Pet Stores",
	},
];
export const WHERE_WE_SERVICE = [
	{ label: "New York City", slug: "new-york-city" },
	{ label: "Brooklyn", slug: "brooklyn" },
	{ label: "Queens", slug: "queens" },
	{ label: "Bronx", slug: "bronx" },
	{ label: "Long Island", slug: "long-island" },
	{ label: "Baltimore", slug: "baltimore" },
	{ label: "Atlanta", slug: "atlanta" },
	{ label: "Denver", slug: "denver" },
	{ label: "Philadelphia", slug: "philadelphia" },
	{ label: "Houston", slug: "houston" },
	{ label: "Dallas", slug: "dallas" },
	{ label: "Austin", slug: "austin" },
	{ label: "Seattle", slug: "seattle" },
	{ label: "Atlanta", slug: "atlanta" },
	{ label: "Denver", slug: "denver" },
	{ label: "Philadelphia", slug: "philadelphia" },
	{ label: "Houston", slug: "houston" },
	{ label: "Dallas", slug: "dallas" },
	{ label: "Houston", slug: "houston" },
	{ label: "Dallas", slug: "dallas" },
	{ label: "Austin", slug: "austin" },
	{ label: "Chicago", slug: "chicago" },
	{ label: "Boston", slug: "boston" },
	{ label: "San Francisco", slug: "san-francisco" },
];
export const HOME_BLOGS = [
	{
		thumb: Images.Blog1,
		date: "september 10 / 2022",
		title: "Dog walking: five tips to a better dog walking",
		description:
			"Every patient matters, and so does the quality of the veterinary care they receive. We're a family-owned veterinary clinic, and your pets are part of our family too, so we provide our services ...",
		slug: "dog-walking",
	},
	{
		thumb: Images.Blog2,
		date: "september 10 / 2022",
		title: "Why adoption over buying",
		description:
			"Every patient matters, and so does the quality of the veterinary care they receive. We're a family-owned veterinary clinic, and your pets are part of our family too, so we provide our services ...",
		slug: "adopting-over-buying",
	},
	{
		thumb: Images.Blog3,
		date: "september 10 / 2022",
		title: "What is in-home grooming?",
		description:
			"Every patient matters, and so does the quality of the veterinary care they receive. We're a family-owned veterinary clinic, and your pets are part of our family too, so we provide our services ...",
		slug: "home-grooming",
	},
];
export const BLOGS = [
	{
		thumb: Images.Blog1,
		date: "september 10 / 2022",
		title: "Dog walking: five tips to a better dog walking",
		description:
			"Every patient matters, and so does the quality of the veterinary care they receive. We're a family-owned veterinary clinic, and your pets are part of our family too, so we provide our services with plenty of love and attention to detail...",
		slug: "dog-walking",
	},
	{
		thumb: Images.Blog2,
		date: "september 10 / 2022",
		title: "Why adoption over buying",
		description:
			"Every patient matters, and so does the quality of the veterinary care they receive. We're a family-owned veterinary clinic, and your pets are part of our family too, so we provide our services with plenty of love and attention to detail...",
		slug: "adopting-over-buying",
	},
	{
		thumb: Images.Blog3,
		date: "september 10 / 2022",
		title: "What is in-home grooming?",
		description:
			"Every patient matters, and so does the quality of the veterinary care they receive. We're a family-owned veterinary clinic, and your pets are part of our family too, so we provide our services with plenty of love and attention to detail...",
		slug: "home-grooming",
	},
];
export const FAQS = [
	{
		title: "What are some good questions to ask a veterinarian?",
		description:
			"Most veterinarians diagnose animal health problems, vaccinate against diseases, medicate animals suffering from infections or illnesses, treat and dress wounds, set fractures, perform surgery, and advise owners about animal feeding, behavior, and breeding.",
	},
	{
		title: "What are 3 things a vet does?",
		description:
			"Most veterinarians diagnose animal health problems, vaccinate against diseases, medicate animals suffering from infections or illnesses, treat and dress wounds, set fractures, perform surgery, and advise owners about animal feeding, behavior, and breeding.",
	},
	{
		title: "How do I know that my appointment has really been booked?",
		description:
			"Most veterinarians diagnose animal health problems, vaccinate against diseases, medicate animals suffering from infections or illnesses, treat and dress wounds, set fractures, perform surgery, and advise owners about animal feeding, behavior, and breeding.",
	},
	{
		title:
			"What if my appointment is cancelled or rescheduled by the doctor's office?",
		description:
			"Most veterinarians diagnose animal health problems, vaccinate against diseases, medicate animals suffering from infections or illnesses, treat and dress wounds, set fractures, perform surgery, and advise owners about animal feeding, behavior, and breeding.",
	},
];
export const PLACES = [
	{
		thumb: Images.Place1,
		title: "Pet Samaritan Clinic",
		rating: 5,
		address: "10526 SE Washington St, Portland, OR 97216",
		services: ["mobile available", "cats", "discounts"],
		slug: "pet-samaritan-clinic",
		position: { lat: 44.603134, lng: 41.358235 },
	},
	{
		thumb: Images.Place2,
		title: "Town and Country Animal Hospital",
		rating: 3,
		address: "10526 SE Washington St, Portland, OR 97216",
		services: ["mobile available", "cats", "discounts"],
		slug: "town-and-country-animal-hospital",
		position: { lat: 44.673134, lng: 41.258235 },
	},
	{
		thumb: Images.Place3,
		title: "Good Neighbor Vet",
		rating: 5,
		address: "10526 SE Washington St, Portland, OR 97216",
		services: ["mobile available", "cats", "discounts"],
		slug: "good-neighbor-vet",
		position: { lat: 44.603134, lng: 41.158235 },
	},
	{
		thumb: Images.Place4,
		title: "Mt. Hood Pet Medical",
		rating: 4,
		address: "10526 SE Washington St, Portland, OR 97216",
		services: ["mobile available", "cats", "discounts"],
		slug: "hood-pet-medical",
		position: { lat: 44.743134, lng: 41.357235 },
	},
	{
		thumb: Images.Place5,
		title: "Gresham Animal Hospital",
		rating: 5,
		address: "10526 SE Washington St, Portland, OR 97216",
		services: ["mobile available", "cats", "discounts"],
		slug: "gresham-animal-hospital",
		position: { lat: 44.563134, lng: 41.558235 },
	},
	{
		thumb: Images.Place6,
		title: "Dogwood Pet Hospital",
		rating: 2,
		address: "10526 SE Washington St, Portland, OR 97216",
		services: ["mobile available", "cats", "discounts"],
		slug: "dogwood-pet-hospital",
		position: { lat: 44.753134, lng: 41.058235 },
	},
	{
		thumb: Images.Place7,
		title: "Orchard Hills Animal Hospital",
		rating: 5,
		address: "10526 SE Washington St, Portland, OR 97216",
		services: ["mobile available", "cats", "discounts"],
		slug: "orchard-hills-animal-hospital",
		position: { lat: 44.403134, lng: 41.258235 },
	},
	{
		thumb: Images.Place8,
		title: "Camas Washougal Animal Hospital",
		rating: 3,
		address: "10526 SE Washington St, Portland, OR 97216",
		services: ["mobile available", "cats", "discounts"],
		slug: "camas-washougal-animal-hospital",
		position: { lat: 44.443134, lng: 41.658235 },
	},
	{
		thumb: Images.Place9,
		title: "Paws & Claws Pet Medical Center",
		rating: 5,
		address: "10526 SE Washington St, Portland, OR 97216",
		services: ["mobile available", "cats", "discounts"],
		slug: "paws-claws-pet-medical-center",
		position: { lat: 44.813134, lng: 41.588235 },
	},
	// {
	//   thumb: Images.Place4,
	//   title: "Mt. Hood Pet Medical",
	//   rating: 4,
	//   address: "10526 SE Washington St, Portland, OR 97216",
	//   services: ["mobile available", "cats", "discounts"],
	//   slug: "hood-pet-medical",
	//   position: { lat: 44.463134, lng: 41.028235 },
	// },
];
export const PLACE_SERVICES = [
	{ thumb: Images.MobileVeternityIcon, title: "Mobile veterinary service" },
	{ thumb: Images.GroomingIcon, title: "Grooming service" },
	{ thumb: Images.VeterinarianIcon, title: "Veterinarian service" },
	{ thumb: Images.TrainingIcon, title: "Training service" },
	{ thumb: Images.BoardingIcon, title: "Boarding service" },
	{ thumb: Images.PetStoreIcon, title: "Pet Store" },
];
export const SOCIAL_LINKS = [
	{
		link: "https://business.facebook.com/poshpuppo/?business_id=588764156059276",
		thumb: Images.Facebook,
	},
	{ link: "https://twitter.com/poshpuppo", thumb: Images.Twitter },
	{ link: "https://www.instagram.com/poshpuppo/", thumb: Images.Instagram },
];
export const REVIEWS = [
	{
		name: "Michael Pilarczyk",
		thumb: Images.User1,
		rating: 5,
		review:
			"We recommend that you do not solely rely on the information presented and that you always read labels, warnings, and directions before using or consuming a product. For additional information about a product, please contact the manufacturer.",
	},
	{
		name: "Sammantha Aus",
		thumb: Images.User2,
		rating: 5,
		review:
			"We recommend that you do not solely rely on the information presented and that you always read labels, warnings, and directions before using or consuming a product.",
	},
	{
		name: "Laura",
		thumb: Images.User3,
		rating: 5,
		review: "Excellent clinic! All good.",
	},
	{
		name: "Darlene De La Cruz",
		thumb: Images.User4,
		rating: 5,
		review:
			"For additional information about a product, please contact the manufacturer.",
	},
	{
		name: "James Guess",
		thumb: Images.User5,
		rating: 5,
		review:
			"We recommend that you do not solely rely on the information presented and that you always read labels, warnings, and directions before using or consuming a product. For additional information about a product, please contact the manufacturer.",
	},
];

export const ALERT_POSITIONS = {
	topRight: "top-right",
	topLeft: "top-left",
	topCenter: "top-center",
	bottomRight: "bottom-right",
	bottomLeft: "bottom-left",
	bottomCenter: "bottom-center",
};
export const ALERT_THEMES = {
	dark: "dark",
	colored: "colored",
	light: "light",
};
export const ALERT_TYPES = {
	info: "info",
	success: "success",
	error: "error",
	warning: "warning",
	default: "default",
};

export const ALERT_TIMEOUT = 3000;

export const TOTAL_ITEM_ON_PAGE = 8;
export const LOCATION_DATA_LIMIT = 10;

export const API_TIMEOUT = 30000;

export const REVIEW_LISTING = 5;

export const RANDOM_IMAGES = [
	{
		id: "0",
		author: "Alejandro Escamilla",
		width: 5000,
		height: 3333,
		url: "https://unsplash.com/photos/yC-Yzbqy7PY",
		download_url: "https://picsum.photos/id/0/5000/3333",
	},
	{
		id: "1",
		author: "Alejandro Escamilla",
		width: 5000,
		height: 3333,
		url: "https://unsplash.com/photos/LNRyGwIJr5c",
		download_url: "https://picsum.photos/id/1/5000/3333",
	},
	{
		id: "2",
		author: "Alejandro Escamilla",
		width: 5000,
		height: 3333,
		url: "https://unsplash.com/photos/N7XodRrbzS0",
		download_url: "https://picsum.photos/id/2/5000/3333",
	},
	{
		id: "3",
		author: "Alejandro Escamilla",
		width: 5000,
		height: 3333,
		url: "https://unsplash.com/photos/Dl6jeyfihLk",
		download_url: "https://picsum.photos/id/3/5000/3333",
	},
	{
		id: "4",
		author: "Alejandro Escamilla",
		width: 5000,
		height: 3333,
		url: "https://unsplash.com/photos/y83Je1OC6Wc",
		download_url: "https://picsum.photos/id/4/5000/3333",
	},
	{
		id: "5",
		author: "Alejandro Escamilla",
		width: 5000,
		height: 3334,
		url: "https://unsplash.com/photos/LF8gK8-HGSg",
		download_url: "https://picsum.photos/id/5/5000/3334",
	},
	{
		id: "6",
		author: "Alejandro Escamilla",
		width: 5000,
		height: 3333,
		url: "https://unsplash.com/photos/tAKXap853rY",
		download_url: "https://picsum.photos/id/6/5000/3333",
	},
	{
		id: "7",
		author: "Alejandro Escamilla",
		width: 4728,
		height: 3168,
		url: "https://unsplash.com/photos/BbQLHCpVUqA",
		download_url: "https://picsum.photos/id/7/4728/3168",
	},
	{
		id: "8",
		author: "Alejandro Escamilla",
		width: 5000,
		height: 3333,
		url: "https://unsplash.com/photos/xII7efH1G6o",
		download_url: "https://picsum.photos/id/8/5000/3333",
	},
	{
		id: "9",
		author: "Alejandro Escamilla",
		width: 5000,
		height: 3269,
		url: "https://unsplash.com/photos/ABDTiLqDhJA",
		download_url: "https://picsum.photos/id/9/5000/3269",
	},
	{
		id: "10",
		author: "Paul Jarvis",
		width: 2500,
		height: 1667,
		url: "https://unsplash.com/photos/6J--NXulQCs",
		download_url: "https://picsum.photos/id/10/2500/1667",
	},
	{
		id: "11",
		author: "Paul Jarvis",
		width: 2500,
		height: 1667,
		url: "https://unsplash.com/photos/Cm7oKel-X2Q",
		download_url: "https://picsum.photos/id/11/2500/1667",
	},
	{
		id: "12",
		author: "Paul Jarvis",
		width: 2500,
		height: 1667,
		url: "https://unsplash.com/photos/I_9ILwtsl_k",
		download_url: "https://picsum.photos/id/12/2500/1667",
	},
	{
		id: "13",
		author: "Paul Jarvis",
		width: 2500,
		height: 1667,
		url: "https://unsplash.com/photos/3MtiSMdnoCo",
		download_url: "https://picsum.photos/id/13/2500/1667",
	},
	{
		id: "14",
		author: "Paul Jarvis",
		width: 2500,
		height: 1667,
		url: "https://unsplash.com/photos/IQ1kOQTJrOQ",
		download_url: "https://picsum.photos/id/14/2500/1667",
	},
	{
		id: "15",
		author: "Paul Jarvis",
		width: 2500,
		height: 1667,
		url: "https://unsplash.com/photos/NYDo21ssGao",
		download_url: "https://picsum.photos/id/15/2500/1667",
	},
	{
		id: "16",
		author: "Paul Jarvis",
		width: 2500,
		height: 1667,
		url: "https://unsplash.com/photos/gkT4FfgHO5o",
		download_url: "https://picsum.photos/id/16/2500/1667",
	},
	{
		id: "17",
		author: "Paul Jarvis",
		width: 2500,
		height: 1667,
		url: "https://unsplash.com/photos/Ven2CV8IJ5A",
		download_url: "https://picsum.photos/id/17/2500/1667",
	},
	{
		id: "18",
		author: "Paul Jarvis",
		width: 2500,
		height: 1667,
		url: "https://unsplash.com/photos/Ps2n0rShqaM",
		download_url: "https://picsum.photos/id/18/2500/1667",
	},
	{
		id: "19",
		author: "Paul Jarvis",
		width: 2500,
		height: 1667,
		url: "https://unsplash.com/photos/P7Lh0usGcuk",
		download_url: "https://picsum.photos/id/19/2500/1667",
	},
	{
		id: "20",
		author: "Aleks Dorohovich",
		width: 3670,
		height: 2462,
		url: "https://unsplash.com/photos/nJdwUHmaY8A",
		download_url: "https://picsum.photos/id/20/3670/2462",
	},
	{
		id: "21",
		author: "Alejandro Escamilla",
		width: 3008,
		height: 2008,
		url: "https://unsplash.com/photos/jVb0mSn0LbE",
		download_url: "https://picsum.photos/id/21/3008/2008",
	},
	{
		id: "22",
		author: "Alejandro Escamilla",
		width: 4434,
		height: 3729,
		url: "https://unsplash.com/photos/du_OrQAA4r0",
		download_url: "https://picsum.photos/id/22/4434/3729",
	},
	{
		id: "23",
		author: "Alejandro Escamilla",
		width: 3887,
		height: 4899,
		url: "https://unsplash.com/photos/8yqds_91OLw",
		download_url: "https://picsum.photos/id/23/3887/4899",
	},
	{
		id: "24",
		author: "Alejandro Escamilla",
		width: 4855,
		height: 1803,
		url: "https://unsplash.com/photos/cZhUxIQjILg",
		download_url: "https://picsum.photos/id/24/4855/1803",
	},
	{
		id: "25",
		author: "Alejandro Escamilla",
		width: 5000,
		height: 3333,
		url: "https://unsplash.com/photos/Iuq0EL4EINY",
		download_url: "https://picsum.photos/id/25/5000/3333",
	},
	{
		id: "26",
		author: "Vadim Sherbakov",
		width: 4209,
		height: 2769,
		url: "https://unsplash.com/photos/tCICLJ5ktBE",
		download_url: "https://picsum.photos/id/26/4209/2769",
	},
	{
		id: "27",
		author: "Yoni Kaplan-Nadel",
		width: 3264,
		height: 1836,
		url: "https://unsplash.com/photos/iJnZwLBOB1I",
		download_url: "https://picsum.photos/id/27/3264/1836",
	},
	{
		id: "28",
		author: "Jerry Adney",
		width: 4928,
		height: 3264,
		url: "https://unsplash.com/photos/_WiFMBRT7Aw",
		download_url: "https://picsum.photos/id/28/4928/3264",
	},
	{
		id: "29",
		author: "Go Wild",
		width: 4000,
		height: 2670,
		url: "https://unsplash.com/photos/V0yAek6BgGk",
		download_url: "https://picsum.photos/id/29/4000/2670",
	},
];
