import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { processorNumberSchema, type ProcessorNumber } from "./processor-number.js";

export type ProcessorAuthGetResponse = {
  requestId: string;
  numbers: ProcessorNumber;
  account: Account;
};

export const processorAuthGetResponseSchema: Schema<ProcessorAuthGetResponse> =
  s.object<ProcessorAuthGetResponse>({
    requestId: s.string(),
    numbers: processorNumberSchema,
    account: accountSchema,
    _keysMap: {
      requestId: "request_id",
    },
  });
