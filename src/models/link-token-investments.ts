import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration parameters for the Investments product */
export type LinkTokenInvestments = {
  /**
   * If `true`, allow self-custody crypto wallets to be added without requiring signature
   * verification. Defaults to `false`.
   */
  allowUnverifiedCryptoWallets?: boolean;
  /**
   * If `true`, allow users to manually enter Investments account and holdings information. Defaults
   * to `false`.
   */
  allowManualEntry?: boolean;
};

export const linkTokenInvestmentsSchema: Schema<LinkTokenInvestments> = s.object<LinkTokenInvestments>({
  allowUnverifiedCryptoWallets: s.optional(s.boolean()),
  allowManualEntry: s.optional(s.boolean()),
  _keysMap: {
    allowUnverifiedCryptoWallets: "allow_unverified_crypto_wallets",
    allowManualEntry: "allow_manual_entry",
  },
});
