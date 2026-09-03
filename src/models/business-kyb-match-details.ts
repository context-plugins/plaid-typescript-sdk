import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessEmailAddressSchema, type BusinessEmailAddress } from "./business-email-address.js";
import { businessEntityTypeSchema, type BusinessEntityType } from "./business-entity-type.js";
import { businessPhoneNumberSchema, type BusinessPhoneNumber } from "./business-phone-number.js";
import { businessWebsiteSchema, type BusinessWebsite } from "./business-website.js";
import { providerBusinessAddressSchema, type ProviderBusinessAddress } from "./provider-business-address.js";
import { providerBusinessNameSchema, type ProviderBusinessName } from "./provider-business-name.js";

export type BusinessKybMatchDetails = {
  names: ProviderBusinessName[];
  entityType: BusinessEntityType | null;
  addresses: ProviderBusinessAddress[];
  phoneNumbers: BusinessPhoneNumber[];
  emailAddresses: BusinessEmailAddress[];
  websites: BusinessWebsite[];
  formationDate: string | null;
};

export const businessKybMatchDetailsSchema: Schema<BusinessKybMatchDetails> =
  s.object<BusinessKybMatchDetails>({
    names: s.array(s.lazy(() => providerBusinessNameSchema)),
    entityType: s.nullable(s.lazy(() => businessEntityTypeSchema)),
    addresses: s.array(s.lazy(() => providerBusinessAddressSchema)),
    phoneNumbers: s.array(s.lazy(() => businessPhoneNumberSchema)),
    emailAddresses: s.array(s.lazy(() => businessEmailAddressSchema)),
    websites: s.array(s.lazy(() => businessWebsiteSchema)),
    formationDate: s.nullable(s.dateOnly()),
    _keysMap: {
      entityType: "entity_type",
      phoneNumbers: "phone_numbers",
      emailAddresses: "email_addresses",
      formationDate: "formation_date",
    },
  });
