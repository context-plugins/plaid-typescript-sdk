import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WatchlistScreeningDocumentType = {
  BirthCertificate: "birth_certificate",
  DriversLicense: "drivers_license",
  ImmigrationNumber: "immigration_number",
  MilitaryId: "military_id",
  Other: "other",
  Passport: "passport",
  PersonalIdentification: "personal_identification",
  RationCard: "ration_card",
  Ssn: "ssn",
  StudentId: "student_id",
  TaxId: "tax_id",
  TravelDocument: "travel_document",
  VoterId: "voter_id",
} as const;
export type WatchlistScreeningDocumentType =
  | (typeof WatchlistScreeningDocumentType)[keyof typeof WatchlistScreeningDocumentType]
  | (string & {});

export const watchlistScreeningDocumentTypeSchema: EnumSchema<WatchlistScreeningDocumentType> =
  s.enumOf<WatchlistScreeningDocumentType>(WatchlistScreeningDocumentType);
