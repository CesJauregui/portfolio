import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Photo } from "./Photo";
export function Info({ name, role }) {
  return (
    <section className="flex flex-col-reverse md:flex md:flex-row md:justify-around h-screen gap-2">
      <aside className="flex flex-col items-center md:items-start justify-center gap-4">
        <h3 className="bg-blue-950 font-bold p-2 rounded-r-lg">¡Hola!, soy</h3>
        <h1 className="md:text-5xl text-slate-100 font-bold">{name}</h1>
        <p className="md:text-2xl text-slate-400">{role}</p>
        <ul>
          <ol className="pb-2">
            <FontAwesomeIcon icon={faEnvelope} /> cjaureguisaavedra@gmail.com
          </ol>
          <ol className="pb-2">
            <FontAwesomeIcon icon={faLocationDot} /> Lima, Perú
          </ol>
        </ul>
        <ul className="flex text-center gap-4">
          <a href="">
            <li>
              <FontAwesomeIcon className="w-8 h-8" icon={faGithub} />
            </li>
          </a>
          <a href="">
            <li>
              <FontAwesomeIcon className="w-8 h-8" icon={faLinkedin} />
            </li>
          </a>
        </ul>
      </aside>

      <Photo></Photo>
    </section>
  );
}
