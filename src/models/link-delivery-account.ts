import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkDeliveryVerificationStatusSchema,
  type LinkDeliveryVerificationStatus,
} from "./link-delivery-verification-status.js";

/** Information related to account attached to the connected Item */
export type LinkDeliveryAccount = {
  /** The Plaid `account_id` */
  id?: string;
  /** The official account name */
  name?: string;
  /**
   * The last 2-4 alphanumeric characters of an account's official account number. Note that the
   * mask may be non-unique between an Item's accounts. It may also not match the mask that the bank
   * displays to the user.
   */
  mask?: string;
  /**
   * The account type. See the [Account
   * schema](https://plaid.com/docs/api/accounts/#account-type-schema) for a full list of possible
   * values
   */
  type?: string;
  /**
   * The account subtype. See the [Account
   * schema](https://plaid.com/docs/api/accounts/#account-type-schema) for a full list of possible
   * values
   */
  subtype?: string;
  /** Indicates an Item's micro-deposit-based verification or database verification status. */
  verificationStatus?: LinkDeliveryVerificationStatus;
  /**
   * If micro-deposit verification is being used, indicates whether the account being verified is a
   * `business` or `personal` account.
   */
  classType?: string;
};

export const linkDeliveryAccountSchema: Schema<LinkDeliveryAccount> = s.object<LinkDeliveryAccount>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  mask: s.optional(s.string()),
  type: s.optional(s.string()),
  subtype: s.optional(s.string()),
  verificationStatus: s.optional(s.lazy(() => linkDeliveryVerificationStatusSchema)),
  classType: s.optional(s.string()),
  _keysMap: {
    verificationStatus: "verification_status",
    classType: "class_type",
  },
});
