import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditSessionSchema, type CreditSession } from "./credit-session.js";

/** CreditSessionsGetResponse defines the response schema for `/credit/sessions/get` */
export type CreditSessionsGetResponse = {
  /**
   * A list of Link sessions for the user. Sessions will be sorted in reverse chronological order.
   */
  sessions?: CreditSession[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
