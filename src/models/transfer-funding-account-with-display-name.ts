import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferFundingAccountWithDisplayName = {
  accessToken: string;
  accountId: string;
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
