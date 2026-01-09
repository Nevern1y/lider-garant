import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Международные платежи для бизнеса"
);

export { default } from "./ved-client";
