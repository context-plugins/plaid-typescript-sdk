import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IssuesSubscribeResponse = {
  requestId: string;
};

export const issuesSubscribeResponseSchema: Schema<IssuesSubscribeResponse> =
  s.object<IssuesSubscribeResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
