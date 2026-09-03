import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemImportRequestOptions = {
  webhook?: string;
};

export const itemImportRequestOptionsSchema: Schema<ItemImportRequestOptions> =
  s.object<ItemImportRequestOptions>({
    webhook: s.optional(s.string()),
  });
