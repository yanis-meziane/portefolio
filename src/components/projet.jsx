import "./CSS/main.css";
import { EyeOff, Framer, MousePointer, Scan} from "lucide-react";
 
 export const Projet = () => {
    return(
        <section id="projectsMaster">
            <div id="projectsMain">
                <h2>Mes projets</h2>
                    <article id="projects">
                        <div className="allProjects">
                            <div>
                                <EyeOff />
                            </div>
                            <div>
                                <h3>
                                    SpeakTouch
                                </h3>
                            </div>
                            <div>
                                <p>
                                    Projet visant à aider les personnes rencontrant des difficultés à communiquer verbalement
                                </p>
                            </div>
                        </div>
                    <br />
                        <div className="allProjects">
                            <div>
                                <Scan />
                            </div>
                            <div>
                                <h3>
                                    TaskQuests
                                </h3>
                            </div>
                            <div>
                                <p>
                                    Projet personnel en cours de réalisation en vue de faciliter la réalisation des tâches d'un projet associatif. Il a pour but de diviser un projet en différents niveau afin de rendre la réalisation de ce projet plus ludique.
                                </p>
                            </div>
                        </div>
                    <br />
                        <div className="allProjects">
                            <div>
                                <MousePointer />
                            </div>
                            <div>
                                <h3>
                                    Mini-Jeu en java
                                </h3>
                            </div>
                            <div>
                                <p>
                                    Réalisation d'un mini-jeu de combat en Java où nous pouvons choisir ou personnaliser un personnage pour aller combattre des monstres.
                                </p>
                            </div>
                        </div>
                    <br />
                        <div className="allProjects">
                            <div>
                                <Framer />
                            </div>
                            <div>
                                <h3>
                                    Script IFS
                                </h3>
                            </div>
                            <div>
                                <p>
                                    
                                </p>
                            </div>
                        </div>

                    </article>
            </div>
        </section>
    )
}