import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentsAuth401KContributionDetailsSchema,
  type InvestmentsAuth401KContributionDetails,
} from "./investments-auth401-kcontribution-details.js";
import {
  investmentsAuth401KFeeDetailsSchema,
  type InvestmentsAuth401KFeeDetails,
} from "./investments-auth401-kfee-details.js";

export type InvestmentsAuthAccountDetails401K = {
  accountId?: string;
  feeDetails?: InvestmentsAuth401KFeeDetails;
  contributionDetails?: InvestmentsAuth401KContributionDetails;
};

export const investmentsAuthAccountDetails401KSchema: Schema<InvestmentsAuthAccountDetails401K> =
  s.object<InvestmentsAuthAccountDetails401K>({
    accountId: s.optional(s.string()),
    feeDetails: s.optional(s.lazy(() => investmentsAuth401KFeeDetailsSchema)),
    contributionDetails: s.optional(s.lazy(() => investmentsAuth401KContributionDetailsSchema)),
    _keysMap: {
      accountId: "account_id",
      feeDetails: "fee_details",
      contributionDetails: "contribution_details",
    },
  });
