import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { liabilitiesObjectSchema, type LiabilitiesObject } from "./liabilities-object.js";

/** ProcessorLiabilitiesGetResponse defines the response schema for `/processor/liabilities/get` */
export type ProcessorLiabilitiesGetResponse = {
  /** A single account at a financial institution. */
  account: Account;
  /** An object containing liability accounts */
  liabilities: LiabilitiesObject;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
