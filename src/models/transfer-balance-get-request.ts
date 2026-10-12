import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferBalanceTypeSchema, type TransferBalanceType } from "./transfer-balance-type.js";

/** Defines the request schema for `/transfer/balance/get` */
export type TransferBalanceGetRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Client ID of the end customer.
   *
   * @deprecated
   */
  originatorClientId?: string | null;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The type of balance.
   *
   * `prefunded_rtp_credits` - Your prefunded RTP credit balance with Plaid `prefunded_ach_credits`
   * - Your prefunded ACH credit balance with Plaid
   */
  type?: TransferBalanceType;
};

export const transferBalanceGetRequestSchema: Schema<TransferBalanceGetRequest> =
  s.object<TransferBalanceGetRequest>({
    clientId: s.optional(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    secret: s.optional(s.string()),
    type: s.optional(s.lazy(() => transferBalanceTypeSchema)),
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
    },
  });
