import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

/** CategoriesGetResponse defines the response schema for `/categories/get` */
export type CategoriesGetResponse = {
  /** An array of all of the transaction categories used by Plaid. */
  categories: Category[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const categoriesGetResponseSchema: Schema<CategoriesGetResponse> = s.object<CategoriesGetResponse>({
  categories: s.array(s.lazy(() => categorySchema)),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
