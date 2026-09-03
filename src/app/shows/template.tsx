import type { ReactNode } from "react";
import { PageEnter } from "@/components/layout/PageEnter";

export default function ShowsTemplate({ children }: { children: ReactNode }) {
  return <PageEnter>{children}</PageEnter>;
}
