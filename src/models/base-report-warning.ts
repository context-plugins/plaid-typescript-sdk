import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportWarningCodeSchema, type BaseReportWarningCode } from "./base-report-warning-code.js";
import { causeSchema, type Cause } from "./cause.js";

export type BaseReportWarning = {
  warningType: string;
  warningCode: BaseReportWarningCode;
  cause: Cause | null;
};

export const baseReportWarningSchema: Schema<BaseReportWarning> = s.object<BaseReportWarning>({
  warningType: s.string(),
  warningCode: baseReportWarningCodeSchema,
  cause: s.nullable(s.lazy(() => causeSchema)),
  _keysMap: {
    warningType: "warning_type",
    warningCode: "warning_code",
  },
});
