"use client";

import { FiMail } from "react-icons/fi";

export default function EmailLink() {
  const handleClick = () => {
    const user = "shahrukh.hughes";
    const domain = "gmail.com";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors cursor-pointer"
    >
      <FiMail size={18} aria-hidden="true" />
      Email
    </button>
  );
}
