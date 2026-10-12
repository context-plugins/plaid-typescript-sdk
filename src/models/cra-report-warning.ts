import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { causeSchema, type Cause } from "./cause.js";
import { checkReportWarningCodeSchema, type CheckReportWarningCode } from "./check-report-warning-code.js";

/**
 * It is possible for a Check Report product to be returned with missing information. In such cases,
 * the product will contain warning data in the response, indicating why some of the requested
 * information could not be retrieved.
 */
export type CraReportWarning = {
  /** The warning type, which will always be `CHECK_REPORT_WARNING` */
  warningType: string;
  /**
   * The warning code identifies a specific kind of warning. `IDENTITY_UNAVAILABLE`: Account-owner
   * information is not available. `TRANSACTIONS_UNAVAILABLE`: Transactions information associated
   * with Credit and Depository accounts are unavailable. `USER_FRAUD_ALERT`: The user has placed a
   * fraud alert on their Plaid Check consumer report due to suspected fraud. Please note that when
   * a fraud alert is in place, the recipient of the consumer report has an obligation to verify the
   * consumer's identity.
   */
  warningCode: CheckReportWarningCode;
  /**
   * An error object and associated `item_id` used to identify a specific Item and error when a
   * batch operation operating on multiple Items has encountered an error in one of the Items.
   */
  cause: Cause | null;
};

export const craReportWarningSchema: Schema<CraReportWarning> = s.object<CraReportWarning>({
  warningType: s.string(),
  warningCode: checkReportWarningCodeSchema,
  cause: s.nullable(s.lazy(() => causeSchema)),
  _keysMap: {
    warningType: "warning_type",
    warningCode: "warning_code",
  },
});
