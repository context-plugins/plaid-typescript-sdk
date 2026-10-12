import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Data about military info in the income verification precheck. */
export type IncomeVerificationPrecheckMilitaryInfo = {
  /** Is the user currently active duty in the US military */
  isActiveDuty?: boolean | null;
  /**
   * If the user is currently serving in the US military, the branch of the military in which they
   * are serving Valid values: 'AIR FORCE', 'ARMY', 'COAST GUARD', 'MARINES', 'NAVY', 'UNKNOWN'
   */
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
