import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";

export const metadata: Metadata = generatePageMetadata("РКО и спецсчета");

export { default } from "./rko-client";
