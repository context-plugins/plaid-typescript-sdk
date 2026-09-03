import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { consentedDataScopeSchema, type ConsentedDataScope } from "./consented-data-scope.js";
import { errorSchema, type Error } from "./error.js";
import { itemAuthMethodSchema, type ItemAuthMethod } from "./item-auth-method.js";
import { productsSchema, type Products } from "./products.js";
import { updateTypeSchema, type UpdateType } from "./update-type.js";

export type ItemWithConsentFields = {
  itemId: string;
  institutionId?: string | null;
  institutionName?: string | null;
  webhook: string | null;
  authMethod?: ItemAuthMethod | null;
  error: Error | null;
  availableProducts: Products[];
  billedProducts: Products[];
  products?: Products[];
  consentedProducts?: Products[];
  consentExpirationTime: Date | null;
  updateType: UpdateType;
  createdAt?: Date;
  consentedUseCases?: string[];
  consentedDataScopes?: ConsentedDataScope[];
};

export const itemWithConsentFieldsSchema: Schema<ItemWithConsentFields> = s.object<ItemWithConsentFields>({
  itemId: s.string(),
  institutionId: s.optionalNullable(s.string()),
  institutionName: s.optionalNullable(s.string()),
  webhook: s.nullable(s.string()),
  authMethod: s.optionalNullable(s.lazy(() => itemAuthMethodSchema)),
  error: s.nullable(s.lazy(() => errorSchema)),
  availableProducts: s.array(s.lazy(() => productsSchema)),
  billedProducts: s.array(s.lazy(() => productsSchema)),
  products: s.optional(s.array(s.lazy(() => productsSchema))),
  consentedProducts: s.optional(s.array(s.lazy(() => productsSchema))),
  consentExpirationTime: s.nullable(s.dateTime()),
  updateType: updateTypeSchema,
  createdAt: s.optional(s.dateTime()),
  consentedUseCases: s.optional(s.array(s.string())),
  consentedDataScopes: s.optional(s.array(s.lazy(() => consentedDataScopeSchema))),
  _keysMap: {
    itemId: "item_id",
    institutionId: "institution_id",
    institutionName: "institution_name",
    authMethod: "auth_method",
    availableProducts: "available_products",
    billedProducts: "billed_products",
    consentedProducts: "consented_products",
    consentExpirationTime: "consent_expiration_time",
    updateType: "update_type",
    createdAt: "created_at",
    consentedUseCases: "consented_use_cases",
    consentedDataScopes: "consented_data_scopes",
  },
});
