import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemStatusTransactions = {
  lastSuccessfulUpdate?: Date | null;
  lastFailedUpdate?: Date | null;
};

export const itemStatusTransactionsSchema: Schema<ItemStatusTransactions> = s.object<ItemStatusTransactions>({
  lastSuccessfulUpdate: s.optionalNullable(s.dateTime()),
  lastFailedUpdate: s.optionalNullable(s.dateTime()),
  _keysMap: {
    lastSuccessfulUpdate: "last_successful_update",
    lastFailedUpdate: "last_failed_update",
  },
});
