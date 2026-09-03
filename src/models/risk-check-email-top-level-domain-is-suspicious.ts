import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskCheckEmailTopLevelDomainIsSuspicious = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type RiskCheckEmailTopLevelDomainIsSuspicious =
  | (typeof RiskCheckEmailTopLevelDomainIsSuspicious)[keyof typeof RiskCheckEmailTopLevelDomainIsSuspicious]
  | (string & {});

export const riskCheckEmailTopLevelDomainIsSuspiciousSchema: EnumSchema<RiskCheckEmailTopLevelDomainIsSuspicious> =
  s.enumOf<RiskCheckEmailTopLevelDomainIsSuspicious>(RiskCheckEmailTopLevelDomainIsSuspicious);
