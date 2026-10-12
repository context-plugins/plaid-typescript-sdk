import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The originator's funding account, linked with Plaid Link or `/transfer/migrate_account`. */
export type TransferFundingAccount = {
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /** The Plaid `account_id` for the newly created Item. */
  accountId: string;
};

export const transferFundingAccountSchema: Schema<TransferFundingAccount> = s.object<TransferFundingAccount>({
  accessToken: s.string(),
  accountId: s.string(),
  _keysMap: {
    accessToken: "access_token",
    accountId: "account_id",
  },
});
