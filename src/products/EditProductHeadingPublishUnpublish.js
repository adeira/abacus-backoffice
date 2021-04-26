// @flow

import * as React from 'react';
import { fbt } from 'fbt';
import { graphql, useMutation } from '@adeira/relay';
import { useSetRecoilState } from 'recoil';

import LayoutHeadingButton from '../LayoutHeadingButton';
import { uiStatusBarAtom } from '../recoil/uiStatusBarAtom';
import type { EditProductHeadingPublishUnpublishPublishMutation } from './__generated__/EditProductHeadingPublishUnpublishPublishMutation.graphql';
import type { EditProductHeadingPublishUnpublishUnpublishMutation } from './__generated__/EditProductHeadingPublishUnpublishUnpublishMutation.graphql';

type Props = {
  +isPublished: boolean,
  +productKey: string,
};

export default function EditProductHeadingPublishUnpublish(
  props: Props,
): React.Element<typeof LayoutHeadingButton> {
  const setStatusBar = useSetRecoilState(uiStatusBarAtom);

  const [publishProductMutation] = useMutation<EditProductHeadingPublishUnpublishPublishMutation>(
    graphql`
      mutation EditProductHeadingPublishUnpublishPublishMutation($productKey: ID!) {
        commerce {
          productOrError: productPublish(productKey: $productKey) {
            ... on Product {
              __typename
            }
            ... on ProductError {
              __typename
              message
            }
          }
        }
      }
    `,
  );

  const [
    unpublishProductMutation,
  ] = useMutation<EditProductHeadingPublishUnpublishUnpublishMutation>(
    graphql`
      mutation EditProductHeadingPublishUnpublishUnpublishMutation($productKey: ID!) {
        commerce {
          productOrError: productUnpublish(productKey: $productKey) {
            ... on Product {
              __typename
            }
            ... on ProductError {
              __typename
              message
            }
          }
        }
      }
    `,
  );

  return props.isPublished === false ? (
    <LayoutHeadingButton
      confirmMessage={
        <fbt desc="publish product button confirmation message">
          Are you sure you want to publish this product?
        </fbt>
      }
      onClick={() => {
        publishProductMutation({
          variables: { productKey: props.productKey },
          onError: () => {
            setStatusBar({
              // TODO: DRY and improve these unexpected messages (see product creation)
              message: 'Something unexpected happened',
              type: 'error',
            });
          },
          onCompleted: ({ commerce: { productOrError } }) => {
            if (productOrError.__typename === 'Product') {
              setStatusBar({
                message: 'Product successfully published. ✅',
                type: 'success',
              });
              // router.push('/products');
            } else if (productOrError.__typename === 'ProductError') {
              setStatusBar({
                message: productOrError.message,
                type: 'error',
              });
            }
          },
        });
      }}
    >
      <fbt desc="publish product button title">Publish product</fbt>
    </LayoutHeadingButton>
  ) : (
    <LayoutHeadingButton
      confirmMessage={
        <fbt desc="unpublish product button confirmation message">
          Are you sure you want to unpublish this product?
        </fbt>
      }
      onClick={() => {
        unpublishProductMutation({
          variables: { productKey: props.productKey },
          onError: () => {
            setStatusBar({
              // TODO: DRY and improve these unexpected messages (see product creation)
              message: 'Something unexpected happened',
              type: 'error',
            });
          },
          onCompleted: ({ commerce: { productOrError } }) => {
            if (productOrError.__typename === 'Product') {
              setStatusBar({
                message: 'Product successfully unpublished. ✅',
                type: 'success',
              });
              // router.push('/products');
            } else if (productOrError.__typename === 'ProductError') {
              setStatusBar({
                message: productOrError.message,
                type: 'error',
              });
            }
          },
        });
      }}
    >
      <fbt desc="publish product button title">Unpublish product</fbt>
    </LayoutHeadingButton>
  );
}
