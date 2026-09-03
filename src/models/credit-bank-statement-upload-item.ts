import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankStatementUploadObjectSchema,
  type CreditBankStatementUploadObject,
} from "./credit-bank-statement-upload-object.js";
import { payrollItemStatusSchema, type PayrollItemStatus } from "./payroll-item-status.js";

export type CreditBankStatementUploadItem = {
  itemId: string;
  bankStatements: CreditBankStatementUploadObject[];
  status: PayrollItemStatus | null;
  updatedAt: Date | null;
};

export const creditBankStatementUploadItemSchema: Schema<CreditBankStatementUploadItem> =
  s.object<CreditBankStatementUploadItem>({
    itemId: s.string(),
    bankStatements: s.array(s.lazy(() => creditBankStatementUploadObjectSchema)),
    status: s.nullable(s.lazy(() => payrollItemStatusSchema)),
    updatedAt: s.nullable(s.dateTime()),
    _keysMap: {
      itemId: "item_id",
      bankStatements: "bank_statements",
      updatedAt: "updated_at",
    },
  });
