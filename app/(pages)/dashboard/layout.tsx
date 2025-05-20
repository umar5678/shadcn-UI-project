// dashboard is accessed on localhost:PORT/dashbaord
// it does not provide header and footer
import DashbaordNavbar from "@/components/dashboard/DashbaordNavbar";
import DashboardAppSidebar from "@/components/dashboard/DashboardAppSidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <DashboardAppSidebar />
        <main className="w-full">
          {/* dashbaord navbar */}
          <DashbaordNavbar />
          <div className="px-4">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default layout;
