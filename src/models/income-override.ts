import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paystubOverrideSchema, type PaystubOverride } from "./paystub-override.js";
import { w2OverrideSchema, type W2Override } from "./w2-override.js";

export type IncomeOverride = {
  paystubs?: PaystubOverride[];
  w2S?: W2Override[];
};

export const incomeOverrideSchema: Schema<IncomeOverride> = s.object<IncomeOverride>({
  paystubs: s.optional(s.array(s.lazy(() => paystubOverrideSchema))),
  w2S: s.optional(s.array(s.lazy(() => w2OverrideSchema))),
  _keysMap: {
    w2S: "w2s",
  },
});
