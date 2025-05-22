import React from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import { Head } from "@/components/head";
import CodegxLanding from "@/pages/codegx";
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

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Switch key={location}>
        <Route path="/" component={CodegxLanding} />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={PersonalPortfolio} />
        <Route path="/agency" component={AgencyPage} />
        <Route path="/agency/services">
          {() => {
            const AgencyServices = React.lazy(() => import("@/pages/agency/services"));
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <AgencyServices />
              </React.Suspense>
            );
          }}
        </Route>
        <Route path="/agency/projects">
          {() => {
            const AgencyProjects = React.lazy(() => import("@/pages/agency/projects"));
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <AgencyProjects />
              </React.Suspense>
            );
          }}
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug">
          {({slug}) => {
            const BlogPost = React.lazy(() => import("@/pages/blog/[slug]"));
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <BlogPost />
              </React.Suspense>
            );
          }}
        </Route>
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
