import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferRepaymentReturnSchema, type TransferRepaymentReturn } from "./transfer-repayment-return.js";

export type TransferRepaymentReturnListResponse = {
  repaymentReturns: TransferRepaymentReturn[];
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
