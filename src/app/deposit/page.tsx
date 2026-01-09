import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";

export const metadata: Metadata = generatePageMetadata("Депозиты для бизнеса");

export { default } from "./deposit-client";
