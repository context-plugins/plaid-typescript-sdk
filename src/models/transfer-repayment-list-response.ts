import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferRepaymentSchema, type TransferRepayment } from "./transfer-repayment.js";

export type TransferRepaymentListResponse = {
  repayments: TransferRepayment[];
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
