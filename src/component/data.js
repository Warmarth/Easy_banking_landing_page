import {
  FaAccessibleIcon,
  FaCcMastercard,
  FaBuyNLarge,
  FaFingerprint,
} from "react-icons/fa";
import Latest from "../Asset/images/image-confetti.jpg";
import Latest1 from "../Asset/images/image-currency.jpg";
import Latest2 from "../Asset/images/image-restaurant.jpg";
import Latest3 from "../Asset/images/image-plane.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaPinterestP,
  FaSquareYoutube,
  FaInstagram,
} from "react-icons/fa6";

const menuList = ["home", "about", "contact", "blog", "careers"];
const info = [
  {
    title: "Simple Budgeting",
    content: `See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.`,
    icon: <FaAccessibleIcon />,
  },
  {
    title: "Fast Onboarding",
    content: `We don’t do branches. Open your account in minutes online and start taking control of your finances right away.`,
    icon: <FaCcMastercard />,
  },
  {
    title: "Online Banking",
    content: `Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world`,
    icon: <FaBuyNLarge />,
  },
  {
    title: "Open API",
    content: `Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`,
    icon: <FaFingerprint />,
  },
];
const article = [
  {
    pic: Latest,
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    content:
      " The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    pic: Latest1,
    author: "By Wilson Hutton ",
    title: "Take your Easybank card wherever you go",
    content:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    pic: Latest2,
    author: " By clarie Hutton",
    title: "Treat yourself without worrying about money",
    content:
      "                Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    pic: Latest3,
    author: "by claire Robinson",
    title: "Our invite-only Beta account are now live!",
    content:
      "the world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single",
  },
];
const footerContent = {
  icon: [
    <FaFacebook />,
    <FaPinterestP />,
    <FaSquareYoutube />,
    <FaTwitter />,
    <FaInstagram />,
  ],
  headerPage: {
    title: "Next Generation Digital Banking",
    intro:
      "  Take your financial life online. Your Easybank account will be aone-stop-shop for spending, saving, budgeting, investing, and much       more.",
  },
};

export { menuList, info, article, footerContent };
