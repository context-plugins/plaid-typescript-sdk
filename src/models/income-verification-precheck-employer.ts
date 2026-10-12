import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationPrecheckEmployerAddressSchema,
  type IncomeVerificationPrecheckEmployerAddress,
} from "./income-verification-precheck-employer-address.js";

/** Information about the end user's employer */
export type IncomeVerificationPrecheckEmployer = {
  /** The employer's name */
  name?: string | null;
  /** The address of the employer */
  address?: IncomeVerificationPrecheckEmployerAddress | null;
  /** The employer's tax id */
  taxId?: string | null;
  /** The URL for the employer's public website */
  url?: string | null;
};

export const incomeVerificationPrecheckEmployerSchema: Schema<IncomeVerificationPrecheckEmployer> =
  s.object<IncomeVerificationPrecheckEmployer>({
    name: s.optionalNullable(s.string()),
    address: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckEmployerAddressSchema)),
    taxId: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      taxId: "tax_id",
    },
  });
