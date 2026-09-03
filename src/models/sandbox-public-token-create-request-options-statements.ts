import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxPublicTokenCreateRequestOptionsStatements = {
  startDate: string;
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
