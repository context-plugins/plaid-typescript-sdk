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

/** The set of results for a Link session. */
export type LinkSessionResults = {
  /**
   * The set of Item adds for the Link session. If you are not receiving this field and are instead
   * receiving the deprecated `on_success` field, contact your account manager to update your
   * integration.
   */
  itemAddResults: LinkSessionItemAddResult[];
  /** The set of Plaid Check Item adds for the Link session. */
  craItemAddResults: LinkSessionCraItemAddResult[];
  /** The set of Plaid Check Item updates for the Link session. */
  craUpdateResults: LinkSessionCraUpdateResult[];
  /** The set of bank income verifications for the Link session. */
  bankIncomeResults: LinkSessionBankIncomeResult[];
  /** The set of payroll income verifications for the Link session. */
  payrollIncomeResults: LinkSessionPayrollIncomeResult[];
  /** The details of a document income verification in Link */
  documentIncomeResults: CreditSessionDocumentIncomeResult | null;
  /** The details of a document upload CRA session in Link */
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
