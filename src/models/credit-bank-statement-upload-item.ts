import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankStatementUploadObjectSchema,
  type CreditBankStatementUploadObject,
} from "./credit-bank-statement-upload-object.js";
import { payrollItemStatusSchema, type PayrollItemStatus } from "./payroll-item-status.js";

/** An object containing information about the bank statement upload Item. */
export type CreditBankStatementUploadItem = {
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  bankStatements: CreditBankStatementUploadObject[];
  /** Details about the status of the payroll item. */
  status: PayrollItemStatus | null;
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DDTHH:mm:ssZ)
   * indicating the last time that the Item was updated.
   */
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
