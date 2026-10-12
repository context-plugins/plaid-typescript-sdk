import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditDocumentMetadataSchema, type CreditDocumentMetadata } from "./credit-document-metadata.js";
import { creditPayStubDeductionsSchema, type CreditPayStubDeductions } from "./credit-pay-stub-deductions.js";
import { creditPayStubEarningsSchema, type CreditPayStubEarnings } from "./credit-pay-stub-earnings.js";
import { creditPayStubEmployeeSchema, type CreditPayStubEmployee } from "./credit-pay-stub-employee.js";
import { creditPayStubEmployerSchema, type CreditPayStubEmployer } from "./credit-pay-stub-employer.js";
import { creditPayStubNetPaySchema, type CreditPayStubNetPay } from "./credit-pay-stub-net-pay.js";
import {
  payStubPayPeriodDetailsSchema,
  type PayStubPayPeriodDetails,
} from "./pay-stub-pay-period-details.js";

/** An object representing an end user's pay stub. */
export type CreditPayStub = {
  /** An object with the deduction information found on a pay stub. */
  deductions: CreditPayStubDeductions;
  /** An identifier of the document referenced by the document metadata. */
  documentId: string | null;
  /** Object representing metadata pertaining to the document. */
  documentMetadata: CreditDocumentMetadata;
  /** An object representing both a breakdown of earnings on a pay stub and the total earnings. */
  earnings: CreditPayStubEarnings;
  /** Data about the employee. */
  employee: CreditPayStubEmployee;
  /** Information about the employer on the pay stub. */
  employer: CreditPayStubEmployer;
  /** An object representing information about the net pay amount on the pay stub. */
  netPay: CreditPayStubNetPay;
  /** Details about the pay period. */
  payPeriodDetails: PayStubPayPeriodDetails;
};

export const creditPayStubSchema: Schema<CreditPayStub> = s.object<CreditPayStub>({
  deductions: creditPayStubDeductionsSchema,
  documentId: s.nullable(s.string()),
  documentMetadata: creditDocumentMetadataSchema,
  earnings: creditPayStubEarningsSchema,
  employee: creditPayStubEmployeeSchema,
  employer: creditPayStubEmployerSchema,
  netPay: creditPayStubNetPaySchema,
  payPeriodDetails: payStubPayPeriodDetailsSchema,
  _keysMap: {
    documentId: "document_id",
    documentMetadata: "document_metadata",
    netPay: "net_pay",
    payPeriodDetails: "pay_period_details",
  },
});
