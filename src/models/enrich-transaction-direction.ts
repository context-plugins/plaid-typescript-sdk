import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EnrichTransactionDirection = {
  Inflow: "INFLOW",
  Outflow: "OUTFLOW",
} as const;
export type EnrichTransactionDirection =
  | (typeof EnrichTransactionDirection)[keyof typeof EnrichTransactionDirection]
  | (string & {});

export const enrichTransactionDirectionSchema: EnumSchema<EnrichTransactionDirection> =
  s.enumOf<EnrichTransactionDirection>(EnrichTransactionDirection);
