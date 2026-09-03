import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenEuConfig = {
  headless?: boolean;
};

export const linkTokenEuConfigSchema: Schema<LinkTokenEuConfig> = s.object<LinkTokenEuConfig>({
  headless: s.optional(s.boolean()),
});
