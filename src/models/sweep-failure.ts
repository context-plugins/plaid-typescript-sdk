import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SweepFailure = {
  failureCode?: string | null;
  description?: string | null;
};

export const sweepFailureSchema: Schema<SweepFailure> = s.object<SweepFailure>({
  failureCode: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  _keysMap: {
    failureCode: "failure_code",
  },
});
