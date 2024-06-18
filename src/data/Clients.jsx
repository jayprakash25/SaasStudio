import { BsEmojiSmile } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";

const data = [
  {
    tittle: "User-Centric Design",
    Para: "We put your customers at the heart of every decision.From intuitive navigation to clear calls-to-action, we make sure your site is a butter to use. Happy users mean more conversions and better results for your business.",
    icon: <BsEmojiSmile size={45} />,
  },
  {
    tittle: "Performance-Driven Development",
    Para: "We build websites that don't just look good, but perform excellently too.Fast loading times, mobile responsiveness, and SEO-friendly code are our standard. Your site will work flawlessly across all devices, helping you reach more customers.",
    icon: <SlSpeedometer color="white" size={45} />,
  },
  {
    tittle: "Tailored Solutions & Ongoing Support",
    Para: "We don't do one-size-fits-all. Your website is custom-built to meet your unique needs. Our relationship doesn't end at launch - we're here to help your site evolve with your business. From content updates to security maintenance, we provide continued support to ensure your success.",
    icon: <FaHandshake size={45} />,
  },
];

export default data;
