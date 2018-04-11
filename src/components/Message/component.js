import React from 'react';

export default ({ msg }) => {
  const content = msg || 'You\'re here!';

  return <div className="text -message">{ content }</div>;
};


