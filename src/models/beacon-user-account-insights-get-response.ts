import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconBankAccountsSchema, type BeaconBankAccounts } from "./beacon-bank-accounts.js";

export type BeaconUserAccountInsightsGetResponse = {
  beaconUserId: string;
  createdAt: Date;
  updatedAt: Date;
  bankAccountInsights: BeaconBankAccounts;
  requestId: string;
};

export const beaconUserAccountInsightsGetResponseSchema: Schema<BeaconUserAccountInsightsGetResponse> =
  s.object<BeaconUserAccountInsightsGetResponse>({
    beaconUserId: s.string(),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    bankAccountInsights: beaconBankAccountsSchema,
    requestId: s.string(),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      bankAccountInsights: "bank_account_insights",
      requestId: "request_id",
    },
  });
