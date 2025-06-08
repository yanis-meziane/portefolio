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
        <a
                href="/CV.pdf"
                download={true}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {("download")}
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
