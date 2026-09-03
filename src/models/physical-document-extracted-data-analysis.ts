import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  documentDateOfBirthMatchCodeSchema,
  type DocumentDateOfBirthMatchCode,
} from "./document-date-of-birth-match-code.js";
import { documentNameMatchCodeSchema, type DocumentNameMatchCode } from "./document-name-match-code.js";
import { expirationDateSchema, type ExpirationDate } from "./expiration-date.js";
import { issuingCountrySchema, type IssuingCountry } from "./issuing-country.js";

export type PhysicalDocumentExtractedDataAnalysis = {
  name: DocumentNameMatchCode;
  dateOfBirth: DocumentDateOfBirthMatchCode;
  expirationDate: ExpirationDate;
  issuingCountry: IssuingCountry;
};

export const physicalDocumentExtractedDataAnalysisSchema: Schema<PhysicalDocumentExtractedDataAnalysis> =
  s.object<PhysicalDocumentExtractedDataAnalysis>({
    name: documentNameMatchCodeSchema,
    dateOfBirth: documentDateOfBirthMatchCodeSchema,
    expirationDate: expirationDateSchema,
    issuingCountry: issuingCountrySchema,
    _keysMap: {
      dateOfBirth: "date_of_birth",
      expirationDate: "expiration_date",
      issuingCountry: "issuing_country",
    },
  });
