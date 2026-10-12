import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Optional arguments for `/income/verification/create` */
export type IncomeVerificationCreateRequestOptions = {
  /**
   * An array of access tokens corresponding to the Items that will be cross-referenced with the
   * product data. Plaid will attempt to correlate transaction history from these Items with data
   * from the user's paystub, such as date and amount. If the `transactions` product was not
   * initialized for the Items during Link, it will be initialized after this Link session.
   */
  accessTokens?: string[];
};

export const incomeVerificationCreateRequestOptionsSchema: Schema<IncomeVerificationCreateRequestOptions> =
  s.object<IncomeVerificationCreateRequestOptions>({
    accessTokens: s.optional(s.array(s.string())),
    _keysMap: {
      accessTokens: "access_tokens",
    },
  });
