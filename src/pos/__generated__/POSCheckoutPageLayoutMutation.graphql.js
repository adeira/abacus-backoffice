/**
 * @generated SignedSource<<3addc7d25a4e250f33487db095b34f9a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x relay
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type SupportedCurrency = "MXN" | "%future added value";
export type SupportedLocale = "en_US" | "es_MX" | "%future added value";
export type PosCheckoutProductInput = {|
  productAddons?: ?$ReadOnlyArray<PosCheckoutProductAddonInput>,
  productKey: string,
  productPriceUnitAmount: number,
  productPriceUnitAmountCurrency: SupportedCurrency,
  productUnits: number,
|};
export type PosCheckoutProductAddonInput = {|
  productAddonExtraPriceUnitAmount: number,
  productAddonExtraPriceUnitAmountCurrency: SupportedCurrency,
  productAddonId: string,
|};
export type POSCheckoutPageLayoutMutation$variables = {|
  checkoutInput: $ReadOnlyArray<PosCheckoutProductInput>,
  clientLocale: SupportedLocale,
|};
export type POSCheckoutPageLayoutMutation$data = {|
  +pos: {|
    +checkout: {|
      +__typename: "PosCheckoutError",
      +message: string,
    |} | {|
      +__typename: "PosCheckoutPayload",
      +id: string,
    |} | {|
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      +__typename: "%other",
    |},
  |},
|};
export type POSCheckoutPageLayoutMutation = {|
  response: POSCheckoutPageLayoutMutation$data,
  variables: POSCheckoutPageLayoutMutation$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "checkoutInput"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "clientLocale"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "POSMutation",
    "kind": "LinkedField",
    "name": "pos",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "clientLocale",
            "variableName": "clientLocale"
          },
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "selectedProducts",
                "variableName": "checkoutInput"
              }
            ],
            "kind": "ObjectValue",
            "name": "input"
          }
        ],
        "concreteType": null,
        "kind": "LinkedField",
        "name": "checkout",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "type": "PosCheckoutPayload",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "message",
                "storageKey": null
              }
            ],
            "type": "PosCheckoutError",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "POSCheckoutPageLayoutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "POSCheckoutPageLayoutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "41a13f602a0a4a2000c5219e421cc69a",
    "id": null,
    "metadata": {},
    "name": "POSCheckoutPageLayoutMutation",
    "operationKind": "mutation",
    "text": "mutation POSCheckoutPageLayoutMutation(\n  $checkoutInput: [PosCheckoutProductInput!]!\n  $clientLocale: SupportedLocale!\n) {\n  pos {\n    checkout(input: {selectedProducts: $checkoutInput}, clientLocale: $clientLocale) {\n      __typename\n      ... on PosCheckoutPayload {\n        id\n      }\n      ... on PosCheckoutError {\n        message\n      }\n    }\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "3b8a9c4decbee14c8acb49768c9d3091";
}

module.exports = ((node/*: any*/)/*: Mutation<
  POSCheckoutPageLayoutMutation$variables,
  POSCheckoutPageLayoutMutation$data,
>*/);
