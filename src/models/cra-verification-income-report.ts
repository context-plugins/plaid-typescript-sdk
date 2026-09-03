import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationIncomeItemSchema,
  type CraVerificationIncomeItem,
} from "./cra-verification-income-item.js";
import {
  craVerificationIncomeStreamSchema,
  type CraVerificationIncomeStream,
} from "./cra-verification-income-stream.js";
import {
  craVerificationIncomeUserSummarySchema,
  type CraVerificationIncomeUserSummary,
} from "./cra-verification-income-user-summary.js";

export type CraVerificationIncomeReport = {
  generatedTime: Date;
  daysRequested: number;
  userSummary: CraVerificationIncomeUserSummary | null;
  incomeStreams: CraVerificationIncomeStream[];
  items: CraVerificationIncomeItem[];
};

export const craVerificationIncomeReportSchema: Schema<CraVerificationIncomeReport> =
  s.object<CraVerificationIncomeReport>({
    generatedTime: s.dateTime(),
    daysRequested: s.number(),
    userSummary: s.nullable(s.lazy(() => craVerificationIncomeUserSummarySchema)),
    incomeStreams: s.array(s.lazy(() => craVerificationIncomeStreamSchema)),
    items: s.array(s.lazy(() => craVerificationIncomeItemSchema)),
    _keysMap: {
      generatedTime: "generated_time",
      daysRequested: "days_requested",
      userSummary: "user_summary",
      incomeStreams: "income_streams",
    },
  });
