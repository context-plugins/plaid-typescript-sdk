import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  beaconMatchSummaryAnalysisSchema,
  type BeaconMatchSummaryAnalysis,
} from "./beacon-match-summary-analysis.js";
import { beaconUserRevisionSchema, type BeaconUserRevision } from "./beacon-user-revision.js";

/**
 * A Beacon Duplicate represents a pair of matching Beacon Users and an analysis of the fields they
 * matched on.
 */
export type BeaconDuplicateGetResponse = {
  /** ID of the associated Beacon Duplicate. */
  id: string;
  /** A Beacon User Revision identifies a Beacon User at some point in its revision history. */
  beaconUser1: BeaconUserRevision;
  /** A Beacon User Revision identifies a Beacon User at some point in its revision history. */
  beaconUser2: BeaconUserRevision;
  /** Analysis of which fields matched between one Beacon User and another. */
  analysis: BeaconMatchSummaryAnalysis;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
