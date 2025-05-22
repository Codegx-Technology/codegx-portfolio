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
        <Route path="/agency">
          {() => {
            // Redirect from /agency to /why-astella
            window.location.href = "/why-astella";
            return null;
          }}
        </Route>
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
        <Route path="/services">
          {() => {
            const Services = React.lazy(() => import("@/pages/services"));
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <Services />
              </React.Suspense>
            );
          }}
        </Route>
        <Route path="/services/:slug">
          {({slug}) => {
            const ServiceDetail = React.lazy(() => import("@/pages/services/[slug]"));
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <ServiceDetail />
              </React.Suspense>
            );
          }}
        </Route>
        <Route path="/quiz">
          {() => {
            const Quiz = React.lazy(() => import("@/pages/quiz"));
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <Quiz />
              </React.Suspense>
            );
          }}
        </Route>
        <Route path="/pricing">
          {() => {
            const Pricing = React.lazy(() => import("@/pages/pricing"));
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <Pricing />
              </React.Suspense>
            );
          }}
        </Route>
        <Route path="/quote-builder">
          {() => {
            const QuoteBuilder = React.lazy(() => import("@/pages/quote-builder"));
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <QuoteBuilder />
              </React.Suspense>
            );
          }}
        </Route>
        <Route path="/quote">
          {() => {
            const Quote = React.lazy(() => import("@/pages/quote"));
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <Quote />
              </React.Suspense>
            );
          }}
        </Route>
        <Route path="/thank-you">
          {() => {
            const ThankYou = React.lazy(() => import("@/pages/thank-you"));
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <ThankYou />
              </React.Suspense>
            );
          }}
        </Route>
        <Route path="/quote/thank-you">
          {() => {
            const QuoteThankYou = React.lazy(() => import("@/pages/quote/thank-you"));
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <QuoteThankYou />
              </React.Suspense>
            );
          }}
        </Route>
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
