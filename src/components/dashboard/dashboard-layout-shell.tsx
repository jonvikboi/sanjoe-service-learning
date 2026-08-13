"use client";

import { useState } from "react";
import { UserProfile } from "@/types";
import { LmsSidebar } from "@/components/navigation/lms-sidebar";
import { LmsTopbar } from "@/components/navigation/lms-topbar";
import { RoleSwitcherBanner } from "@/components/shared/role-switcher-banner";

interface DashboardLayoutShellProps {
  user: UserProfile;
  children: React.ReactNode;
}

export function DashboardLayoutShell({
  user,
  children,
}: DashboardLayoutShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F3]">
      {/* Dev role switcher */}
      <RoleSwitcherBanner />

      <div className="flex flex-1 overflow-hidden">
        {/* Persistent Desktop Sidebar / Collapsible Mobile Sidebar */}
        <LmsSidebar
          role={user.role}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col min-w-0 overflow-y-auto">
          <LmsTopbar
            user={user}
            onMenuClick={() => setSidebarOpen(true)}
          />

          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
