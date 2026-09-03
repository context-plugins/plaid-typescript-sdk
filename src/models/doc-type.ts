import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DocType = {
  Unknown: "UNKNOWN",
  DocumentTypePaystub: "DOCUMENT_TYPE_PAYSTUB",
  DocumentTypeBankStatement: "DOCUMENT_TYPE_BANK_STATEMENT",
  DocumentTypeUsTaxW2: "DOCUMENT_TYPE_US_TAX_W2",
  DocumentTypeUsMilitaryEras: "DOCUMENT_TYPE_US_MILITARY_ERAS",
  DocumentTypeUsMilitaryLes: "DOCUMENT_TYPE_US_MILITARY_LES",
  DocumentTypeUsMilitaryCles: "DOCUMENT_TYPE_US_MILITARY_CLES",
  DocumentTypeGig: "DOCUMENT_TYPE_GIG",
  DocumentTypeNone: "DOCUMENT_TYPE_NONE",
  DocumentTypeUsTax1099Misc: "DOCUMENT_TYPE_US_TAX_1099_MISC",
  DocumentTypeUsTax1099K: "DOCUMENT_TYPE_US_TAX_1099_K",
  DocumentTypePlaidGeneratedPaystubPdf: "DOCUMENT_TYPE_PLAID_GENERATED_PAYSTUB_PDF",
  DocumentTypeUsStudentI20: "DOCUMENT_TYPE_US_STUDENT_I20",
} as const;
export type DocType = (typeof DocType)[keyof typeof DocType] | (string & {});

export const docTypeSchema: EnumSchema<DocType> = s.enumOf<DocType>(DocType);
