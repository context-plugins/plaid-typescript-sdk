import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  signalScheduleRecommendationSchema,
  type SignalScheduleRecommendation,
} from "./signal-schedule-recommendation.js";
import { signalWarningSchema, type SignalWarning } from "./signal-warning.js";

export type SignalScheduleResponse = {
  optimalDate: string | null;
  recommendations: SignalScheduleRecommendation[];
  warnings: SignalWarning[];
  requestId: string;
};

export const signalScheduleResponseSchema: Schema<SignalScheduleResponse> = s.object<SignalScheduleResponse>({
  optimalDate: s.nullable(s.dateOnly()),
  recommendations: s.array(s.lazy(() => signalScheduleRecommendationSchema)),
  warnings: s.array(s.lazy(() => signalWarningSchema)),
  requestId: s.string(),
  _keysMap: {
    optimalDate: "optimal_date",
    requestId: "request_id",
  },
});
