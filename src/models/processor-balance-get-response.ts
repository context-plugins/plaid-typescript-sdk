import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";

/** ProcessorBalanceGetResponse defines the response schema for `/processor/balance/get` */
export type ProcessorBalanceGetResponse = {
  /** A single account at a financial institution. */
  account: Account;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
