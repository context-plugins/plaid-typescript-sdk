import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration parameters for the Investments Move product */
export type LinkTokenInvestmentsAuth = {
  /** If `true`, show institutions that use the manual entry fallback flow. @default false */
  manualEntryEnabled?: boolean | null;
  /** If `true`, show institutions that use the masked number match fallback flow. @default false */
  maskedNumberMatchEnabled?: boolean | null;
  /**
   * If `true`, show institutions that use the stated account number fallback flow.
   *
   * @default false
   */
  statedAccountNumberEnabled?: boolean | null;
  /**
   * If `true`, the fee and contribution details for 401k accounts will be returned.
   *
   * @default false
   */
  rollover401KEnabled?: boolean | null;
};

export const linkTokenInvestmentsAuthSchema: Schema<LinkTokenInvestmentsAuth> =
  s.object<LinkTokenInvestmentsAuth>({
    manualEntryEnabled: s.defaulted(s.nullable(s.boolean()), false),
    maskedNumberMatchEnabled: s.defaulted(s.nullable(s.boolean()), false),
    statedAccountNumberEnabled: s.defaulted(s.nullable(s.boolean()), false),
    rollover401KEnabled: s.defaulted(s.nullable(s.boolean()), false),
    _keysMap: {
      manualEntryEnabled: "manual_entry_enabled",
      maskedNumberMatchEnabled: "masked_number_match_enabled",
      statedAccountNumberEnabled: "stated_account_number_enabled",
      rollover401KEnabled: "rollover_401k_enabled",
    },
  });
