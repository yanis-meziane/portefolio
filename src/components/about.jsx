import "../components/CSS/main.css";
import {GraduationCap} from "lucide-react"

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

        <div id="education_main">
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
        </div>
    
    </section>
    );
};