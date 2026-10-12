import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanOpenedStatusSchema, type CraLoanOpenedStatus } from "./cra-loan-opened-status.js";
import { craLoanPaymentScheduleSchema, type CraLoanPaymentSchedule } from "./cra-loan-payment-schedule.js";
import {
  craLoanRegisterApplicationSchema,
  type CraLoanRegisterApplication,
} from "./cra-loan-register-application.js";
import { craLoanTypeSchema, type CraLoanType } from "./cra-loan-type.js";

/** Contains loan data to register. */
export type CraLoanRegister = {
  /** The user token for the user associated with the loan. */
  userToken: string;
  /**
   * A unique identifier for the loan. Personally identifiable information, such as an email address
   * or phone number, should not be used in the `loan_id`.
   */
  loanId: string;
  /** The type of loan the user applied for. */
  type: CraLoanType;
  /**
   * The frequency of a loan's payment schedule. `BIWEEKLY` represents one payment every two weeks.
   */
  paymentSchedule: CraLoanPaymentSchedule;
  /** The date the loan account was opened. The date should be in ISO 8601 format (YYYY-MM-DD). */
  openedDate: string;
  /** Contains the status and date information of the loan when registering. */
  openedWithStatus: CraLoanOpenedStatus;
  /** The total amount of the approved loan. */
  loanAmount?: number;
  /** Contains loan application data to register. */
  application?: CraLoanRegisterApplication;
};

export const craLoanRegisterSchema: Schema<CraLoanRegister> = s.object<CraLoanRegister>({
  userToken: s.string(),
  loanId: s.string(),
  type: craLoanTypeSchema,
  paymentSchedule: craLoanPaymentScheduleSchema,
  openedDate: s.dateOnly(),
  openedWithStatus: craLoanOpenedStatusSchema,
  loanAmount: s.optional(s.float64()),
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
