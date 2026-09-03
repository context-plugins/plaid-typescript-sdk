import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customSandboxTransactionSchema,
  type CustomSandboxTransaction,
} from "./custom-sandbox-transaction.js";

export type SandboxTransactionsCreateRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  transactions: CustomSandboxTransaction[];
};

export const sandboxTransactionsCreateRequestSchema: Schema<SandboxTransactionsCreateRequest> =
  s.object<SandboxTransactionsCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    transactions: s.array(s.lazy(() => customSandboxTransactionSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
