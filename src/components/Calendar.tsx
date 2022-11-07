import { CalendarBlank, ArchiveBox, CaretRight, Warning } from "phosphor-react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Schedule } from "./Schedule";


export function Calendar() {
  return (
    <>
      <Header />
      <div className="max-w-[1120px] flex items-center mt-20 mb-16 mx-auto">
        <div className="w-[1120px] flex justify-between">
          <div className="w-[472px]">
            <h1 className="text-gray-100 text-5xl leading-[54px] mb-6 font-bold">
              Confira o cronograma completo da Semana da Computação!
            </h1>
            <p className="text-gray-100 font-light leading-[26px]">
              De 19 a 26 de Novembro vamos construir juntos conhecimento de diversas áreas da computação!
            </p>

            <button className="mt-14 flex items-center gap-2 py-[18px] px-8 rounded-[5px] bg-[#8257e5] hover:bg-[#8257e5d3] transition-colors">
              <CalendarBlank size={24} />
              <p className="uppercase font-bold text-white text-[14px] leading-4">
                adicionar lembrete no Google agenda
              </p>
            </button>

            <button className="w-[256px] mt-10 border border-gray-500 rounded-[5px] bg-transparent">
              <div className="flex items-center p-4">
                <div className="w-12 h-12 bg-[#8257e5] rounded-[5px] flex items-center justify-center">
                  <ArchiveBox size={26} />
                </div>
                <p className="text-left w-min mr-auto ml-4 font-bold">Material complementar</p>
                <CaretRight size={20} />
              </div>
            </button>
          </div>

          <ul className="w-[576px] flex flex-col gap-4">
            <Schedule
              dayWeek="Domingo"
              date="19 de Novembro"
              hour="19h00"
              label="Ao vivo - Técnicas do Frontend"
            />
            <Schedule
              dayWeek="Segunda"
              date="20 de Novembro"
              hour="19h00"
              label="Aula - Inteligência Artificial"
            />
            <Schedule
              dayWeek="Terça"
              date="21 de Novembro"
              hour="19h00"
              label="Aula - Análise de Algoritmo"
            />
            <Schedule
              dayWeek="Quarta"
              date="22 de Novembro"
              hour="19h00"
              label="Aula - Backend"
            />
            <Schedule
              dayWeek="Quinta"
              date="23 de Novembro"
              hour="19h00"
              label="Aula - Infraestrutura"
            />
            <Schedule
              dayWeek="Sexta"
              date="24 de Novembro"
              hour="19h00"
              label="Aula - Gerenciamento de Projetos"
            />
            <Schedule
              dayWeek="Domingo"
              date="26 de Novembro"
              hour="19h00"
              label="Ao vivo - Encerramento do evento"
            />
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 rounded-full text-[#fd951f] bg-[#412C17] flex justify-center items-center">
                <Warning size={35} />
              </div>
              <p className="text-gray-100 font-light">
                O cronograma está sujeito a mudança sem aviso prévio
              </p>
            </div>
          </ul>
        </div>
      </div>

      <div className="px-[100px]">
        <Footer />
      </div>
    </>
  );
}
