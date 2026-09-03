import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type W2StateAndLocalWagesOverride = {
  state?: string | null;
  employerStateIdNumber?: string | null;
  stateWagesTips?: string | null;
  stateIncomeTax?: string | null;
  localWagesTips?: string | null;
  localIncomeTax?: string | null;
  localityName?: string | null;
};

export const w2StateAndLocalWagesOverrideSchema: Schema<W2StateAndLocalWagesOverride> =
  s.object<W2StateAndLocalWagesOverride>({
    state: s.optionalNullable(s.string()),
    employerStateIdNumber: s.optionalNullable(s.string()),
    stateWagesTips: s.optionalNullable(s.string()),
    stateIncomeTax: s.optionalNullable(s.string()),
    localWagesTips: s.optionalNullable(s.string()),
    localIncomeTax: s.optionalNullable(s.string()),
    localityName: s.optionalNullable(s.string()),
    _keysMap: {
      employerStateIdNumber: "employer_state_id_number",
      stateWagesTips: "state_wages_tips",
      stateIncomeTax: "state_income_tax",
      localWagesTips: "local_wages_tips",
      localIncomeTax: "local_income_tax",
      localityName: "locality_name",
    },
  });
