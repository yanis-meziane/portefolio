import "../components/CSS/main.css";
import { Palette, Theater, PartyPopper, Clapperboard, GraduationCap, Notebook } from "lucide-react";


export const About = () => {
    return(

        <section id="about">
            <article className="section_main">
                    <h1>
                        About Me 
                    </h1>
                <div id="text_presentation">
                    <p>
                         Bonjour, je m’appelle Yanis et je suis actuellement étudiant en Ingénierie Numérique à l’EFREI. Passionné par l’informatique, je cherche à approfondir mes compétences techniques, notamment dans le développement web. 

                    <br />
                    <br />

                        Mon parcours académique, enrichi par diverses expériences professionnelles, m’a permis d’acquérir une solide compréhension des enjeux du secteur informatique. J’ai eu l’opportunité de mettre en pratique mes connaissances au travers de stages et de projets réalisés dans le cadre de mes études. 

                    <br />

                        Pour le Back-End, je suis à l’aise avec <em>Java</em>, <em>Node.js</em> et <em>Python</em>, et côté Front-End, j’utilise régulièrement <em>HTML/CSS</em>, <em>react</em> et <em>Javascript</em>.

                    <br />
                    <br />

                        En dehors du domaine numérique, je nourris plusieurs centres d’intérêt. Je suis particulièrement passionné par l’audiovisuel, notamment la photographie et le cinéma. Par ailleurs, je pratique de nombreux sports, parmi lesquels l' <b>Athlétisme</b>, le <b>Judo</b>, <b>football</b>, le <b>tir à l'arc</b> et plus récemment l'<b>ultimate</b>.
                    </p>
                </div>
            </article>

        <div id="AboutMe_main">
                        <h2>Education</h2>
                            <article id="education">
                                <div className="education_text">
                                    <div>
                                        <GraduationCap></GraduationCap>
                                    </div>

                                    <div>
                                        <p>
                                            Bachelor Ingénierie et Numérique
                                        </p>

                                        <p>
                                            <em>
                                                2024-2026
                                            </em>
                                        </p>

                                        <p>
                                            EFREI Paris 
                                        </p>
                                    </div>
                                </div>
                    <br />

                            <div className="education_text">
                                <div>
                                    <GraduationCap></GraduationCap>
                                </div>

                                <div>
                                    <p>
                                        Bachelor Développeur Web et Application
                                    </p>

                                    <p>
                                        <em>
                                            2023-2024
                                        </em>
                                    </p>
                            
                                    <p>
                                        EFREI Paris 
                                    </p>
                                </div>
                            </div>
                    <br />

                            <div className="education_text">
                                <div>
                                    <GraduationCap></GraduationCap>
                                </div>

                                <div>
                                    <p>
                                        Licence Math/SVT 
                                    </p>

                                <p>
                                    <em>
                                        2022-2023
                                    </em>
                                </p>
                            
                                    <p>
                                        Université d'Orléans
                                    </p>
                                </div>
                            </div>
                    </article>

                    <h2>Engagements Associatifs</h2>
                            <article id="education">
                                <div className="education_text">
                                    <div>
                                        <PartyPopper />
                                    </div>

                                    <div>
                                        <p>
                                            Secrétaire Week-End d'Intégration (WEI) 
                                        </p>

                                        <p>
                                            <em>
                                                2025-2026
                                            </em>
                                        </p>

                                        <p>
                                            EFREI Paris 
                                        </p>

                                        <p>
                                             - Organisation du week-end d'intégration avec plus de 900 étudiants.
                                        </p>
                                    </div>
                                </div>
                    <br />

                            <div className="education_text">
                                <div>
                                    <Palette />
                                </div>

                                <div>
                                    <p>
                                        Secrétaire Bureau Des Arts (BDA)
                                    </p>

                                    <p>
                                        <em>
                                            2024-2025
                                        </em>
                                    </p>
                            
                                    <p>
                                        EFREI Paris 
                                    </p>

                                    <p>
                                        - Organisation de la fête de la musique
                                    </p>

                                    <p>
                                        - Organisation d'un Spectacle de Fin d'Année 
                                    </p>
                                    <p>
                                         - Organisation d'un concours de talent.
                                    </p>
                                </div>
                            </div>

                        <br />
                        
                            <div className="education_text">
                                <div>
                                    <Clapperboard />
                                </div>

                                <div>
                                    <p>
                                        Président Efr'Action
                                    </p>

                                <p>
                                    <em>
                                        2024-2025
                                    </em>
                                </p>
                            
                                    <p>
                                        - Partage culture cinématographique 
                                    </p>
                                    <p>
                                        - Organisation de sortie culturelle
                                    </p>

                                    <p>
                                        - Sorties cinéma
                                    </p>
                                </div>
                            </div>
                    <br />
                             <div className="education_text">
                                <div>
                                    <Theater />
                                </div>

                                <div>
                                    <p>
                                        Trésorier Scène Efreinée
                                    </p>

                                <p>
                                    <em>
                                        2024-2025
                                    </em>
                                </p>
                            
                                    <p>
                                        - Cours d'improvisation
                                    </p>
                                    <p>
                                        - Organisation de sorties à des matchs d'improvisation
                                    </p>

                                    <p>
                                        - Organisation d'un spectacle de fin d'année
                                    </p>
                                </div>
                            </div>
                    <br />
                             <div className="education_text">
                                <div>
                                    <Notebook />
                                </div>

                                <div>
                                    <p>
                                        Vice - Président Pôle Journée à Tribu-Terre (BDE Orléans)
                                    </p>

                                <p>
                                    <em>
                                        2022-2023
                                    </em>
                                </p>
                            
                                    <p>
                                        - Partage culture scientifique 
                                    </p>
                                    <p>
                                        - Organisation de débat sur le domaine scientifique
                                    </p>

                                    <p>
                                        - Organisation de sorties mensuelles d'un journal scientifique
                                    </p>
                                </div>
                            </div>
                    </article>
        </div>
    
    </section>
    );
};