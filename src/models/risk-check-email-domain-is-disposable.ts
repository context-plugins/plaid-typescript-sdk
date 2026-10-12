import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the email domain is listed as disposable if known. Disposable domains are often
 * used to create email addresses that are part of a fake set of user details.
 */
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
