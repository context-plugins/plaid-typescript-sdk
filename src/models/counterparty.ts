import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { counterpartyNumbersSchema, type CounterpartyNumbers } from "./counterparty-numbers.js";
import { counterpartyTypeSchema, type CounterpartyType } from "./counterparty-type.js";

export type Counterparty = {
  name: string;
  entityId?: string | null;
  type: CounterpartyType;
  website: string | null;
  logoUrl: string | null;
  confidenceLevel?: string | null;
  phoneNumber: string | null;
  accountNumbers?: CounterpartyNumbers | null;
};

export const counterpartySchema: Schema<Counterparty> = s.object<Counterparty>({
  name: s.string(),
  entityId: s.optionalNullable(s.string()),
  type: counterpartyTypeSchema,
  website: s.nullable(s.string()),
  logoUrl: s.nullable(s.string()),
  confidenceLevel: s.optionalNullable(s.string()),
  phoneNumber: s.nullable(s.string()),
  accountNumbers: s.optionalNullable(s.lazy(() => counterpartyNumbersSchema)),
  _keysMap: {
    entityId: "entity_id",
    logoUrl: "logo_url",
    confidenceLevel: "confidence_level",
    phoneNumber: "phone_number",
    accountNumbers: "account_numbers",
  },
});
