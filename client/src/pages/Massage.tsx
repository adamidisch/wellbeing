import SiteLayout from "../components/SiteLayout";

export default function Massage() {
  return (
    <SiteLayout>
      <section className="container py-12">
        <p className="font-body text-sm tracking-widest uppercase mb-3" style={{ color: "oklch(0.45 0.08 165)" }}>
          Therapy
        </p>
        <h1 className="font-display text-4xl md:text-5xl" style={{ color: "oklch(0.22 0.01 65)" }}>
          Massage
        </h1>
        <p className="font-body mt-6 max-w-3xl leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
          Θεραπευτικό μασάζ που στοχεύει σε ένταση και κόπωση ώστε να νιώσεις πιο ανάλαφρος και πιο λειτουργικός.
        </p>
        <div className="mt-10 rounded-2xl border p-6 md:p-8 bg-white shadow-sm">
          <h2 className="font-display text-2xl" style={{ color: "oklch(0.22 0.01 65)" }}>
            Τι να περιμένεις
          </h2>
          <p className="font-body mt-4 leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
            Η συνεδρία ξεκινά με σύντομη συζήτηση ώστε να καταλάβουμε στόχους και ανάγκες.
          </p>
          <p className="font-body mt-4 leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
            Η προσέγγιση είναι εξατομικευμένη και γίνεται με ήρεμο ρυθμό και σεβασμό στο σώμα.
          </p>
          <p className="font-body mt-4 leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
            Στο τέλος κρατάμε μια απλή κατεύθυνση για το πώς να υποστηρίξεις το αποτέλεσμα μέσα στη μέρα.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
