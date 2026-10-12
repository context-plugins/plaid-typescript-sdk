import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  fraudCheckOutcomeWithNoDataSchema,
  type FraudCheckOutcomeWithNoData,
} from "./fraud-check-outcome-with-no-data.js";
import { fraudCheckOutcomeSchema, type FraudCheckOutcome } from "./fraud-check-outcome.js";

/** Details about the fraud analysis performed on the document. */
export type FraudAnalysisDetails = {
  /**
   * Whether the submitted document type is supported for fraud analysis.
   *
   * `success` - The document type is supported.
   *
   * `failed` - The document type is not supported.
   */
  typeSupported: FraudCheckOutcome;
  /**
   * The outcome of the portrait presence check.
   *
   * `success` - A portrait was detected.
   *
   * `failed` - No portrait was detected.
   */
  portraitPresenceCheck: FraudCheckOutcome;
  /**
   * The outcome of the portrait details check including photo embedding and face landmark checks.
   *
   * `success` - The portrait passed all validity checks.
   *
   * `failed` - The portrait did not pass one or more validity checks.
   */
  portraitDetailsCheck: FraudCheckOutcome;
  /**
   * The outcome of the image composition check.
   *
   * `success` - The image is a valid physical document capture.
   *
   * `failed` - The image appears to be a photograph of a screen or a digital forgery.
   */
  imageCompositionCheck: FraudCheckOutcome;
  /**
   * The outcome of the integrity check for document security elements.
   *
   * `success` - Data is consistent across all checked security elements.
   *
   * `failed` - Inconsistencies were detected across one or more security elements.
   */
  integrityCheck: FraudCheckOutcome;
  /**
   * The outcome of the document detail check for correct styling and layout.
   *
   * `success` - The document passed all authenticity checks.
   *
   * `failed` - The document did not pass one or more authenticity checks.
   */
  detailCheck: FraudCheckOutcome;
  /**
   * The outcome of the issue date validity check.
   *
   * `success` - The issue date is valid.
   *
   * `failed` - The issue date is invalid or could not be verified.
   *
   * `no_data` - The check could not be performed due to insufficient data.
   */
  issueDateCheck: FraudCheckOutcomeWithNoData;
};

export const fraudAnalysisDetailsSchema: Schema<FraudAnalysisDetails> = s.object<FraudAnalysisDetails>({
  typeSupported: fraudCheckOutcomeSchema,
  portraitPresenceCheck: fraudCheckOutcomeSchema,
  portraitDetailsCheck: fraudCheckOutcomeSchema,
  imageCompositionCheck: fraudCheckOutcomeSchema,
  integrityCheck: fraudCheckOutcomeSchema,
  detailCheck: fraudCheckOutcomeSchema,
  issueDateCheck: fraudCheckOutcomeWithNoDataSchema,
  _keysMap: {
    typeSupported: "type_supported",
    portraitPresenceCheck: "portrait_presence_check",
    portraitDetailsCheck: "portrait_details_check",
    imageCompositionCheck: "image_composition_check",
    integrityCheck: "integrity_check",
    detailCheck: "detail_check",
    issueDateCheck: "issue_date_check",
  },
});
