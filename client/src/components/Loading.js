import React, { Fragment } from 'react';

const Loading = () => {
  return (
    <Fragment>
      <div
        className='spinner-border'
        role='status'
        style={{ height: '100px', width: '100px', marginTop: '100px' }}
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </Fragment>
  );
};

export default Loading;
