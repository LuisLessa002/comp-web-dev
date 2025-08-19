import { ChevronDown, BarChart3 } from "lucide-react";
import Image from "next/image";
import EnhancedEADPoloChart from "../components/polo-chart-statistics";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <div className="w-full bg-gray-50">
        {/* Top Header */}
        <div className="flex h-[87px] px-4 lg:px-20 items-center justify-between bg-gray-50">
          <Image 
            src="https://api.builder.io/api/v1/image/assets/TEMP/2dda8359c3cc8ce7ad475a12fafee6f6db45ce29?width=394" 
            alt="Instituto Federal Logo" 
            width={197}
            height={46}
            className="w-[197px] h-[46px]"
            priority
          />
          
          <div className="hidden lg:flex items-center gap-20">
            {/* Contrast indicator */}
            <div className="flex items-center gap-2.5">
              <div className="w-[2px] h-[19px] rounded-[9.6px] border border-gray-300 opacity-40"></div>
              <div className="w-[2px] h-[19px] rounded-[9.6px] border border-gray-300 opacity-40"></div>
              <div className="w-[2px] h-[19px] rounded-[9.6px] border border-gray-300 opacity-40"></div>
              <div className="w-[2px] h-[19px] rounded-[9.6px] border border-gray-300 opacity-40"></div>
            </div>
            
            {/* Header controls */}
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-lg font-normal">contrast</span>
              <div className="w-[42px] h-[42px] rounded-[21px] border border-gray-100"></div>
              <span className="text-gray-500 text-lg font-normal">dark_mode</span>
              <div className="w-[42px] h-[42px] rounded-[21px] border border-gray-100"></div>
              <div className="flex items-center">
                <span className="text-gray-400 text-lg font-normal mr-2">search</span>
                <div className="w-[209px] h-[42px] rounded-[25px] border border-gray-100 bg-white flex items-center px-4">
                  <span className="text-gray-400 text-sm">Busca</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center px-4 lg:px-20 py-4 bg-white border-b border-ifce-dark overflow-x-auto">
          <nav className="flex items-center gap-4 lg:gap-8 whitespace-nowrap">
            <a href="#" className="text-black text-sm font-bold whitespace-nowrap">Processos Seletivos</a>
            <a href="#" className="text-black text-sm font-bold whitespace-nowrap">Cursos</a>
            <a href="#" className="text-black text-sm font-bold whitespace-nowrap">Campi</a>
            <a href="#" className="text-black text-sm font-bold whitespace-nowrap">Institucional</a>
            <a href="#" className="text-black text-sm font-bold whitespace-nowrap">Acesso à Informação</a>
            <a href="#" className="text-black text-sm font-bold whitespace-nowrap">Contatos</a>
            <a href="#" className="text-black text-sm font-bold whitespace-nowrap">Sistemas</a>
            <a href="#" className="text-black text-sm font-bold whitespace-nowrap">Central de Atendimento</a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1200px] mx-auto px-5">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-5 py-10">
          <div className="w-20 h-20 rounded-full bg-ifce-primary shadow-lg flex items-center justify-center">
            <BarChart3 className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
          
          <h1 className="text-ifce-secondary text-center text-3xl lg:text-5xl font-bold leading-tight max-w-[701px]">
            Matrículas por polos no Ceará
          </h1>
          
          <p className="max-w-[706px] text-slate-600 text-center text-lg lg:text-xl font-normal leading-7">
            Acompanhe a evolução das matrículas por polo específico no estado do Ceará.
          </p>
          
          <button className="text-blue-500 text-center text-base font-normal leading-6 cursor-pointer hover:underline">
            ← Voltar para o Dashboard Principal
          </button>
        </div>

        {/* Statistics Cards 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center my-10">
          <div className="w-full max-w-[251px] mx-auto h-[110px] rounded-2xl border border-gray-200/50 bg-white/70 backdrop-blur-sm shadow-lg p-6 flex flex-col justify-center">
            <div className="text-slate-600 text-sm font-normal leading-5 mb-1">Total de polos</div>
            <div className="text-ifce-tertiary text-[25px] font-bold leading-9">50</div>
          </div>
          
          <div className="w-full max-w-[251px] mx-auto h-[110px] rounded-2xl border border-gray-200/50 bg-white/70 backdrop-blur-sm shadow-lg p-6 flex flex-col justify-center">
            <div className="text-slate-600 text-sm font-normal leading-5 mb-1">Total de alunos</div>
            <div className="text-ifce-tertiary text-[25px] font-bold leading-9">10000</div>
          </div>
          
          <div className="w-full max-w-[251px] mx-auto h-[110px] rounded-2xl border border-gray-200/50 bg-white/70 backdrop-blur-sm shadow-lg p-6 flex flex-col justify-center">
            <div className="text-slate-600 text-sm font-normal leading-5 mb-1">Polo (máximo)</div>
            <div className="text-ifce-tertiary text-[25px] font-bold leading-9">Fortaleza (3833)</div>
          </div>
          
          <div className="w-full max-w-[251px] mx-auto h-[110px] rounded-2xl border border-gray-200/50 bg-white/70 backdrop-blur-sm shadow-lg p-6 flex flex-col justify-center">
            <div className="text-slate-600 text-sm font-normal leading-5 mb-1">Polo (mínimo)</div>
            <div className="text-ifce-tertiary text-[25px] font-bold leading-9">Lagamar (1)</div>
          </div>
        </div>
        */}

        {/*
        
        <div className="w-full min-h-[122px] rounded-2xl border border-gray-200/50 bg-white/70 backdrop-blur-sm shadow-lg flex flex-wrap items-center justify-center gap-6 lg:gap-10 my-10 p-6">
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 text-sm font-normal leading-5">Ano Inicial</label>
            <div className="w-[122px] h-[42px] rounded-[25px] border border-gray-100 bg-white flex items-center justify-between px-4">
              <span className="text-gray-400 text-sm font-normal">Choose</span>
              <ChevronDown className="w-2 h-2 text-black" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 text-sm font-normal leading-5">Ano Final</label>
            <div className="w-[122px] h-[42px] rounded-[25px] border border-gray-100 bg-white flex items-center justify-between px-4">
              <span className="text-gray-400 text-sm font-normal">Choose</span>
              <ChevronDown className="w-2 h-2 text-black" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 text-sm font-normal leading-5">Curso</label>
            <div className="w-[122px] h-[42px] rounded-[25px] border border-gray-100 bg-white flex items-center justify-between px-4">
              <span className="text-gray-400 text-sm font-normal">Choose</span>
              <ChevronDown className="w-2 h-2 text-black" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 text-sm font-normal leading-5">Polo</label>
            <div className="w-[122px] h-[42px] rounded-[25px] border border-gray-100 bg-white flex items-center justify-between px-4">
              <span className="text-gray-400 text-sm font-normal">Choose</span>
              <ChevronDown className="w-2 h-2 text-black" />
            </div>
          </div>
        </div>
        */}

        {/* Chart Section - Enhanced Statistical Analysis */}
        <div className="w-full rounded-2xl border border-gray-200/50 bg-white/70 backdrop-blur-sm shadow-lg p-6 my-10">
          <h3 className="text-slate-900 text-2xl font-bold leading-8 mb-2"></h3>
          <p className="text-slate-600 text-base font-normal leading-6 mb-6"></p>

          {/* Advanced Chart Component */}
          <div className="w-full">
            <EnhancedEADPoloChart />
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="flex flex-col items-center gap-20 lg:gap-[107px] my-20">
          <h2 className="text-black text-2xl lg:text-[32px] font-bold leading-[60px] text-center">Mapa interativo</h2>
          <div className="w-full h-[387px] bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
            <span className="text-gray-400 text-lg text-center">Mapa será implementado aqui</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-slate-500 text-center text-base font-normal leading-6 my-10">
          © 2025 Dashboard de Matrículas. Dados atualizados em tempo real.
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-white border-t border-gray-100">
        <div className="flex flex-col lg:flex-row px-6 lg:px-[86px] py-[72px] gap-10 lg:gap-20 items-start">
          <Image 
            src="https://api.builder.io/api/v1/image/assets/TEMP/348ef7bec05c2394a2fb9155aa79833514e18679?width=250" 
            alt="Instituto Federal Logo" 
            width={125}
            height={165}
            className="w-[125px] h-[165px] flex-shrink-0"
          />
          
          <div className="flex-1">
            <h3 className="text-black text-lg font-bold leading-[26.25px] mb-5 max-w-[335px]">
              Instituto Federal de Educação, Ciência e Tecnologia do Estado do Ceará
            </h3>
            
            <p className="text-gray-600 text-sm font-normal leading-[19.5px] mb-1 max-w-[345px]">
              Rua Jorge Dumar, 1703 - Jardim América - Fortaleza-CE
            </p>
            
            <div className="flex gap-1.5 mb-1">
              <span className="text-gray-600 text-sm font-bold leading-[19.5px]">CEP:</span>
              <span className="text-gray-600 text-sm font-normal leading-[19.5px]">60410-426</span>
            </div>
            
            <div className="flex gap-1.5 mb-1">
              <span className="text-gray-600 text-sm font-bold leading-[19.5px]">E-mail:</span>
              <span className="text-gray-600 text-sm font-normal leading-[19.5px]">reitoria@ifce.edu.br</span>
            </div>
            
            <div className="flex gap-1.5 mb-5">
              <span className="text-gray-600 text-sm font-bold leading-[19.5px]">Telefone:</span>
              <span className="text-gray-600 text-sm font-normal leading-[19.5px]">(85) 3401 2300</span>
            </div>
            
            <div className="flex gap-3">
              <div className="w-[2px] h-[19px] rounded-[9.6px] border border-gray-300 opacity-40"></div>
              <div className="w-[2px] h-[19px] rounded-[9.6px] border border-gray-300 opacity-40"></div>
              <div className="w-[2px] h-[19px] rounded-[9.6px] border border-gray-300 opacity-40"></div>
              <div className="w-[2px] h-[19px] rounded-[9.6px] border border-gray-300 opacity-40"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-[317px] h-[158px] rounded-[10px] border border-blue-600 p-4 flex flex-col gap-3 relative">
            <Image 
              src="https://api.builder.io/api/v1/image/assets/TEMP/6457abcb76664ec2dc9ce7e17cb51e539b9e115d?width=270" 
              alt="e-MEC Logo" 
              width={135}
              height={44}
              className="w-[135px] h-[44px]"
            />
            <p className="text-blue-600 text-base font-bold leading-6 max-w-[177px]">
              Consulte o cadastro da instituição no Sistema do e-MEC
            </p>
            <Image 
              src="https://api.builder.io/api/v1/image/assets/TEMP/fcdbee341e3472cd1698e058598263276d32f716?width=110" 
              alt="QR Code" 
              width={55}
              height={95}
              className="w-[55px] h-[95px] absolute right-4 top-4"
            />
          </div>
        </div>
        
        <div className="w-full h-20 bg-ifce-dark flex items-center px-6 lg:px-[86px]">
          <p className="text-white text-sm font-normal leading-[20.25px]">
            Copyright © 2025 | Instituto Federal de Educação, Ciência e Tecnologia do Estado do Ceará
          </p>
        </div>
      </div>
    </div>
  );
}
