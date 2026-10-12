import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration parameters for EU flows */
export type LinkTokenEuConfig = {
  /** If `true`, open Link without an initial UI. Defaults to `false`. */
  headless?: boolean;
};

export const linkTokenEuConfigSchema: Schema<LinkTokenEuConfig> = s.object<LinkTokenEuConfig>({
  headless: s.optional(s.boolean()),
});
