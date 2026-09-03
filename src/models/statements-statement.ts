import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatementsStatement = {
  statementId: string;
  datePosted?: string | null;
  month: number;
  year: number;
};

export const statementsStatementSchema: Schema<StatementsStatement> = s.object<StatementsStatement>({
  statementId: s.string(),
  datePosted: s.optionalNullable(s.dateOnly()),
  month: s.number(),
  year: s.number(),
  _keysMap: {
    statementId: "statement_id",
    datePosted: "date_posted",
  },
});
