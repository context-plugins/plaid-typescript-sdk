import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferMigrateAccountResponse = {
  accessToken: string;
  accountId: string;
  requestId: string;
};

export const transferMigrateAccountResponseSchema: Schema<TransferMigrateAccountResponse> =
  s.object<TransferMigrateAccountResponse>({
    accessToken: s.string(),
    accountId: s.string(),
    requestId: s.string(),
    _keysMap: {
      accessToken: "access_token",
      accountId: "account_id",
      requestId: "request_id",
    },
  });
