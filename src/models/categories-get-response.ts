import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

export type CategoriesGetResponse = {
  categories: Category[];
  requestId: string;
};

export const categoriesGetResponseSchema: Schema<CategoriesGetResponse> = s.object<CategoriesGetResponse>({
  categories: s.array(s.lazy(() => categorySchema)),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
