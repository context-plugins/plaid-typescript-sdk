import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationSourceTypeSchema,
  type IncomeVerificationSourceType,
} from "./income-verification-source-type.js";
import {
  linkTokenCreateRequestIncomeVerificationBankIncomeSchema,
  type LinkTokenCreateRequestIncomeVerificationBankIncome,
} from "./link-token-create-request-income-verification-bank-income.js";
import {
  linkTokenCreateRequestIncomeVerificationPayrollIncomeSchema,
  type LinkTokenCreateRequestIncomeVerificationPayrollIncome,
} from "./link-token-create-request-income-verification-payroll-income.js";
import {
  linkTokenCreateRequestUserStatedIncomeSourceSchema,
  type LinkTokenCreateRequestUserStatedIncomeSource,
} from "./link-token-create-request-user-stated-income-source.js";

/**
 * Specifies options for initializing Link for use with the Income product. This field is required
 * if `income_verification` is included in the `products` array.
 */
export type LinkTokenCreateRequestIncomeVerification = {
  /**
   * The `income_verification_id` of the verification instance, as provided by
   * `/income/verification/create`. Replaced by the user token.
   *
   * @deprecated
   */
  incomeVerificationId?: string;
  /**
   * The `asset_report_id` of an asset report associated with the user, as provided by
   * `/asset_report/create`. Providing an `asset_report_id` is optional and can be used to verify
   * the user through a streamlined flow. If provided, the bank linking flow will be skipped.
   */
  assetReportId?: string;
  /**
   * An array of access tokens corresponding to Items that a user has previously connected with.
   * Data from these institutions will be cross-referenced with document data received during the
   * Document Income flow to help verify that the uploaded documents are accurate. If the
   * `transactions` product was not initialized for these Items during Link, it will be initialized
   * after this Link session.
   *
   * This field should only be used with the `payroll` income source type.
   */
  accessTokens?: string[] | null;
  /**
   * The types of source income data that users will be permitted to share. Options include `bank`
   * and `payroll`. Currently you can only specify one of these options.
   */
  incomeSourceTypes?: IncomeVerificationSourceType[];
  /**
   * Specifies options for initializing Link for use with Bank Income. This field is required if
   * `income_verification` is included in the `products` array and `bank` is specified in
   * `income_source_types`.
   */
  bankIncome?: LinkTokenCreateRequestIncomeVerificationBankIncome;
  /**
   * Specifies options for initializing Link for use with Payroll Income (including Document
   * Income). Further customization options for Document Income, such as customizing which document
   * types may be uploaded, are also available via the [Link Customization
   * pane](https://dashboard.plaid.com/link) in the Dashboard. (Requires Production enablement.)
   */
  payrollIncome?: LinkTokenCreateRequestIncomeVerificationPayrollIncome;
  /** A list of user stated income sources */
  statedIncomeSources?: LinkTokenCreateRequestUserStatedIncomeSource[];
};

export const linkTokenCreateRequestIncomeVerificationSchema: Schema<LinkTokenCreateRequestIncomeVerification> =
  s.object<LinkTokenCreateRequestIncomeVerification>({
    incomeVerificationId: s.optional(s.string()),
    assetReportId: s.optional(s.string()),
    accessTokens: s.optionalNullable(s.array(s.string())),
    incomeSourceTypes: s.optional(s.array(s.lazy(() => incomeVerificationSourceTypeSchema))),
    bankIncome: s.optional(s.lazy(() => linkTokenCreateRequestIncomeVerificationBankIncomeSchema)),
    payrollIncome: s.optional(s.lazy(() => linkTokenCreateRequestIncomeVerificationPayrollIncomeSchema)),
    statedIncomeSources: s.optional(
      s.array(s.lazy(() => linkTokenCreateRequestUserStatedIncomeSourceSchema)),
    ),
    _keysMap: {
      incomeVerificationId: "income_verification_id",
      assetReportId: "asset_report_id",
      accessTokens: "access_tokens",
      incomeSourceTypes: "income_source_types",
      bankIncome: "bank_income",
      payrollIncome: "payroll_income",
      statedIncomeSources: "stated_income_sources",
    },
  });
