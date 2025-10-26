import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ResumeNew from "./pages/ResumeNew";
import ResumeEditor from "./pages/ResumeEditor";
import ResumeWizard from "./pages/ResumeWizard";
import ResumeView from "./pages/ResumeView";
import Blog from "./pages/Blog";
import BlogTag from "./pages/BlogTag";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resume/new" element={<ResumeNew />} />
          <Route path="/resume/wizard" element={<ResumeWizard />} />
          <Route path="/resume/editor/:id" element={<ResumeEditor />} />
          <Route path="/resume/view/:id" element={<ResumeView />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/tag/:tag" element={<BlogTag />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
