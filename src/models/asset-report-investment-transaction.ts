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

export type AssetReportInvestmentTransaction = {
  investmentTransactionId: string;
  accountId: string;
  securityId: string | null;
  date: string;
  name: string;
  quantity: number;
  vestedQuantity: number;
  vestedValue: number;
  amount: number;
  price: number;
  fees: number | null;
  type: InvestmentTransactionType;
  subtype: InvestmentTransactionSubtype;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
};

export const assetReportInvestmentTransactionSchema: Schema<AssetReportInvestmentTransaction> =
  s.object<AssetReportInvestmentTransaction>({
    investmentTransactionId: s.string(),
    accountId: s.string(),
    securityId: s.nullable(s.string()),
    date: s.dateOnly(),
    name: s.string(),
    quantity: s.number(),
    vestedQuantity: s.number(),
    vestedValue: s.number(),
    amount: s.number(),
    price: s.number(),
    fees: s.nullable(s.number()),
    type: investmentTransactionTypeSchema,
    subtype: investmentTransactionSubtypeSchema,
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      investmentTransactionId: "investment_transaction_id",
      accountId: "account_id",
      securityId: "security_id",
      vestedQuantity: "vested_quantity",
      vestedValue: "vested_value",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
