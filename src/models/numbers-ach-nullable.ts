import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Identifying information for transferring money to or from a US account via ACH or wire transfer.
 */
export type NumbersAchNullable = {
  /** The Plaid account ID associated with the account numbers */
  accountId: string;
  /**
   * The ACH account number for the account.
   *
   * At certain institutions, including Chase, PNC, and US Bank, you will receive a "tokenized"
   * account number, which is not the user's actual account number. For important details on how
   * this may impact your integration and on how to avoid fraud, user confusion, and ACH returns,
   * see [Tokenized account numbers](https://plaid.com/docs/auth/#tokenized-account-numbers).
   */
  account: string;
  /**
   * Indicates whether the account number is tokenized by the institution. For important details on
   * how tokenized account numbers may impact your integration, see [Tokenized account
   * numbers](https://plaid.com/docs/auth/#tokenized-account-numbers).
   */
  isTokenizedAccountNumber?: boolean;
  /**
   * The ACH routing number for the account. For more information, see [Tokenized account
   * numbers](https://plaid.com/docs/auth/#tokenized-account-numbers).
   */
  routing: string;
  /**
   * The wire transfer routing number for the account. This field is only populated if the
   * institution is known to use a separate wire transfer routing number. Many institutions do not
   * have a separate wire routing number and use the ACH routing number for wires instead. It is
   * recommended to have the end user manually confirm their wire routing number before sending any
   * wires to their account, especially if this field is `null`.
   */
  wireRouting: string | null;
  /** Whether the account supports ACH transfers into the account */
  canTransferIn?: boolean | null;
  /** Whether the account supports ACH transfers out of the account */
  canTransferOut?: boolean | null;
};

export const numbersAchNullableSchema: Schema<NumbersAchNullable> = s.object<NumbersAchNullable>({
  accountId: s.string(),
  account: s.string(),
  isTokenizedAccountNumber: s.optional(s.boolean()),
  routing: s.string(),
  wireRouting: s.nullable(s.string()),
  canTransferIn: s.optionalNullable(s.boolean()),
  canTransferOut: s.optionalNullable(s.boolean()),
  _keysMap: {
    accountId: "account_id",
    isTokenizedAccountNumber: "is_tokenized_account_number",
    wireRouting: "wire_routing",
    canTransferIn: "can_transfer_in",
    canTransferOut: "can_transfer_out",
  },
});
