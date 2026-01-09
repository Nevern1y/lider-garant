import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Лизинг для юридических лиц"
);

export { default } from "./leasing-client";
