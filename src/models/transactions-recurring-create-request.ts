import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsRecurringCreateInputSchema,
  type TransactionsRecurringCreateInput,
} from "./transactions-recurring-create-input.js";

export type TransactionsRecurringCreateRequest = {
  clientId?: string;
  accessToken: string;
  secret?: string;
  inputs: TransactionsRecurringCreateInput[];
};

export const transactionsRecurringCreateRequestSchema: Schema<TransactionsRecurringCreateRequest> =
  s.object<TransactionsRecurringCreateRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    inputs: s.array(s.lazy(() => transactionsRecurringCreateInputSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
