import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankEmploymentWarningTypeSchema,
  type CreditBankEmploymentWarningType,
} from "./credit-bank-employment-warning-type.js";
import { creditBankIncomeCauseSchema, type CreditBankIncomeCause } from "./credit-bank-income-cause.js";
import {
  creditBankIncomeWarningCodeSchema,
  type CreditBankIncomeWarningCode,
} from "./credit-bank-income-warning-code.js";

/** The warning associated with the data that was unavailable for the Bank Employment Report. */
export type CreditBankEmploymentWarning = {
  /** The warning type which will always be `BANK_EMPLOYMENT_WARNING`. */
  warningType: CreditBankEmploymentWarningType;
  /**
   * The warning code identifies a specific kind of warning. `IDENTITY_UNAVAILABLE`: Unable to
   * extract identity for the Item `TRANSACTIONS_UNAVAILABLE`: Unable to extract transactions for
   * the Item `ITEM_UNAPPROVED`: User exited flow before giving permission to share data for the
   * Item `REPORT_DELETED`: Report deleted due to customer or consumer request `DATA_UNAVAILABLE`:
   * No relevant data was found for the Item
   */
  warningCode: CreditBankIncomeWarningCode;
  /**
   * An error object and associated `item_id` used to identify a specific Item and error when a
   * batch operation operating on multiple Items has encountered an error in one of the Items.
   */
  cause: CreditBankIncomeCause;
};

export const creditBankEmploymentWarningSchema: Schema<CreditBankEmploymentWarning> =
  s.object<CreditBankEmploymentWarning>({
    warningType: creditBankEmploymentWarningTypeSchema,
    warningCode: creditBankIncomeWarningCodeSchema,
    cause: creditBankIncomeCauseSchema,
    _keysMap: {
      warningType: "warning_type",
      warningCode: "warning_code",
    },
  });
