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

export type LinkTokenCreateRequestIncomeVerificationPayrollIncome = {
  flowTypes?: IncomeVerificationPayrollFlowType[] | null;
  isUpdateMode?: boolean;
  itemIdToUpdate?: string | null;
  parsingConfig?: IncomeVerificationDocParsingConfig[] | null;
};

export const linkTokenCreateRequestIncomeVerificationPayrollIncomeSchema: Schema<LinkTokenCreateRequestIncomeVerificationPayrollIncome> =
  s.object<LinkTokenCreateRequestIncomeVerificationPayrollIncome>({
    flowTypes: s.optionalNullable(s.array(s.lazy(() => incomeVerificationPayrollFlowTypeSchema))),
    isUpdateMode: s.optional(s.boolean()),
    itemIdToUpdate: s.optionalNullable(s.string()),
    parsingConfig: s.optionalNullable(s.array(s.lazy(() => incomeVerificationDocParsingConfigSchema))),
    _keysMap: {
      flowTypes: "flow_types",
      isUpdateMode: "is_update_mode",
      itemIdToUpdate: "item_id_to_update",
      parsingConfig: "parsing_config",
    },
  });
