import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconDuplicateGetRequest = {
  beaconDuplicateId: string;
  clientId?: string;
  secret?: string;
};

export const beaconDuplicateGetRequestSchema: Schema<BeaconDuplicateGetRequest> =
  s.object<BeaconDuplicateGetRequest>({
    beaconDuplicateId: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      beaconDuplicateId: "beacon_duplicate_id",
      clientId: "client_id",
    },
  });
