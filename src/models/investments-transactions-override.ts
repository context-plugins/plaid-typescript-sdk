import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { securityOverrideSchema, type SecurityOverride } from "./security-override.js";

export type InvestmentsTransactionsOverride = {
  date: string;
  name: string;
  quantity: number;
  price: number;
  fees?: number;
  type: string;
  currency: string;
  security?: SecurityOverride;
};

export const investmentsTransactionsOverrideSchema: Schema<InvestmentsTransactionsOverride> =
  s.object<InvestmentsTransactionsOverride>({
    date: s.dateOnly(),
    name: s.string(),
    quantity: s.number(),
    price: s.number(),
    fees: s.optional(s.number()),
    type: s.string(),
    currency: s.string(),
    security: s.optional(s.lazy(() => securityOverrideSchema)),
  });
