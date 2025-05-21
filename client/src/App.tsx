import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import { Head } from "@/components/head";
import Home from "@/pages/index";
import PersonalPortfolio from "@/pages/home";
import AgencyPage from "@/pages/agency";
import Contact from "@/pages/contact";
import CaseStudies from "@/pages/case-studies";
import Blog from "@/pages/blog";
import WhyAstella from "@/pages/why-astella";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "@/hooks/use-theme";
import "@/styles/globals.css";

function Router() {
  const [location] = useLocation();

  // Get the base path from Vite config
  const basePath = import.meta.env.BASE_URL || "/";

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Switch key={location} base={basePath}>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={PersonalPortfolio} />
        <Route path="/agency" component={AgencyPage} />
        <Route path="/agency/services" component={() => import("@/pages/agency/services").then(mod => <mod.default />)} />
        <Route path="/agency/projects" component={() => import("@/pages/agency/projects").then(mod => <mod.default />)} />
        <Route path="/contact" component={Contact} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={() => import("@/pages/blog/[slug]").then(mod => <mod.default />)} />
        <Route path="/why-astella" component={WhyAstella} />
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
