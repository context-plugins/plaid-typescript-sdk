import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressPurposeLabelSchema, type AddressPurposeLabel } from "./address-purpose-label.js";
import { hiddenMatchSummaryCodeSchema, type HiddenMatchSummaryCode } from "./hidden-match-summary-code.js";
import {
  kycCheckDetailsInternationalAddressSchema,
  type KycCheckDetailsInternationalAddress,
} from "./kyc-check-details-international-address.js";
import { matchSummaryCodeSchema, type MatchSummaryCode } from "./match-summary-code.js";
import { poBoxStatusSchema, type PoBoxStatus } from "./po-box-status.js";

export type KycCheckAddressSummary = {
  summary: MatchSummaryCode;
  poBox: PoBoxStatus;
  type: AddressPurposeLabel;
  street?: HiddenMatchSummaryCode;
  city?: HiddenMatchSummaryCode;
  region?: HiddenMatchSummaryCode;
  postalCode?: HiddenMatchSummaryCode;
  internationalDetails?: KycCheckDetailsInternationalAddress | null;
};

export const kycCheckAddressSummarySchema: Schema<KycCheckAddressSummary> = s.object<KycCheckAddressSummary>({
  summary: matchSummaryCodeSchema,
  poBox: poBoxStatusSchema,
  type: addressPurposeLabelSchema,
  street: s.optional(s.lazy(() => hiddenMatchSummaryCodeSchema)),
  city: s.optional(s.lazy(() => hiddenMatchSummaryCodeSchema)),
  region: s.optional(s.lazy(() => hiddenMatchSummaryCodeSchema)),
  postalCode: s.optional(s.lazy(() => hiddenMatchSummaryCodeSchema)),
  internationalDetails: s.optionalNullable(s.lazy(() => kycCheckDetailsInternationalAddressSchema)),
  _keysMap: {
    poBox: "po_box",
    postalCode: "postal_code",
    internationalDetails: "international_details",
  },
});
