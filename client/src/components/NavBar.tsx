import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown } from "lucide-react";

// Small inline icon to avoid depending on Home-only icon
function MandalaIcon({ size = 28, color = "#8aab9e" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2" opacity="0.9" />
      <circle cx="24" cy="24" r="10" stroke={color} strokeWidth="2" opacity="0.7" />
      <path d="M24 6v8M24 34v8M6 24h8M34 24h8" stroke={color} strokeWidth="2" opacity="0.65" />
      <path d="M12 12l6 6M30 30l6 6M36 12l-6 6M18 30l-6 6" stroke={color} strokeWidth="2" opacity="0.55" />
    </svg>
  );
}

type NavItem =
  | { label: string; href: string }
  | { label: string; href: string; children: { label: string; href: string }[] };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "/yoga" },
  {
    label: "Therapies",
    href: "/therapies",
    children: [
      { label: "Healing Therapy", href: "/therapies/healing-therapy" },
      { label: "Velonismos", href: "/therapies/velonismos" },
      { label: "Massage", href: "/therapies/massage" },
      { label: "Reflexology", href: "/therapies/reflexology" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar({ enableScrollStyle = true }: { enableScrollStyle?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openTherapies, setOpenTherapies] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    if (!enableScrollStyle) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enableScrollStyle]);

  const linkBaseStyle =
    "font-body text-sm tracking-widest uppercase transition-colors duration-200";

  const linkColor = scrolled ? "oklch(0.35 0.05 165)" : "rgba(255,255,255,0.9)";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpenMobile(false)}>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "oklch(0.66 0.06 165 / 0.15)" }}
          >
            <MandalaIcon color="#8aab9e" size={32} />
          </div>
          <span
            className="font-display font-semibold text-xl tracking-wide"
            style={{ color: scrolled ? "oklch(0.22 0.01 65)" : "white" }}
          >
            WellbeingCenter
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV.map((item) => {
            const isActive = "href" in item && (location === item.href || (item.href !== "/" && location.startsWith(item.href)));
            if ("children" in item) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenTherapies(true)}
                  onMouseLeave={() => setOpenTherapies(false)}
                >
                  <Link
                    href={item.href}
                    className={`${linkBaseStyle} inline-flex items-center gap-2`}
                    style={{
                      color: isActive ? "oklch(0.45 0.08 165)" : linkColor,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.label}
                    <ChevronDown size={16} style={{ opacity: 0.8 }} />
                  </Link>

                  {openTherapies && (
                    <div className="absolute top-full left-0 mt-3 w-56 rounded-xl border bg-white shadow-lg overflow-hidden">
                      <div className="py-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block px-4 py-2 text-sm hover:bg-slate-50 transition-colors"
                            style={{ color: "oklch(0.22 0.01 65)" }}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className={linkBaseStyle}
                style={{
                  color: isActive ? "oklch(0.45 0.08 165)" : linkColor,
                  letterSpacing: "0.1em",
                }}
                onClick={() => setOpenMobile(false)}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="px-5 py-2 border rounded-md font-body text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
            style={{
              color: scrolled ? "oklch(0.35 0.05 165)" : "white",
              borderColor: scrolled ? "oklch(0.70 0.04 165)" : "rgba(255,255,255,0.5)",
            }}
          >
            Book a Session
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            className="px-3 py-2 rounded-md border"
            style={{
              color: scrolled ? "oklch(0.22 0.01 65)" : "white",
              borderColor: scrolled ? "oklch(0.82 0.02 165)" : "rgba(255,255,255,0.45)",
            }}
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {openMobile && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
          <div className="container py-4 space-y-2">
            {NAV.map((item) => {
              if ("children" in item) {
                return (
                  <div key={item.label} className="rounded-lg border bg-white overflow-hidden">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-sm font-medium"
                      style={{ color: "oklch(0.22 0.01 65)" }}
                      onClick={() => setOpenMobile(false)}
                    >
                      {item.label}
                      <span className="text-xs opacity-60">open</span>
                    </Link>
                    <div className="border-t">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-2 text-sm hover:bg-slate-50"
                          style={{ color: "oklch(0.22 0.01 65)" }}
                          onClick={() => setOpenMobile(false)}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg border text-sm"
                  style={{ color: "oklch(0.22 0.01 65)" }}
                  onClick={() => setOpenMobile(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="block px-4 py-3 rounded-lg border text-sm text-center"
              style={{ color: "oklch(0.35 0.05 165)", borderColor: "oklch(0.70 0.04 165)" }}
              onClick={() => setOpenMobile(false)}
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
