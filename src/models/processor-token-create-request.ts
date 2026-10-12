import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { processorSchema, type Processor } from "./processor.js";

/** ProcessorTokenCreateRequest defines the request schema for `/processor/token/create` */
export type ProcessorTokenCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /** The `account_id` value obtained from the `onSuccess` callback in Link */
  accountId: string;
  /** The processor you are integrating with. */
  processor: Processor;
};

export const processorTokenCreateRequestSchema: Schema<ProcessorTokenCreateRequest> =
  s.object<ProcessorTokenCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    accountId: s.string(),
    processor: processorSchema,
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      accountId: "account_id",
    },
  });
