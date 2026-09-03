import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectedApplicationSchema, type ConnectedApplication } from "./connected-application.js";

export type ItemApplicationListResponse = {
  requestId?: string;
  applications: ConnectedApplication[];
};

export const itemApplicationListResponseSchema: Schema<ItemApplicationListResponse> =
  s.object<ItemApplicationListResponse>({
    requestId: s.optional(s.string()),
    applications: s.array(s.lazy(() => connectedApplicationSchema)),
    _keysMap: {
      requestId: "request_id",
    },
  });
