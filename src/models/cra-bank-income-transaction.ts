import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craBankIncomeBonusTypeSchema, type CraBankIncomeBonusType } from "./cra-bank-income-bonus-type.js";

export type CraBankIncomeTransaction = {
  transactionId: string;
  amount: number;
  date: string;
  name?: string;
  originalDescription: string | null;
  pending: boolean;
  checkNumber?: string | null;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  bonusType?: CraBankIncomeBonusType | null;
};

export const craBankIncomeTransactionSchema: Schema<CraBankIncomeTransaction> =
  s.object<CraBankIncomeTransaction>({
    transactionId: s.string(),
    amount: s.number(),
    date: s.dateOnly(),
    name: s.optional(s.string()),
    originalDescription: s.nullable(s.string()),
    pending: s.boolean(),
    checkNumber: s.optionalNullable(s.string()),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    bonusType: s.optionalNullable(s.lazy(() => craBankIncomeBonusTypeSchema)),
    _keysMap: {
      transactionId: "transaction_id",
      originalDescription: "original_description",
      checkNumber: "check_number",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      bonusType: "bonus_type",
    },
  });
