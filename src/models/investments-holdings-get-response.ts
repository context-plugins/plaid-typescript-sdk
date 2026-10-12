import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdingSchema, type Holding } from "./holding.js";
import { investmentAccountSchema, type InvestmentAccount } from "./investment-account.js";
import { itemSchema, type Item } from "./item.js";
import { securitySchema, type Security } from "./security.js";

/** InvestmentsHoldingsGetResponse defines the response schema for `/investments/holdings/get` */
export type InvestmentsHoldingsGetResponse = {
  /** The accounts associated with the Item */
  accounts: InvestmentAccount[];
  /**
   * The holdings belonging to investment accounts associated with the Item. Details of the
   * securities in the holdings are provided in the `securities` field.
   */
  holdings: Holding[];
  /** Objects describing the securities held in the accounts associated with the Item. */
  securities: Security[];
  /** Metadata about the Item. */
  item: Item;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * When true, this field indicates that the Item's portfolio was manually created with the
   * Investments Fallback flow.
   */
  isInvestmentsFallbackItem?: boolean;
};

export const investmentsHoldingsGetResponseSchema: Schema<InvestmentsHoldingsGetResponse> =
  s.object<InvestmentsHoldingsGetResponse>({
    accounts: s.array(s.lazy(() => investmentAccountSchema)),
    holdings: s.array(s.lazy(() => holdingSchema)),
    securities: s.array(s.lazy(() => securitySchema)),
    item: itemSchema,
    requestId: s.string(),
    isInvestmentsFallbackItem: s.optional(s.boolean()),
    _keysMap: {
      requestId: "request_id",
      isInvestmentsFallbackItem: "is_investments_fallback_item",
    },
  });
