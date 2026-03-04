import { PropsWithChildren } from "react";
import NavBar from "./NavBar";

export default function SiteLayout({
  children,
  enableScrollStyle = false,
}: PropsWithChildren<{ enableScrollStyle?: boolean }>) {
  return (
    <div className="min-h-screen bg-white">
      <NavBar enableScrollStyle={enableScrollStyle} />
      <main className="pt-20">{children}</main>
      <footer className="py-10 border-t">
        <div className="container text-sm opacity-70" style={{ color: "oklch(0.22 0.01 65)" }}>
          © {new Date().getFullYear()} WellbeingCenter
        </div>
      </footer>
    </div>
  );
}
