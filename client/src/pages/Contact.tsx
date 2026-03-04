import SiteLayout from "../components/SiteLayout";

export default function Contact() {
  return (
    <SiteLayout>
      <section className="container py-12">
        <p className="font-body text-sm tracking-widest uppercase mb-3" style={{ color: "oklch(0.45 0.08 165)" }}>
          Contact
        </p>
        <h1 className="font-display text-4xl md:text-5xl" style={{ color: "oklch(0.22 0.01 65)" }}>
          Book a Session
        </h1>
        <p className="font-body mt-6 max-w-2xl leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
          Στείλε μήνυμα με το τι χρειάζεσαι και προτεινόμενες μέρες και ώρες.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <form className="rounded-2xl border p-6 md:p-8 bg-white shadow-sm">
            <label className="block text-sm font-medium" style={{ color: "oklch(0.22 0.01 65)" }}>
              Name
            </label>
            <input className="mt-2 w-full rounded-lg border px-3 py-2" placeholder="Your name" />

            <label className="block text-sm font-medium mt-5" style={{ color: "oklch(0.22 0.01 65)" }}>
              Email
            </label>
            <input className="mt-2 w-full rounded-lg border px-3 py-2" placeholder="you@email.com" />

            <label className="block text-sm font-medium mt-5" style={{ color: "oklch(0.22 0.01 65)" }}>
              Message
            </label>
            <textarea className="mt-2 w-full rounded-lg border px-3 py-2 min-h-32" placeholder="Tell us what you need" />

            <button
              type="button"
              className="mt-6 px-6 py-3 rounded-md font-body text-sm tracking-widest uppercase"
              style={{ background: "oklch(0.45 0.08 165)", color: "white" }}
            >
              Send
            </button>
            <p className="text-xs mt-3 opacity-60" style={{ color: "oklch(0.22 0.01 65)" }}>
              Το κουμπί είναι demo και δεν στέλνει email ακόμα.
            </p>
          </form>

          <div className="rounded-2xl border p-6 md:p-8 bg-white shadow-sm">
            <h2 className="font-display text-2xl" style={{ color: "oklch(0.22 0.01 65)" }}>
              Details
            </h2>
            <p className="font-body mt-4 leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
              Περιοχή: Nicosia
            </p>
            <p className="font-body mt-2 leading-relaxed" style={{ color: "oklch(0.35 0.02 65)" }}>
              Για ραντεβού γράψε μας και θα απαντήσουμε με διαθέσιμες επιλογές.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
