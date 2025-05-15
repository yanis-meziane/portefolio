import "../components/CSS/accueil.css";

export default  function  Accueil() {
  return (
  <main id="accueil">
    <section id="section_main">
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
          <b>Hey,</b> je m'appelle Yanis. Je suis étudiant en ingénierie numérique à l'EFREI.
          Mes centres d'intérêt incluent l’audiovisuel, la photographie, l’athlétisme et la réalité virtuelle.
        </p>
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
