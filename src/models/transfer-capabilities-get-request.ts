import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/capabilities/get` */
export type TransferCapabilitiesGetRequest = {
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
  /** The Plaid `access_token` for the account that will be debited or credited. */
  accessToken: string;
  /**
   * The Plaid `account_id` corresponding to the end-user account that will be debited or credited.
   */
  accountId: string;
  /** A payment profile token associated with the Payment Profile data that is being requested. */
  paymentProfileToken?: string;
};

export const transferCapabilitiesGetRequestSchema: Schema<TransferCapabilitiesGetRequest> =
  s.object<TransferCapabilitiesGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    accountId: s.string(),
    paymentProfileToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      accountId: "account_id",
      paymentProfileToken: "payment_profile_token",
    },
  });
