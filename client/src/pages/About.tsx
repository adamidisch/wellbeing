import SiteLayout from "../components/SiteLayout";

export default function About() {
  return (
    <SiteLayout>
      <section className="container py-12">
        <p className="font-body text-sm tracking-widest uppercase mb-3" style={{ color: "oklch(0.45 0.08 165)" }}>
          About
        </p>
        <h1 className="font-display text-4xl md:text-5xl" style={{ color: "oklch(0.22 0.01 65)" }}>
          WellbeingCenter
        </h1>
        <p className="font-body mt-6 max-w-3xl leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
          Το Wellbeing Center είναι ένας χώρος που συνδυάζει θεραπείες και υποστήριξη τρόπου ζωής με στόχο την ισορροπία σώματος και νου.
        </p>
        <p className="font-body mt-4 max-w-3xl leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
          Κάθε επίσκεψη ξεκινά με κατανόηση των αναγκών και συνεχίζει με απλή ξεκάθαρη φροντίδα.
        </p>
      </section>
    </SiteLayout>
  );
}
