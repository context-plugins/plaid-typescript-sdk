import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Account and bank identifier number data used to configure the test account. All values are
 * optional.
 */
export type Numbers = {
  /** Will be used for the account number. */
  account?: string;
  /**
   * Must be a valid ACH routing number. To test `/transfer/capabilities/get`, set this to 322271627
   * to force a `true` result.
   */
  achRouting?: string;
  /** Must be a valid wire transfer routing number. */
  achWireRouting?: string;
  /** EFT institution number. Must be specified alongside `eft_branch`. */
  eftInstitution?: string;
  /** EFT branch number. Must be specified alongside `eft_institution`. */
  eftBranch?: string;
  /** Business Identifier Code (BIC). Must be specified alongside `international_iban`. */
  internationalBic?: string;
  /**
   * International Bank Account Number (IBAN). If no account number is specified via `account`, will
   * also be used as the account number by default. Must be specified alongside `international_bic`.
   */
  internationalIban?: string;
  /** Bacs sort code */
  bacsSortCode?: string;
};

export const numbersSchema: Schema<Numbers> = s.object<Numbers>({
  account: s.optional(s.string()),
  achRouting: s.optional(s.string()),
  achWireRouting: s.optional(s.string()),
  eftInstitution: s.optional(s.string()),
  eftBranch: s.optional(s.string()),
  internationalBic: s.optional(s.string()),
  internationalIban: s.optional(s.string()),
  bacsSortCode: s.optional(s.string()),
  _keysMap: {
    achRouting: "ach_routing",
    achWireRouting: "ach_wire_routing",
    eftInstitution: "eft_institution",
    eftBranch: "eft_branch",
    internationalBic: "international_bic",
    internationalIban: "international_iban",
    bacsSortCode: "bacs_sort_code",
  },
});
