import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityDocumentTypeSchema, type EntityDocumentType } from "./entity-document-type.js";

/**
 * An official document, usually issued by a governing body or institution, with an associated
 * identifier.
 */
export type EntityDocument = {
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
  type: EntityDocumentType;
  /**
   * The numeric or alphanumeric identifier associated with this document. Must be between 4 and 32
   * characters long, and cannot have leading or trailing spaces.
   */
  number: string;
};

export const entityDocumentSchema: Schema<EntityDocument> = s.object<EntityDocument>({
  type: entityDocumentTypeSchema,
  number: s.string(),
});
