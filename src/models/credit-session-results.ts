import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditSessionBankEmploymentResultSchema,
  type CreditSessionBankEmploymentResult,
} from "./credit-session-bank-employment-result.js";
import {
  creditSessionBankIncomeResultSchema,
  type CreditSessionBankIncomeResult,
} from "./credit-session-bank-income-result.js";
import {
  creditSessionDocumentIncomeResultSchema,
  type CreditSessionDocumentIncomeResult,
} from "./credit-session-document-income-result.js";
import {
  creditSessionItemAddResultSchema,
  type CreditSessionItemAddResult,
} from "./credit-session-item-add-result.js";
import {
  creditSessionPayrollIncomeResultSchema,
  type CreditSessionPayrollIncomeResult,
} from "./credit-session-payroll-income-result.js";

export type CreditSessionResults = {
  itemAddResults?: CreditSessionItemAddResult[];
  bankIncomeResults?: CreditSessionBankIncomeResult[];
  bankEmploymentResults?: CreditSessionBankEmploymentResult[];
  payrollIncomeResults?: CreditSessionPayrollIncomeResult[];
  documentIncomeResults?: CreditSessionDocumentIncomeResult | null;
};

export const creditSessionResultsSchema: Schema<CreditSessionResults> = s.object<CreditSessionResults>({
  itemAddResults: s.optional(s.array(s.lazy(() => creditSessionItemAddResultSchema))),
  bankIncomeResults: s.optional(s.array(s.lazy(() => creditSessionBankIncomeResultSchema))),
  bankEmploymentResults: s.optional(s.array(s.lazy(() => creditSessionBankEmploymentResultSchema))),
  payrollIncomeResults: s.optional(s.array(s.lazy(() => creditSessionPayrollIncomeResultSchema))),
  documentIncomeResults: s.optionalNullable(s.lazy(() => creditSessionDocumentIncomeResultSchema)),
  _keysMap: {
    itemAddResults: "item_add_results",
    bankIncomeResults: "bank_income_results",
    bankEmploymentResults: "bank_employment_results",
    payrollIncomeResults: "payroll_income_results",
    documentIncomeResults: "document_income_results",
  },
});
