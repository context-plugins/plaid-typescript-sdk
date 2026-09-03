import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { liabilitiesObjectSchema, type LiabilitiesObject } from "./liabilities-object.js";

export type ProcessorLiabilitiesGetResponse = {
  account: Account;
  liabilities: LiabilitiesObject;
  requestId: string;
};

export const processorLiabilitiesGetResponseSchema: Schema<ProcessorLiabilitiesGetResponse> =
  s.object<ProcessorLiabilitiesGetResponse>({
    account: accountSchema,
    liabilities: liabilitiesObjectSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
