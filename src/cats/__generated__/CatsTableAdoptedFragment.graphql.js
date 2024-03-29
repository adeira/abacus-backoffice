/**
 * @generated SignedSource<<28e4aacd7502a665a9a8ee7e300fb1db>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x relay
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { TableCellTripleCuadrupleFelinaFragment$fragmentType } from "./TableCellTripleCuadrupleFelinaFragment.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type CatsTableAdoptedFragment$fragmentType: FragmentType;
export type CatsTableAdoptedFragment$data = {|
  +adoptedCats: $ReadOnlyArray<{|
    +dateOfAdoption: ?string,
    +dateOfCastration: ?string,
    +dateOfDeworming: ?string,
    +dateOfVaccinationLeucemiaFelina: ?string,
    +dateOfVaccinationRabies: ?string,
    +name: string,
    +order: number,
    +$fragmentSpreads: TableCellTripleCuadrupleFelinaFragment$fragmentType,
  |}>,
  +$fragmentType: CatsTableAdoptedFragment$fragmentType,
|};
export type CatsTableAdoptedFragment$key = {
  +$data?: CatsTableAdoptedFragment$data,
  +$fragmentSpreads: CatsTableAdoptedFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CatsTableAdoptedFragment",
  "selections": [
    {
      "alias": "adoptedCats",
      "args": [
        {
          "kind": "Literal",
          "name": "allCatsFilter",
          "value": {
            "adopted": true
          }
        }
      ],
      "concreteType": "CatInfo",
      "kind": "LinkedField",
      "name": "listAllCats",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "order",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dateOfCastration",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dateOfDeworming",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dateOfAdoption",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dateOfVaccinationRabies",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TableCellTripleCuadrupleFelinaFragment"
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dateOfVaccinationLeucemiaFelina",
          "storageKey": null
        }
      ],
      "storageKey": "listAllCats(allCatsFilter:{\"adopted\":true})"
    }
  ],
  "type": "CatsQuery",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "a08dbf2b12029e92246319f1298db880";
}

module.exports = ((node/*: any*/)/*: Fragment<
  CatsTableAdoptedFragment$fragmentType,
  CatsTableAdoptedFragment$data,
>*/);
