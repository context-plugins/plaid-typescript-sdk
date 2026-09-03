import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContentTypes = {
  ApplicationPdf: "application/pdf",
  ImageGif: "image/gif",
  ImageJpeg: "image/jpeg",
  ImageTiff: "image/tiff",
  ImagePng: "image/png",
  ApplicationJson: "application/json",
} as const;
export type ContentTypes = (typeof ContentTypes)[keyof typeof ContentTypes] | (string & {});

export const contentTypesSchema: EnumSchema<ContentTypes> = s.enumOf<ContentTypes>(ContentTypes);
