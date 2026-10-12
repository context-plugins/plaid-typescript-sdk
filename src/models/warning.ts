import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { causeSchema, type Cause } from "./cause.js";
import { warningCodeSchema, type WarningCode } from "./warning-code.js";

/**
 * It is possible for an Asset Report to be returned with missing account owner information. In such
 * cases, the Asset Report will contain warning data in the response, indicating why obtaining the
 * owner information failed.
 */
export type Warning = {
  /** The warning type, which will always be `ASSET_REPORT_WARNING` */
  warningType: string;
  /**
   * The warning code identifies a specific kind of warning. `OWNERS_UNAVAILABLE` indicates that
   * account-owner information is not available. `INVESTMENTS_UNAVAILABLE` indicates that
   * Investments specific information is not available. `TRANSACTIONS_UNAVAILABLE` indicates that
   * transactions information associated with Credit and Depository accounts are unavailable. The
   * `BANK_INCOME_INSIGHTS_*` codes apply to the Bank Income add-on:
   * `BANK_INCOME_INSIGHTS_INSUFFICIENT_DATA` indicates there was not enough data to compute Bank
   * Income Insights; `BANK_INCOME_INSIGHTS_INCOMPLETE` indicates the Bank Income Insights flow was
   * not completed; `BANK_INCOME_INSIGHTS_STATUS_IN_PROGRESS` indicates Bank Income Insights are
   * still being computed; `BANK_INCOME_INSIGHTS_INTERNAL_ERROR` indicates an internal error
   * occurred while computing Bank Income Insights; `BANK_INCOME_INSIGHTS_MISMATCHED_DAYS_REQUESTED`
   * indicates the days requested for Bank Income Insights did not match that of the Asset Report.
   */
  warningCode: WarningCode;
  /**
   * An error object and associated `item_id` used to identify a specific Item and error when a
   * batch operation operating on multiple Items has encountered an error in one of the Items.
   */
  cause: Cause | null;
};

export const warningSchema: Schema<Warning> = s.object<Warning>({
  warningType: s.string(),
  warningCode: warningCodeSchema,
  cause: s.nullable(s.lazy(() => causeSchema)),
  _keysMap: {
    warningType: "warning_type",
    warningCode: "warning_code",
  },
});
