import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craBankIncomeBonusTypeSchema, type CraBankIncomeBonusType } from "./cra-bank-income-bonus-type.js";

/** The transactions data for the end user's income source(s). */
export type CraBankIncomeTransaction = {
  /**
   * The unique ID of the transaction. Like all Plaid identifiers, the `transaction_id` is case
   * sensitive.
   */
  transactionId: string;
  /**
   * The settled value of the transaction, denominated in the transaction's currency as stated in
   * `iso_currency_code` or `unofficial_currency_code`. Positive values when money moves out of the
   * account; negative values when money moves in. For example, credit card purchases are positive;
   * credit card payment, direct deposits, and refunds are negative.
   */
  amount: number;
  /**
   * For pending transactions, the date that the transaction occurred; for posted transactions, the
   * date that the transaction posted. Both dates are returned in an ISO 8601 format (YYYY-MM-DD).
   */
  date: string;
  /**
   * The merchant name or transaction description. This is a legacy field that is no longer
   * maintained. For merchant name, use the `merchant_name` field; for description, use the
   * `original_description` field.
   *
   * @deprecated
   */
  name?: string;
  /** The string returned by the financial institution to describe the transaction. */
  originalDescription: string | null;
  /**
   * When true, identifies the transaction as pending or unsettled. Pending transaction details
   * (name, type, amount, category ID) may change before they are settled.
   */
  pending: boolean;
  /** The check number of the transaction. This field is only populated for check transactions. */
  checkNumber?: string | null;
  /** The ISO 4217 currency code of the amount or balance. */
  isoCurrencyCode: string | null;
  /**
   * The unofficial currency code associated with the amount or balance. Always `null` if
   * `iso_currency_code` is non-null. Unofficial currency codes are used for currencies that do not
   * have official ISO currency codes, such as cryptocurrencies and the currencies of certain
   * countries.
   */
  unofficialCurrencyCode: string | null;
  /**
   * The type of bonus that this transaction represents, if it is a bonus. `BONUS_INCLUDED`: Bonus
   * is included in this transaction along with the normal pay `BONUS_ONLY`: This transaction is a
   * standalone bonus
   */
  bonusType?: CraBankIncomeBonusType | null;
};

export const craBankIncomeTransactionSchema: Schema<CraBankIncomeTransaction> =
  s.object<CraBankIncomeTransaction>({
    transactionId: s.string(),
    amount: s.float64(),
    date: s.dateOnly(),
    name: s.optional(s.string()),
    originalDescription: s.nullable(s.string()),
    pending: s.boolean(),
    checkNumber: s.optionalNullable(s.string()),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    bonusType: s.optionalNullable(s.lazy(() => craBankIncomeBonusTypeSchema)),
    _keysMap: {
      transactionId: "transaction_id",
      originalDescription: "original_description",
      checkNumber: "check_number",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      bonusType: "bonus_type",
    },
  });
