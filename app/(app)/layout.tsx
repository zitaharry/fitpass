import AppHeader from "@/components/layout/AppHeader";
import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <AppHeader />
      {children}
      <SanityLive />
    </ClerkProvider>
  );
};

export default AppLayout;
