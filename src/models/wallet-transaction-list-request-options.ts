import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WalletTransactionListRequestOptions = {
  startTime?: Date;
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
