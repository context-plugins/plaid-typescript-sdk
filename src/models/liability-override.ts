import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { pslfStatusSchema, type PslfStatus } from "./pslf-status.js";
import {
  studentLoanRepaymentModelSchema,
  type StudentLoanRepaymentModel,
} from "./student-loan-repayment-model.js";
import { studentLoanStatusSchema, type StudentLoanStatus } from "./student-loan-status.js";

/** Used to configure Sandbox test data for the Liabilities product */
export type LiabilityOverride = {
  /**
   * The type of the liability object, either `credit` or `student`. Mortgages are not currently
   * supported in the custom Sandbox.
   */
  type: string;
  /**
   * The purchase APR percentage value. For simplicity, this is the only interest rate used to
   * calculate interest charges. Can only be set if `type` is `credit`.
   */
  purchaseApr: number;
  /** The cash APR percentage value. Can only be set if `type` is `credit`. */
  cashApr: number;
  /** The balance transfer APR percentage value. Can only be set if `type` is `credit`. */
  balanceTransferApr: number;
  /** The special APR percentage value. Can only be set if `type` is `credit`. */
  specialApr: number;
  /** Override the `last_payment_amount` field. Can only be set if `type` is `credit`. */
  lastPaymentAmount: number;
  /**
   * Override the `minimum_payment_amount` field. Can only be set if `type` is `credit` or
   * `student`.
   */
  minimumPaymentAmount: number;
  /** Override the `is_overdue` field */
  isOverdue: boolean;
  /**
   * The date on which the loan was initially lent, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD) format. Can only be set if `type` is
   * `student`.
   */
  originationDate: string;
  /** The original loan principal. Can only be set if `type` is `student`. */
  principal: number;
  /** The interest rate on the loan as a percentage. Can only be set if `type` is `student`. */
  nominalApr: number;
  /**
   * If set, interest capitalization begins at the given number of months after loan origination. By
   * default interest is never capitalized. Can only be set if `type` is `student`.
   */
  interestCapitalizationGracePeriodMonths: number;
  /**
   * Student loan repayment information used to configure Sandbox test data for the Liabilities
   * product
   */
  repaymentModel: StudentLoanRepaymentModel;
  /** Override the `expected_payoff_date` field. Can only be set if `type` is `student`. */
  expectedPayoffDate: string;
  /** Override the `guarantor` field. Can only be set if `type` is `student`. */
  guarantor: string;
  /** Override the `is_federal` field. Can only be set if `type` is `student`. */
  isFederal: boolean;
  /** Override the `loan_name` field. Can only be set if `type` is `student`. */
  loanName: string;
  /** An object representing the status of the student loan */
  loanStatus: StudentLoanStatus;
  /** Override the `payment_reference_number` field. Can only be set if `type` is `student`. */
  paymentReferenceNumber: string;
  /**
   * Information about the student's eligibility in the Public Service Loan Forgiveness program.
   * This is only returned if the institution is FedLoan (`ins_116527`). Since FedLoan no longer
   * services student loans, this field is no longer returned.
   *
   * @deprecated
   */
  pslfStatus: PslfStatus;
  /** Override the `repayment_plan.description` field. Can only be set if `type` is `student`. */
  repaymentPlanDescription: string;
  /**
   * Override the `repayment_plan.type` field. Can only be set if `type` is `student`. Possible
   * values are: `"extended graduated"`, `"extended standard"`, `"graduated"`, `"income-contingent
   * repayment"`, `"income-based repayment"`, `"income-sensitive repayment"`, `"interest only"`,
   * `"other"`, `"pay as you earn"`, `"revised pay as you earn"`, `"standard"`, or `"saving on a
   * valuable education"`.
   */
  repaymentPlanType: string;
  /** Override the `sequence_number` field. Can only be set if `type` is `student`. */
  sequenceNumber: string;
  /** A physical mailing address. */
  servicerAddress: Address;
};

export const liabilityOverrideSchema: Schema<LiabilityOverride> = s.object<LiabilityOverride>({
  type: s.string(),
  purchaseApr: s.float64(),
  cashApr: s.float64(),
  balanceTransferApr: s.float64(),
  specialApr: s.float64(),
  lastPaymentAmount: s.float64(),
  minimumPaymentAmount: s.float64(),
  isOverdue: s.boolean(),
  originationDate: s.dateOnly(),
  principal: s.float64(),
  nominalApr: s.float64(),
  interestCapitalizationGracePeriodMonths: s.float64(),
  repaymentModel: studentLoanRepaymentModelSchema,
  expectedPayoffDate: s.dateOnly(),
  guarantor: s.string(),
  isFederal: s.boolean(),
  loanName: s.string(),
  loanStatus: studentLoanStatusSchema,
  paymentReferenceNumber: s.string(),
  pslfStatus: pslfStatusSchema,
  repaymentPlanDescription: s.string(),
  repaymentPlanType: s.string(),
  sequenceNumber: s.string(),
  servicerAddress: addressSchema,
  _keysMap: {
    purchaseApr: "purchase_apr",
    cashApr: "cash_apr",
    balanceTransferApr: "balance_transfer_apr",
    specialApr: "special_apr",
    lastPaymentAmount: "last_payment_amount",
    minimumPaymentAmount: "minimum_payment_amount",
    isOverdue: "is_overdue",
    originationDate: "origination_date",
    nominalApr: "nominal_apr",
    interestCapitalizationGracePeriodMonths: "interest_capitalization_grace_period_months",
    repaymentModel: "repayment_model",
    expectedPayoffDate: "expected_payoff_date",
    isFederal: "is_federal",
    loanName: "loan_name",
    loanStatus: "loan_status",
    paymentReferenceNumber: "payment_reference_number",
    pslfStatus: "pslf_status",
    repaymentPlanDescription: "repayment_plan_description",
    repaymentPlanType: "repayment_plan_type",
    sequenceNumber: "sequence_number",
    servicerAddress: "servicer_address",
  },
});
