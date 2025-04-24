import HeroImg from '../../../../assets/image/hero.svg';

const Hero = () => {
  return (
    <section id="beranda" className="h-full pt-20">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
          <img src={HeroImg} alt="Hero 1" loading="" />
        </div>

        <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 mx-4 flex flex-col justify-center">
          <h1 className="text-4xl text-center md:text-5xl leading-tight">
            Jadilah Bagian dari Garda Terdepan
            <span className="text-primary"> Penanggulangan Bencana </span>
          </h1>
          <p className="font-sans text-inter text-center text-base md:text-base text-grey opacity-50 mt-2 md:mt-5 mx-auto w-3/4 flex justify-center">
            Program Magang di Badan Penanggulangan Bencana Daerah (BPBD)
            Kabupaten Tegal
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
