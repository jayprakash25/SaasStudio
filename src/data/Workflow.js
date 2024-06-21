import { FaHandshake, FaUserAlt } from "react-icons/fa";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { SiGooglemeet, SiVisualstudiocode } from "react-icons/si";

const workflow = [
  {
    tittle: "Discovery Call",
    Para: "We begin with an in-depth discovery call to understand your business, goals, and vision for your website.",
    icon: <SiGooglemeet />,
  },
  {
    tittle: "User Research",
    Para: "we conduct user research to understand your target audience.",
    icon: <FaUserAlt />,
  },
  {
    tittle: "We Build Here",
    Para: "We make websites that work for your business. They're easy to get around and are designed to get people to take action.",
    icon: <SiVisualstudiocode />,
  },
  {
    tittle: "Testing & Launch",
    Para: "We make sure your website works perfectly on all devices and browsers. Once everything is good to go, we launch your site for the world to see after you give the green light.",
    icon: <HiMiniRocketLaunch />,
  },
  {
    tittle: "Ongoing Support",
    Para: "After the launch, our support continues to help your website evolve with your business. We provide ongoing assistance for content updates and security maintenance.",
    icon: <FaHandshake />,
  },
];

export default workflow;
