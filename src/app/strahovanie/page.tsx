import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";

export const metadata: Metadata = generatePageMetadata("Страхование бизнеса");

export { default } from "./insurance-client";
