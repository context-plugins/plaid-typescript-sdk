import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specifies options for initializing Link for use with the Statements product. This field is
 * required for the statements product.
 */
export type LinkTokenCreateRequestStatements = {
  /**
   * The start date for statements, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) "YYYY-MM-DD"
   * format, e.g. "2020-10-30".
   */
  startDate: string;
  /**
   * The end date for statements, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) "YYYY-MM-DD"
   * format, e.g. "2020-10-30". You can request up to two years of data.
   */
  endDate: string;
};

export const linkTokenCreateRequestStatementsSchema: Schema<LinkTokenCreateRequestStatements> =
  s.object<LinkTokenCreateRequestStatements>({
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
    },
  });
