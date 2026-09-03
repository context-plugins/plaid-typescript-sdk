import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DateRange = {
  beginning: string;
  ending: string;
};

export const dateRangeSchema: Schema<DateRange> = s.object<DateRange>({
  beginning: s.dateOnly(),
  ending: s.dateOnly(),
});
