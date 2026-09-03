import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BetaEwaReportV1GetRequest = {
  accessToken: string;
  clientId?: string;
  secret?: string;
};

export const betaEwaReportV1GetRequestSchema: Schema<BetaEwaReportV1GetRequest> =
  s.object<BetaEwaReportV1GetRequest>({
    accessToken: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      accessToken: "access_token",
      clientId: "client_id",
    },
  });
