import * as React from "react"
import {
  Autorenew,
  ContactSupport,
  CreditCard,
  LocalShipping,
  StarOutline,
  List,
  CheckCircleOutline,
  EcoOutlined,
} from "@material-ui/icons"

import { MyLinkProps } from "./components/MyLink"

export const links: MyLinkProps[] = [
  { to: "/", text: "HOME" },
  {
    to: "/products",
    text: "PRODUCTS",
    innerLinks: [
      {
        to: "/products/apparels",
        text: "Apparels",
        innerLinks: [
          { to: "/products/bras", text: "Bras" },
          { to: "/products/hoodies", text: "Hoodies" },
          { to: "/products/jackets", text: "Jackets" },
          { to: "/products/joggers", text: "Joggers" },
          { to: "/products/leggings", text: "Leggings" },
          { to: "/products/shorts", text: "Shorts" },
          { to: "/products/rash-guards", text: "Rash Guards" },
          { to: "/products/t-shirts", text: "T-Shirts" },
          { to: "/products/tank-tops", text: "Tank Tops" },
          { to: "/products/team-uniform", text: "Team Uniforms" },
          { to: "/products/track-suits", text: "Track Suits" },
        ],
      },
      {
        to: "/products/uniforms",
        text: "Uniforms",
        innerLinks: [
          { to: "/products/bjj", text: "BJJ" },
          { to: "/products/judo", text: "Judo" },
          { to: "/products/karate", text: "Karate" },
          { to: "/products/taekwondo", text: "Taekwondo" },
        ],
      },
      {
        to: "/products/bags",
        text: "Bags",
      },
      {
        to: "/products/belts",
        text: "Belts",
      },
      {
        to: "/products/caps-beanies",
        text: "Caps Beanies",
      },
      {
        to: "/products/equipments",
        text: "Equipments",
      },
      {
        to: "/products/slippers",
        text: "Slippers",
      },
    ],
  },
  { to: "/about-us", text: "ABOUT US" },
  { to: "/faq", text: "FAQ" },
  { to: "/contact", text: "CONTACT" },
  { to: "/privacy-policy", text: "Privacy Policy" },
  { to: "/order-tracking", text: "Order Tracking" },
  { to: "/payment", text: "Payment" },
  { to: "/shipping", text: "Shipping" },
  { to: "/returns-and-refunds", text: "Returns and Refunds" },
]
export const promotion = [
  {
    to: "/contact",
    linkText: "CONTACT NOW",
    mainText: "Contact Support",
    icon: <ContactSupport fontSize="large" style={{ color: "red" }} />,
  },

  {
    to: "/returns-and-refunds",
    linkText: `RETURNS ${"&"} REFUND`,
    mainText: "30 days return period",
    icon: <Autorenew fontSize="large" style={{ color: "red" }} />,
  },
  {
    to: "/shipping",
    linkText: "SHIPPING DETAILS",
    mainText: "Flexible Shipping",
    icon: <LocalShipping fontSize="large" style={{ color: "red" }} />,
  },
  {
    to: "/payment-details",
    linkText: "PAYMENT METHODS",
    mainText: "Secure Payments",
    icon: <CreditCard fontSize="large" style={{ color: "red" }} />,
  },
]

export const contact = (data: any) => [
  {
    title: "Questions? Call us:",
    handle: data.site.siteMetadata.mobile,
    subtitle: "Monday to Friday",
  },
  {
    title: "Customer support",
    handle: data.site.siteMetadata.email,
    subtitle: "Do you have any questions?",
    subSubtitle:
      "Send us an e-mail and we will reply to you as soon as possible.",
  },
  {
    title: "Main office address",
    handle: data.site.siteMetadata.address,
    subtitle: "Correspondence address. Please call us prior to your visit.",
  },
]

export const faq = {
  "HOW TO SHOP": [
    "Do I need an account to place an order?",
    "I have forgotten my password: what should I do?",
    "How do I place an order on your site?",
    "Where can I find size & fit advice?",
    "Can I place an order over the phone?",
  ],
  "PRICING & PAYMENT": [
    "Which currencies can I shop in?",
    "When will my card be charged?",
    "What payment methods do you accept?",
    "Will my personal details stay safe?",
  ],
}

export const values = [
  {
    text: "QUALITY OVER QUANTITY",
    icon: <StarOutline fontSize="large" />,
  },
  {
    text: "PRODUCTS VARIETY",
    icon: <List fontSize="large" />,
  },
  {
    text: "QUALITY CHECK",
    icon: <CheckCircleOutline fontSize="large" />,
  },
  {
    text: "POSITIVE ECOLOGY IMPACT",
    icon: <EcoOutlined fontSize="large" />,
  },
]

export const shipping = [
  {
    heading: "From $5 / Free over $50, 1-4 days",
    title: "LOCAL DELIVERY",
    body:
      "Praesent varius sem id felis scelerisque vehicula. Suspendisse nibh felis, sollicitudin at, tristique faucibus enim.",
  },
  {
    heading: "From $25 / Free over $100, 6-8 days",
    title: "INTERNATIONAL DELIVERY",
    body:
      "Phasellus a cursus elit. Praesent varius! Praesent tristique – faucibus enim varius sem id felis scelerisque vehicula. Suspendisse nibh felis, sollicitudin at, tristique faucibus enim tristique faucibus dolor amet nulla.",
  },
  {
    heading: "Price & time may vary",
    title: "DHL ON DEMAND DELIVERY",
    body:
      "Suspendisse nibh felis, sollicitudin at, tristique faucibus enim. Phasellus a cursus elit. Praesent varius sem id felis scelerisque vehicula. Suspendisse nibh felis, sollicitudin eu sollicitudin at, tristique faucibus enim. Felis dolor – sollicitudin at, tristique faucibus enim. Phasellus a cursus elit. Praesent varius sem id felis scelerisque vehicula. Suspendisse nibh felis, sollicitudin.",
  },
  {
    heading: "Important information",
    title: "CUSTOMS DECLARATION",
    body:
      "Felis dolor – sollicitudin at, tristique faucibus enim. Phasellus a cursus elit. Praesent varius sem id felis scelerisque vehicula. Suspendisse nibh felis, sollicitudin.",
  },
]

export const returnsAndRefunds = [
  {
    title: "RETURNING YOUR PURCHASE",
    body:
      "Suspendisse lroem – nibh felis, sollicitudin at, tristique faucibus enim. Phasellus a cursus elit. Praesent varius sem id felis scelerisque vehicula. Suspendisse nibh felis, sollicitudin eu sollicitudin at, tristique faucibus enim.Praesent felis scelerisque vehicula.Suspendisse nibh felis, sollicitudin at, tristique faucibus.Enim tristique faucibus dolor amet nulla.",
  },
  {
    title: "RECEIVING A REFUND",
    body:
      "Phasellus a cursus elit. Praesent varius! Praesent tristique – faucibus enim varius sem id felis scelerisque vehicula. Suspendisse nibh felis, sollicitudin at, tristique faucibus enim tristique faucibus dolor amet nulla.",
  },
  {
    title: "REPEATED RETURNS",
    body:
      "Sollicitudin at, tristique faucibus enim. Phasellus a cursus elit. Praesent varius sem id felis scelerisque vehicula. Suspendisse nibh felis, sollicitudin eu sollicitudin at, tristique faucibus enim.",
  },
]
