import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalAddressDataSchema, type SignalAddressData } from "./signal-address-data.js";
import { signalPersonNameSchema, type SignalPersonName } from "./signal-person-name.js";

export type SignalUser = {
  name?: SignalPersonName | null;
  phoneNumber?: string | null;
  emailAddress?: string | null;
  address?: SignalAddressData | null;
};

export const signalUserSchema: Schema<SignalUser> = s.object<SignalUser>({
  name: s.optionalNullable(s.lazy(() => signalPersonNameSchema)),
  phoneNumber: s.optionalNullable(s.string()),
  emailAddress: s.optionalNullable(s.string()),
  address: s.optionalNullable(s.lazy(() => signalAddressDataSchema)),
  _keysMap: {
    phoneNumber: "phone_number",
    emailAddress: "email_address",
  },
});
