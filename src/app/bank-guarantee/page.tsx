import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";

export const metadata: Metadata = generatePageMetadata("Банковские гарантии");

export { default } from "./bank-guarantee-client";
