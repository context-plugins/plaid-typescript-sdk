import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconUserRevision = {
  id: string;
  version: number;
};

export const beaconUserRevisionSchema: Schema<BeaconUserRevision> = s.object<BeaconUserRevision>({
  id: s.string(),
  version: s.number(),
});
