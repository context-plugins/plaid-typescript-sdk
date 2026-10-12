import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information describing a transaction category */
export type Category = {
  /**
   * An identifying number for the category. `category_id` is a Plaid-specific identifier and does
   * not necessarily correspond to merchant category codes.
   */
  categoryId: string;
  /** `place` for physical transactions or `special` for other transactions such as bank charges. */
  group: string;
  /** A hierarchical array of the categories to which this `category_id` belongs. */
  hierarchy: string[];
};

export const categorySchema: Schema<Category> = s.object<Category>({
  categoryId: s.string(),
  group: s.string(),
  hierarchy: s.array(s.string()),
  _keysMap: {
    categoryId: "category_id",
  },
});
