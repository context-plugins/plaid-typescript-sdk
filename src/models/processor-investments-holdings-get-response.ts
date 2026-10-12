import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdingSchema, type Holding } from "./holding.js";
import { investmentAccountSchema, type InvestmentAccount } from "./investment-account.js";
import { securitySchema, type Security } from "./security.js";

/**
 * ProcessorInvestmentsHoldingsGetResponse defines the response schema for
 * `/processor/investments/holdings/get`
 */
export type ProcessorInvestmentsHoldingsGetResponse = {
  /**
   * A single account at a financial institution, with additional investment-specific balance
   * information.
   */
  account: InvestmentAccount;
  /**
   * The holdings belonging to investment accounts associated with the Item. Details of the
   * securities in the holdings are provided in the `securities` field.
   */
  holdings: Holding[];
  /** Objects describing the securities held in the account. */
  securities: Security[];
  /**
   * When true, this field indicates that the Item's portfolio was manually created with the
   * Investments Fallback flow.
   */
  isInvestmentsFallbackItem?: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const processorInvestmentsHoldingsGetResponseSchema: Schema<ProcessorInvestmentsHoldingsGetResponse> =
  s.object<ProcessorInvestmentsHoldingsGetResponse>({
    account: investmentAccountSchema,
    holdings: s.array(s.lazy(() => holdingSchema)),
    securities: s.array(s.lazy(() => securitySchema)),
    isInvestmentsFallbackItem: s.optional(s.boolean()),
    requestId: s.optional(s.string()),
    _keysMap: {
      isInvestmentsFallbackItem: "is_investments_fallback_item",
      requestId: "request_id",
    },
  });
