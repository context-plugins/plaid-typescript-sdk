import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferFundingAccountWithDisplayNameSchema,
  type TransferFundingAccountWithDisplayName,
} from "./transfer-funding-account-with-display-name.js";

export type TransferOriginatorFundingAccountCreateRequest = {
  clientId?: string;
  secret?: string;
  originatorClientId: string;
  fundingAccount: TransferFundingAccountWithDisplayName;
};

export const transferOriginatorFundingAccountCreateRequestSchema: Schema<TransferOriginatorFundingAccountCreateRequest> =
  s.object<TransferOriginatorFundingAccountCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.string(),
    fundingAccount: transferFundingAccountWithDisplayNameSchema,
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      fundingAccount: "funding_account",
    },
  });
