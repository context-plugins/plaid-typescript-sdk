import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskCheckEmailDomainIsCustom = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type RiskCheckEmailDomainIsCustom =
  | (typeof RiskCheckEmailDomainIsCustom)[keyof typeof RiskCheckEmailDomainIsCustom]
  | (string & {});

export const riskCheckEmailDomainIsCustomSchema: EnumSchema<RiskCheckEmailDomainIsCustom> =
  s.enumOf<RiskCheckEmailDomainIsCustom>(RiskCheckEmailDomainIsCustom);
