import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing Layer-related metadata for the requested user. */
export type NetworkStatusGetResponseLayer = {
  /** Indicates if the user is eligible for a Layer session. */
  eligible: boolean;
};

export const networkStatusGetResponseLayerSchema: Schema<NetworkStatusGetResponseLayer> =
  s.object<NetworkStatusGetResponseLayer>({
    eligible: s.boolean(),
  });
