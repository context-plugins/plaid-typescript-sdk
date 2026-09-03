import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { causeSchema, type Cause } from "./cause.js";
import { warningCodeSchema, type WarningCode } from "./warning-code.js";

export type Warning = {
  warningType: string;
  warningCode: WarningCode;
  cause: Cause | null;
};

export const warningSchema: Schema<Warning> = s.object<Warning>({
  warningType: s.string(),
  warningCode: warningCodeSchema,
  cause: s.nullable(s.lazy(() => causeSchema)),
  _keysMap: {
    warningType: "warning_type",
    warningCode: "warning_code",
  },
});
