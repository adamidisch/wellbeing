import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";

const cards = [
  {
    title: "Healing Therapy",
    href: "/therapies/healing-therapy",
    desc: "Μια ήρεμη προσέγγιση που στοχεύει στη χαλάρωση και στη συνολική ισορροπία.",
  },
  {
    title: "Velonismos",
    href: "/therapies/velonismos",
    desc: "Παραδοσιακή πρακτική που υποστηρίζει το σώμα μέσα από συγκεκριμένα σημεία.",
  },
  {
    title: "Massage",
    href: "/therapies/massage",
    desc: "Θεραπευτικό μασάζ για αποφόρτιση έντασης και καλύτερη κινητικότητα.",
  },
  {
    title: "Reflexology",
    href: "/therapies/reflexology",
    desc: "Πίεση σε σημεία των πελμάτων που συνδέονται με τη συνολική ευεξία.",
  },
];

export default function Therapies() {
  return (
    <SiteLayout>
      <section className="container py-12">
        <p className="font-body text-sm tracking-widest uppercase mb-3" style={{ color: "oklch(0.45 0.08 165)" }}>
          Therapies
        </p>
        <h1 className="font-display text-4xl md:text-5xl" style={{ color: "oklch(0.22 0.01 65)" }}>
          Our Therapies
        </h1>
        <p className="font-body mt-6 max-w-2xl leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
          Επίλεξε την υπηρεσία που ταιριάζει σε αυτό που χρειάζεσαι σήμερα και κλείσε το δικό σου ραντεβού.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {cards.map((c) => (
            <Link key={c.href} href={c.href} className="group">
              <div className="rounded-2xl border p-6 md:p-7 bg-white shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
                <h2 className="font-display text-2xl" style={{ color: "oklch(0.22 0.01 65)" }}>
                  {c.title}
                </h2>
                <p className="font-body mt-3 leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
                  {c.desc}
                </p>
                <p className="font-body mt-5 text-sm tracking-widest uppercase" style={{ color: "oklch(0.45 0.08 165)" }}>
                  View details →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
