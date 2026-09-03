import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkDeliveryVerificationStatusSchema,
  type LinkDeliveryVerificationStatus,
} from "./link-delivery-verification-status.js";

export type LinkDeliveryAccount = {
  id?: string;
  name?: string;
  mask?: string;
  type?: string;
  subtype?: string;
  verificationStatus?: LinkDeliveryVerificationStatus;
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
