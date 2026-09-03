import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityDocumentType = {
  Bik: "bik",
  BusinessNumber: "business_number",
  Imo: "imo",
  Other: "other",
  Swift: "swift",
  TaxId: "tax_id",
} as const;
export type EntityDocumentType = (typeof EntityDocumentType)[keyof typeof EntityDocumentType] | (string & {});

export const entityDocumentTypeSchema: EnumSchema<EntityDocumentType> =
  s.enumOf<EntityDocumentType>(EntityDocumentType);
