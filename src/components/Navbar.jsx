import {
  faUser,
  faBriefcase,
  faBrain,
  faNewspaper,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { NavbarItem } from "@components/NavbarItem";

export function Navbar() {
  return (
    <div className="flex flex-wrap w-full place-items-start p-4">
      <nav className="md:flex hidden justify-around items-center px-5 rounded w-full">
        <h1 className="cursor-pointer italic text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-violet-500 font-bold text-center p-3">
          César JS
        </h1>
        <ul className="flex justify-center items-center gap-6">
          <NavbarItem text={"Inicio"} />
          <NavbarItem text={"Sobre mi"} />
          <NavbarItem text={"Experiencia"} />
          <NavbarItem text={"Proyectos"} />
          <NavbarItem text={"Contacto"} />
        </ul>
      </nav>
      <nav className="flex flex-col md:hidden justify-between px-5 rounded w-full">
        <h1 className="italic text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-violet-500 font-bold text-center p-3">
          César JS
        </h1>
        <ul className="flex justify-center items-center gap-6">
          <NavbarItem icon={faUser} />
          <NavbarItem icon={faBriefcase} />
          <NavbarItem icon={faBrain} />
          <NavbarItem icon={faNewspaper} />
          <NavbarItem icon={faAt} />
        </ul>
      </nav>
    </div>
  );
}
