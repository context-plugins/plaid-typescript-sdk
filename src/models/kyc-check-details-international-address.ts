import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hiddenMatchSummaryCodeSchema, type HiddenMatchSummaryCode } from "./hidden-match-summary-code.js";

/**
 * Result summary object specifying how the `address` field matched for fields that are only present
 * on an international KYC check.
 */
export type KycCheckDetailsInternationalAddress = {
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
  building: HiddenMatchSummaryCode;
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
  county: HiddenMatchSummaryCode;
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
  district: HiddenMatchSummaryCode;
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
  houseNumber: HiddenMatchSummaryCode;
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
  subpremise: HiddenMatchSummaryCode;
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
