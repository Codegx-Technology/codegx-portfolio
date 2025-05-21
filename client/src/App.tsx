import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import { Head } from "@/components/head";
import MainHome from "@/pages/main-home";
import Home from "@/pages/home";
import AgencyPage from "@/pages/agency";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "@/hooks/use-theme";
import "@/styles/globals.css";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Switch key={location}>
        <Route path="/" component={MainHome} />
        <Route path="/portfolio" component={Home} />
        <Route path="/agency" component={AgencyPage} />
        <Route path="/agency/services" component={() => import("@/pages/agency/services").then(mod => <mod.default />)} />
        <Route path="/agency/projects" component={() => import("@/pages/agency/projects").then(mod => <mod.default />)} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Head />
        <Router />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
