import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A date range with a start and end date */
export type DateRange = {
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  beginning: string;
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  ending: string;
};

export const dateRangeSchema: Schema<DateRange> = s.object<DateRange>({
  beginning: s.dateOnly(),
  ending: s.dateOnly(),
});
