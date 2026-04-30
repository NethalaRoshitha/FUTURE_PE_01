import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Sparkles, Scissors, Heart, Brush, ShieldCheck, Award, Leaf, UserCheck, Phone, MapPin, Mail, Menu, X } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import hairImg from "@/assets/service-hair.jpg";
import skinImg from "@/assets/service-skin.jpg";
import makeupImg from "@/assets/service-makeup.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Glow Beauty Salon — Premium Beauty Care in Vijayawada" },
      { name: "description", content: "Glow Beauty Salon offers premium hair, skin and bridal makeup services in Vijayawada. Book your appointment for an elegant, personalized beauty experience." },
      { property: "og:title", content: "Glow Beauty Salon — Premium Beauty Care in Vijayawada" },
      { property: "og:description", content: "Elegant hair, skin and bridal makeup services for modern women in Vijayawada." },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
});

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="font-display text-xl tracking-tight">Glow<span className="text-primary"> Beauty</span></span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </div>
        <Button asChild variant="default" size="sm" className="hidden md:inline-flex rounded-full px-5 shadow-[var(--shadow-soft)]">
          <a href="#contact">Book Now</a>
        </Button>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 px-6 py-4 space-y-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground">{l.label}</a>
          ))}
          <Button asChild className="w-full rounded-full"><a href="#contact" onClick={() => setOpen(false)}>Book Now</a></Button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-secondary blur-3xl opacity-60" />
      <div className="absolute top-40 -right-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl opacity-60" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary mb-6">
            <span className="h-px w-8 bg-primary"/> Vijayawada's Premier Salon
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Glow Like <em className="text-primary not-italic font-medium">Never</em> Before
          </h1>
          <p className="mt-3 font-display text-2xl text-muted-foreground italic">Premium Beauty Care in Vijayawada</p>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Designed for modern women who value elegance, confidence, and self-care.
            Step into a sanctuary of luxury and emerge radiant.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8 h-12 shadow-[var(--shadow-elegant)]">
              <a href="#contact">Book Appointment</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 border-foreground/20">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm">
            <div><div className="font-display text-2xl text-primary">10+</div><div className="text-muted-foreground text-xs uppercase tracking-wider">Years</div></div>
            <div className="h-10 w-px bg-border"/>
            <div><div className="font-display text-2xl text-primary">5K+</div><div className="text-muted-foreground text-xs uppercase tracking-wider">Happy Clients</div></div>
            <div className="h-10 w-px bg-border"/>
            <div><div className="font-display text-2xl text-primary">4.9★</div><div className="text-muted-foreground text-xs uppercase tracking-wider">Rated</div></div>
          </div>
        </div>
        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2.5rem] blur-2xl" />
          <img
            src={heroImg}
            alt="Luxurious interior of Glow Beauty Salon in Vijayawada"
            width={1536}
            height={1024}
            className="relative rounded-[2rem] shadow-[var(--shadow-elegant)] object-cover w-full aspect-[4/5]"
          />
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)] flex items-center gap-3 animate-float-slow">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Loved by</div>
              <div className="text-sm font-medium">5,000+ women</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">About Us</span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
          A sanctuary where <em className="text-primary not-italic">beauty</em> meets calm
        </h2>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Glow Beauty Salon offers high-quality beauty services in a hygienic and relaxing environment.
          Our expert professionals focus on customer satisfaction, comfort, and personalized care —
          every visit is designed to leave you feeling confident, refreshed, and beautifully cared for.
        </p>
        <div className="mt-14 grid sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: Leaf, t: "Calm Atmosphere", d: "A serene space crafted for your relaxation." },
            { icon: ShieldCheck, t: "Hygiene First", d: "Sanitized tools and a spotless environment." },
            { icon: UserCheck, t: "Personal Touch", d: "Tailored treatments for your unique style." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-card rounded-2xl p-6 border border-border/60">
              <Icon className="h-6 w-6 text-primary mb-3"/>
              <h3 className="font-display text-lg mb-1">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Scissors,
      img: hairImg,
      title: "Hair Services",
      desc: "Professional haircuts, styling, and treatments tailored to your personality.",
      benefit: "Walk out with hair that turns heads and feels effortlessly you.",
    },
    {
      icon: Heart,
      img: skinImg,
      title: "Skin Services",
      desc: "Advanced facials and skincare treatments for glowing and healthy skin.",
      benefit: "Reveal radiant, refreshed skin that glows from within.",
    },
    {
      icon: Brush,
      img: makeupImg,
      title: "Makeup Services",
      desc: "Bridal and party makeup for every special occasion.",
      benefit: "Look stunning on your big day with flawless, long-lasting makeup.",
    },
  ];
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">Crafted for your <em className="text-primary not-italic">beauty</em></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, img, title, desc, benefit }) => (
            <article key={title} className="group bg-card rounded-3xl overflow-hidden border border-border/60 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-500">
              <div className="overflow-hidden aspect-[4/5]">
                <img src={img} alt={title} loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary"/>
                  </div>
                  <h3 className="font-display text-2xl">{title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{desc}</p>
                <p className="text-sm text-foreground/80 italic border-l-2 border-primary pl-3">{benefit}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Award, t: "Experienced Professionals", d: "Skilled stylists with years of expertise." },
    { icon: Sparkles, t: "Premium Products", d: "Only trusted, high-end beauty brands." },
    { icon: ShieldCheck, t: "Hygienic Environment", d: "Spotless, sanitized, and safe spaces." },
    { icon: Heart, t: "Personalized Service", d: "Treatments designed around you." },
  ];
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">The <em className="text-primary not-italic">Glow</em> difference</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="text-center p-8 rounded-3xl border border-border/60 bg-card hover:bg-secondary/40 transition-colors duration-500">
              <div className="mx-auto h-14 w-14 rounded-full bg-secondary flex items-center justify-center mb-5">
                <Icon className="h-6 w-6 text-primary"/>
              </div>
              <h3 className="font-display text-xl mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-[oklch(0.78_0.1_20)] px-8 py-16 lg:p-20 text-center text-primary-foreground">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"/>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"/>
          <div className="relative">
            <Sparkles className="h-8 w-8 mx-auto mb-6 opacity-80"/>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">Book Your Appointment Today!</h2>
            <p className="mt-6 text-lg opacity-90">Limited slots available — reserve your moment of glow.</p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 h-12 bg-card text-foreground hover:bg-card/90">
                <a href="#contact">Contact Us</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 bg-transparent border-white/40 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                <a href="tel:+919999999999"><Phone className="h-4 w-4 mr-2"/>Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you! We'll reach out to confirm your booking shortly.");
    }, 700);
  };
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">Let's create your <em className="text-primary not-italic">glow</em></h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Reach out with any question or send us a booking request — we usually reply within a few hours.
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-full bg-card flex items-center justify-center shrink-0"><MapPin className="h-5 w-5 text-primary"/></div>
              <div><div className="font-medium">Visit Us</div><div className="text-sm text-muted-foreground">Vijayawada, Andhra Pradesh, India</div></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-full bg-card flex items-center justify-center shrink-0"><Phone className="h-5 w-5 text-primary"/></div>
              <div><div className="font-medium">Call Us</div><div className="text-sm text-muted-foreground">+91 99999 99999</div></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-full bg-card flex items-center justify-center shrink-0"><Mail className="h-5 w-5 text-primary"/></div>
              <div><div className="font-medium">Email</div><div className="text-sm text-muted-foreground">hello@glowbeautysalon.in</div></div>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="bg-card rounded-3xl p-8 lg:p-10 border border-border/60 shadow-[var(--shadow-soft)] space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Your name" className="rounded-xl h-11"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" required placeholder="+91 ..." className="rounded-xl h-11"/>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" className="rounded-xl h-11"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} placeholder="Tell us what you'd like to book..." className="rounded-xl"/>
          </div>
          <Button type="submit" disabled={submitting} className="w-full rounded-full h-12 shadow-[var(--shadow-soft)]">
            {submitting ? "Sending..." : "Request Appointment"}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary"/>
          <span className="font-display text-base text-foreground">Glow Beauty Salon</span>
        </div>
        <div>© {new Date().getFullYear()} Glow Beauty Salon, Vijayawada. All rights reserved.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <About/>
      <Services/>
      <WhyUs/>
      <CTA/>
      <Contact/>
      <Footer/>
      <Toaster richColors position="top-center"/>
    </main>
  );
}
