import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Category = {
  categoryId: string;
  group: string;
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
