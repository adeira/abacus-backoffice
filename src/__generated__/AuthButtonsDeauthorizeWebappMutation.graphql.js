/**
 * @generated SignedSource<<2b2e0de449cee914864036a0ae030a37>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x relay
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type AuthButtonsDeauthorizeWebappMutation$variables = {|
  sessionToken: string,
|};
export type AuthButtonsDeauthorizeWebappMutation$data = {|
  +auth: {|
    +deauthorize: {|
      +__typename: "DeauthorizePayload",
    |},
  |},
|};
export type AuthButtonsDeauthorizeWebappMutation = {|
  response: AuthButtonsDeauthorizeWebappMutation$data,
  variables: AuthButtonsDeauthorizeWebappMutation$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "sessionToken"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AuthMutation",
    "kind": "LinkedField",
    "name": "auth",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "sessionToken",
            "variableName": "sessionToken"
          }
        ],
        "concreteType": "DeauthorizePayload",
        "kind": "LinkedField",
        "name": "deauthorize",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
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
    "name": "AuthButtonsDeauthorizeWebappMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthButtonsDeauthorizeWebappMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a1d61ef9afb3b5bb22a7c3956175547b",
    "id": null,
    "metadata": {},
    "name": "AuthButtonsDeauthorizeWebappMutation",
    "operationKind": "mutation",
    "text": "mutation AuthButtonsDeauthorizeWebappMutation(\n  $sessionToken: String!\n) {\n  auth {\n    deauthorize(sessionToken: $sessionToken) {\n      __typename\n    }\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "901b16d0f2f66b120f8dde76d966dfff";
}

module.exports = ((node/*: any*/)/*: Mutation<
  AuthButtonsDeauthorizeWebappMutation$variables,
  AuthButtonsDeauthorizeWebappMutation$data,
>*/);
