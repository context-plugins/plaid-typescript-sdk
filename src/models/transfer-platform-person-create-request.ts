import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferPlatformPersonAddressSchema,
  type TransferPlatformPersonAddress,
} from "./transfer-platform-person-address.js";
import {
  transferPlatformPersonIdNumberSchema,
  type TransferPlatformPersonIdNumber,
} from "./transfer-platform-person-id-number.js";
import {
  transferPlatformPersonNameSchema,
  type TransferPlatformPersonName,
} from "./transfer-platform-person-name.js";

export type TransferPlatformPersonCreateRequest = {
  clientId?: string;
  secret?: string;
  originatorClientId: string;
  name?: TransferPlatformPersonName;
  emailAddress?: string;
  phoneNumber?: string;
  address?: TransferPlatformPersonAddress;
  idNumber?: TransferPlatformPersonIdNumber;
  dateOfBirth?: string;
  relationshipToOriginator?: string;
  ownershipPercentage?: number;
  title?: string;
};

export const transferPlatformPersonCreateRequestSchema: Schema<TransferPlatformPersonCreateRequest> =
  s.object<TransferPlatformPersonCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.string(),
    name: s.optional(s.lazy(() => transferPlatformPersonNameSchema)),
    emailAddress: s.optional(s.string()),
    phoneNumber: s.optional(s.string()),
    address: s.optional(s.lazy(() => transferPlatformPersonAddressSchema)),
    idNumber: s.optional(s.lazy(() => transferPlatformPersonIdNumberSchema)),
    dateOfBirth: s.optional(s.dateOnly()),
    relationshipToOriginator: s.optional(s.string()),
    ownershipPercentage: s.optional(s.number()),
    title: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      emailAddress: "email_address",
      phoneNumber: "phone_number",
      idNumber: "id_number",
      dateOfBirth: "date_of_birth",
      relationshipToOriginator: "relationship_to_originator",
      ownershipPercentage: "ownership_percentage",
    },
  });
