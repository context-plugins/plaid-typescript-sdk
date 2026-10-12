import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconMatchSummaryCodeSchema, type BeaconMatchSummaryCode } from "./beacon-match-summary-code.js";
import {
  beaconSyndicatedReportDepositoryAccountMatchAnalysisSchema,
  type BeaconSyndicatedReportDepositoryAccountMatchAnalysis,
} from "./beacon-syndicated-report-depository-account-match-analysis.js";

/**
 * Analysis of which fields matched between the originally reported Beacon User and the Beacon User
 * that the report was syndicated to.
 */
export type BeaconReportSyndicationAnalysis = {
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
  address: BeaconMatchSummaryCode;
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
  dateOfBirth: BeaconMatchSummaryCode;
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
  emailAddress: BeaconMatchSummaryCode;
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
  name: BeaconMatchSummaryCode;
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
  idNumber: BeaconMatchSummaryCode;
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
  ipAddress: BeaconMatchSummaryCode;
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
  phoneNumber: BeaconMatchSummaryCode;
  depositoryAccounts: BeaconSyndicatedReportDepositoryAccountMatchAnalysis[];
};

export const beaconReportSyndicationAnalysisSchema: Schema<BeaconReportSyndicationAnalysis> =
  s.object<BeaconReportSyndicationAnalysis>({
    address: beaconMatchSummaryCodeSchema,
    dateOfBirth: beaconMatchSummaryCodeSchema,
    emailAddress: beaconMatchSummaryCodeSchema,
    name: beaconMatchSummaryCodeSchema,
    idNumber: beaconMatchSummaryCodeSchema,
    ipAddress: beaconMatchSummaryCodeSchema,
    phoneNumber: beaconMatchSummaryCodeSchema,
    depositoryAccounts: s.array(s.lazy(() => beaconSyndicatedReportDepositoryAccountMatchAnalysisSchema)),
    _keysMap: {
      dateOfBirth: "date_of_birth",
      emailAddress: "email_address",
      idNumber: "id_number",
      ipAddress: "ip_address",
      phoneNumber: "phone_number",
      depositoryAccounts: "depository_accounts",
    },
  });
