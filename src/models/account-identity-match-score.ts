import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountBalanceSchema, type AccountBalance } from "./account-balance.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import { addressMatchScoreSchema, type AddressMatchScore } from "./address-match-score.js";
import { emailAddressMatchScoreSchema, type EmailAddressMatchScore } from "./email-address-match-score.js";
import { holderCategorySchema, type HolderCategory } from "./holder-category.js";
import { nameMatchScoreSchema, type NameMatchScore } from "./name-match-score.js";
import { phoneNumberMatchScoreSchema, type PhoneNumberMatchScore } from "./phone-number-match-score.js";
import { verificationInsightsSchema, type VerificationInsights } from "./verification-insights.js";
import { verificationStatus5Schema, type VerificationStatus5 } from "./verification-status5.js";

export type AccountIdentityMatchScore = {
  accountId: string;
  balances: AccountBalance;
  mask: string | null;
  name: string;
  officialName: string | null;
  type: AccountType;
  subtype: AccountSubtype | null;
  verificationStatus?: VerificationStatus5;
  verificationName?: string;
  verificationInsights?: VerificationInsights;
  persistentAccountId?: string;
  holderCategory?: HolderCategory | null;
  legalName?: NameMatchScore | null;
  phoneNumber?: PhoneNumberMatchScore | null;
  emailAddress?: EmailAddressMatchScore | null;
  address?: AddressMatchScore | null;
};

export const accountIdentityMatchScoreSchema: Schema<AccountIdentityMatchScore> =
  s.object<AccountIdentityMatchScore>({
    accountId: s.string(),
    balances: accountBalanceSchema,
    mask: s.nullable(s.string()),
    name: s.string(),
    officialName: s.nullable(s.string()),
    type: accountTypeSchema,
    subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
    verificationStatus: s.optional(s.lazy(() => verificationStatus5Schema)),
    verificationName: s.optional(s.string()),
    verificationInsights: s.optional(s.lazy(() => verificationInsightsSchema)),
    persistentAccountId: s.optional(s.string()),
    holderCategory: s.optionalNullable(s.lazy(() => holderCategorySchema)),
    legalName: s.optionalNullable(s.lazy(() => nameMatchScoreSchema)),
    phoneNumber: s.optionalNullable(s.lazy(() => phoneNumberMatchScoreSchema)),
    emailAddress: s.optionalNullable(s.lazy(() => emailAddressMatchScoreSchema)),
    address: s.optionalNullable(s.lazy(() => addressMatchScoreSchema)),
    _keysMap: {
      accountId: "account_id",
      officialName: "official_name",
      verificationStatus: "verification_status",
      verificationName: "verification_name",
      verificationInsights: "verification_insights",
      persistentAccountId: "persistent_account_id",
      holderCategory: "holder_category",
      legalName: "legal_name",
      phoneNumber: "phone_number",
      emailAddress: "email_address",
    },
  });
