import React from 'react';

import { useParams } from 'react-router-dom';

export const withRouter = (WrappedComponent: any) => (props: any) => {
  const params = useParams();

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <WrappedComponent {...props} params={params} />;
};
