import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Data on the W2 Box 12 */
export type W2Box12Override = {
  /** W2 Box 12 code. */
  code?: string | null;
  /** W2 Box 12 amount. */
  amount?: string | null;
};

export const w2Box12OverrideSchema: Schema<W2Box12Override> = s.object<W2Box12Override>({
  code: s.optionalNullable(s.string()),
  amount: s.optionalNullable(s.string()),
});
