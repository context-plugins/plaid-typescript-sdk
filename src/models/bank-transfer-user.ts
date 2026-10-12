import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The legal name and other information for the account holder. */
export type BankTransferUser = {
  /**
   * The account holder's full legal name. If the transfer `ach_class` is `ccd`, this should be the
   * business name of the account holder.
   */
  legalName: string;
  /** The account holder's email. */
  emailAddress?: string | null;
  /**
   * The account holder's routing number. This field is only used in response data. Do not provide
   * this field when making requests.
   */
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
