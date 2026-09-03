import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconMatchSummaryCodeSchema, type BeaconMatchSummaryCode } from "./beacon-match-summary-code.js";
import {
  beaconSyndicatedReportDepositoryAccountMatchAnalysisSchema,
  type BeaconSyndicatedReportDepositoryAccountMatchAnalysis,
} from "./beacon-syndicated-report-depository-account-match-analysis.js";

export type BeaconReportSyndicationAnalysis = {
  address: BeaconMatchSummaryCode;
  dateOfBirth: BeaconMatchSummaryCode;
  emailAddress: BeaconMatchSummaryCode;
  name: BeaconMatchSummaryCode;
  idNumber: BeaconMatchSummaryCode;
  ipAddress: BeaconMatchSummaryCode;
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
