import { FiMail } from "react-icons/fi";

import { buttonClassName } from "@/components/ui/Button";

export default function EmailLink() {
  return (
    <a
      href="mailto:shahrukh.hughes@gmail.com"
      className={buttonClassName("primary")}
    >
      <FiMail size={16} aria-hidden="true" />
      Email
    </a>
  );
}
