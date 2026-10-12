import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditDocumentMetadataSchema, type CreditDocumentMetadata } from "./credit-document-metadata.js";
import { credit1099FilerSchema, type Credit1099Filer } from "./credit1099-filer.js";
import { credit1099PayerSchema, type Credit1099Payer } from "./credit1099-payer.js";
import { credit1099RecipientSchema, type Credit1099Recipient } from "./credit1099-recipient.js";
import { form1099TypeSchema, type Form1099Type } from "./form1099-type.js";

/** An object representing an end user's 1099 tax form */
export type Credit1099 = {
  /** An identifier of the document referenced by the document metadata. */
  documentId: string | null;
  /** Object representing metadata pertaining to the document. */
  documentMetadata?: CreditDocumentMetadata;
  /** Form 1099 Type */
  form1099Type?: Form1099Type;
  /** An object representing a recipient used in both 1099-K and 1099-MISC tax documents. */
  recipient?: Credit1099Recipient;
  /** An object representing a payer used by 1099-MISC tax documents. */
  payer?: Credit1099Payer;
  /** An object representing a filer used by 1099-K tax documents. */
  filer?: Credit1099Filer;
  /** Tax year of the tax form. */
  taxYear?: string | null;
  /** Amount in rent by payer. */
  rents?: number | null;
  /** Amount in royalties by payer. */
  royalties?: number | null;
  /** Amount in other income by payer. */
  otherIncome?: number | null;
  /** Amount of federal income tax withheld from payer. */
  federalIncomeTaxWithheld?: number | null;
  /** Amount of fishing boat proceeds from payer. */
  fishingBoatProceeds?: number | null;
  /** Amount of medical and healthcare payments from payer. */
  medicalAndHealthcarePayments?: number | null;
  /** Amount of nonemployee compensation from payer. */
  nonemployeeCompensation?: number | null;
  /** Amount of substitute payments made by payer. */
  substitutePaymentsInLieuOfDividendsOrInterest?: number | null;
  /** Whether or not payer made direct sales over $5000 of consumer products. */
  payerMadeDirectSalesOf5000OrMoreOfConsumerProductsToBuyer?: string | null;
  /** Amount of crop insurance proceeds. */
  cropInsuranceProceeds?: number | null;
  /** Amount of golden parachute payments made by payer. */
  excessGoldenParachutePayments?: number | null;
  /** Amount of gross proceeds paid to an attorney by payer. */
  grossProceedsPaidToAnAttorney?: number | null;
  /** Amount of 409A deferrals earned by payer. */
  section409ADeferrals?: number | null;
  /** Amount of 409A income earned by payer. */
  section409AIncome?: number | null;
  /** Amount of state tax withheld of payer for primary state. */
  stateTaxWithheld?: number | null;
  /** Amount of state tax withheld of payer for secondary state. */
  stateTaxWithheldLower?: number | null;
  /** Primary state ID. */
  payerStateNumber?: string | null;
  /** Secondary state ID. */
  payerStateNumberLower?: string | null;
  /** State income reported for primary state. */
  stateIncome?: number | null;
  /** State income reported for secondary state. */
  stateIncomeLower?: number | null;
  /** One of the values will be provided Payment card Third party network */
  transactionsReported?: string | null;
  /** Name of the PSE (Payment Settlement Entity). */
  pseName?: string | null;
  /** Formatted (XXX) XXX-XXXX. Phone number of the PSE (Payment Settlement Entity). */
  pseTelephoneNumber?: string | null;
  /** Gross amount reported. */
  grossAmount?: number | null;
  /** Amount in card not present transactions. */
  cardNotPresentTransaction?: number | null;
  /** Merchant category of filer. */
  merchantCategoryCode?: string | null;
  /** Number of payment transactions made. */
  numberOfPaymentTransactions?: string | null;
  /** Amount reported for January. */
  januaryAmount?: number | null;
  /** Amount reported for February. */
  februaryAmount?: number | null;
  /** Amount reported for March. */
  marchAmount?: number | null;
  /** Amount reported for April. */
  aprilAmount?: number | null;
  /** Amount reported for May. */
  mayAmount?: number | null;
  /** Amount reported for June. */
  juneAmount?: number | null;
  /** Amount reported for July. */
  julyAmount?: number | null;
  /** Amount reported for August. */
  augustAmount?: number | null;
  /** Amount reported for September. */
  septemberAmount?: number | null;
  /** Amount reported for October. */
  octoberAmount?: number | null;
  /** Amount reported for November. */
  novemberAmount?: number | null;
  /** Amount reported for December. */
  decemberAmount?: number | null;
  /** Primary state of business. */
  primaryState?: string | null;
  /** Secondary state of business. */
  secondaryState?: string | null;
  /** Primary state ID. */
  primaryStateId?: string | null;
  /** Secondary state ID. */
  secondaryStateId?: string | null;
  /** State income tax reported for primary state. */
  primaryStateIncomeTax?: number | null;
  /** State income tax reported for secondary state. */
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
  rents: s.optionalNullable(s.float64()),
  royalties: s.optionalNullable(s.float64()),
  otherIncome: s.optionalNullable(s.float64()),
  federalIncomeTaxWithheld: s.optionalNullable(s.float64()),
  fishingBoatProceeds: s.optionalNullable(s.float64()),
  medicalAndHealthcarePayments: s.optionalNullable(s.float64()),
  nonemployeeCompensation: s.optionalNullable(s.float64()),
  substitutePaymentsInLieuOfDividendsOrInterest: s.optionalNullable(s.float64()),
  payerMadeDirectSalesOf5000OrMoreOfConsumerProductsToBuyer: s.optionalNullable(s.string()),
  cropInsuranceProceeds: s.optionalNullable(s.float64()),
  excessGoldenParachutePayments: s.optionalNullable(s.float64()),
  grossProceedsPaidToAnAttorney: s.optionalNullable(s.float64()),
  section409ADeferrals: s.optionalNullable(s.float64()),
  section409AIncome: s.optionalNullable(s.float64()),
  stateTaxWithheld: s.optionalNullable(s.float64()),
  stateTaxWithheldLower: s.optionalNullable(s.float64()),
  payerStateNumber: s.optionalNullable(s.string()),
  payerStateNumberLower: s.optionalNullable(s.string()),
  stateIncome: s.optionalNullable(s.float64()),
  stateIncomeLower: s.optionalNullable(s.float64()),
  transactionsReported: s.optionalNullable(s.string()),
  pseName: s.optionalNullable(s.string()),
  pseTelephoneNumber: s.optionalNullable(s.string()),
  grossAmount: s.optionalNullable(s.float64()),
  cardNotPresentTransaction: s.optionalNullable(s.float64()),
  merchantCategoryCode: s.optionalNullable(s.string()),
  numberOfPaymentTransactions: s.optionalNullable(s.string()),
  januaryAmount: s.optionalNullable(s.float64()),
  februaryAmount: s.optionalNullable(s.float64()),
  marchAmount: s.optionalNullable(s.float64()),
  aprilAmount: s.optionalNullable(s.float64()),
  mayAmount: s.optionalNullable(s.float64()),
  juneAmount: s.optionalNullable(s.float64()),
  julyAmount: s.optionalNullable(s.float64()),
  augustAmount: s.optionalNullable(s.float64()),
  septemberAmount: s.optionalNullable(s.float64()),
  octoberAmount: s.optionalNullable(s.float64()),
  novemberAmount: s.optionalNullable(s.float64()),
  decemberAmount: s.optionalNullable(s.float64()),
  primaryState: s.optionalNullable(s.string()),
  secondaryState: s.optionalNullable(s.string()),
  primaryStateId: s.optionalNullable(s.string()),
  secondaryStateId: s.optionalNullable(s.string()),
  primaryStateIncomeTax: s.optionalNullable(s.float64()),
  secondaryStateIncomeTax: s.optionalNullable(s.float64()),
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
