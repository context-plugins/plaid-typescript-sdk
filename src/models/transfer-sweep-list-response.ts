import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSweepSchema, type TransferSweep } from "./transfer-sweep.js";

/** Defines the response schema for `/transfer/sweep/list` */
export type TransferSweepListResponse = {
  sweeps: TransferSweep[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferSweepListResponseSchema: Schema<TransferSweepListResponse> =
  s.object<TransferSweepListResponse>({
    sweeps: s.array(s.lazy(() => transferSweepSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
