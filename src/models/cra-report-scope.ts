import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraReportScope = {
  PlaidNetwork: "PLAID_NETWORK",
  ClientUser: "CLIENT_USER",
} as const;
export type CraReportScope = (typeof CraReportScope)[keyof typeof CraReportScope] | (string & {});

export const craReportScopeSchema: EnumSchema<CraReportScope> = s.enumOf<CraReportScope>(CraReportScope);
