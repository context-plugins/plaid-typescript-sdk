import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationDocumentAddressResponseSchema,
  type IdentityVerificationDocumentAddressResponse,
} from "./identity-verification-document-address-response.js";
import {
  identityVerificationDocumentNameResponseSchema,
  type IdentityVerificationDocumentNameResponse,
} from "./identity-verification-document-name-response.js";
import {
  physicalDocumentCategorySchema,
  type PhysicalDocumentCategory,
} from "./physical-document-category.js";

export type PhysicalDocumentExtractedData = {
  idNumber: string | null;
  category: PhysicalDocumentCategory;
  expirationDate: string | null;
  issueDate: string | null;
  issuingCountry: string;
  issuingRegion: string | null;
  dateOfBirth: string | null;
  address: IdentityVerificationDocumentAddressResponse | null;
  name?: IdentityVerificationDocumentNameResponse | null;
};

export const physicalDocumentExtractedDataSchema: Schema<PhysicalDocumentExtractedData> =
  s.object<PhysicalDocumentExtractedData>({
    idNumber: s.nullable(s.string()),
    category: physicalDocumentCategorySchema,
    expirationDate: s.nullable(s.dateOnly()),
    issueDate: s.nullable(s.dateOnly()),
    issuingCountry: s.string(),
    issuingRegion: s.nullable(s.string()),
    dateOfBirth: s.nullable(s.dateOnly()),
    address: s.nullable(s.lazy(() => identityVerificationDocumentAddressResponseSchema)),
    name: s.optionalNullable(s.lazy(() => identityVerificationDocumentNameResponseSchema)),
    _keysMap: {
      idNumber: "id_number",
      expirationDate: "expiration_date",
      issueDate: "issue_date",
      issuingCountry: "issuing_country",
      issuingRegion: "issuing_region",
      dateOfBirth: "date_of_birth",
    },
  });
