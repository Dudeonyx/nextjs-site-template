export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-brand-primary to-brand-mint"></span>
            <span className="font-heading font-extrabold text-lg tracking-tight">Fresh</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a className="hover:text-brand-primary transition" href="#features">
              Features
            </a>
            <a className="hover:text-brand-primary transition" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-brand-primary transition" href="#about">
              About
            </a>
          </nav>
          <a
            href="#signup"
            className="inline-flex items-center rounded-md bg-brand-pop px-4 py-2 font-heading text-sm font-semibold text-black shadow-subtle hover:brightness-95 transition"
          >
            Sign Up
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-dark via-brand-primary to-brand-mint"></div>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Your Fresh Solution
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Simplify your tasks, energize your workflow.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-brand-primary to-brand-mint px-6 py-3 font-heading font-semibold text-brand-ink shadow-subtle hover:opacity-95 transition"
            >
              Get Started
            </a>
            <a
              href="#learn"
              className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 font-heading font-semibold text-white hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-brand-mint/25">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark">
              Key Features
            </h2>
            <p className="mt-2 text-brand-ink/70">Discover the benefits our platform offers</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Streamline Processes',
                desc: 'Automate repetitive tasks and keep moving with confidence.',
              },
              {
                title: 'Boost Productivity',
                desc: 'Focus on what matters most with clear priorities.',
              },
              { title: 'Stay Organized', desc: 'Structure your work with clean layouts and tags.' },
            ].map((f, i) => (
              <article
                key={i}
                className="rounded-xl bg-white p-6 shadow-subtle border border-black/5"
              >
                <div className="h-10 w-10 rounded-full bg-brand-mint/60 flex items-center justify-center">
                  <span className="h-5 w-5 bg-brand-primary rounded-sm inline-block"></span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-brand-dark">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-brand-ink/70">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex md:justify-end">
            <div className="h-28 w-28 rounded-full bg-brand-cloud/10 border border-white/20"></div>
          </div>
          <blockquote className="text-white">
            <p className="text-xl md:text-2xl leading-relaxed">
              “This platform has completely transformed the way I manage my work. I can’t imagine
              going back.”
            </p>
            <footer className="mt-4 text-brand-pop font-semibold">
              Sarah Doe — Project Manager
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h3 className="font-heading text-3xl font-bold text-brand-ink">Start Your Journey</h3>
          <p className="mt-2 text-brand-ink/70">
            Sign up today and experience a fresh approach to productivity.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              className="inline-flex items-center rounded-md bg-brand-pop px-6 py-3 font-heading font-semibold text-black shadow-subtle hover:brightness-95 transition"
              href="#create-account"
            >
              Sign Up Now
            </a>
            <a
              className="inline-flex items-center rounded-md border border-brand-ink/15 px-6 py-3 font-heading font-semibold text-brand-ink hover:bg-brand-cloud transition"
              href="#contact"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">© 2025 Fresh. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a className="hover:text-brand-primary transition" href="#">
              Privacy
            </a>
            <a className="hover:text-brand-primary transition" href="#">
              Terms
            </a>
            <a className="hover:text-brand-primary transition" href="#">
              Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
