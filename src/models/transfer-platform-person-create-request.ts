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

/** Defines the request schema for `/transfer/platform/person/create` */
export type TransferPlatformPersonCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The client ID of the originator */
  originatorClientId: string;
  /** The person's legal name */
  name?: TransferPlatformPersonName;
  /** A valid email address. Must not have leading or trailing spaces. */
  emailAddress?: string;
  /**
   * A valid phone number in E.164 format. Phone number input may be validated against valid number
   * ranges; number strings that do not match a real-world phone numbering scheme may cause the
   * request to fail, even in the Sandbox test environment.
   */
  phoneNumber?: string;
  /** Home address of a person */
  address?: TransferPlatformPersonAddress;
  /** ID number of the person */
  idNumber?: TransferPlatformPersonIdNumber;
  /** The date of birth of the person. Formatted as YYYY-MM-DD. */
  dateOfBirth?: string;
  /** The relationship between this person and the originator they are related to. */
  relationshipToOriginator?: string;
  /**
   * The percentage of ownership this person has in the onboarding business. Only applicable to
   * beneficial owners with 25% or more ownership.
   */
  ownershipPercentage?: number;
  /**
   * The title of the person at the business. Only applicable to control persons - for example,
   * "CEO", "President", "Owner", etc.
   */
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
    ownershipPercentage: s.optional(s.int()),
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
