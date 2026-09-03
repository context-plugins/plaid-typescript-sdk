import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsRecurringUpdateInputSchema,
  type TransactionsRecurringUpdateInput,
} from "./transactions-recurring-update-input.js";

export type TransactionsRecurringUpdateRequest = {
  clientId?: string;
  accessToken: string;
  secret?: string;
  inputs: TransactionsRecurringUpdateInput[];
};

export const transactionsRecurringUpdateRequestSchema: Schema<TransactionsRecurringUpdateRequest> =
  s.object<TransactionsRecurringUpdateRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    inputs: s.array(s.lazy(() => transactionsRecurringUpdateInputSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
