import Solution from "./assets/solution.svg?react";
import Support from "./assets/support.svg?react";
import Security from "./assets/security.svg?react";

export const brands = [
  {
    name: "spotify",
    image: "spotify.png",
  },
  {
    name: "slack",
    image: "slack.png",
  },
  {
    name: "oracle",
    image: "oracle.png",
  },
  {
    name: "quberix",
    image: "quberix.png",
  },
  {
    name: "workato",
    image: "workato.png",
  },
];
export const links = [
  {
    name: "home",
    url: "#home",
  },
  {
    name: "About us",
    url: "#about",
  },
  {
    name: "Services",
    url: "#services",
  },
];
export const features = [
  {
    icon: <Solution className="icon lg blue" />,
    title: "Customized solutions",
    text: "Solutions to fit your unique business needs, providing services designed for your requirements.",
  },
  {
    icon: <Security className="icon lg blue" />,
    title: "Data security",
    text: "Robust measures to safeguard sensitive data, ensuring utmost confidentiality.",
  },
  {
    icon: <Support className="icon lg blue" />,
    title: "Dedicated support",
    text: "Reliable assistance available whenever needed.",
  },
];

export const services = [
  {
    title: "Talent Pooling",
    text: "Identify qualified candidates for opened positions.",
  },
  {
    title: "Onboarding & Confirmation",
    text: "Get your new hires off to a great start from day one for smooth transition.",
  },
  {
    title: "Manage employee performance",
    text: "Give your employees the chance to thrive in your business.",
  },
  {
    title: "Streamline HR tasks",
    text: "Your HR team can streamline their processes to keep on top of everyday tasks.",
  },
  {
    title: "Make informed business decisions",
    text: "Customisable reports and data that gives you insights to make informed business decisions.",
  },
  {
    title: "Exit & Offboarding",
    text: "Take advantage of the valuable insight exiting employees provide and more.",
  },
];
