import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditDocumentMetadataSchema, type CreditDocumentMetadata } from "./credit-document-metadata.js";
import { credit1099FilerSchema, type Credit1099Filer } from "./credit1099-filer.js";
import { credit1099PayerSchema, type Credit1099Payer } from "./credit1099-payer.js";
import { credit1099RecipientSchema, type Credit1099Recipient } from "./credit1099-recipient.js";
import { form1099TypeSchema, type Form1099Type } from "./form1099-type.js";

export type Credit1099 = {
  documentId: string | null;
  documentMetadata?: CreditDocumentMetadata;
  form1099Type?: Form1099Type;
  recipient?: Credit1099Recipient;
  payer?: Credit1099Payer;
  filer?: Credit1099Filer;
  taxYear?: string | null;
  rents?: number | null;
  royalties?: number | null;
  otherIncome?: number | null;
  federalIncomeTaxWithheld?: number | null;
  fishingBoatProceeds?: number | null;
  medicalAndHealthcarePayments?: number | null;
  nonemployeeCompensation?: number | null;
  substitutePaymentsInLieuOfDividendsOrInterest?: number | null;
  payerMadeDirectSalesOf5000OrMoreOfConsumerProductsToBuyer?: string | null;
  cropInsuranceProceeds?: number | null;
  excessGoldenParachutePayments?: number | null;
  grossProceedsPaidToAnAttorney?: number | null;
  section409ADeferrals?: number | null;
  section409AIncome?: number | null;
  stateTaxWithheld?: number | null;
  stateTaxWithheldLower?: number | null;
  payerStateNumber?: string | null;
  payerStateNumberLower?: string | null;
  stateIncome?: number | null;
  stateIncomeLower?: number | null;
  transactionsReported?: string | null;
  pseName?: string | null;
  pseTelephoneNumber?: string | null;
  grossAmount?: number | null;
  cardNotPresentTransaction?: number | null;
  merchantCategoryCode?: string | null;
  numberOfPaymentTransactions?: string | null;
  januaryAmount?: number | null;
  februaryAmount?: number | null;
  marchAmount?: number | null;
  aprilAmount?: number | null;
  mayAmount?: number | null;
  juneAmount?: number | null;
  julyAmount?: number | null;
  augustAmount?: number | null;
  septemberAmount?: number | null;
  octoberAmount?: number | null;
  novemberAmount?: number | null;
  decemberAmount?: number | null;
  primaryState?: string | null;
  secondaryState?: string | null;
  primaryStateId?: string | null;
  secondaryStateId?: string | null;
  primaryStateIncomeTax?: number | null;
  secondaryStateIncomeTax?: number | null;
};

export const credit1099Schema: Schema<Credit1099> = s.object<Credit1099>({
  documentId: s.nullable(s.string()),
  documentMetadata: s.optional(s.lazy(() => creditDocumentMetadataSchema)),
  form1099Type: s.optional(s.lazy(() => form1099TypeSchema)),
  recipient: s.optional(s.lazy(() => credit1099RecipientSchema)),
  payer: s.optional(s.lazy(() => credit1099PayerSchema)),
  filer: s.optional(s.lazy(() => credit1099FilerSchema)),
  taxYear: s.optionalNullable(s.string()),
  rents: s.optionalNullable(s.number()),
  royalties: s.optionalNullable(s.number()),
  otherIncome: s.optionalNullable(s.number()),
  federalIncomeTaxWithheld: s.optionalNullable(s.number()),
  fishingBoatProceeds: s.optionalNullable(s.number()),
  medicalAndHealthcarePayments: s.optionalNullable(s.number()),
  nonemployeeCompensation: s.optionalNullable(s.number()),
  substitutePaymentsInLieuOfDividendsOrInterest: s.optionalNullable(s.number()),
  payerMadeDirectSalesOf5000OrMoreOfConsumerProductsToBuyer: s.optionalNullable(s.string()),
  cropInsuranceProceeds: s.optionalNullable(s.number()),
  excessGoldenParachutePayments: s.optionalNullable(s.number()),
  grossProceedsPaidToAnAttorney: s.optionalNullable(s.number()),
  section409ADeferrals: s.optionalNullable(s.number()),
  section409AIncome: s.optionalNullable(s.number()),
  stateTaxWithheld: s.optionalNullable(s.number()),
  stateTaxWithheldLower: s.optionalNullable(s.number()),
  payerStateNumber: s.optionalNullable(s.string()),
  payerStateNumberLower: s.optionalNullable(s.string()),
  stateIncome: s.optionalNullable(s.number()),
  stateIncomeLower: s.optionalNullable(s.number()),
  transactionsReported: s.optionalNullable(s.string()),
  pseName: s.optionalNullable(s.string()),
  pseTelephoneNumber: s.optionalNullable(s.string()),
  grossAmount: s.optionalNullable(s.number()),
  cardNotPresentTransaction: s.optionalNullable(s.number()),
  merchantCategoryCode: s.optionalNullable(s.string()),
  numberOfPaymentTransactions: s.optionalNullable(s.string()),
  januaryAmount: s.optionalNullable(s.number()),
  februaryAmount: s.optionalNullable(s.number()),
  marchAmount: s.optionalNullable(s.number()),
  aprilAmount: s.optionalNullable(s.number()),
  mayAmount: s.optionalNullable(s.number()),
  juneAmount: s.optionalNullable(s.number()),
  julyAmount: s.optionalNullable(s.number()),
  augustAmount: s.optionalNullable(s.number()),
  septemberAmount: s.optionalNullable(s.number()),
  octoberAmount: s.optionalNullable(s.number()),
  novemberAmount: s.optionalNullable(s.number()),
  decemberAmount: s.optionalNullable(s.number()),
  primaryState: s.optionalNullable(s.string()),
  secondaryState: s.optionalNullable(s.string()),
  primaryStateId: s.optionalNullable(s.string()),
  secondaryStateId: s.optionalNullable(s.string()),
  primaryStateIncomeTax: s.optionalNullable(s.number()),
  secondaryStateIncomeTax: s.optionalNullable(s.number()),
  _keysMap: {
    documentId: "document_id",
    documentMetadata: "document_metadata",
    form1099Type: "form_1099_type",
    taxYear: "tax_year",
    otherIncome: "other_income",
    federalIncomeTaxWithheld: "federal_income_tax_withheld",
    fishingBoatProceeds: "fishing_boat_proceeds",
    medicalAndHealthcarePayments: "medical_and_healthcare_payments",
    nonemployeeCompensation: "nonemployee_compensation",
    substitutePaymentsInLieuOfDividendsOrInterest: "substitute_payments_in_lieu_of_dividends_or_interest",
    payerMadeDirectSalesOf5000OrMoreOfConsumerProductsToBuyer:
      "payer_made_direct_sales_of_5000_or_more_of_consumer_products_to_buyer",
    cropInsuranceProceeds: "crop_insurance_proceeds",
    excessGoldenParachutePayments: "excess_golden_parachute_payments",
    grossProceedsPaidToAnAttorney: "gross_proceeds_paid_to_an_attorney",
    section409ADeferrals: "section_409a_deferrals",
    section409AIncome: "section_409a_income",
    stateTaxWithheld: "state_tax_withheld",
    stateTaxWithheldLower: "state_tax_withheld_lower",
    payerStateNumber: "payer_state_number",
    payerStateNumberLower: "payer_state_number_lower",
    stateIncome: "state_income",
    stateIncomeLower: "state_income_lower",
    transactionsReported: "transactions_reported",
    pseName: "pse_name",
    pseTelephoneNumber: "pse_telephone_number",
    grossAmount: "gross_amount",
    cardNotPresentTransaction: "card_not_present_transaction",
    merchantCategoryCode: "merchant_category_code",
    numberOfPaymentTransactions: "number_of_payment_transactions",
    januaryAmount: "january_amount",
    februaryAmount: "february_amount",
    marchAmount: "march_amount",
    aprilAmount: "april_amount",
    mayAmount: "may_amount",
    juneAmount: "june_amount",
    julyAmount: "july_amount",
    augustAmount: "august_amount",
    septemberAmount: "september_amount",
    octoberAmount: "october_amount",
    novemberAmount: "november_amount",
    decemberAmount: "december_amount",
    primaryState: "primary_state",
    secondaryState: "secondary_state",
    primaryStateId: "primary_state_id",
    secondaryStateId: "secondary_state_id",
    primaryStateIncomeTax: "primary_state_income_tax",
    secondaryStateIncomeTax: "secondary_state_income_tax",
  },
});
