import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type W2Box12Override = {
  code?: string | null;
  amount?: string | null;
};

export const w2Box12OverrideSchema: Schema<W2Box12Override> = s.object<W2Box12Override>({
  code: s.optionalNullable(s.string()),
  amount: s.optionalNullable(s.string()),
});
