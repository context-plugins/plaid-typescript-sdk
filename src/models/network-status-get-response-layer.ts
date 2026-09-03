import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NetworkStatusGetResponseLayer = {
  eligible: boolean;
};

export const networkStatusGetResponseLayerSchema: Schema<NetworkStatusGetResponseLayer> =
  s.object<NetworkStatusGetResponseLayer>({
    eligible: s.boolean(),
  });
