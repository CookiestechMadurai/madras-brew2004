import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Locations from "@/pages/Locations";
import Contact from "@/pages/Contact";
import { useEffect } from "react";

// Scroll to top on route change
function ScrollToTop() {
  const path = window.location.pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/madras-brew2004/" component={Home} />
        <Route path="/madras-brew2004/menu" component={Menu} />
        <Route path="/madras-brew2004/locations" component={Locations} />
        <Route path="/madras-brew2004/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
