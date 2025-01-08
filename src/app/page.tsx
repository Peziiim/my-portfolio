import Image from ".next/image";
import { Header } from "./components/header/header";

export default function Home() {
    return(
        <main>
            <Header/>
            <div className="experience">
            <h3></h3>
            <p>texto</p>
            </div>

            <div className="experienceTime">
            </div>

            <div className="infos">
                <h3>Languages</h3>
            <div className="languages-info">
                <span> EN - Fluent</span>
                <span> PT-BR - Native Speaker</span>
                </div>
            </div>

            <h3>Education</h3>
            <div className="educational-info">

                <span></span>
                <span>Computer science Bachelors Degree</span>

              </div>

           <div className="buttons">
              <div className="Social">

              </div>
                <div className="contact me">
                    <button>contact me </button>
             </div>

           </div>


         </main>

            );
}
