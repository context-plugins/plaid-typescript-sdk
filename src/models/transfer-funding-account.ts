import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferFundingAccount = {
  accessToken: string;
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
