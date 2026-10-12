import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferUserAddressInResponseSchema,
  type TransferUserAddressInResponse,
} from "./transfer-user-address-in-response.js";

/** The legal name and other information for the account holder. */
export type TransferUserInResponse = {
  /** The user's legal name. */
  legalName: string;
  /** The user's phone number. */
  phoneNumber: string | null;
  /** The user's email address. */
  emailAddress: string | null;
  /** The address associated with the account holder. */
  address: TransferUserAddressInResponse | null;
};

export const transferUserInResponseSchema: Schema<TransferUserInResponse> = s.object<TransferUserInResponse>({
  legalName: s.string(),
  phoneNumber: s.nullable(s.string()),
  emailAddress: s.nullable(s.string()),
  address: s.nullable(s.lazy(() => transferUserAddressInResponseSchema)),
  _keysMap: {
    legalName: "legal_name",
    phoneNumber: "phone_number",
    emailAddress: "email_address",
  },
});
