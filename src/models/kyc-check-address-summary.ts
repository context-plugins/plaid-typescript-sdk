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

/** Result summary object specifying how the `address` field matched. */
export type KycCheckAddressSummary = {
  /**
   * An enum indicating the match type between data provided by user and data checked against an
   * external data source.
   *
   *
   * `match` indicates that the provided input data was a strong match against external data.
   *
   * `partial_match` indicates the data approximately matched against external data. For example,
   * "Knope" vs. "Knope-Wyatt" for last name.
   *
   * `no_match` indicates that Plaid was able to perform a check against an external data source and
   * it did not match the provided input data.
   *
   * `no_data` indicates that Plaid was unable to find external data to compare against the provided
   * input data.
   *
   * `no_input` indicates that Plaid was unable to perform a check because no information was
   * provided for this field by the end user.
   */
  summary: MatchSummaryCode;
  /**
   * Field describing whether the associated address is a post office box. Will be `yes` when a P.O.
   * box is detected, `no` when Plaid confirmed the address is not a P.O. box, and `no_data` when
   * Plaid was not able to determine if the address is a P.O. box.
   */
  poBox: PoBoxStatus;
  /**
   * Field describing whether the associated address is being used for commercial or residential
   * purposes.
   *
   * Note: This value will be `no_data` when Plaid does not have sufficient data to determine the
   * address's use.
   */
  type: AddressPurposeLabel;
  /**
   * An enum indicating the match type between data provided by user and data checked against an
   * external data source.
   *
   *
   * `match` indicates that the provided input data was a strong match against external data.
   *
   * `partial_match` indicates the data approximately matched against external data. For example,
   * "Knope" vs. "Knope-Wyatt" for last name.
   *
   * `no_match` indicates that Plaid was able to perform a check against an external data source and
   * it did not match the provided input data.
   *
   * `no_data` indicates that Plaid was unable to find external data to compare against the provided
   * input data.
   *
   * `no_input` indicates that Plaid was unable to perform a check because no information was
   * provided for this field by the end user.
   */
  street?: HiddenMatchSummaryCode;
  /**
   * An enum indicating the match type between data provided by user and data checked against an
   * external data source.
   *
   *
   * `match` indicates that the provided input data was a strong match against external data.
   *
   * `partial_match` indicates the data approximately matched against external data. For example,
   * "Knope" vs. "Knope-Wyatt" for last name.
   *
   * `no_match` indicates that Plaid was able to perform a check against an external data source and
   * it did not match the provided input data.
   *
   * `no_data` indicates that Plaid was unable to find external data to compare against the provided
   * input data.
   *
   * `no_input` indicates that Plaid was unable to perform a check because no information was
   * provided for this field by the end user.
   */
  city?: HiddenMatchSummaryCode;
  /**
   * An enum indicating the match type between data provided by user and data checked against an
   * external data source.
   *
   *
   * `match` indicates that the provided input data was a strong match against external data.
   *
   * `partial_match` indicates the data approximately matched against external data. For example,
   * "Knope" vs. "Knope-Wyatt" for last name.
   *
   * `no_match` indicates that Plaid was able to perform a check against an external data source and
   * it did not match the provided input data.
   *
   * `no_data` indicates that Plaid was unable to find external data to compare against the provided
   * input data.
   *
   * `no_input` indicates that Plaid was unable to perform a check because no information was
   * provided for this field by the end user.
   */
  region?: HiddenMatchSummaryCode;
  /**
   * An enum indicating the match type between data provided by user and data checked against an
   * external data source.
   *
   *
   * `match` indicates that the provided input data was a strong match against external data.
   *
   * `partial_match` indicates the data approximately matched against external data. For example,
   * "Knope" vs. "Knope-Wyatt" for last name.
   *
   * `no_match` indicates that Plaid was able to perform a check against an external data source and
   * it did not match the provided input data.
   *
   * `no_data` indicates that Plaid was unable to find external data to compare against the provided
   * input data.
   *
   * `no_input` indicates that Plaid was unable to perform a check because no information was
   * provided for this field by the end user.
   */
  postalCode?: HiddenMatchSummaryCode;
  /**
   * Result summary object specifying how the `address` field matched for fields that are only
   * present on an international KYC check.
   */
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
