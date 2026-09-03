import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProxyType = {
  NoneDetected: "none_detected",
  Tor: "tor",
  Vpn: "vpn",
  WebProxy: "web_proxy",
  PublicProxy: "public_proxy",
} as const;
export type ProxyType = (typeof ProxyType)[keyof typeof ProxyType] | (string & {});

export const proxyTypeSchema: EnumSchema<ProxyType> = s.enumOf<ProxyType>(ProxyType);
