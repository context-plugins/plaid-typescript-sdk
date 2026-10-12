import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferSweepSchema, type BankTransferSweep } from "./bank-transfer-sweep.js";

/** BankTransferSweepGetResponse defines the response schema for `/bank_transfer/sweep/get` */
export type BankTransferSweepGetResponse = {
  /** BankTransferSweep describes a sweep transfer. */
  sweep: BankTransferSweep;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const bankTransferSweepGetResponseSchema: Schema<BankTransferSweepGetResponse> =
  s.object<BankTransferSweepGetResponse>({
    sweep: bankTransferSweepSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
