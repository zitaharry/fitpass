import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      {children}
      <SanityLive />
    </ClerkProvider>
  );
};

export default AppLayout;
