import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityScreeningHitAnalysisSchema,
  type EntityScreeningHitAnalysis,
} from "./entity-screening-hit-analysis.js";
import { entityScreeningHitDataSchema, type EntityScreeningHitData } from "./entity-screening-hit-data.js";
import { entityWatchlistCodeSchema, type EntityWatchlistCode } from "./entity-watchlist-code.js";
import {
  watchlistScreeningHitStatusSchema,
  type WatchlistScreeningHitStatus,
} from "./watchlist-screening-hit-status.js";

export type EntityWatchlistScreeningHit = {
  id: string;
  reviewStatus: WatchlistScreeningHitStatus;
  firstActive: Date;
  inactiveSince: Date | null;
  historicalSince: Date | null;
  listCode: EntityWatchlistCode;
  plaidUid: string;
  sourceUid: string | null;
  subPrograms: string[];
  analysis?: EntityScreeningHitAnalysis;
  data?: EntityScreeningHitData;
};

export const entityWatchlistScreeningHitSchema: Schema<EntityWatchlistScreeningHit> =
  s.object<EntityWatchlistScreeningHit>({
    id: s.string(),
    reviewStatus: watchlistScreeningHitStatusSchema,
    firstActive: s.dateTime(),
    inactiveSince: s.nullable(s.dateTime()),
    historicalSince: s.nullable(s.dateTime()),
    listCode: entityWatchlistCodeSchema,
    plaidUid: s.string(),
    sourceUid: s.nullable(s.string()),
    subPrograms: s.array(s.string()),
    analysis: s.optional(s.lazy(() => entityScreeningHitAnalysisSchema)),
    data: s.optional(s.lazy(() => entityScreeningHitDataSchema)),
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
