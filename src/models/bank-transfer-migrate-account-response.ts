import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/bank_transfer/migrate_account` */
export type BankTransferMigrateAccountResponse = {
  /** The Plaid `access_token` for the newly created Item. */
  accessToken: string;
  /** The Plaid `account_id` for the newly created Item. */
  accountId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const bankTransferMigrateAccountResponseSchema: Schema<BankTransferMigrateAccountResponse> =
  s.object<BankTransferMigrateAccountResponse>({
    accessToken: s.string(),
    accountId: s.string(),
    requestId: s.string(),
    _keysMap: {
      accessToken: "access_token",
      accountId: "account_id",
      requestId: "request_id",
    },
  });
