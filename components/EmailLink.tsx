"use client";

import { FiMail } from "react-icons/fi";

import Button from "@/components/ui/Button";

export default function EmailLink() {
  const handleClick = () => {
    const user = "shahrukh.hughes";
    const domain = "gmail.com";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <Button onClick={handleClick}>
      <FiMail size={16} aria-hidden="true" />
      Email
    </Button>
  );
}
