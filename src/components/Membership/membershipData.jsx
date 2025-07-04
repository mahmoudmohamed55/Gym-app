import { FaCrown } from "react-icons/fa";
import { GiStrongMan, GiFlexibleStar } from "react-icons/gi";

export const skillsData = [
  {
    name: "Gold Membership",
    price: 499,
    icon: (
      <GiStrongMan className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "Full access to gym equipment during staffed hours",
      "2 group classes per week included",
      "Body assessment every 2 months",
      "Access to locker and shower facilities",
    ],
    duration: "3 Months",
    aosDelay: "0",
  },
  {
    name: "Flexible Membership",
    price: 899,
    icon: (
      <GiFlexibleStar className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "Unlimited access to gym 24/7",
      "Unlimited group classes",
      "Monthly body composition analysis",
      "1 Personal training session/month",
    ],
    duration: "6 Months",
    aosDelay: "500",
  },
  {
    name: "Platinum Membership",
    price: 1299,
    icon: (
      <FaCrown className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: [
      "All-inclusive VIP access 24/7",
      "Unlimited personal training sessions",
      "Free nutrition consultation every month",
      "Priority access to all gym events and classes",
    ],
    duration: "12 Months",
    aosDelay: "1000",
  },
];


