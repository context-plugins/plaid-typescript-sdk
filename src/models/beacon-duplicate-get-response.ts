import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  beaconMatchSummaryAnalysisSchema,
  type BeaconMatchSummaryAnalysis,
} from "./beacon-match-summary-analysis.js";
import { beaconUserRevisionSchema, type BeaconUserRevision } from "./beacon-user-revision.js";

export type BeaconDuplicateGetResponse = {
  id: string;
  beaconUser1: BeaconUserRevision;
  beaconUser2: BeaconUserRevision;
  analysis: BeaconMatchSummaryAnalysis;
  requestId: string;
};

export const beaconDuplicateGetResponseSchema: Schema<BeaconDuplicateGetResponse> =
  s.object<BeaconDuplicateGetResponse>({
    id: s.string(),
    beaconUser1: beaconUserRevisionSchema,
    beaconUser2: beaconUserRevisionSchema,
    analysis: beaconMatchSummaryAnalysisSchema,
    requestId: s.string(),
    _keysMap: {
      beaconUser1: "beacon_user1",
      beaconUser2: "beacon_user2",
      requestId: "request_id",
    },
  });
