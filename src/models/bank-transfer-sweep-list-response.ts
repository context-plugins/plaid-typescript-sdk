import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferSweepSchema, type BankTransferSweep } from "./bank-transfer-sweep.js";

/** BankTransferSweepListResponse defines the response schema for `/bank_transfer/sweep/list` */
export type BankTransferSweepListResponse = {
  sweeps: BankTransferSweep[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const bankTransferSweepListResponseSchema: Schema<BankTransferSweepListResponse> =
  s.object<BankTransferSweepListResponse>({
    sweeps: s.array(s.lazy(() => bankTransferSweepSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
