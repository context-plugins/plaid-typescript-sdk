import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditSessionSchema, type CreditSession } from "./credit-session.js";

export type CreditSessionsGetResponse = {
  sessions?: CreditSession[];
  requestId: string;
};

export const creditSessionsGetResponseSchema: Schema<CreditSessionsGetResponse> =
  s.object<CreditSessionsGetResponse>({
    sessions: s.optional(s.array(s.lazy(() => creditSessionSchema))),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
