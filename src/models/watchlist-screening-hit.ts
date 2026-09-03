import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { individualWatchlistCodeSchema, type IndividualWatchlistCode } from "./individual-watchlist-code.js";
import { screeningHitAnalysisSchema, type ScreeningHitAnalysis } from "./screening-hit-analysis.js";
import { screeningHitDataSchema, type ScreeningHitData } from "./screening-hit-data.js";
import {
  watchlistScreeningHitStatusSchema,
  type WatchlistScreeningHitStatus,
} from "./watchlist-screening-hit-status.js";

export type WatchlistScreeningHit = {
  id: string;
  reviewStatus: WatchlistScreeningHitStatus;
  firstActive: Date;
  inactiveSince: Date | null;
  historicalSince: Date | null;
  listCode: IndividualWatchlistCode;
  plaidUid: string;
  sourceUid: string | null;
  subPrograms: string[];
  analysis?: ScreeningHitAnalysis;
  data?: ScreeningHitData;
};

export const watchlistScreeningHitSchema: Schema<WatchlistScreeningHit> = s.object<WatchlistScreeningHit>({
  id: s.string(),
  reviewStatus: watchlistScreeningHitStatusSchema,
  firstActive: s.dateTime(),
  inactiveSince: s.nullable(s.dateTime()),
  historicalSince: s.nullable(s.dateTime()),
  listCode: individualWatchlistCodeSchema,
  plaidUid: s.string(),
  sourceUid: s.nullable(s.string()),
  subPrograms: s.array(s.string()),
  analysis: s.optional(s.lazy(() => screeningHitAnalysisSchema)),
  data: s.optional(s.lazy(() => screeningHitDataSchema)),
  _keysMap: {
    reviewStatus: "review_status",
    firstActive: "first_active",
    inactiveSince: "inactive_since",
    historicalSince: "historical_since",
    listCode: "list_code",
    plaidUid: "plaid_uid",
    sourceUid: "source_uid",
    subPrograms: "sub_programs",
  },
});
