import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="pt-16">
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Have questions about an order, product availability, or anything
            else? We&apos;d love to hear from you.
          </p>

          <div className="mt-12 glass-strong rounded-2xl p-8 text-left">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua-400">
                  Location
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Fort Lauderdale, FL 33311
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua-400">
                  Phone
                </h3>
                <p className="mt-2 text-sm text-slate-400">(954) 555-0123</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua-400">
                  Email
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  hello@shoreaquatic.com
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua-400">
                  Hours
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Mon-Sat: 10am - 6pm
                  <br />
                  Sun: 11am - 4pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
