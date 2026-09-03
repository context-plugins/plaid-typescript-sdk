import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { holdingsOverrideSchema, type HoldingsOverride } from "./holdings-override.js";
import { incomeOverrideSchema, type IncomeOverride } from "./income-override.js";
import { inflowModelSchema, type InflowModel } from "./inflow-model.js";
import {
  investmentsTransactionsOverrideSchema,
  type InvestmentsTransactionsOverride,
} from "./investments-transactions-override.js";
import { liabilityOverrideSchema, type LiabilityOverride } from "./liability-override.js";
import { metaSchema, type Meta } from "./meta.js";
import { numbersSchema, type Numbers } from "./numbers.js";
import { overrideAccountTypeSchema, type OverrideAccountType } from "./override-account-type.js";
import { ownerOverrideSchema, type OwnerOverride } from "./owner-override.js";
import { transactionOverrideSchema, type TransactionOverride } from "./transaction-override.js";

export type OverrideAccounts = {
  type: OverrideAccountType;
  subtype: AccountSubtype | null;
  startingBalance: number;
  forceAvailableBalance: number;
  hasNullAvailableBalance: boolean;
  currency: string;
  meta: Meta;
  numbers: Numbers;
  transactions: TransactionOverride[];
  holdings?: HoldingsOverride;
  investmentTransactions?: InvestmentsTransactionsOverride;
  identity: OwnerOverride;
  liability: LiabilityOverride;
  inflowModel: InflowModel;
  income?: IncomeOverride;
};

export const overrideAccountsSchema: Schema<OverrideAccounts> = s.object<OverrideAccounts>({
  type: overrideAccountTypeSchema,
  subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
  startingBalance: s.number(),
  forceAvailableBalance: s.number(),
  hasNullAvailableBalance: s.boolean(),
  currency: s.string(),
  meta: metaSchema,
  numbers: numbersSchema,
  transactions: s.array(s.lazy(() => transactionOverrideSchema)),
  holdings: s.optional(s.lazy(() => holdingsOverrideSchema)),
  investmentTransactions: s.optional(s.lazy(() => investmentsTransactionsOverrideSchema)),
  identity: ownerOverrideSchema,
  liability: liabilityOverrideSchema,
  inflowModel: inflowModelSchema,
  income: s.optional(s.lazy(() => incomeOverrideSchema)),
  _keysMap: {
    startingBalance: "starting_balance",
    forceAvailableBalance: "force_available_balance",
    hasNullAvailableBalance: "has_null_available_balance",
    investmentTransactions: "investment_transactions",
    inflowModel: "inflow_model",
  },
});
