import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentitySchema, type AccountIdentity } from "./account-identity.js";

export type ProcessorIdentityGetResponse = {
  account: AccountIdentity;
  requestId: string;
};

export const processorIdentityGetResponseSchema: Schema<ProcessorIdentityGetResponse> =
  s.object<ProcessorIdentityGetResponse>({
    account: accountIdentitySchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
