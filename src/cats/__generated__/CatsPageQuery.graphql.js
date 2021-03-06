/**
 * @generated SignedSource<<628cb02d4316f60fb66df278061a8447>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x relay
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type CatsTableAdoptedFragment$fragmentType = any;
type CatsTableCurrentFragment$fragmentType = any;
export type CatsPageQuery$variables = {||};
export type CatsPageQuery$data = {|
  +cats: {|
    +$fragmentSpreads: CatsTableAdoptedFragment$fragmentType & CatsTableCurrentFragment$fragmentType,
  |},
|};
export type CatsPageQuery = {|
  response: CatsPageQuery$data,
  variables: CatsPageQuery$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "order",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateOfCastration",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateOfDeworming",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateOfVaccinationRabies",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateOfVaccinationTripleFelina",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateOfVaccinationCuadrupleFelina",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateOfVaccinationLeucemiaFelina",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CatsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CatsQuery",
        "kind": "LinkedField",
        "name": "cats",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CatsTableCurrentFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CatsTableAdoptedFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CatsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CatsQuery",
        "kind": "LinkedField",
        "name": "cats",
        "plural": false,
        "selections": [
          {
            "alias": "currentCats",
            "args": [
              {
                "kind": "Literal",
                "name": "allCatsFilter",
                "value": {
                  "adopted": false
                }
              }
            ],
            "concreteType": "CatInfo",
            "kind": "LinkedField",
            "name": "listAllCats",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "canBeAdopted",
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "storageKey": "listAllCats(allCatsFilter:{\"adopted\":false})"
          },
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
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dateOfAdoption",
                "storageKey": null
              },
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "storageKey": "listAllCats(allCatsFilter:{\"adopted\":true})"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b78c2ab3bff4970dcc3c7c9b3d9854df",
    "id": null,
    "metadata": {},
    "name": "CatsPageQuery",
    "operationKind": "query",
    "text": "query CatsPageQuery {\n  cats {\n    ...CatsTableCurrentFragment\n    ...CatsTableAdoptedFragment\n  }\n}\n\nfragment CatsTableAdoptedFragment on CatsQuery {\n  adoptedCats: listAllCats(allCatsFilter: {adopted: true}) {\n    order\n    name\n    dateOfCastration\n    dateOfDeworming\n    dateOfAdoption\n    dateOfVaccinationRabies\n    ...TableCellTripleCuadrupleFelinaFragment\n    dateOfVaccinationLeucemiaFelina\n    id\n  }\n}\n\nfragment CatsTableCurrentFragment on CatsQuery {\n  currentCats: listAllCats(allCatsFilter: {adopted: false}) {\n    order\n    name\n    canBeAdopted\n    dateOfCastration\n    dateOfDeworming\n    dateOfVaccinationRabies\n    ...TableCellTripleCuadrupleFelinaFragment\n    dateOfVaccinationLeucemiaFelina\n    id\n  }\n}\n\nfragment TableCellTripleCuadrupleFelinaFragment on CatInfo {\n  dateOfVaccinationTripleFelina\n  dateOfVaccinationCuadrupleFelina\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "d80b8aeae3eee43d423c79777e38c450";
}

module.exports = ((node/*: any*/)/*: Query<
  CatsPageQuery$variables,
  CatsPageQuery$data,
>*/);
