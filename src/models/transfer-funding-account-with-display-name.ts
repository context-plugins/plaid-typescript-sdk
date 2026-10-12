import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The originator's funding account, linked with Plaid Link or `/transfer/migrate_account`. */
export type TransferFundingAccountWithDisplayName = {
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /** The Plaid `account_id` for the newly created Item. */
  accountId: string;
  /** The name for the funding account that is displayed in the Plaid dashboard. */
  displayName?: string;
};

export const transferFundingAccountWithDisplayNameSchema: Schema<TransferFundingAccountWithDisplayName> =
  s.object<TransferFundingAccountWithDisplayName>({
    accessToken: s.string(),
    accountId: s.string(),
    displayName: s.optional(s.string()),
    _keysMap: {
      accessToken: "access_token",
      accountId: "account_id",
      displayName: "display_name",
    },
  });
