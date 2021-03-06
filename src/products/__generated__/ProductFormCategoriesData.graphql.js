/**
 * @generated SignedSource<<a401f20eb0214dc32b93ab6cc4cb2fcb>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x relay
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ProductFormCategoriesData$fragmentType: FragmentType;
export type ProductFormCategoriesData$data = $ReadOnlyArray<{|
  +id: string,
  +name: string,
  +$fragmentType: ProductFormCategoriesData$fragmentType,
|}>;
export type ProductFormCategoriesData$key = $ReadOnlyArray<{
  +$data?: ProductFormCategoriesData$data,
  +$fragmentSpreads: ProductFormCategoriesData$fragmentType,
  ...
}>;
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ProductFormCategoriesData",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "ProductCategory",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "c60bf51d24be138f3f671ef64bb967d1";
}

module.exports = ((node/*: any*/)/*: Fragment<
  ProductFormCategoriesData$fragmentType,
  ProductFormCategoriesData$data,
>*/);
