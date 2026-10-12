import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Bank account information associated with the incident. */
export type ProtectBankAccount = {
  /** Plaid's unique identifier for the account. */
  accountId?: string | null;
  /** Full account number of the bank account. */
  accountNumber?: string | null;
  /** Routing number of the bank account. Must be present if `account_number` is present. */
  routingNumber?: string | null;
};

export const protectBankAccountSchema: Schema<ProtectBankAccount> = s.object<ProtectBankAccount>({
  accountId: s.optionalNullable(s.string()),
  accountNumber: s.optionalNullable(s.string()),
  routingNumber: s.optionalNullable(s.string()),
  _keysMap: {
    accountId: "account_id",
    accountNumber: "account_number",
    routingNumber: "routing_number",
  },
});
