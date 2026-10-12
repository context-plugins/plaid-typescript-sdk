import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferRepaymentReturnSchema, type TransferRepaymentReturn } from "./transfer-repayment-return.js";

/** Defines the response schema for `/transfer/repayment/return/list` */
export type TransferRepaymentReturnListResponse = {
  repaymentReturns: TransferRepaymentReturn[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferRepaymentReturnListResponseSchema: Schema<TransferRepaymentReturnListResponse> =
  s.object<TransferRepaymentReturnListResponse>({
    repaymentReturns: s.array(s.lazy(() => transferRepaymentReturnSchema)),
    requestId: s.string(),
    _keysMap: {
      repaymentReturns: "repayment_returns",
      requestId: "request_id",
    },
  });
