import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferCapabilitiesGetRfP = {
  debit?: boolean;
  maxAmount?: string | null;
  isoCurrencyCode?: string | null;
};

export const transferCapabilitiesGetRfPSchema: Schema<TransferCapabilitiesGetRfP> =
  s.object<TransferCapabilitiesGetRfP>({
    debit: s.optional(s.boolean()),
    maxAmount: s.optionalNullable(s.string()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    _keysMap: {
      maxAmount: "max_amount",
      isoCurrencyCode: "iso_currency_code",
    },
  });
