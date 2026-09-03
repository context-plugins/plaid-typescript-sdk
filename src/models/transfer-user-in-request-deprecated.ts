import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferUserAddressInRequestSchema,
  type TransferUserAddressInRequest,
} from "./transfer-user-address-in-request.js";

export type TransferUserInRequestDeprecated = {
  legalName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  address?: TransferUserAddressInRequest;
};

export const transferUserInRequestDeprecatedSchema: Schema<TransferUserInRequestDeprecated> =
  s.object<TransferUserInRequestDeprecated>({
    legalName: s.optional(s.string()),
    phoneNumber: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    address: s.optional(s.lazy(() => transferUserAddressInRequestSchema)),
    _keysMap: {
      legalName: "legal_name",
      phoneNumber: "phone_number",
      emailAddress: "email_address",
    },
  });
