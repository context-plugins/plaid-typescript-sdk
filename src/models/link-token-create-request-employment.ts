import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employmentSourceTypeSchema, type EmploymentSourceType } from "./employment-source-type.js";
import {
  linkTokenCreateRequestEmploymentBankIncomeSchema,
  type LinkTokenCreateRequestEmploymentBankIncome,
} from "./link-token-create-request-employment-bank-income.js";

export type LinkTokenCreateRequestEmployment = {
  employmentSourceTypes?: EmploymentSourceType[];
  bankEmployment?: LinkTokenCreateRequestEmploymentBankIncome;
};

export const linkTokenCreateRequestEmploymentSchema: Schema<LinkTokenCreateRequestEmployment> =
  s.object<LinkTokenCreateRequestEmployment>({
    employmentSourceTypes: s.optional(s.array(s.lazy(() => employmentSourceTypeSchema))),
    bankEmployment: s.optional(s.lazy(() => linkTokenCreateRequestEmploymentBankIncomeSchema)),
    _keysMap: {
      employmentSourceTypes: "employment_source_types",
      bankEmployment: "bank_employment",
    },
  });
