import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";

/** CraReportGetRequestProduct specifies a product and version for a `/cra/report/get` call. */
export type CraReportGetRequestProduct = {
  product: Products;
  /** The version of the product that was generated. */
  version: string;
};

export const craReportGetRequestProductSchema: Schema<CraReportGetRequestProduct> =
  s.object<CraReportGetRequestProduct>({
    product: productsSchema,
    version: s.string(),
  });
