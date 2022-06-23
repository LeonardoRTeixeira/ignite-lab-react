import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, ImageSquare, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css';

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[68vh] aspect-video">
          <Player>
            <Youtube videoId="M2Af7gkbbro"/>
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <section className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold ">
              Aula 01 - Abertura do Ignite Lab
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, 
              Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades 
              da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img 
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="data:image/jpeg;base64,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" 
                alt=""
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">Gustavo Guanabara</strong>
                <span className="text-gray-200 text-sm block">Mestre Jedi em tecnologia</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>          
        </section>

        <section className="gap-8 mt-20 grid grid-cols-2">
          <a 
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
            href="">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">
                Material complementar
              </strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="p-6 h-full flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          
          <a 
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
            href="">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <ImageSquare size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">
                Wallpapers exclusivos
              </strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="p-6 h-full flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </section>     
      </div>
    </div>
  )
}