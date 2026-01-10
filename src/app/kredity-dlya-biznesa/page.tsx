import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";

export const metadata: Metadata = generatePageMetadata("Кредиты для бизнеса");

export { default } from "./credits-client";
