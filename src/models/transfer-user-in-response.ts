import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferUserAddressInResponseSchema,
  type TransferUserAddressInResponse,
} from "./transfer-user-address-in-response.js";

export type TransferUserInResponse = {
  legalName: string;
  phoneNumber: string | null;
  emailAddress: string | null;
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
