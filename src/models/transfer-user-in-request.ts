import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferUserAddressInRequestSchema,
  type TransferUserAddressInRequest,
} from "./transfer-user-address-in-request.js";

/** The legal name and other information for the account holder. */
export type TransferUserInRequest = {
  /** The user's legal name. */
  legalName: string;
  /**
   * The user's phone number. Phone number input may be validated against valid number ranges;
   * number strings that do not match a real-world phone numbering scheme may cause the request to
   * fail, even in the Sandbox test environment.
   */
  phoneNumber?: string;
  /** The user's email address. */
  emailAddress?: string;
  /** The address associated with the account holder. */
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
