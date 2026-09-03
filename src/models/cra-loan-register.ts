import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanOpenedStatusSchema, type CraLoanOpenedStatus } from "./cra-loan-opened-status.js";
import { craLoanPaymentScheduleSchema, type CraLoanPaymentSchedule } from "./cra-loan-payment-schedule.js";
import {
  craLoanRegisterApplicationSchema,
  type CraLoanRegisterApplication,
} from "./cra-loan-register-application.js";
import { craLoanTypeSchema, type CraLoanType } from "./cra-loan-type.js";

export type CraLoanRegister = {
  userToken: string;
  loanId: string;
  type: CraLoanType;
  paymentSchedule: CraLoanPaymentSchedule;
  openedDate: string;
  openedWithStatus: CraLoanOpenedStatus;
  loanAmount?: number;
  application?: CraLoanRegisterApplication;
};

export const craLoanRegisterSchema: Schema<CraLoanRegister> = s.object<CraLoanRegister>({
  userToken: s.string(),
  loanId: s.string(),
  type: craLoanTypeSchema,
  paymentSchedule: craLoanPaymentScheduleSchema,
  openedDate: s.dateOnly(),
  openedWithStatus: craLoanOpenedStatusSchema,
  loanAmount: s.optional(s.number()),
  application: s.optional(s.lazy(() => craLoanRegisterApplicationSchema)),
  _keysMap: {
    userToken: "user_token",
    loanId: "loan_id",
    paymentSchedule: "payment_schedule",
    openedDate: "opened_date",
    openedWithStatus: "opened_with_status",
    loanAmount: "loan_amount",
  },
});
