import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportWarningCodeSchema, type BaseReportWarningCode } from "./base-report-warning-code.js";
import { causeSchema, type Cause } from "./cause.js";

/**
 * It is possible for a Base Report to be returned with missing account owner information. In such
 * cases, the Base Report will contain warning data in the response, indicating why obtaining the
 * owner information failed.
 */
export type BaseReportWarning = {
  /** The warning type, which will always be `BASE_REPORT_WARNING` */
  warningType: string;
  /**
   * The warning code identifies a specific kind of warning. `IDENTITY_UNAVAILABLE`: Account-owner
   * information is not available. `TRANSACTIONS_UNAVAILABLE`: Transactions information associated
   * with Credit and Depository accounts are unavailable. `USER_FRAUD_ALERT`: The User has placed a
   * fraud alert on their Plaid Check consumer report due to suspected fraud. Note: when a fraud
   * alert is in place, the recipient of the consumer report has an obligation to verify the
   * consumer's identity.
   */
  warningCode: BaseReportWarningCode;
  /**
   * An error object and associated `item_id` used to identify a specific Item and error when a
   * batch operation operating on multiple Items has encountered an error in one of the Items.
   */
  cause: Cause | null;
};

export const baseReportWarningSchema: Schema<BaseReportWarning> = s.object<BaseReportWarning>({
  warningType: s.string(),
  warningCode: baseReportWarningCodeSchema,
  cause: s.nullable(s.lazy(() => causeSchema)),
  _keysMap: {
    warningType: "warning_type",
    warningCode: "warning_code",
  },
});
