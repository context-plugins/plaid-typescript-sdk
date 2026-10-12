import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  payrollIncomeAccountDataSchema,
  type PayrollIncomeAccountData,
} from "./payroll-income-account-data.js";
import { payrollIncomeObjectSchema, type PayrollIncomeObject } from "./payroll-income-object.js";
import { payrollItemStatusSchema, type PayrollItemStatus } from "./payroll-item-status.js";

/** An object containing information about the payroll item. */
export type PayrollItem = {
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The unique identifier of the institution associated with the Item. */
  institutionId: string;
  /** The name of the institution associated with the Item. */
  institutionName: string;
  accounts: (PayrollIncomeAccountData | null)[];
  payrollIncome: PayrollIncomeObject[];
  /** Details about the status of the payroll item. */
  status: PayrollItemStatus | null;
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DDTHH:mm:ssZ)
   * indicating the last time that the Item was updated.
   */
  updatedAt: Date | null;
};

export const payrollItemSchema: Schema<PayrollItem> = s.object<PayrollItem>({
  itemId: s.string(),
  institutionId: s.string(),
  institutionName: s.string(),
  accounts: s.array(s.nullable(s.lazy(() => payrollIncomeAccountDataSchema))),
  payrollIncome: s.array(s.lazy(() => payrollIncomeObjectSchema)),
  status: s.nullable(s.lazy(() => payrollItemStatusSchema)),
  updatedAt: s.nullable(s.dateTime()),
  _keysMap: {
    itemId: "item_id",
    institutionId: "institution_id",
    institutionName: "institution_name",
    payrollIncome: "payroll_income",
    updatedAt: "updated_at",
  },
});
