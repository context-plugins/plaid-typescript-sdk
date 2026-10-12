import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A Beacon User Revision identifies a Beacon User at some point in its revision history. */
export type BeaconUserRevision = {
  /** ID of the associated Beacon User. */
  id: string;
  /** The `version` field begins with 1 and increments with each subsequent revision. */
  version: number;
};

export const beaconUserRevisionSchema: Schema<BeaconUserRevision> = s.object<BeaconUserRevision>({
  id: s.string(),
  version: s.int(),
});
