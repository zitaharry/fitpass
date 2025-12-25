import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default AppLayout;
