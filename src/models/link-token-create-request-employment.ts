import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employmentSourceTypeSchema, type EmploymentSourceType } from "./employment-source-type.js";
import {
  linkTokenCreateRequestEmploymentBankIncomeSchema,
  type LinkTokenCreateRequestEmploymentBankIncome,
} from "./link-token-create-request-employment-bank-income.js";

/**
 * Specifies options for initializing Link for use with the Employment product. This field is
 * required if `employment` is included in the `products` array.
 */
export type LinkTokenCreateRequestEmployment = {
  /**
   * The types of source employment data that users will be permitted to share. Options include
   * `bank` and `payroll`. Currently you can only specify one of these options.
   */
  employmentSourceTypes?: EmploymentSourceType[];
  /**
   * Specifies options for initializing Link for use with Bank Employment. This field is required if
   * `employment` is included in the `products` array and `bank` is specified in
   * `employment_source_types`.
   */
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
