import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationDocParsingConfigSchema,
  type IncomeVerificationDocParsingConfig,
} from "./income-verification-doc-parsing-config.js";
import {
  incomeVerificationPayrollFlowTypeSchema,
  type IncomeVerificationPayrollFlowType,
} from "./income-verification-payroll-flow-type.js";

/**
 * Specifies options for initializing Link for use with Payroll Income (including Document Income).
 * Further customization options for Document Income, such as customizing which document types may
 * be uploaded, are also available via the [Link Customization
 * pane](https://dashboard.plaid.com/link) in the Dashboard. (Requires Production enablement.)
 */
export type LinkTokenCreateRequestIncomeVerificationPayrollIncome = {
  /**
   * The types of payroll income verification to enable for the Link session. If none are specified,
   * then users will see both document and digital payroll income.
   */
  flowTypes?: IncomeVerificationPayrollFlowType[] | null;
  /**
   * An identifier to indicate whether the income verification Link token will be used for update
   * mode. This field is only relevant for participants in the Payroll Income Refresh beta.
   *
   * @default false
   */
  isUpdateMode?: boolean;
  /**
   * Uniquely identify a payroll income Item to update with. This field is only relevant for
   * participants in the Payroll Income Refresh beta.
   */
  itemIdToUpdate?: string | null;
  /**
   * The types of analysis to enable for document uploads. If this field is not provided, then docs
   * will undergo OCR parsing only.
   */
  parsingConfig?: IncomeVerificationDocParsingConfig[] | null;
};

export const linkTokenCreateRequestIncomeVerificationPayrollIncomeSchema: Schema<LinkTokenCreateRequestIncomeVerificationPayrollIncome> =
  s.object<LinkTokenCreateRequestIncomeVerificationPayrollIncome>({
    flowTypes: s.optionalNullable(s.array(s.lazy(() => incomeVerificationPayrollFlowTypeSchema))),
    isUpdateMode: s.defaulted(s.boolean(), false),
    itemIdToUpdate: s.optionalNullable(s.string()),
    parsingConfig: s.optionalNullable(s.array(s.lazy(() => incomeVerificationDocParsingConfigSchema))),
    _keysMap: {
      flowTypes: "flow_types",
      isUpdateMode: "is_update_mode",
      itemIdToUpdate: "item_id_to_update",
      parsingConfig: "parsing_config",
    },
  });
