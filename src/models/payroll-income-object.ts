import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditI20Schema, type CreditI20 } from "./credit-i20.js";
import { creditPayStubSchema, type CreditPayStub } from "./credit-pay-stub.js";
import { creditW2Schema, type CreditW2 } from "./credit-w2.js";
import { credit1099Schema, type Credit1099 } from "./credit1099.js";

/** An object representing payroll data. */
export type PayrollIncomeObject = {
  /** ID of the payroll provider account. */
  accountId: string | null;
  /** Array of pay stubs for the user. */
  payStubs: CreditPayStub[];
  /** Array of tax form W-2s. */
  w2S: CreditW2[];
  /** Array of tax form 1099s. */
  form1099S: Credit1099[];
  /** Array of Form I-20 US immigration student documents. */
  i20S: CreditI20[];
};

export const payrollIncomeObjectSchema: Schema<PayrollIncomeObject> = s.object<PayrollIncomeObject>({
  accountId: s.nullable(s.string()),
  payStubs: s.array(s.lazy(() => creditPayStubSchema)),
  w2S: s.array(s.lazy(() => creditW2Schema)),
  form1099S: s.array(s.lazy(() => credit1099Schema)),
  i20S: s.array(s.lazy(() => creditI20Schema)),
  _keysMap: {
    accountId: "account_id",
    payStubs: "pay_stubs",
    w2S: "w2s",
    form1099S: "form1099s",
    i20S: "i20s",
  },
});
