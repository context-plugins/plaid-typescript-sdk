import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconBankAccountsSchema, type BeaconBankAccounts } from "./beacon-bank-accounts.js";

/** The response schema for `/beacon/user/account_insights/get` */
export type BeaconUserAccountInsightsGetResponse = {
  /** ID of the associated Beacon User. */
  beaconUserId: string;
  /** An ISO8601 formatted timestamp. */
  createdAt: Date;
  /**
   * An ISO8601 formatted timestamp. This field indicates the last time the resource was modified.
   */
  updatedAt: Date;
  /** A collection of Bank Accounts linked to an Item that is associated with this Beacon User. */
  bankAccountInsights: BeaconBankAccounts;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
