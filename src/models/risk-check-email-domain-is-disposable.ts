import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskCheckEmailDomainIsDisposable = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type RiskCheckEmailDomainIsDisposable =
  | (typeof RiskCheckEmailDomainIsDisposable)[keyof typeof RiskCheckEmailDomainIsDisposable]
  | (string & {});

export const riskCheckEmailDomainIsDisposableSchema: EnumSchema<RiskCheckEmailDomainIsDisposable> =
  s.enumOf<RiskCheckEmailDomainIsDisposable>(RiskCheckEmailDomainIsDisposable);
