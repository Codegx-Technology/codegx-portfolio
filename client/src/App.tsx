import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import MainHome from "@/pages/main-home";
import Home from "@/pages/home";
import AgencyPage from "@/pages/agency";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "@/hooks/use-theme";

function Router() {
  return (
    <Switch>
      <Route path="/" component={MainHome} />
      <Route path="/portfolio" component={Home} />
      <Route path="/agency" component={AgencyPage} />
      <Route path="/agency/services" component={() => import("@/pages/agency/services").then(mod => <mod.default />)} />
      <Route path="/agency/projects" component={() => import("@/pages/agency/projects").then(mod => <mod.default />)} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
