import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxItemApplicationSeedResponse = {
  itemId: string;
  requestId: string;
};

export const sandboxItemApplicationSeedResponseSchema: Schema<SandboxItemApplicationSeedResponse> =
  s.object<SandboxItemApplicationSeedResponse>({
    itemId: s.string(),
    requestId: s.string(),
    _keysMap: {
      itemId: "item_id",
      requestId: "request_id",
    },
  });
