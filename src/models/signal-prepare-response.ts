import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignalPrepareResponse = {
  requestId: string;
};

export const signalPrepareResponseSchema: Schema<SignalPrepareResponse> = s.object<SignalPrepareResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
