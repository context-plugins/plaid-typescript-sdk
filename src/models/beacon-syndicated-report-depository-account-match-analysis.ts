import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconMatchSummaryCodeSchema, type BeaconMatchSummaryCode } from "./beacon-match-summary-code.js";

export type BeaconSyndicatedReportDepositoryAccountMatchAnalysis = {
  accountMask: string;
  routingNumber: string;
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
