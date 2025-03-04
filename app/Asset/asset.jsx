import jeeChian from "./JeeChian.jpg";
import unlike from "./icon/heart_2.png"
import like from "./icon/heart_1.png"
import facebook_icon from "./icon/facebook_icon.png"
import email_icon from "./icon/email_icon.png"
import instagram_icon from "./icon/instagram_icon.png"
import resume_icon from "./icon/resume_icon.png"


import LB_idle from "./program/LB_idle.png"
import LB_poster from "./program/LB_poster.png"
import LB_poster2 from "./program/LB_poster2.png"
import LB_title from "./program/LB_title.png"
import LB1 from "./program/LB1.png"
import LB2 from "./program/LB2.png"
import LB3 from "./program/LB3.png"
import LB4 from "./program/LB4.png"
import LB5 from "./program/LB5.png"
import LB6 from "./program/LB6.png"
import LB7 from "./program/LB7.png"
import LB8 from "./program/LB8.png"
import LB9 from "./program/LB9.png"
import LB10 from "./program/LB10.png"
import LB11 from "./program/LB11.png"
import LB12 from "./program/LB12.png"

import WD1 from "./program/WD1.png"
import WD2 from "./program/WD2.png"
import WD3 from "./program/WD3.png"
import WD4 from "./program/WD4.png"
import WD5 from "./program/WD5.png"
import WD6 from "./program/WD6.png"
import WD7 from "./program/WD7.png"
import WD8 from "./program/WD8.png"
import WD9 from "./program/WD9.png"
import WD10 from "./program/WD10.png"
import WD11 from "./program/WD11.png"
import WD12 from "./program/WD12.png"
import WD13 from "./program/WD13.png"
import WD14 from "./program/WD14.png"
import WD15 from "./program/WD15.png"
import WD16 from "./program/WD16.png"
import WD17 from "./program/WD17.png"
import WD18 from "./program/WD18.png"
import WD19 from "./program/WD19.png"
import WD20 from "./program/WD20.png"

import EP_profile from "./program/EP_profile.jpg"
import EP_profile2 from "./program/EP_profile2.jpg"
import EP1 from "./program/EP1.png"
import EP2 from "./program/EP2.png"
import EP3 from "./program/EP3.png"

export const program_page = [
  { name: "Game Development", link: "/Programme" },
  { name: "Employer Project", link: "/EmployerProject" },
  { name: "Web Development", link: "/Web_Development" }
]
export const iconSocial = [
  { name: "Facebook", link: "https://www.facebook.com/jeechian.ng", src: facebook_icon },
  { name: "Instagram", link: "https://www.instagram.com/jeechian__/", src: instagram_icon },
  { name: "Education", link: "mailto:j2303@student.newinti.edu.my", src: email_icon },
  { name: "Resume", link: "/NgJeeChian_Resume.pdf", src: resume_icon } // Updated link to the file in public folder
];

export const assets = {
  jeeChian,
  unlike,
  like,
};
export const gameDev = [
  { name: "LB_idle", src: LB_idle },
  { name: "LB_title", src: LB_title },
  { name: "LB_poster", src: LB_poster },
  { name: "LB_poster2", src: LB_poster2 },
  [
    { name: "LB1", src: LB1, description: "Game Scene 2" },
    { name: "LB2", src: LB2, description: "Control" },
    { name: "LB3", src: LB3, description: "Market" },
    { name: "LB4", src: LB4, description: "" },
    { name: "LB5", src: LB5, description: "" },
    { name: "LB6", src: LB6, description: "" },
    { name: "LB7", src: LB7, description: "" },
    { name: "LB8", src: LB8, description: "" },
    { name: "LB9", src: LB9, description: "" },
    { name: "LB10", src: LB10, description: "" },
    { name: "LB11", src: LB11, description: "" },
    { name: "LB12", src: LB12, description: "" },
  ]
]

export const webDev = [
  { name: WD1, description: "Home", src: WD1 },
  { name: WD2, description: "Home", src: WD2 },
  { name: WD3, description: "Home", src: WD3 },
  { name: WD4, description: "Sign In", name: "Sign In", src: WD4 },
  { name: WD5, description: "Sign In ~New Account", src: WD5 },
  { name: WD6, description: "Sign In ~Reset Password", src: WD6 },
  { name: WD7, description: "FAQ", src: WD7 },
  { name: WD8, description: "FAQ Dropdown", src: WD8 },
  { name: WD9, description: "Product ~Sport Shoes", src: WD9 },
  { name: WD10, description: "Sport Shoes", src: WD10 },
  { name: WD11, description: "Sport Shoes ~Set Quantity and Gender", src: WD11 },
  { name: WD12, description: "Add to Cart", src: WD12 },
  { name: WD13, description: "Payment", src:WD13 },
  { name: WD14, description: "Payment ~Requirement not Fulfill", src: WD14 },
  { name: WD15, description: "Payment ~ Confirm Notification", src: WD15 },
  { name: WD16, description: "Payment ~Success", src: WD16 },
  { name: WD17, description: "Order Stats", src: WD17 },
  { name: WD18, description: "Order Stats ~Add Comment", src: WD18 },
  { name: WD19, description: "Product ~Fabric Shoes", src: WD19 },
  { name: WD20, description: "Product ~ Leather Shoes", src: WD20 },
]

export const EP = [
  { name: "EP_profile", src: EP_profile, description: "" },
  { name: "EP_profile2", src: EP_profile2, description: "" },
  [
    { name: "EP1", src: EP1, description: "Awareness Poster 1" },
    { name: "EP2", src: EP2, description: "Awareness Poster 2" },

  ],
  { name: "EP3", src: EP3, description: "Task Delegation" }
]