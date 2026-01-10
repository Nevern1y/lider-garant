import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";

export const metadata: Metadata = generatePageMetadata("Факторинг для бизнеса");

export { default } from "./factoring-client";
