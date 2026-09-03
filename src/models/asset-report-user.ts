import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportUser = {
  clientUserId?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  ssn?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
};

export const assetReportUserSchema: Schema<AssetReportUser> = s.object<AssetReportUser>({
  clientUserId: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  middleName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  ssn: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.string()),
  _keysMap: {
    clientUserId: "client_user_id",
    firstName: "first_name",
    middleName: "middle_name",
    lastName: "last_name",
    phoneNumber: "phone_number",
  },
});
