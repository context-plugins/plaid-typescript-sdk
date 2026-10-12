import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing a monetary amount. */
export type Pay = {
  /** A numerical amount of a specific currency. */
  amount?: number | null;
  /** Currency code, e.g. USD */
  currency?: string | null;
};

export const paySchema: Schema<Pay> = s.object<Pay>({
  amount: s.optionalNullable(s.float64()),
  currency: s.optionalNullable(s.string()),
});
