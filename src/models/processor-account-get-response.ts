import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";

/** ProcessorAccountGetResponse defines the response schema for `/processor/account/get` */
export type ProcessorAccountGetResponse = {
  /** A single account at a financial institution. */
  account: Account;
  /** The Plaid Institution ID associated with the Account. */
  institutionId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
