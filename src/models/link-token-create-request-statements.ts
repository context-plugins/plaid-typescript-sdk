import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateRequestStatements = {
  startDate: string;
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
