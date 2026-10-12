import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferUserAddressInRequestSchema,
  type TransferUserAddressInRequest,
} from "./transfer-user-address-in-request.js";

/**
 * The legal name and other information for the account holder. If the account has multiple account
 * holders, provide the information for the account holder on whose behalf the authorization is
 * being requested. The `user.legal_name` field is required. Other fields are not currently used and
 * are present to support planned future functionality.
 */
export type TransferAuthorizationUserInRequest = {
  /** The user's legal name. If the user is a business, provide the business name. */
  legalName: string;
  /** The user's phone number. */
  phoneNumber?: string;
  /** The user's email address. */
  emailAddress?: string;
  /** The address associated with the account holder. */
  address?: TransferUserAddressInRequest;
};

export const transferAuthorizationUserInRequestSchema: Schema<TransferAuthorizationUserInRequest> =
  s.object<TransferAuthorizationUserInRequest>({
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
