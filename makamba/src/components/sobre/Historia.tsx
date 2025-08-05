const Historia = () => (
  <div className="relative bg-gradient-to-r from-white via-[#FF6700]/10 to-white rounded-xl shadow-2xl mb-12 max-w-3xl mx-auto overflow-hidden border border-[#FF6700]/30
    px-4 py-6
    sm:px-6 sm:py-8
    md:px-10 md:py-10
    lg:px-14 lg:py-12
  ">
    {/* Efeito decorativo */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none m-10 z-0 dark:bg-black">
      <div className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 bg-[#FF6700]/20 rounded-xl blur-xl" />
      <div className="absolute -bottom-8 -right-8 w-16 h-16 sm:w-24  sm:h-24 bg-[#FF6700]/10 rounded-xl blur-xl" />
    </div>
    <div className="relative z-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FF6700] mb-6 text-center drop-shadow-lg">
        Nossa História
      </h2>
      <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed mb-2 text-center font-medium">
        A Makamba nasceu com o sonho de transformar o mercado de TI. Nossa jornada começou com um pequeno grupo de apaixonados por tecnologia, unidos pelo propósito de criar soluções inovadoras, seguras e eficientes para empresas de todos os tamanhos.
        Ao longo dos tempo, crescemos, conquistamos clientes, parceiros e nos tornamos referência em qualidade e compromisso. Cada projeto é uma nova oportunidade de superar desafios e entregar resultados que fazem a diferença.
        <br /><br />
        Somos movidos por pessoas, ideias e pelo desejo de construir um futuro melhor através da tecnologia.
        <br /><br />
        Junte-se a nós nessa jornada e descubra como podemos transformar o seu negócio!
        <br /><br />
        Somos Makamba<span className="text-[#FF6700] font-bold">Tec</span>
      </p>
    </div>
  </div>
);

export default Historia;
