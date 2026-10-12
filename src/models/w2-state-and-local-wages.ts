import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** W2 state and local wages */
export type W2StateAndLocalWages = {
  /** State associated with the wage. */
  state?: string | null;
  /** State identification number of the employer. */
  employerStateIdNumber?: string | null;
  /** Wages and tips from the specified state. */
  stateWagesTips?: string | null;
  /** Income tax from the specified state. */
  stateIncomeTax?: string | null;
  /** Wages and tips from the locality. */
  localWagesTips?: string | null;
  /** Income tax from the locality. */
  localIncomeTax?: string | null;
  /** Name of the locality. */
  localityName?: string | null;
};

export const w2StateAndLocalWagesSchema: Schema<W2StateAndLocalWages> = s.object<W2StateAndLocalWages>({
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
