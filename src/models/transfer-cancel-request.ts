import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasonCodeSchema, type ReasonCode } from "./reason-code.js";

/** Defines the request schema for `/transfer/cancel` */
export type TransferCancelRequest = {
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
  /** Plaid's unique identifier for a transfer. */
  transferId: string;
  /**
   * The Plaid client ID of the transfer originator. Should only be present if `client_id` is a
   * third-party sender (TPS).
   *
   * @deprecated
   */
  originatorClientId?: string | null;
  /**
   * Specifies the reason for cancelling transfer. This is required for RfP transfers, and will be
   * ignored for other networks.
   *
   * `"AC03"` - Invalid Creditor Account Number
   *
   * `"AM09"` - Incorrect Amount
   *
   * `"CUST"` - Requested By Customer - Cancellation requested
   *
   * `"DUPL"` - Duplicate Payment
   *
   * `"FRAD"` - Fraudulent Payment - Unauthorized or fraudulently induced
   *
   * `"TECH"` - Technical Problem - Cancellation due to system issues
   *
   * `"UPAY"` - Undue Payment - Payment was made through another channel
   *
   * `"AC14"` - Invalid or Missing Creditor Account Type
   *
   * `"AM06"` - Amount Too Low
   *
   * `"BE05"` - Unrecognized Initiating Party
   *
   * `"FOCR"` - Following Refund Request
   *
   * `"MS02"` - No Specified Reason - Customer
   *
   * `"MS03"` - No Specified Reason - Agent
   *
   * `"RR04"` - Regulatory Reason
   *
   * `"RUTA"` - Return Upon Unable To Apply
   */
  reasonCode?: ReasonCode;
};

export const transferCancelRequestSchema: Schema<TransferCancelRequest> = s.object<TransferCancelRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  transferId: s.string(),
  originatorClientId: s.optionalNullable(s.string()),
  reasonCode: s.optional(s.lazy(() => reasonCodeSchema)),
  _keysMap: {
    clientId: "client_id",
    transferId: "transfer_id",
    originatorClientId: "originator_client_id",
    reasonCode: "reason_code",
  },
});
