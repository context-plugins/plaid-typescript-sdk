import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditSessionDocumentIncomeResultSchema,
  type CreditSessionDocumentIncomeResult,
} from "./credit-session-document-income-result.js";
import {
  linkSessionBankIncomeResultSchema,
  type LinkSessionBankIncomeResult,
} from "./link-session-bank-income-result.js";
import {
  linkSessionCraDocumentUploadResultSchema,
  type LinkSessionCraDocumentUploadResult,
} from "./link-session-cra-document-upload-result.js";
import {
  linkSessionCraItemAddResultSchema,
  type LinkSessionCraItemAddResult,
} from "./link-session-cra-item-add-result.js";
import {
  linkSessionCraUpdateResultSchema,
  type LinkSessionCraUpdateResult,
} from "./link-session-cra-update-result.js";
import {
  linkSessionItemAddResultSchema,
  type LinkSessionItemAddResult,
} from "./link-session-item-add-result.js";
import {
  linkSessionPayrollIncomeResultSchema,
  type LinkSessionPayrollIncomeResult,
} from "./link-session-payroll-income-result.js";

export type LinkSessionResults = {
  itemAddResults: LinkSessionItemAddResult[];
  craItemAddResults: LinkSessionCraItemAddResult[];
  craUpdateResults: LinkSessionCraUpdateResult[];
  bankIncomeResults: LinkSessionBankIncomeResult[];
  payrollIncomeResults: LinkSessionPayrollIncomeResult[];
  documentIncomeResults: CreditSessionDocumentIncomeResult | null;
  craDocumentUploadResults?: LinkSessionCraDocumentUploadResult | null;
};

export const linkSessionResultsSchema: Schema<LinkSessionResults> = s.object<LinkSessionResults>({
  itemAddResults: s.array(s.lazy(() => linkSessionItemAddResultSchema)),
  craItemAddResults: s.array(s.lazy(() => linkSessionCraItemAddResultSchema)),
  craUpdateResults: s.array(s.lazy(() => linkSessionCraUpdateResultSchema)),
  bankIncomeResults: s.array(s.lazy(() => linkSessionBankIncomeResultSchema)),
  payrollIncomeResults: s.array(s.lazy(() => linkSessionPayrollIncomeResultSchema)),
  documentIncomeResults: s.nullable(s.lazy(() => creditSessionDocumentIncomeResultSchema)),
  craDocumentUploadResults: s.optionalNullable(s.lazy(() => linkSessionCraDocumentUploadResultSchema)),
  _keysMap: {
    itemAddResults: "item_add_results",
    craItemAddResults: "cra_item_add_results",
    craUpdateResults: "cra_update_results",
    bankIncomeResults: "bank_income_results",
    payrollIncomeResults: "payroll_income_results",
    documentIncomeResults: "document_income_results",
    craDocumentUploadResults: "cra_document_upload_results",
  },
});
