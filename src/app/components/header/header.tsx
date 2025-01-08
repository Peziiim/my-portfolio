import Image from 'next/image'

export function Header(){
    return(
        <main>
          <div className="header">
                      <div>
                      <h1>Olá, eu sou Eduardo Oliveira</h1>
                      <h2>Sou engenheiro de sofware</h2>
                      </div>

                      <Image
                      src="/verbel.svg"
                      alt="Vercel Logo"
                      width={100}
                      height={24}
                      priority
                      />
           </div>

        </main>
        )
    }