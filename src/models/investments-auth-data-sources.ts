import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSourcesSchema, type DataSources } from "./data-sources.js";

/**
 * Object with metadata pertaining to the source of data for the account numbers, owners, and
 * holdings that are returned.
 */
export type InvestmentsAuthDataSources = {
  /**
   * A description of the source of data for a given product/data type.
   *
   * `INSTITUTION`: The institution supports this product, and the data was provided by the
   * institution. `INSTITUTION_MASK`: The user manually provided the full account number, which was
   * matched to the account mask provided by the institution. Only applicable to the `numbers` data
   * type. `USER`: The institution does not support this product, and the data was manually provided
   * by the user.
   */
  numbers?: DataSources;
  /**
   * A description of the source of data for a given product/data type.
   *
   * `INSTITUTION`: The institution supports this product, and the data was provided by the
   * institution. `INSTITUTION_MASK`: The user manually provided the full account number, which was
   * matched to the account mask provided by the institution. Only applicable to the `numbers` data
   * type. `USER`: The institution does not support this product, and the data was manually provided
   * by the user.
   */
  owners?: DataSources;
  /**
   * A description of the source of data for a given product/data type.
   *
   * `INSTITUTION`: The institution supports this product, and the data was provided by the
   * institution. `INSTITUTION_MASK`: The user manually provided the full account number, which was
   * matched to the account mask provided by the institution. Only applicable to the `numbers` data
   * type. `USER`: The institution does not support this product, and the data was manually provided
   * by the user.
   */
  holdings?: DataSources;
};

export const investmentsAuthDataSourcesSchema: Schema<InvestmentsAuthDataSources> =
  s.object<InvestmentsAuthDataSources>({
    numbers: s.optional(s.lazy(() => dataSourcesSchema)),
    owners: s.optional(s.lazy(() => dataSourcesSchema)),
    holdings: s.optional(s.lazy(() => dataSourcesSchema)),
  });
