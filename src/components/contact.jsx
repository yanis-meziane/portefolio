import {Headset, Mail} from "lucide-react"
import "./CSS/main.css";


export function Contact() {
  return (
    <div>
            <section id="contactMaster">
            <div id="contactMain">
                <h2>Mon contact</h2>
                    <article id="contact">
                        <div className="allContact">
                            <div>
                                <Headset />
                            </div>
                            <div>
                                <h3>
                                    Telephone
                                </h3>
                            </div>
                            <div>
                                <p>
                                   06.30.38.08.38
                                </p>
                            </div>
                        </div>
                    <br />
                        <div className="allContact">
                            <div>
                                <Mail />
                            </div>
                            <div>
                                <h3>
                                    Mails
                                </h3>
                            </div>
                            <div>
                                <p>
                                   Personnel : yanismeziane04@icloud.com
                                </p>
                            </div>
                        </div>
                    <br />
                        <div className="allContact">
                            <div>
                                <linkedin />
                            </div>
                            <div>
                                <h3>
                                   Linkedin
                                </h3>
                            </div>
                            <div>
                                <p>
                                    Yanis Meziane
                                </p>
                            </div>
                        </div>
                    </article>
            </div>
        </section>
    </div>
  );
}
