import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditDocumentMetadataSchema, type CreditDocumentMetadata } from "./credit-document-metadata.js";
import { creditI20StudentSchema, type CreditI20Student } from "./credit-i20-student.js";

export type CreditI20 = {
  documentId?: string | null;
  documentMetadata?: CreditDocumentMetadata;
  student?: CreditI20Student;
  personalFunds?: number | null;
  onCampusEmployment?: number | null;
  fundsFromThisSchool?: number | null;
  studentsFundingTotal?: number | null;
  fundsFromAnotherSource?: number | null;
  estimatedAverageCostsTotal?: number | null;
  estimatedAverageLivingExpenses?: number | null;
  studentsFundingPeriodMonths?: number | null;
  estimatedAverageCostsPeriodMonths?: number | null;
};

export const creditI20Schema: Schema<CreditI20> = s.object<CreditI20>({
  documentId: s.optionalNullable(s.string()),
  documentMetadata: s.optional(s.lazy(() => creditDocumentMetadataSchema)),
  student: s.optional(s.lazy(() => creditI20StudentSchema)),
  personalFunds: s.optionalNullable(s.number()),
  onCampusEmployment: s.optionalNullable(s.number()),
  fundsFromThisSchool: s.optionalNullable(s.number()),
  studentsFundingTotal: s.optionalNullable(s.number()),
  fundsFromAnotherSource: s.optionalNullable(s.number()),
  estimatedAverageCostsTotal: s.optionalNullable(s.number()),
  estimatedAverageLivingExpenses: s.optionalNullable(s.number()),
  studentsFundingPeriodMonths: s.optionalNullable(s.number()),
  estimatedAverageCostsPeriodMonths: s.optionalNullable(s.number()),
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
