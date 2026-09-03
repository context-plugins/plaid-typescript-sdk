import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhysicalDocumentImages = {
  originalFront: string | null;
  originalBack: string | null;
  croppedFront: string | null;
  croppedBack: string | null;
  face: string | null;
};

export const physicalDocumentImagesSchema: Schema<PhysicalDocumentImages> = s.object<PhysicalDocumentImages>({
  originalFront: s.nullable(s.string()),
  originalBack: s.nullable(s.string()),
  croppedFront: s.nullable(s.string()),
  croppedBack: s.nullable(s.string()),
  face: s.nullable(s.string()),
  _keysMap: {
    originalFront: "original_front",
    originalBack: "original_back",
    croppedFront: "cropped_front",
    croppedBack: "cropped_back",
  },
});
