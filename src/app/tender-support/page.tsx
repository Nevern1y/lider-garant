import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Тендерное сопровождение"
);

export { default } from "./tender-support-client";
