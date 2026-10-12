import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Additional wallet transaction options */
export type WalletTransactionListRequestOptions = {
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DDThh:mm:ssZ) for
   * filtering transactions, inclusive of the provided date.
   */
  startTime?: Date;
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DDThh:mm:ssZ) for
   * filtering transactions, inclusive of the provided date.
   */
  endTime?: Date;
};

export const walletTransactionListRequestOptionsSchema: Schema<WalletTransactionListRequestOptions> =
  s.object<WalletTransactionListRequestOptions>({
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    _keysMap: {
      startTime: "start_time",
      endTime: "end_time",
    },
  });
