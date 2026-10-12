import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferBalanceSchema, type TransferBalance } from "./transfer-balance.js";

/** Defines the response schema for `/transfer/balance/get` */
export type TransferBalanceGetResponse = {
  /** Information about the balance held with Plaid. */
  balance: TransferBalance;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferBalanceGetResponseSchema: Schema<TransferBalanceGetResponse> =
  s.object<TransferBalanceGetResponse>({
    balance: transferBalanceSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
