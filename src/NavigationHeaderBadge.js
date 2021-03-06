// @flow

import fbt from 'fbt';
import React, { type Node } from 'react';
import sx from '@adeira/sx';
import { graphql, useLazyLoadQuery } from '@adeira/relay';

function ProdBadge(): Node {
  return (
    <span className={styles('prod')}>
      <fbt desc="prod as in production">PROD</fbt>
    </span>
  );
}

function DevBadge(): Node {
  return (
    <span className={styles('dev')}>
      <fbt desc="dev as in development">DEV</fbt>
    </span>
  );
}

export default function NavigationHeaderBadge(): Node {
  // eslint-disable-next-line relay/generated-flow-types -- https://github.com/relayjs/eslint-plugin-relay/issues/131
  const data = useLazyLoadQuery(
    graphql`
      query NavigationHeaderBadgeQuery {
        auth {
          whoami {
            isDebugAssertionsEnabled
          }
        }
      }
    `,
    Object.freeze({}),
    {
      fetchPolicy: 'store-or-network',
    },
  );

  return data.auth.whoami.isDebugAssertionsEnabled === true ? <DevBadge /> : <ProdBadge />;
}

const styles = sx.create({
  dev: {
    color: 'rgba(var(--sx-success))',
  },
  prod: {
    color: 'rgba(var(--sx-error))',
  },
});
