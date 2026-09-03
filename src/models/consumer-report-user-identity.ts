import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressDataSchema, type AddressData } from "./address-data.js";

export type ConsumerReportUserIdentity = {
  firstName: string;
  lastName: string;
  phoneNumbers: string[];
  emails: string[];
  ssnFull?: string | null;
  ssnLast4?: string | null;
  dateOfBirth: string | null;
  primaryAddress: AddressData;
};

export const consumerReportUserIdentitySchema: Schema<ConsumerReportUserIdentity> =
  s.object<ConsumerReportUserIdentity>({
    firstName: s.string(),
    lastName: s.string(),
    phoneNumbers: s.array(s.string()),
    emails: s.array(s.string()),
    ssnFull: s.optionalNullable(s.string()),
    ssnLast4: s.optionalNullable(s.string()),
    dateOfBirth: s.nullable(s.dateOnly()),
    primaryAddress: addressDataSchema,
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      phoneNumbers: "phone_numbers",
      ssnFull: "ssn_full",
      ssnLast4: "ssn_last_4",
      dateOfBirth: "date_of_birth",
      primaryAddress: "primary_address",
    },
  });
