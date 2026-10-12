import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The kind of official document represented by this object.
 *
 * `bik` - Russian bank code
 *
 * `business_number` - A number that uniquely identifies the business within a category of
 * businesses
 *
 * `imo` - Number assigned to the entity by the International Maritime Organization
 *
 * `other` - Any document not covered by other categories
 *
 * `swift` - Number identifying a bank and branch.
 *
 * `tax_id` - Identification issued for the purpose of collecting taxes
 */
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
