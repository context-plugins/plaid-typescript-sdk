import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";

export type ProcessorAccountGetResponse = {
  account: Account;
  institutionId: string;
  requestId: string;
};

export const processorAccountGetResponseSchema: Schema<ProcessorAccountGetResponse> =
  s.object<ProcessorAccountGetResponse>({
    account: accountSchema,
    institutionId: s.string(),
    requestId: s.string(),
    _keysMap: {
      institutionId: "institution_id",
      requestId: "request_id",
    },
  });
