import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A statement's metadata associated with an account */
export type StatementsStatement = {
  /** Plaid's unique identifier for the statement. */
  statementId: string;
  /** Date when the statement was posted by the FI, if known */
  datePosted?: string | null;
  /** Month of the year. Possible values: 1 through 12 (January through December). */
  month: number;
  /** The year of the statement, e.g. 2024. */
  year: number;
};

export const statementsStatementSchema: Schema<StatementsStatement> = s.object<StatementsStatement>({
  statementId: s.string(),
  datePosted: s.optionalNullable(s.dateOnly()),
  month: s.int(),
  year: s.int(),
  _keysMap: {
    statementId: "statement_id",
    datePosted: "date_posted",
  },
});
