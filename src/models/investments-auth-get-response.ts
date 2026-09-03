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

export type InvestmentsAuthGetResponse = {
  accounts: InvestmentAccount[];
  holdings: Holding[];
  securities: Security[];
  owners: InvestmentsAuthOwner[];
  numbers: InvestmentsAuthGetNumbers;
  dataSources: InvestmentsAuthDataSources;
  accountDetails401K?: InvestmentsAuthAccountDetails401K[];
  item: Item;
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
