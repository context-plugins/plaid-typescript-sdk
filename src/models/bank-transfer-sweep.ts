import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** BankTransferSweep describes a sweep transfer. */
export type BankTransferSweep = {
  /** Identifier of the sweep. */
  id: string;
  /** The datetime when the sweep occurred, in RFC 3339 format. */
  createdAt: Date;
  /** The amount of the sweep. */
  amount: string;
  /** The currency of the sweep, e.g. "USD". */
  isoCurrencyCode: string;
};

export const bankTransferSweepSchema: Schema<BankTransferSweep> = s.object<BankTransferSweep>({
  id: s.string(),
  createdAt: s.dateTime(),
  amount: s.string(),
  isoCurrencyCode: s.string(),
  _keysMap: {
    createdAt: "created_at",
    isoCurrencyCode: "iso_currency_code",
  },
});
