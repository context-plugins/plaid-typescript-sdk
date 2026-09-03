import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtectBankAccount = {
  accountId?: string | null;
  accountNumber?: string | null;
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
