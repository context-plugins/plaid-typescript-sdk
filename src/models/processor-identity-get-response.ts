import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentitySchema, type AccountIdentity } from "./account-identity.js";

/** ProcessorIdentityGetResponse defines the response schema for `/processor/identity/get` */
export type ProcessorIdentityGetResponse = {
  /** Identity information about an account */
  account: AccountIdentity;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
