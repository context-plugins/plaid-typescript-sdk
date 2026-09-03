import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { pslfStatusSchema, type PslfStatus } from "./pslf-status.js";
import {
  studentLoanRepaymentModelSchema,
  type StudentLoanRepaymentModel,
} from "./student-loan-repayment-model.js";
import { studentLoanStatusSchema, type StudentLoanStatus } from "./student-loan-status.js";

export type LiabilityOverride = {
  type: string;
  purchaseApr: number;
  cashApr: number;
  balanceTransferApr: number;
  specialApr: number;
  lastPaymentAmount: number;
  minimumPaymentAmount: number;
  isOverdue: boolean;
  originationDate: string;
  principal: number;
  nominalApr: number;
  interestCapitalizationGracePeriodMonths: number;
  repaymentModel: StudentLoanRepaymentModel;
  expectedPayoffDate: string;
  guarantor: string;
  isFederal: boolean;
  loanName: string;
  loanStatus: StudentLoanStatus;
  paymentReferenceNumber: string;
  pslfStatus: PslfStatus;
  repaymentPlanDescription: string;
  repaymentPlanType: string;
  sequenceNumber: string;
  servicerAddress: Address;
};

export const liabilityOverrideSchema: Schema<LiabilityOverride> = s.object<LiabilityOverride>({
  type: s.string(),
  purchaseApr: s.number(),
  cashApr: s.number(),
  balanceTransferApr: s.number(),
  specialApr: s.number(),
  lastPaymentAmount: s.number(),
  minimumPaymentAmount: s.number(),
  isOverdue: s.boolean(),
  originationDate: s.dateOnly(),
  principal: s.number(),
  nominalApr: s.number(),
  interestCapitalizationGracePeriodMonths: s.number(),
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
