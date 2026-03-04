import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";

export default function Home() {
  return (
    <SiteLayout enableScrollStyle>
      {/* Hero */}
      <section className="relative">
        <div className="h-[62vh] min-h-[520px] w-full">
          <img
            src="/images2/wellbanner.png"
            alt="Wellbeing Center"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* No overlay and no filters by request */}

          <div className="relative h-full">
            <div className="container h-full flex items-end pb-12">
              <div className="max-w-2xl">
                <p
                  className="font-body text-sm tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  Wellbeing Center
                </p>
                <h1
                  className="font-display text-4xl md:text-6xl leading-tight mt-3"
                  style={{ color: "white" }}
                >
                  A Calm Space For Body And Mind
                </h1>
                <p
                  className="font-body mt-5 text-base md:text-lg leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Therapies and classes designed to support balance relaxation and steady energy.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/therapies"
                    className="px-6 py-3 rounded-xl bg-white text-sm font-medium shadow-sm"
                    style={{ color: "oklch(0.22 0.01 65)" }}
                  >
                    Explore Therapies
                  </Link>
                  <Link
                    href="/yoga"
                    className="px-6 py-3 rounded-xl border text-sm font-medium"
                    style={{ color: "white", borderColor: "rgba(255,255,255,0.7)" }}
                  >
                    View Yoga Classes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick intro */}
      <section className="container py-14">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl" style={{ color: "oklch(0.22 0.01 65)" }}>
              Welcome
            </h2>
            <p className="font-body mt-4 leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
              A simple approach to wellbeing with therapies that calm the nervous system and movement that keeps the body strong and open.
            </p>
          </div>

          <div className="rounded-2xl border bg-white shadow-sm p-6">
            <p className="font-body text-sm tracking-widest uppercase" style={{ color: "oklch(0.45 0.08 165)" }}>
              Quick Links
            </p>
            <div className="mt-4 grid gap-2">
              <Link
                href="/yoga"
                className="px-4 py-3 rounded-xl border hover:bg-slate-50 transition-colors"
                style={{ color: "oklch(0.22 0.01 65)" }}
              >
                Yoga
              </Link>
              <Link
                href="/therapies/massage"
                className="px-4 py-3 rounded-xl border hover:bg-slate-50 transition-colors"
                style={{ color: "oklch(0.22 0.01 65)" }}
              >
                Massage
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 rounded-xl border hover:bg-slate-50 transition-colors"
                style={{ color: "oklch(0.22 0.01 65)" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
