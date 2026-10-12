import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdingSchema, type Holding } from "./holding.js";
import { investmentAccountSchema, type InvestmentAccount } from "./investment-account.js";
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
import { itemSchema, type Item } from "./item.js";
import { securitySchema, type Security } from "./security.js";

/** InvestmentsAuthGetResponse defines the response schema for `/investments/auth/get` */
export type InvestmentsAuthGetResponse = {
  /** The accounts for which data is being retrieved */
  accounts: InvestmentAccount[];
  /**
   * The holdings belonging to investment accounts associated with the Item. Details of the
   * securities in the holdings are provided in the `securities` field.
   */
  holdings: Holding[];
  /** Objects describing the securities held in the accounts associated with the Item. */
  securities: Security[];
  /** Information about the account owners for the accounts associated with the Item. */
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
  /** Metadata about the Item. */
  item: Item;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const investmentsAuthGetResponseSchema: Schema<InvestmentsAuthGetResponse> =
  s.object<InvestmentsAuthGetResponse>({
    accounts: s.array(s.lazy(() => investmentAccountSchema)),
    holdings: s.array(s.lazy(() => holdingSchema)),
    securities: s.array(s.lazy(() => securitySchema)),
    owners: s.array(s.lazy(() => investmentsAuthOwnerSchema)),
    numbers: investmentsAuthGetNumbersSchema,
    dataSources: investmentsAuthDataSourcesSchema,
    accountDetails401K: s.optional(s.array(s.lazy(() => investmentsAuthAccountDetails401KSchema))),
    item: itemSchema,
    requestId: s.string(),
    _keysMap: {
      dataSources: "data_sources",
      accountDetails401K: "account_details_401k",
      requestId: "request_id",
    },
  });
