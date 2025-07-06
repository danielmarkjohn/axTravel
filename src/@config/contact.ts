import { FaPhone, FaEnvelope } from "react-icons/fa";
import {  BsInstagram, BsWhatsapp } from "react-icons/bs";

export const contactMethods = [
  {
    name: "Phone",
    icon: FaPhone,
    description: "Call us directly for immediate assistance.",
    action: "tel:+917019896937",
    buttonText: "Call Now",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    description: "Send us an email for detailed inquiries.",
    action: "mailto:info@example.com",
    buttonText: "Send Email",
  },
  {
    name: "Instagram",
    icon: BsInstagram,
    description: "Connect with us on Instagram",
    action: "https://instagram.com/axsphere",
    buttonText: "Connect",
  },
  {
    name: "WhatsApp",
    description: "Chat with us on WhatsApp",
    icon: BsWhatsapp,
    action: "https://wa.me/917019896937",
    buttonText: "Open WhatsApp",
  },
  // Add more contact methods as needed
];
