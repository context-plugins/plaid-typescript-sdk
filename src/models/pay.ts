import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pay = {
  amount?: number | null;
  currency?: string | null;
};

export const paySchema: Schema<Pay> = s.object<Pay>({
  amount: s.optionalNullable(s.number()),
  currency: s.optionalNullable(s.string()),
});
