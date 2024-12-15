import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavbarItem({ text, icon }) {
  const isIcon = icon ? <FontAwesomeIcon icon={icon} /> : "";
  return (
    <li className="flex flex-col items-center justify-center cursor-pointer text-base active:ease-in-out active:border-white border-0 active:border-b-2 h-14 font-bold text-white hover:text-white">
      {isIcon}
      {text}
    </li>
  );
}
