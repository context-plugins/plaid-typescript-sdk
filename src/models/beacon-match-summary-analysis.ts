import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconMatchSummaryCodeSchema, type BeaconMatchSummaryCode } from "./beacon-match-summary-code.js";

export type BeaconMatchSummaryAnalysis = {
  address: BeaconMatchSummaryCode;
  dateOfBirth: BeaconMatchSummaryCode;
  emailAddress: BeaconMatchSummaryCode;
  name: BeaconMatchSummaryCode;
  idNumber: BeaconMatchSummaryCode;
  ipAddress: BeaconMatchSummaryCode;
  phoneNumber: BeaconMatchSummaryCode;
};

export const beaconMatchSummaryAnalysisSchema: Schema<BeaconMatchSummaryAnalysis> =
  s.object<BeaconMatchSummaryAnalysis>({
    address: beaconMatchSummaryCodeSchema,
    dateOfBirth: beaconMatchSummaryCodeSchema,
    emailAddress: beaconMatchSummaryCodeSchema,
    name: beaconMatchSummaryCodeSchema,
    idNumber: beaconMatchSummaryCodeSchema,
    ipAddress: beaconMatchSummaryCodeSchema,
    phoneNumber: beaconMatchSummaryCodeSchema,
    _keysMap: {
      dateOfBirth: "date_of_birth",
      emailAddress: "email_address",
      idNumber: "id_number",
      ipAddress: "ip_address",
      phoneNumber: "phone_number",
    },
  });
