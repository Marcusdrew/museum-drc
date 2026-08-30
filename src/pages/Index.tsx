import heroImage from "@/assets/hero-restaurant.jpg";

const Index = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <img
        src={heroImage}
        alt="Contemporary art gallery interior with dramatic lighting and abstract paintings"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Location */}
          <div className="flex flex-col space-y-3 text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.2em] font-light text-white/60">
              Location –
            </span>
            <p className="text-lg lg:text-xl font-light text-white">
              245 NW Flanders Street
            </p>
            <p className="text-lg lg:text-xl font-light text-white">
              Portland, OR 97209
            </p>
          </div>

          {/* Coming Soon */}
          <div className="flex flex-col space-y-5 text-center">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-normal text-white tracking-tight leading-[0.95]">
              Coming Soon
            </h1>
            <p className="text-base lg:text-lg font-light text-white/80 text-balance">
              Our new gallery space opens next month.
            </p>
          </div>

          {/* Inquiries */}
          <div className="flex flex-col space-y-3 text-center lg:text-right">
            <span className="text-xs uppercase tracking-[0.2em] font-light text-white/60">
              Inquiries –
            </span>
            <p className="text-lg lg:text-xl font-light text-white">
              Get in Touch:
            </p>
            <a
              href="mailto:hello@bellanova.gallery"
              className="text-base lg:text-lg font-light text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              hello@bellanova.gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
