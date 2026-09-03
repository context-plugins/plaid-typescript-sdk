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

export type ProcessorInvestmentsAuthGetResponse = {
  account: Account;
  holdings: Holding[];
  securities: Security[];
  owners: InvestmentsAuthOwner[];
  numbers: InvestmentsAuthGetNumbers;
  dataSources: InvestmentsAuthDataSources;
  accountDetails401K?: InvestmentsAuthAccountDetails401K[];
  isInvestmentsFallbackItem?: boolean;
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
