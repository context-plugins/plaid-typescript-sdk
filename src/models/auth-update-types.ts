import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthUpdateTypes = {
  AccountNumber: "ACCOUNT_NUMBER",
  RoutingNumber: "ROUTING_NUMBER",
} as const;
export type AuthUpdateTypes = (typeof AuthUpdateTypes)[keyof typeof AuthUpdateTypes] | (string & {});

export const authUpdateTypesSchema: EnumSchema<AuthUpdateTypes> = s.enumOf<AuthUpdateTypes>(AuthUpdateTypes);
