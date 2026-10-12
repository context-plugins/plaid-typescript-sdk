import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferUserAddressInRequestSchema,
  type TransferUserAddressInRequest,
} from "./transfer-user-address-in-request.js";

/** The legal name and other information for the account holder. */
export type TransferUserInRequestDeprecated = {
  /** The user's legal name. */
  legalName?: string;
  /** The user's phone number. */
  phoneNumber?: string;
  /** The user's email address. */
  emailAddress?: string;
  /** The address associated with the account holder. */
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
