"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initMixpanel, default as mixpanel } from "@/lib/mixpanel";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    initMixpanel();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      mixpanel.track("Page View", { page: pathname });
    }
  }, [pathname]);

  return <>{children}</>;
} 