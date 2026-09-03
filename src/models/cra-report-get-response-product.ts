import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { productsSchema, type Products } from "./products.js";

export type CraReportGetResponseProduct = {
  product: Products;
  version: string;
  metadata: Record<string, Record<string, unknown>> | null;
  attributes: Record<string, Record<string, unknown>> | null;
  errors: (Error | null)[];
};

export const craReportGetResponseProductSchema: Schema<CraReportGetResponseProduct> =
  s.object<CraReportGetResponseProduct>({
    product: productsSchema,
    version: s.string(),
    metadata: s.nullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
    attributes: s.nullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
    errors: s.array(s.nullable(s.lazy(() => errorSchema))),
  });
