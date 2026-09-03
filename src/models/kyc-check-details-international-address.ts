import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hiddenMatchSummaryCodeSchema, type HiddenMatchSummaryCode } from "./hidden-match-summary-code.js";

export type KycCheckDetailsInternationalAddress = {
  building: HiddenMatchSummaryCode;
  county: HiddenMatchSummaryCode;
  district: HiddenMatchSummaryCode;
  houseNumber: HiddenMatchSummaryCode;
  subpremise: HiddenMatchSummaryCode;
  thoroughfare: HiddenMatchSummaryCode;
};

export const kycCheckDetailsInternationalAddressSchema: Schema<KycCheckDetailsInternationalAddress> =
  s.object<KycCheckDetailsInternationalAddress>({
    building: hiddenMatchSummaryCodeSchema,
    county: hiddenMatchSummaryCodeSchema,
    district: hiddenMatchSummaryCodeSchema,
    houseNumber: hiddenMatchSummaryCodeSchema,
    subpremise: hiddenMatchSummaryCodeSchema,
    thoroughfare: hiddenMatchSummaryCodeSchema,
    _keysMap: {
      houseNumber: "house_number",
    },
  });
