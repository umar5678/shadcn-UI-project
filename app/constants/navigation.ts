import { ROUTES } from "./routes";
import { Calendar, Home, Inbox, Search, Settings, User } from "lucide-react";

export const MAIN_NAV = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Contact", href: ROUTES.CONTACT },
  { label: "Privacy", href: ROUTES.PRIVACY },
];

export const SOCIAL_LINKS = [
  { label: "Twitter", href: ROUTES.TWITTER, icon: "twitter" },
  { label: "Facebook", href: ROUTES.FACEBOOK, icon: "facebook" },
];

export const DASHBOARD_NAV = [
  { label: "Home", href: ROUTES.DASHBOARD, icon: Home },
  { label: "Inbox", href: ROUTES.INBOX, icon: Inbox },
  { label: "Calender", href: ROUTES.CALENDER, icon: Calendar },
  { label: "Search", href: ROUTES.SEARCH, icon: Search },
  { label: "Settings", href: ROUTES.SETTINGS, icon: Settings },
];

//  add other navigation routes
