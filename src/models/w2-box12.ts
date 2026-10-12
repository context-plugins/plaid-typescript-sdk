import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Data on the W2 Box 12 */
export type W2Box12 = {
  /** W2 Box 12 code. */
  code?: string | null;
  /** W2 Box 12 amount. */
  amount?: string | null;
};

export const w2Box12Schema: Schema<W2Box12> = s.object<W2Box12>({
  code: s.optionalNullable(s.string()),
  amount: s.optionalNullable(s.string()),
});
