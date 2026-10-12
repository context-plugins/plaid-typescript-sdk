import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { isoCurrencyCodeSchema, type IsoCurrencyCode } from "./iso-currency-code.js";

/** WalletListRequest defines the request schema for `/wallet/list` */
export type WalletListRequest = {
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
  isoCurrencyCode?: IsoCurrencyCode;
  /**
   * A base64 value representing the latest e-wallet that has already been requested. Set this to
   * `next_cursor` received from the previous `/wallet/list` request. If provided, the response will
   * only contain e-wallets created before that e-wallet. If omitted, the response will contain
   * e-wallets starting from the most recent, and in descending order.
   */
  cursor?: string;
  /** The number of e-wallets to fetch @default 10 */
  count?: number;
};

export const walletListRequestSchema: Schema<WalletListRequest> = s.object<WalletListRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  isoCurrencyCode: s.optional(s.lazy(() => isoCurrencyCodeSchema)),
  cursor: s.optional(s.string()),
  count: s.defaulted(s.int(), 10),
  _keysMap: {
    clientId: "client_id",
    isoCurrencyCode: "iso_currency_code",
  },
});
