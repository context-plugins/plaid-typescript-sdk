import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncomeVerificationPrecheckMilitaryInfo = {
  isActiveDuty?: boolean | null;
  branch?: string | null;
};

export const incomeVerificationPrecheckMilitaryInfoSchema: Schema<IncomeVerificationPrecheckMilitaryInfo> =
  s.object<IncomeVerificationPrecheckMilitaryInfo>({
    isActiveDuty: s.optionalNullable(s.boolean()),
    branch: s.optionalNullable(s.string()),
    _keysMap: {
      isActiveDuty: "is_active_duty",
    },
  });
