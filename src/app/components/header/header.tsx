import Image from 'next/image'
import "./header.css"

export function Header(){
    return(
        <main>
          <div className="header">
                      <div>
                      <h1>Olá, eu sou Eduardo Oliveira</h1>
                      <h2>Sou engenheiro de sofware</h2>
                      </div>

                      <Image
                      src="/me.png"
                      alt="Vercel Logo"
                      width={325}
                      height={290}
                      priority
                      />
           </div>

        </main>
        )
    }