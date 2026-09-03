import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConsumerReportPdfGetRequest = {
  clientId?: string;
  secret?: string;
  userToken: string;
};

export const consumerReportPdfGetRequestSchema: Schema<ConsumerReportPdfGetRequest> =
  s.object<ConsumerReportPdfGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
    },
  });
