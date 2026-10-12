import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object specifying information about the end user for the network status check. */
export type NetworkStatusGetUser = {
  /** The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format. */
  phoneNumber: string;
};

export const networkStatusGetUserSchema: Schema<NetworkStatusGetUser> = s.object<NetworkStatusGetUser>({
  phoneNumber: s.string(),
  _keysMap: {
    phoneNumber: "phone_number",
  },
});
