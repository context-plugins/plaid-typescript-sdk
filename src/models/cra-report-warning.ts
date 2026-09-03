import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { causeSchema, type Cause } from "./cause.js";
import { checkReportWarningCodeSchema, type CheckReportWarningCode } from "./check-report-warning-code.js";

export type CraReportWarning = {
  warningType: string;
  warningCode: CheckReportWarningCode;
  cause: Cause | null;
};

export const craReportWarningSchema: Schema<CraReportWarning> = s.object<CraReportWarning>({
  warningType: s.string(),
  warningCode: checkReportWarningCodeSchema,
  cause: s.nullable(s.lazy(() => causeSchema)),
  _keysMap: {
    warningType: "warning_type",
    warningCode: "warning_code",
  },
});
