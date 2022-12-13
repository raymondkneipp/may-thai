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
  location: {
    href: "/location",
    label: "Location",
  },
};

export const NAV_ROUTES: Route[] = [
  ROUTES.home,
  ROUTES.menu,
  ROUTES.contact,
  ROUTES.location,
];

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

export const PHONE_NUMBERS = ["513-248-9100", "513-248-4089"];
