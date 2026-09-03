import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PhysicalDocumentCategory = {
  DriversLicense: "drivers_license",
  IdCard: "id_card",
  Passport: "passport",
  ResidencePermitCard: "residence_permit_card",
  ResidentCard: "resident_card",
  Visa: "visa",
} as const;
export type PhysicalDocumentCategory =
  | (typeof PhysicalDocumentCategory)[keyof typeof PhysicalDocumentCategory]
  | (string & {});

export const physicalDocumentCategorySchema: EnumSchema<PhysicalDocumentCategory> =
  s.enumOf<PhysicalDocumentCategory>(PhysicalDocumentCategory);
