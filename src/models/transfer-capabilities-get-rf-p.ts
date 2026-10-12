import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains the supported service types in RfP */
export type TransferCapabilitiesGetRfP = {
  /** When `true`, the linked Item's institution supports RfP debit transfer. @default false */
  debit?: boolean;
  /**
   * The maximum amount (decimal string with two digits of precision e.g. "10.00") for originating
   * RfP transfers with the given institution.
   */
  maxAmount?: string | null;
  /** The currency of the `max_amount`, e.g. "USD". */
  isoCurrencyCode?: string | null;
};

export const transferCapabilitiesGetRfPSchema: Schema<TransferCapabilitiesGetRfP> =
  s.object<TransferCapabilitiesGetRfP>({
    debit: s.defaulted(s.boolean(), false),
    maxAmount: s.optionalNullable(s.string()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    _keysMap: {
      maxAmount: "max_amount",
      isoCurrencyCode: "iso_currency_code",
    },
  });
