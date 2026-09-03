import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { processorSchema, type Processor } from "./processor.js";

export type ProcessorTokenCreateRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  accountId: string;
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
