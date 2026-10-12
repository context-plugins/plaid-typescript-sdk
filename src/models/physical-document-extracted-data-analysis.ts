import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  documentDateOfBirthMatchCodeSchema,
  type DocumentDateOfBirthMatchCode,
} from "./document-date-of-birth-match-code.js";
import { documentNameMatchCodeSchema, type DocumentNameMatchCode } from "./document-name-match-code.js";
import { expirationDateSchema, type ExpirationDate } from "./expiration-date.js";
import { issuingCountrySchema, type IssuingCountry } from "./issuing-country.js";

/** Analysis of the data extracted from the submitted document. */
export type PhysicalDocumentExtractedDataAnalysis = {
  /**
   * A match summary describing the cross comparison between the subject's name, extracted from the
   * document image, and the name they separately provided to the identity verification attempt.
   */
  name: DocumentNameMatchCode;
  /**
   * A match summary describing the cross comparison between the subject's date of birth, extracted
   * from the document image, and the date of birth they separately provided to the identity
   * verification attempt.
   */
  dateOfBirth: DocumentDateOfBirthMatchCode;
  /**
   * A description of whether the associated document was expired when the verification was
   * performed.
   *
   * Note: In the case where an expiration date is not present on the document or failed to be
   * extracted, this value will be `no_data`.
   */
  expirationDate: ExpirationDate;
  /**
   * A binary match indicator specifying whether the country that issued the provided document
   * matches the country that the user separately provided to Plaid.
   *
   * Note: You can configure whether a `no_match` on `issuing_country` fails the
   * `documentary_verification` by editing your Plaid Template.
   */
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
