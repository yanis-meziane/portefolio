import "../components/CSS/main.css";

export default  function  Accueil() {
  return (
  <main id="accueil">
    <section className="section_main">
      <article>
        <img id="yanis" src="/Images/yanis.jpg" alt="Yanis Meziane" />
      </article>

      <article>
        <h1>MEZIANE Yanis</h1>
      </article>

      <article>
        <a href="/CV.pdf" download>
          <button id="downloading">Télécharger mon CV</button>
        </a>
      </article>

      <article id="littlePresentation">
        <p>
          <em>
            “La photographie est un art qui permet de retranscrire ta vision du monde à travers un appareil photo.”
          </em>
        </p>
      </article>
    </section>
  </main>
  );
};
