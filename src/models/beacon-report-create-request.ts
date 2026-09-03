import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconReportCreateTypeSchema, type BeaconReportCreateType } from "./beacon-report-create-type.js";
import { fraudAmountSchema, type FraudAmount } from "./fraud-amount.js";

export type BeaconReportCreateRequest = {
  beaconUserId: string;
  type: BeaconReportCreateType;
  fraudDate: string;
  fraudAmount?: FraudAmount | null;
  clientId?: string;
  secret?: string;
};

export const beaconReportCreateRequestSchema: Schema<BeaconReportCreateRequest> =
  s.object<BeaconReportCreateRequest>({
    beaconUserId: s.string(),
    type: beaconReportCreateTypeSchema,
    fraudDate: s.dateOnly(),
    fraudAmount: s.optionalNullable(s.lazy(() => fraudAmountSchema)),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      fraudDate: "fraud_date",
      fraudAmount: "fraud_amount",
      clientId: "client_id",
    },
  });
