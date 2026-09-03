import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferBalanceSchema, type TransferBalance } from "./transfer-balance.js";

export type TransferBalanceGetResponse = {
  balance: TransferBalance;
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
