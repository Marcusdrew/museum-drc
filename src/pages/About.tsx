import aboutInterior from "@/assets/about-interior.jpg";
import aboutCurator from "@/assets/about-chef.jpg";

const About = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center">
        <img
          src={aboutInterior}
          alt="Bellanova gallery interior with skylights and contemporary artworks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight mb-4">
            Our Story
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-xl mx-auto">
            A space for contemporary art, rooted in Portland's creative spirit.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Where Art Finds Its Audience
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Bellanova was founded in 2022 with a clear mission: to bridge the gap between emerging
            contemporary artists and discerning collectors. Located in the heart of Portland's Pearl
            District, our gallery occupies a converted industrial loft with soaring ceilings, polished
            concrete floors, and natural light that shifts throughout the day — a space designed to
            let the art speak for itself.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We represent a curated roster of painters, sculptors, and photographers whose work pushes
            boundaries while remaining deeply rooted in craft. From large-scale abstract canvases to
            intimate works on paper, every piece in our program is selected for its emotional resonance,
            material integrity, and enduring relevance. We believe great art should be lived with, not
            just looked at.
          </p>
        </div>
      </section>

      {/* Curator section */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-secondary">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-lg overflow-hidden aspect-square max-w-md mx-auto w-full">
            <img
              src={aboutCurator}
              alt="Gallery Director Elena Vasquez"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm uppercase tracking-wide font-medium text-muted-foreground mb-2 block">
              Gallery Director
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-4">
              Elena Vasquez
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 15 years in the contemporary art world — from curatorial roles at MOCA and
              the Whitney to advisory work with private collectors across three continents — Elena
              brings a rigorous eye and a deep network to Bellanova. Her programming balances
              established voices with breakthrough talent, always seeking work that challenges and rewards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              "A gallery should be a place of encounter," Elena says. "Between the artist and the
              viewer, the familiar and the unexpected, the intellectual and the visceral. That's what
              we're building here — a space where those encounters happen naturally."
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground text-center mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Artist-First</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We invest in long-term relationships with our artists, supporting studio visits, catalog production, and career development beyond the gallery walls.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Accessible Expertise</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you're a seasoned collector or acquiring your first piece, we provide guidance without pretension. Art is for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Community Rooted</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Monthly openings, artist talks, and educational workshops keep our doors open to Portland's vibrant creative community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
