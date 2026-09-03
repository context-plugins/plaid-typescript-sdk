import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  beaconUserUpdateRequestDataSchema,
  type BeaconUserUpdateRequestData,
} from "./beacon-user-update-request-data.js";

export type BeaconUserUpdateRequest = {
  beaconUserId: string;
  user?: BeaconUserUpdateRequestData | null;
  accessTokens?: string[] | null;
  clientId?: string;
  secret?: string;
};

export const beaconUserUpdateRequestSchema: Schema<BeaconUserUpdateRequest> =
  s.object<BeaconUserUpdateRequest>({
    beaconUserId: s.string(),
    user: s.optionalNullable(s.lazy(() => beaconUserUpdateRequestDataSchema)),
    accessTokens: s.optionalNullable(s.array(s.string())),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      accessTokens: "access_tokens",
      clientId: "client_id",
    },
  });
