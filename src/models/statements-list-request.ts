import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatementsListRequest = {
  accessToken: string;
  clientId?: string;
  secret?: string;
};

export const statementsListRequestSchema: Schema<StatementsListRequest> = s.object<StatementsListRequest>({
  accessToken: s.string(),
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  _keysMap: {
    accessToken: "access_token",
    clientId: "client_id",
  },
});
