import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditDocumentMetadataSchema, type CreditDocumentMetadata } from "./credit-document-metadata.js";
import { creditI20StudentSchema, type CreditI20Student } from "./credit-i20-student.js";

/** An object representing an end user's Form I-20 US immigration student document. */
export type CreditI20 = {
  /** An identifier of the document referenced by the document metadata. */
  documentId?: string | null;
  /** Object representing metadata pertaining to the document. */
  documentMetadata?: CreditDocumentMetadata;
  /** An object representing the student named on a Form I-20. */
  student?: CreditI20Student;
  /** Amount of the student's personal funds. */
  personalFunds?: number | null;
  /** Amount of funds from on-campus employment. */
  onCampusEmployment?: number | null;
  /** Amount of funds provided by the issuing school. */
  fundsFromThisSchool?: number | null;
  /** Total amount of funds available to the student. */
  studentsFundingTotal?: number | null;
  /** Amount of funds from another source. */
  fundsFromAnotherSource?: number | null;
  /** Estimated total average costs for the program period. */
  estimatedAverageCostsTotal?: number | null;
  /** Estimated average living expenses. */
  estimatedAverageLivingExpenses?: number | null;
  /** Number of months the student's funding covers. */
  studentsFundingPeriodMonths?: number | null;
  /** Number of months the estimated average costs cover. */
  estimatedAverageCostsPeriodMonths?: number | null;
};

export const creditI20Schema: Schema<CreditI20> = s.object<CreditI20>({
  documentId: s.optionalNullable(s.string()),
  documentMetadata: s.optional(s.lazy(() => creditDocumentMetadataSchema)),
  student: s.optional(s.lazy(() => creditI20StudentSchema)),
  personalFunds: s.optionalNullable(s.float64()),
  onCampusEmployment: s.optionalNullable(s.float64()),
  fundsFromThisSchool: s.optionalNullable(s.float64()),
  studentsFundingTotal: s.optionalNullable(s.float64()),
  fundsFromAnotherSource: s.optionalNullable(s.float64()),
  estimatedAverageCostsTotal: s.optionalNullable(s.float64()),
  estimatedAverageLivingExpenses: s.optionalNullable(s.float64()),
  studentsFundingPeriodMonths: s.optionalNullable(s.int()),
  estimatedAverageCostsPeriodMonths: s.optionalNullable(s.int()),
  _keysMap: {
    documentId: "document_id",
    documentMetadata: "document_metadata",
    personalFunds: "personal_funds",
    onCampusEmployment: "on_campus_employment",
    fundsFromThisSchool: "funds_from_this_school",
    studentsFundingTotal: "students_funding_total",
    fundsFromAnotherSource: "funds_from_another_source",
    estimatedAverageCostsTotal: "estimated_average_costs_total",
    estimatedAverageLivingExpenses: "estimated_average_living_expenses",
    studentsFundingPeriodMonths: "students_funding_period_months",
    estimatedAverageCostsPeriodMonths: "estimated_average_costs_period_months",
  },
});
