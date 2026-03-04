import SiteLayout from "../components/SiteLayout";

export default function Yoga() {
  return (
    <SiteLayout>
      <section className="container py-12">
        <div className="max-w-4xl">
          <p
            className="font-body text-sm tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.45 0.08 165)" }}
          >
            Classes
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight" style={{ color: "oklch(0.22 0.01 65)" }}>
            Yoga
          </h1>

          <div className="mt-6 space-y-4">
            <p className="font-body leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
              Η λέξη γιόγκα προέρχεται από τη αρχαία σανσκριτική ρίζα yoke και σημαίνει ένωση.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
              Η γιόγκα είναι μια αρχαία φιλοσοφία και στάση ζωής που έχει τις ρίζες της στα βάθη του Ινδικού πολιτισμού χιλιάδες χρόνια πριν.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
              Η γιόγκα θεωρείται ολιστική άσκηση, αναπτύσσει το σώμα το νού και το πνεύμα.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
              Στη γιόγκα χρησιμοποιούνται σε φυσικό επίπεδο ειδικές διατάσεις/θέσεις (asanas), με σκοπό να τονώσουν, να ενδυναμώσουν, να χαλαρώσουν, να ενεργοποιήσουν και να κάνουν το σώμα ευλύγιστο.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
              Σε νοητικό επίπεδο η γιόγκα χρησιμοποιεί ειδικές ασκήσεις αναπνοής (pranayama) και το διαλογισμό.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
              Η γιόγκα δεν είναι είδος θρησκείας, είναι τρόπος ζωής για εξαιρετική υγεία και νοητική ηρεμία.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border bg-white shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 border-b">
              <h2 className="font-display text-2xl" style={{ color: "oklch(0.22 0.01 65)" }}>
                Πρόγραμμα μαθημάτων
              </h2>
              <p className="font-body mt-3 leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
                Δες πιο κάτω τις ώρες και τις επιλογές για κάθε μέρα.
              </p>
            </div>

            <div className="p-4 md:p-6 bg-white">
              <div className="rounded-xl overflow-hidden border">
                <img
                  src="/images/yoga-classes.png"
                  alt="Yoga classes schedule"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
