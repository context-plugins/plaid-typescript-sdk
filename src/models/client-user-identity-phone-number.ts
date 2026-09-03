import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientUserIdentityPhoneNumber = {
  data: string;
  primary: boolean;
};

export const clientUserIdentityPhoneNumberSchema: Schema<ClientUserIdentityPhoneNumber> =
  s.object<ClientUserIdentityPhoneNumber>({
    data: s.string(),
    primary: s.boolean(),
  });
