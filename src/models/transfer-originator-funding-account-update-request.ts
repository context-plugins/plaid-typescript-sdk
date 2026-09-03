import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferFundingAccountSchema, type TransferFundingAccount } from "./transfer-funding-account.js";

export type TransferOriginatorFundingAccountUpdateRequest = {
  clientId?: string;
  secret?: string;
  originatorClientId: string;
  fundingAccount: TransferFundingAccount;
};

export const transferOriginatorFundingAccountUpdateRequestSchema: Schema<TransferOriginatorFundingAccountUpdateRequest> =
  s.object<TransferOriginatorFundingAccountUpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.string(),
    fundingAccount: transferFundingAccountSchema,
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      fundingAccount: "funding_account",
    },
  });
