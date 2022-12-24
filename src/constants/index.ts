export * from "./menus";

export const DOMAIN = "https://may-thai.vercel.app";

interface Route {
  href: string;
  label: string;
}

export const ROUTES = {
  home: {
    href: "/",
    label: "Home",
  },
  menu: {
    href: "/menu",
    label: "Menu",
  },
  contact: {
    href: "/contact",
    label: "Contact",
  },
};

export const NAV_ROUTES: Route[] = [ROUTES.home, ROUTES.menu, ROUTES.contact];

export const OPENING_HOURS = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "11:00",
    closes: "21:00",
  },
  {
    dayOfWeek: ["Friday"],
    opens: "11:00",
    closes: "22:00",
  },
  {
    dayOfWeek: ["Saturday"],
    opens: "12:00",
    closes: "22:00",
  },
];

export const ADDRESS = {
  streetAddress: "1053 State Route 28",
  addressLocality: "Milford",
  addressRegion: "OH",
  postalCode: "45150",
  addressCountry: "US",
};

export const GEO = {
  latitude: 39.193337569787815,
  longitude: -84.24132654605579,
};

export const PHONE_NUMBERS = ["(513) 248-9100", "(513) 248-4089"];

interface Testimonial {
  author: string;
  reviewBody: string;
  reviewRating: {
    ratingValue: "1" | "2" | "3" | "4" | "5";
  };
}

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Jan Chaney",
    reviewBody:
      "Love May Thai in Milford!  The people working there are so friendly and efficient. Food is flavorful and they serve plenty of it. My favorite is their Sweet and Sour chicken and Tom Yum soup and I add rice noodles to it.",
    reviewRating: {
      ratingValue: "4",
    },
  },
  {
    author: "Kelsey Wallace",
    reviewBody:
      "Stop in for a quick dinner before a class and this was the spot!! The waitress was so friendly and accommodating! The food was incredible, a lot of flavor!! The decor was so cute too!! Definitely will be back!!",
    reviewRating: {
      ratingValue: "4",
    },
  },
  {
    author: "Joyce Bucci",
    reviewBody:
      "These days it can be difficult to arrange for a large party to go out to dinner. My group of 12 friends was able to get a reservation at May Thai, and we were so happy with everything. Our table was ready, and the service and the food were excellent.",
    reviewRating: {
      ratingValue: "4",
    },
  },
];
