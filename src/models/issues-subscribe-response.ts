import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** IssuesSubscribeResponse defines the response schema for `/issues/subscribe`. */
export type IssuesSubscribeResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const issuesSubscribeResponseSchema: Schema<IssuesSubscribeResponse> =
  s.object<IssuesSubscribeResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
