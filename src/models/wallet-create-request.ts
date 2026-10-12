import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { isoCurrencyCodeSchema, type IsoCurrencyCode } from "./iso-currency-code.js";

/** WalletCreateRequest defines the request schema for `/wallet/create` */
export type WalletCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** An ISO-4217 currency code, used with e-wallets and transactions. */
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
