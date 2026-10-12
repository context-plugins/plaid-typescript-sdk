import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object to be used with the request. If specified, `options` must not be `null`. */
export type ProcessorTransactionsGetRequestOptions = {
  /** The number of transactions to fetch. @default 100 */
  count?: number;
  /** The number of transactions to skip. The default value is 0. @default 0 */
  offset?: number;
  /**
   * Include the raw unparsed transaction description from the financial institution.
   *
   * @default false
   */
  includeOriginalDescription?: boolean | null;
  /**
   * Personal finance categories are now returned by default.
   *
   * @deprecated
   *
   * @default false
   */
  includePersonalFinanceCategoryBeta?: boolean;
  /**
   * Personal finance categories are now returned by default.
   *
   * @deprecated
   *
   * @default false
   */
  includePersonalFinanceCategory?: boolean;
  /**
   * Counterparties and extra merchant fields are now returned by default.
   *
   * @deprecated
   *
   * @default false
   */
  includeLogoAndCounterpartyBeta?: boolean;
};

export const processorTransactionsGetRequestOptionsSchema: Schema<ProcessorTransactionsGetRequestOptions> =
  s.object<ProcessorTransactionsGetRequestOptions>({
    count: s.defaulted(s.int(), 100),
    offset: s.defaulted(s.int(), 0),
    includeOriginalDescription: s.defaulted(s.nullable(s.boolean()), false),
    includePersonalFinanceCategoryBeta: s.defaulted(s.boolean(), false),
    includePersonalFinanceCategory: s.defaulted(s.boolean(), false),
    includeLogoAndCounterpartyBeta: s.defaulted(s.boolean(), false),
    _keysMap: {
      includeOriginalDescription: "include_original_description",
      includePersonalFinanceCategoryBeta: "include_personal_finance_category_beta",
      includePersonalFinanceCategory: "include_personal_finance_category",
      includeLogoAndCounterpartyBeta: "include_logo_and_counterparty_beta",
    },
  });
