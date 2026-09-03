import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { isoCurrencyCodeSchema, type IsoCurrencyCode } from "./iso-currency-code.js";

export type WalletCreateRequest = {
  clientId?: string;
  secret?: string;
  isoCurrencyCode: IsoCurrencyCode;
};

export const walletCreateRequestSchema: Schema<WalletCreateRequest> = s.object<WalletCreateRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  isoCurrencyCode: isoCurrencyCodeSchema,
  _keysMap: {
    clientId: "client_id",
    isoCurrencyCode: "iso_currency_code",
  },
});
