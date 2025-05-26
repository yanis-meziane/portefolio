import "./CSS/footer.css"

export function Footer(){
   return(
      <section id="footer_master">

            <article id="footer_information"> 
                 <div className="personnal_information">
                    <h4>
                        Mail 
                    </h4>

                    <p>
                        yanismeziane04@icloud.com
                    </p>
                </div>

                <div className="personnal_information">
                    <h4>
                        Téléphone
                    </h4>

                    <p>
                        06.30.38.08.38
                    </p>
                </div>
            </article>

            <article id="footer_socialMedia">
                <div className="socialMedia">
                    <a href="https://github.com/yanis-meziane">Github</a>
                </div>
                <div className="socialMedia">
                    <a href="https://www.linkedin.com/in/yanis-meziane2/://">Linkedin</a>
                </div>
            </article>
      </section>
   )
}