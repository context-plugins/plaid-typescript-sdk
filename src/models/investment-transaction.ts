import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentTransactionSubtypeSchema,
  type InvestmentTransactionSubtype,
} from "./investment-transaction-subtype.js";
import {
  investmentTransactionTypeSchema,
  type InvestmentTransactionType,
} from "./investment-transaction-type.js";

export type InvestmentTransaction = {
  investmentTransactionId: string;
  cancelTransactionId?: string | null;
  accountId: string;
  securityId: string | null;
  date: string;
  transactionDatetime?: Date | null;
  name: string;
  quantity: number;
  amount: number;
  price: number;
  fees: number | null;
  type: InvestmentTransactionType;
  subtype: InvestmentTransactionSubtype;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
};

export const investmentTransactionSchema: Schema<InvestmentTransaction> = s.object<InvestmentTransaction>({
  investmentTransactionId: s.string(),
  cancelTransactionId: s.optionalNullable(s.string()),
  accountId: s.string(),
  securityId: s.nullable(s.string()),
  date: s.dateOnly(),
  transactionDatetime: s.optionalNullable(s.dateTime()),
  name: s.string(),
  quantity: s.number(),
  amount: s.number(),
  price: s.number(),
  fees: s.nullable(s.number()),
  type: investmentTransactionTypeSchema,
  subtype: investmentTransactionSubtypeSchema,
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  _keysMap: {
    investmentTransactionId: "investment_transaction_id",
    cancelTransactionId: "cancel_transaction_id",
    accountId: "account_id",
    securityId: "security_id",
    transactionDatetime: "transaction_datetime",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
  },
});
