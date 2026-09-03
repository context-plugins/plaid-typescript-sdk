import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { isoCurrencyCodeSchema, type IsoCurrencyCode } from "./iso-currency-code.js";

export type WalletListRequest = {
  clientId?: string;
  secret?: string;
  isoCurrencyCode?: IsoCurrencyCode;
  cursor?: string;
  count?: number;
};

export const walletListRequestSchema: Schema<WalletListRequest> = s.object<WalletListRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  isoCurrencyCode: s.optional(s.lazy(() => isoCurrencyCodeSchema)),
  cursor: s.optional(s.string()),
  count: s.optional(s.number()),
  _keysMap: {
    clientId: "client_id",
    isoCurrencyCode: "iso_currency_code",
  },
});
