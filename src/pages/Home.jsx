import { useState } from "react";
import { Navbar } from "@components/Navbar";
import { Photo } from "@components/Photo";
import { Info } from "@components/Info";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col h-screen px-4 md:px-11">
      <Navbar />
      <Info
        name={"César Jauregui"}
        role={"Ingenierio de Sistemas | Full Stack"}
      />
      {/* <article className="flex flex-col w-4/12 h-full">
        <section className=" h-full rounded-md">
          <header className="flex justify-center items-end bg-zinc-700 h-1/2 bg-gradient-to-r from-neutral-700 to-zinc-900"></header>

          <footer className="flex justify-around">
            <button type="submit">Download CV</button>
            <button>Contact me</button>
          </footer>
        </section>
      </article>
      <section className="w-6/12">asdas</section> */}
    </main>
  );
}

export default App;
