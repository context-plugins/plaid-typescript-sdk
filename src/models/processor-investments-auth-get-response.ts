import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { holdingSchema, type Holding } from "./holding.js";
import {
  investmentsAuthAccountDetails401KSchema,
  type InvestmentsAuthAccountDetails401K,
} from "./investments-auth-account-details401-k.js";
import {
  investmentsAuthDataSourcesSchema,
  type InvestmentsAuthDataSources,
} from "./investments-auth-data-sources.js";
import {
  investmentsAuthGetNumbersSchema,
  type InvestmentsAuthGetNumbers,
} from "./investments-auth-get-numbers.js";
import { investmentsAuthOwnerSchema, type InvestmentsAuthOwner } from "./investments-auth-owner.js";
import { securitySchema, type Security } from "./security.js";

/**
 * ProcessorInvestmentsAuthGetResponse defines the response schema for
 * `/processor/investments/auth/get`
 */
export type ProcessorInvestmentsAuthGetResponse = {
  /** A single account at a financial institution. */
  account: Account;
  /**
   * The holdings belonging to the investment account. Details of the securities in the holdings are
   * provided in the `securities` field.
   */
  holdings: Holding[];
  /** Objects describing the securities held in the account. */
  securities: Security[];
  /** Information about the account owners for the account. */
  owners: InvestmentsAuthOwner[];
  /** Identifying information for transferring holdings to an investment account. */
  numbers: InvestmentsAuthGetNumbers;
  /**
   * Object with metadata pertaining to the source of data for the account numbers, owners, and
   * holdings that are returned.
   */
  dataSources: InvestmentsAuthDataSources;
  /** Additional information for accounts of 401k subtype. */
  accountDetails401K?: InvestmentsAuthAccountDetails401K[];
  /**
   * When true, this field indicates that the Item's portfolio was manually created with the
   * Investments Fallback flow.
   */
  isInvestmentsFallbackItem?: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const processorInvestmentsAuthGetResponseSchema: Schema<ProcessorInvestmentsAuthGetResponse> =
  s.object<ProcessorInvestmentsAuthGetResponse>({
    account: accountSchema,
    holdings: s.array(s.lazy(() => holdingSchema)),
    securities: s.array(s.lazy(() => securitySchema)),
    owners: s.array(s.lazy(() => investmentsAuthOwnerSchema)),
    numbers: investmentsAuthGetNumbersSchema,
    dataSources: investmentsAuthDataSourcesSchema,
    accountDetails401K: s.optional(s.array(s.lazy(() => investmentsAuthAccountDetails401KSchema))),
    isInvestmentsFallbackItem: s.optional(s.boolean()),
    requestId: s.string(),
    _keysMap: {
      dataSources: "data_sources",
      accountDetails401K: "account_details_401k",
      isInvestmentsFallbackItem: "is_investments_fallback_item",
      requestId: "request_id",
    },
  });
