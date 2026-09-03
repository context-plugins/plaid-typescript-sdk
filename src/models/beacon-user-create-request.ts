import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconUserRequestDataSchema, type BeaconUserRequestData } from "./beacon-user-request-data.js";

export type BeaconUserCreateRequest = {
  programId: string;
  clientUserId: string;
  user: BeaconUserRequestData;
  accessTokens?: string[] | null;
  clientId?: string;
  secret?: string;
};

export const beaconUserCreateRequestSchema: Schema<BeaconUserCreateRequest> =
  s.object<BeaconUserCreateRequest>({
    programId: s.string(),
    clientUserId: s.string(),
    user: beaconUserRequestDataSchema,
    accessTokens: s.optionalNullable(s.array(s.string())),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      programId: "program_id",
      clientUserId: "client_user_id",
      accessTokens: "access_tokens",
      clientId: "client_id",
    },
  });
