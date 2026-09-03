import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  payrollIncomeAccountDataSchema,
  type PayrollIncomeAccountData,
} from "./payroll-income-account-data.js";
import { payrollIncomeObjectSchema, type PayrollIncomeObject } from "./payroll-income-object.js";
import { payrollItemStatusSchema, type PayrollItemStatus } from "./payroll-item-status.js";

export type PayrollItem = {
  itemId: string;
  institutionId: string;
  institutionName: string;
  accounts: (PayrollIncomeAccountData | null)[];
  payrollIncome: PayrollIncomeObject[];
  status: PayrollItemStatus | null;
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
