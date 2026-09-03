import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type RefreshResult = {
  itemId?: string;
  product?: string;
  error?: Error | null;
};

export const refreshResultSchema: Schema<RefreshResult> = s.object<RefreshResult>({
  itemId: s.optional(s.string()),
  product: s.optional(s.string()),
  error: s.optionalNullable(s.lazy(() => errorSchema)),
  _keysMap: {
    itemId: "item_id",
  },
});
