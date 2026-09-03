import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferUserAddressInRequestSchema,
  type TransferUserAddressInRequest,
} from "./transfer-user-address-in-request.js";

export type TransferUserInRequest = {
  legalName: string;
  phoneNumber?: string;
  emailAddress?: string;
  address?: TransferUserAddressInRequest;
};

export const transferUserInRequestSchema: Schema<TransferUserInRequest> = s.object<TransferUserInRequest>({
  legalName: s.string(),
  phoneNumber: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
  address: s.optional(s.lazy(() => transferUserAddressInRequestSchema)),
  _keysMap: {
    legalName: "legal_name",
    phoneNumber: "phone_number",
    emailAddress: "email_address",
  },
});
