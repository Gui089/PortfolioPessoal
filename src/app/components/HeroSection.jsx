import { React } from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007800] to-[#26FFEE]">
              Olá, Eu sou{" "}
            </span>
            Guilherme
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Sou um Desenvolvedor Full Stack React e Nodejs, e trabalho com
            criação de web sites e apps mobile, com integrações de APIs com
            arquitetura Rest e graphQl.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#007800] via-[#26CB2A] to-[#26FFEE] hover:bg-green-700 text-white">
              <a
                href="https://api.whatsapp.com/send?phone=5577999461429&text=ol%C3%A1,%20Guilherme,%20quero%20falar%20com%20voc%C3%AA%20sobre%20tecnologia."
                target="_blank"
              >
                Contrate-me
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/gui.png"
              alt="perfil"
              className="absolute pr-9 transform -translate-x-1/2 -translate-y-1/2 top-[48%] left-1/2 "
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
