import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Yoga from "./pages/Yoga";
import Therapies from "./pages/Therapies";
import HealingTherapy from "./pages/HealingTherapy";
import Velonismos from "./pages/Velonismos";
import Massage from "./pages/Massage";
import Reflexology from "./pages/Reflexology";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/yoga"} component={Yoga} />
      <Route path={"/therapies/healing-therapy"} component={HealingTherapy} />
      <Route path={"/therapies/velonismos"} component={Velonismos} />
      <Route path={"/therapies/massage"} component={Massage} />
      <Route path={"/therapies/reflexology"} component={Reflexology} />
      <Route path={"/therapies"} component={Therapies} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
