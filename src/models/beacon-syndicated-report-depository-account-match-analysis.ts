import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconMatchSummaryCodeSchema, type BeaconMatchSummaryCode } from "./beacon-match-summary-code.js";

/**
 * Analysis of whether this account matched between the originally reported Beacon User and the
 * Beacon User that the report syndicated to.
 */
export type BeaconSyndicatedReportDepositoryAccountMatchAnalysis = {
  /** The last 2-4 numeric characters of this account's account number. */
  accountMask: string;
  /** The routing number of the account. */
  routingNumber: string;
  /**
   * An enum indicating the match type between two Beacon Users.
   *
   *
   * `match` indicates that the provided input data was a strong match against the other Beacon
   * User.
   *
   * `partial_match` indicates the data approximately matched the other Beacon User. For example,
   * "Knope" vs. "Knope-Wyatt" for last name.
   *
   * `no_match` indicates that Plaid was able to compare this field against the other Beacon User
   * and it did not match the provided input data.
   *
   * `no_data` indicates that Plaid was unable to compare this field against the original Beacon
   * User because the field was not present in one of the Beacon Users.
   */
  matchStatus: BeaconMatchSummaryCode;
};

export const beaconSyndicatedReportDepositoryAccountMatchAnalysisSchema: Schema<BeaconSyndicatedReportDepositoryAccountMatchAnalysis> =
  s.object<BeaconSyndicatedReportDepositoryAccountMatchAnalysis>({
    accountMask: s.string(),
    routingNumber: s.string(),
    matchStatus: beaconMatchSummaryCodeSchema,
    _keysMap: {
      accountMask: "account_mask",
      routingNumber: "routing_number",
      matchStatus: "match_status",
    },
  });
