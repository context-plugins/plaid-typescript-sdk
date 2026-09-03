import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorStripeBankAccountTokenCreateRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  accountId: string;
};

export const processorStripeBankAccountTokenCreateRequestSchema: Schema<ProcessorStripeBankAccountTokenCreateRequest> =
  s.object<ProcessorStripeBankAccountTokenCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    accountId: s.string(),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      accountId: "account_id",
    },
  });
