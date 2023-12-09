import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="ml-6"
          src="/images/logo-about.png"
          width={300}
          height={300}
        />
        <div>
          <h2 className="text-[#059965] text-4xl font-semibold">Sobre mim</h2>
          <p>
            Sou um Desenvolvedor Full Stack, apaixonado por tecnologia,
            atualmente cursando Eng. de Software na UNINTER, e trabalho como Dev
            Full Stack na Fuvir, possuo proefiência no ecosistema do
            JavaScript(React, nodejs, nextjs, nestjs), além de AWS, tailwindCss,
            APIs com graphQl e banco de Dados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
