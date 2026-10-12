import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the use case of the transfer. Required for transfers on an ACH network.
 *
 * `"ccd"` - Corporate Credit or Debit - fund transfer between two corporate bank accounts
 *
 * `"ppd"` - Prearranged Payment or Deposit - The transfer is part of a pre-existing relationship
 * with a consumer. Authorization was obtained in writing either in person or via an electronic
 * document signing, e.g. Docusign, by the consumer. Can be used for credits or debits.
 *
 * `"web"` - Internet-Initiated Entry. The transfer debits a consumer's bank account. Authorization
 * from the consumer is obtained over the Internet (e.g. a web or mobile application). Can be used
 * for single debits or recurring debits.
 */
export const CreditAchClass = {
  Ccd: "ccd",
  Ppd: "ppd",
  Web: "web",
} as const;
export type CreditAchClass = (typeof CreditAchClass)[keyof typeof CreditAchClass] | (string & {});

export const creditAchClassSchema: EnumSchema<CreditAchClass> = s.enumOf<CreditAchClass>(CreditAchClass);
