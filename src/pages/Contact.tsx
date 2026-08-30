import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2 text-center">
          Visit Us
        </h1>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Schedule a private viewing or drop by during gallery hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-foreground/70 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Gallery</h3>
              <p className="text-muted-foreground">245 NW Flanders Street</p>
              <p className="text-muted-foreground">Portland, OR 97209</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-foreground/70 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <a href="tel:5035559200" className="text-muted-foreground hover:text-foreground transition-colors">
                (503) 555-9200
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-foreground/70 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <a href="mailto:hello@bellanova.gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                hello@bellanova.gallery
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-foreground/70 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Gallery Hours</h3>
              <p className="text-muted-foreground">Tue – Sat: 11am – 6pm</p>
              <p className="text-muted-foreground">Sun: 12pm – 5pm</p>
              <p className="text-muted-foreground">Mon: Closed</p>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-secondary rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Inquire About a Work</h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us which work you're interested in or any questions you have."
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-foreground text-background font-medium py-2.5 rounded-md hover:opacity-90 transition-opacity text-sm"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
