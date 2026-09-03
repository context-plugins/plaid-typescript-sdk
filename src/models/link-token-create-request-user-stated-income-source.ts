import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  userStatedIncomeSourceCategorySchema,
  type UserStatedIncomeSourceCategory,
} from "./user-stated-income-source-category.js";
import {
  userStatedIncomeSourceFrequencySchema,
  type UserStatedIncomeSourceFrequency,
} from "./user-stated-income-source-frequency.js";
import {
  userStatedIncomeSourcePayTypeSchema,
  type UserStatedIncomeSourcePayType,
} from "./user-stated-income-source-pay-type.js";

export type LinkTokenCreateRequestUserStatedIncomeSource = {
  employer?: string;
  category?: UserStatedIncomeSourceCategory;
  payPerCycle?: number;
  payAnnual?: number;
  payType?: UserStatedIncomeSourcePayType;
  payFrequency?: UserStatedIncomeSourceFrequency;
};

export const linkTokenCreateRequestUserStatedIncomeSourceSchema: Schema<LinkTokenCreateRequestUserStatedIncomeSource> =
  s.object<LinkTokenCreateRequestUserStatedIncomeSource>({
    employer: s.optional(s.string()),
    category: s.optional(s.lazy(() => userStatedIncomeSourceCategorySchema)),
    payPerCycle: s.optional(s.number()),
    payAnnual: s.optional(s.number()),
    payType: s.optional(s.lazy(() => userStatedIncomeSourcePayTypeSchema)),
    payFrequency: s.optional(s.lazy(() => userStatedIncomeSourceFrequencySchema)),
    _keysMap: {
      payPerCycle: "pay_per_cycle",
      payAnnual: "pay_annual",
      payType: "pay_type",
      payFrequency: "pay_frequency",
    },
  });
