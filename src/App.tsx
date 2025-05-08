import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout/layout";
import Team from "./pages/Team";
import LifeCycle from "./pages/LifeCycle";
import Project from "./pages/Projects";
import Analytics from "./pages/Analytics";
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import Page from "./components/Layout/dashboard";
import './App.css'

function App() {
  return (
    <Router>

    <div className="bg-gray-900 text-white">

    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <Routes>
              <Route path="/" element={<Page/>} />
              <Route path="/lifecycle" element={<LifeCycle />} />
              <Route path="/project" element={<Project />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/teams" element={<Team />} />

        </Routes>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    </div>
    </Router>

  );
}

export default App;