import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  fraudCheckOutcomeWithNoDataSchema,
  type FraudCheckOutcomeWithNoData,
} from "./fraud-check-outcome-with-no-data.js";
import { fraudCheckOutcomeSchema, type FraudCheckOutcome } from "./fraud-check-outcome.js";

export type FraudAnalysisDetails = {
  typeSupported: FraudCheckOutcome;
  portraitPresenceCheck: FraudCheckOutcome;
  portraitDetailsCheck: FraudCheckOutcome;
  imageCompositionCheck: FraudCheckOutcome;
  integrityCheck: FraudCheckOutcome;
  detailCheck: FraudCheckOutcome;
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
