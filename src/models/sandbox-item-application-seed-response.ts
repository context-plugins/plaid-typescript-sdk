import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * SandboxItemApplicationSeedResponse defines the response schema for
 * `/sandbox/item/application/seed`
 */
export type SandboxItemApplicationSeedResponse = {
  /** The `item_id` of the newly seeded item representing the application connection. */
  itemId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
