import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferRepaymentSchema, type TransferRepayment } from "./transfer-repayment.js";

/** Defines the response schema for `/transfer/repayment/list` */
export type TransferRepaymentListResponse = {
  repayments: TransferRepayment[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferRepaymentListResponseSchema: Schema<TransferRepaymentListResponse> =
  s.object<TransferRepaymentListResponse>({
    repayments: s.array(s.lazy(() => transferRepaymentSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
