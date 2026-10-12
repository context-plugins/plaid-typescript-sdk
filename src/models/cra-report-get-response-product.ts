import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { productsSchema, type Products } from "./products.js";

/**
 * Per-product report data. `attributes` is an opaque map of key-value pairs; for a full list of
 * attributes per product and version, see the data dictionary.
 */
export type CraReportGetResponseProduct = {
  product: Products;
  /** The version of the product that was generated. */
  version: string;
  /**
   * A map of product report metadata, where the key is a string and the value varies by product.
   * For a full list of metadata fields per product, see the data dictionary. May be `null` if
   * metadata was not available.
   */
  metadata: Record<string, Record<string, unknown>> | null;
  /**
   * A map of product attributes, where the key is a string and the value can be any JSON value. The
   * specific list of attributes depends on the product and version. For a full list, see the data
   * dictionary. May be `null` if attributes were not available.
   */
  attributes: Record<string, Record<string, unknown>> | null;
  /** Product-level errors. Non-empty when this product failed to generate; empty on success. */
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
