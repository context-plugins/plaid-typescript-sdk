import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional set of parameters corresponding to statements options. */
export type SandboxPublicTokenCreateRequestOptionsStatements = {
  /**
   * The earliest date for which to fetch statements history. Dates should be formatted as
   * YYYY-MM-DD.
   */
  startDate: string;
  /**
   * The most recent date for which to fetch statements history. Dates should be formatted as
   * YYYY-MM-DD.
   */
  endDate: string;
};

export const sandboxPublicTokenCreateRequestOptionsStatementsSchema: Schema<SandboxPublicTokenCreateRequestOptionsStatements> =
  s.object<SandboxPublicTokenCreateRequestOptionsStatements>({
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
    },
  });
