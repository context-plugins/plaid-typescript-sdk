import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paySchema, type Pay } from "./pay.js";
import {
  totalCanonicalDescriptionSchema,
  type TotalCanonicalDescription,
} from "./total-canonical-description.js";

export type Total = {
  canonicalDescription?: TotalCanonicalDescription | null;
  description?: string | null;
  currentPay?: Pay;
  ytdPay?: Pay;
};

export const totalSchema: Schema<Total> = s.object<Total>({
  canonicalDescription: s.optionalNullable(s.lazy(() => totalCanonicalDescriptionSchema)),
  description: s.optionalNullable(s.string()),
  currentPay: s.optional(s.lazy(() => paySchema)),
  ytdPay: s.optional(s.lazy(() => paySchema)),
  _keysMap: {
    canonicalDescription: "canonical_description",
    currentPay: "current_pay",
    ytdPay: "ytd_pay",
  },
});
