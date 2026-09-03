import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankTransferUser = {
  legalName: string;
  emailAddress?: string | null;
  routingNumber?: string;
};

export const bankTransferUserSchema: Schema<BankTransferUser> = s.object<BankTransferUser>({
  legalName: s.string(),
  emailAddress: s.optionalNullable(s.string()),
  routingNumber: s.optional(s.string()),
  _keysMap: {
    legalName: "legal_name",
    emailAddress: "email_address",
    routingNumber: "routing_number",
  },
});
