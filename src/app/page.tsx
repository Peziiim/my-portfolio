import Image from "next/image";

import { Header } from "./components/header/header";

import "./components/styles/home.css";

export default function Home() {
    return(
        <main className='container'>
            <Header/>


            <div className="experience">
            <h3>Experience</h3>
            <p>First job as a software enginner</p>
            </div>

            <div className="experienceTime">
            </div>

            <div className="infos">
                <h3>Languages</h3>
            <div className="languages-info">
                <span> EN - English - Fluent</span>
                <span> PT-BR - Português brasileiro - Native Speaker</span>
                </div>
            </div>

            <div className="educational-info">
            <h3>Education</h3>

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
