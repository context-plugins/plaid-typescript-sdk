import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeErrorTypeSchema,
  type CreditBankIncomeErrorType,
} from "./credit-bank-income-error-type.js";

/**
 * An error object and associated `item_id` used to identify a specific Item and error when a batch
 * operation operating on multiple Items has encountered an error in one of the Items.
 */
export type CreditBankIncomeCause = {
  /** A broad categorization of the error. Safe for programmatic use. */
  errorType: CreditBankIncomeErrorType;
  /**
   * We use standard HTTP response codes for success and failure notifications, and our errors are
   * further classified by `error_type`. In general, 200 HTTP codes correspond to success, 40X codes
   * are for developer- or user-related failures, and 50X codes are for Plaid-related issues. Error
   * fields will be `null` if no error has occurred.
   */
  errorCode: string;
  /**
   * A developer-friendly representation of the error code. This may change over time and is not
   * safe for programmatic use.
   */
  errorMessage: string;
  /**
   * A user-friendly representation of the error code. null if the error is not related to user
   * action. This may change over time and is not safe for programmatic use.
   */
  displayMessage: string;
  /** The `item_id` of the Item associated with this warning. */
  itemId: string;
};

export const creditBankIncomeCauseSchema: Schema<CreditBankIncomeCause> = s.object<CreditBankIncomeCause>({
  errorType: creditBankIncomeErrorTypeSchema,
  errorCode: s.string(),
  errorMessage: s.string(),
  displayMessage: s.string(),
  itemId: s.string(),
  _keysMap: {
    errorType: "error_type",
    errorCode: "error_code",
    errorMessage: "error_message",
    displayMessage: "display_message",
    itemId: "item_id",
  },
});
