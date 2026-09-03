import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NetworkStatusGetUser = {
  phoneNumber: string;
};

export const networkStatusGetUserSchema: Schema<NetworkStatusGetUser> = s.object<NetworkStatusGetUser>({
  phoneNumber: s.string(),
  _keysMap: {
    phoneNumber: "phone_number",
  },
});
