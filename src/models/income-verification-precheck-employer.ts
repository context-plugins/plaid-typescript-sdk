import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationPrecheckEmployerAddressSchema,
  type IncomeVerificationPrecheckEmployerAddress,
} from "./income-verification-precheck-employer-address.js";

export type IncomeVerificationPrecheckEmployer = {
  name?: string | null;
  address?: IncomeVerificationPrecheckEmployerAddress | null;
  taxId?: string | null;
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
