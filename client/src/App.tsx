import React, { lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import { Head } from "@/components/head";
import ErrorBoundary from "@/components/ErrorBoundary";
import LazyRoute from "@/components/LazyRoute";
import { ThemeProvider } from "@/components/theme-provider";
import CodegxLanding from "@/pages/codegx";
import Home from "@/pages/index";
import PersonalPortfolio from "@/pages/home";
import AgencyPage from "@/pages/agency";
import Contact from "@/pages/contact";
import CaseStudies from "@/pages/case-studies";
import Blog from "@/pages/blog";
import WhyAstella from "@/pages/why-astella";
import NotFound from "@/pages/not-found";
import ProfessionalHome from "@/pages/professional-home";
import TestHome from "@/pages/test-home";
import "@/styles/globals.css";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Switch key={location}>
        <Route path="/">
          {() => {
            // Redirect root to /home with proper base path
            window.location.href = "/codegx-portfolio/home";
            return null;
          }}
        </Route>
        <Route path="/home" component={ProfessionalHome} />
        <Route path="/codegx-landing" component={CodegxLanding} />
        <Route path="/portfolio" component={PersonalPortfolio} />
        <Route path="/agency">
          {() => {
            // Redirect from /agency to /why-astella with proper base path
            window.location.href = "/codegx-portfolio/why-astella";
            return null;
          }}
        </Route>
        <Route path="/agency/services">
          {() => {
            const AgencyServices = React.lazy(() => import("@/pages/agency/services"));
            return <LazyRoute component={AgencyServices} />;
          }}
        </Route>
        <Route path="/agency/projects">
          {() => {
            const AgencyProjects = React.lazy(() => import("@/pages/agency/projects"));
            return <LazyRoute component={AgencyProjects} />;
          }}
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug">
          {({slug}) => {
            const BlogPost = React.lazy(() => import("@/pages/blog/[slug]"));
            return <LazyRoute component={BlogPost} />;
          }}
        </Route>
        <Route path="/why-astella" component={WhyAstella} />
        <Route path="/services">
          {() => {
            const Services = React.lazy(() => import("@/pages/services"));
            return <LazyRoute component={Services} />;
          }}
        </Route>
        <Route path="/services/:slug">
          {({slug}) => {
            const ServiceDetail = React.lazy(() => import("@/pages/services/[slug]"));
            return <LazyRoute component={ServiceDetail} />;
          }}
        </Route>
        <Route path="/quiz">
          {() => {
            const Quiz = React.lazy(() => import("@/pages/quiz"));
            return <LazyRoute component={Quiz} />;
          }}
        </Route>
        <Route path="/pricing">
          {() => {
            const Pricing = React.lazy(() => import("@/pages/pricing"));
            return <LazyRoute component={Pricing} />;
          }}
        </Route>
        <Route path="/quote-builder">
          {() => {
            const QuoteBuilder = React.lazy(() => import("@/pages/quote-builder"));
            return <LazyRoute component={QuoteBuilder} />;
          }}
        </Route>
        <Route path="/quote">
          {() => {
            const Quote = React.lazy(() => import("@/pages/quote"));
            return <LazyRoute component={Quote} />;
          }}
        </Route>
        <Route path="/thank-you">
          {() => {
            const ThankYou = React.lazy(() => import("@/pages/thank-you"));
            return <LazyRoute component={ThankYou} />;
          }}
        </Route>
        <Route path="/quote/thank-you">
          {() => {
            const QuoteThankYou = React.lazy(() => import("@/pages/quote/thank-you"));
            return <LazyRoute component={QuoteThankYou} />;
          }}
        </Route>
        <Route path="/simple-quote">
          {() => {
            const SimpleQuote = React.lazy(() => import("@/pages/simple-quote"));
            return <LazyRoute component={SimpleQuote} />;
          }}
        </Route>
        <Route path="/simple-quote2">
          {() => {
            const SimpleQuote2 = React.lazy(() => import("@/pages/simple-quote2"));
            return <LazyRoute component={SimpleQuote2} />;
          }}
        </Route>
        <Route path="/quote/simple-thank-you">
          {() => {
            const SimpleThankYou = React.lazy(() => import("@/pages/quote/simple-thank-you"));
            return <LazyRoute component={SimpleThankYou} />;
          }}
        </Route>
        <Route path="/quote/simple-thank-you2">
          {() => {
            const SimpleThankYou2 = React.lazy(() => import("@/pages/quote/simple-thank-you2"));
            return <LazyRoute component={SimpleThankYou2} />;
          }}
        </Route>
        <Route path="/ui-kit">
          {() => {
            const UIKit = React.lazy(() => import("@/pages/ui-kit"));
            return <LazyRoute component={UIKit} />;
          }}
        </Route>
        <Route path="/augment-demo">
          {() => {
            const AugmentDemo = React.lazy(() => import("@/pages/augment-demo"));
            return <LazyRoute component={AugmentDemo} />;
          }}
        </Route>
        <Route path="/enterprise-layout-demo">
          {() => {
            const EnterpriseLayoutDemo = React.lazy(() => import("@/pages/enterprise-layout-demo"));
            return <LazyRoute component={EnterpriseLayoutDemo} />;
          }}
        </Route>
        <Route path="/executive-navbar-demo">
          {() => {
            const ExecutiveNavbarDemo = React.lazy(() => import("@/pages/executive-navbar-demo"));
            return <LazyRoute component={ExecutiveNavbarDemo} />;
          }}
        </Route>
        <Route path="/enterprise-components-demo">
          {() => {
            const EnterpriseComponentsDemo = React.lazy(() => import("@/pages/enterprise-components-demo"));
            return <LazyRoute component={EnterpriseComponentsDemo} />;
          }}
        </Route>
        <Route path="/enhanced-navbar-demo">
          {() => {
            const EnhancedNavbarDemo = React.lazy(() => import("@/pages/enhanced-navbar-demo"));
            return <LazyRoute component={EnhancedNavbarDemo} />;
          }}
        </Route>
        <Route path="/enhanced-home">
          {() => {
            const EnhancedHome = React.lazy(() => import("@/pages/enhanced-home"));
            return <LazyRoute component={EnhancedHome} />;
          }}
        </Route>
        <Route path="/enhanced-agency">
          {() => {
            const EnhancedAgency = React.lazy(() => import("@/pages/enhanced-agency"));
            return <LazyRoute component={EnhancedAgency} />;
          }}
        </Route>
        <Route path="/enhanced-services">
          {() => {
            const EnhancedServices = React.lazy(() => import("@/pages/enhanced-services"));
            return <LazyRoute component={EnhancedServices} />;
          }}
        </Route>
        <Route path="/footer-demo">
          {() => {
            const FooterDemo = React.lazy(() => import("@/pages/footer-demo"));
            return <LazyRoute component={FooterDemo} />;
          }}
        </Route>
        <Route path="/modern-home">
          {() => {
            const ModernHome = React.lazy(() => import("@/pages/modern-home"));
            return <LazyRoute component={ModernHome} />;
          }}
        </Route>
        <Route path="/professional-home">
          {() => {
            const ProfessionalHome = React.lazy(() => import("@/pages/professional-home"));
            return <LazyRoute component={ProfessionalHome} />;
          }}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

// Loading component with skeleton UI
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse space-y-4">
      <div className="h-12 w-48 bg-gray-200 rounded"></div>
      <div className="h-4 w-64 bg-gray-200 rounded"></div>
      <div className="h-4 w-56 bg-gray-200 rounded"></div>
      <div className="h-4 w-60 bg-gray-200 rounded"></div>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Head />
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Router />
            </Suspense>
          </ErrorBoundary>
          <Toaster />
          {process.env.NODE_ENV !== 'production' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
