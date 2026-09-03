import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";

export type ProcessorBalanceGetResponse = {
  account: Account;
  requestId: string;
};

export const processorBalanceGetResponseSchema: Schema<ProcessorBalanceGetResponse> =
  s.object<ProcessorBalanceGetResponse>({
    account: accountSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
