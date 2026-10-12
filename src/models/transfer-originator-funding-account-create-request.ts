import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferFundingAccountWithDisplayNameSchema,
  type TransferFundingAccountWithDisplayName,
} from "./transfer-funding-account-with-display-name.js";

/** Defines the request schema for `/transfer/originator/funding_account/create` */
export type TransferOriginatorFundingAccountCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The Plaid client ID of the transfer originator. */
  originatorClientId: string;
  /** The originator's funding account, linked with Plaid Link or `/transfer/migrate_account`. */
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
