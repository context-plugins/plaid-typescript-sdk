import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";

export type CraReportGetRequestProduct = {
  product: Products;
  version: string;
};

export const craReportGetRequestProductSchema: Schema<CraReportGetRequestProduct> =
  s.object<CraReportGetRequestProduct>({
    product: productsSchema,
    version: s.string(),
  });
