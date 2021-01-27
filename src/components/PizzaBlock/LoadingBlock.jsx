import React from 'react';
import ContentLoader from 'react-content-loader';

export const LoadingBlock = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={480}
      viewBox="0 0 280 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="260" rx="6" ry="6" width="260" height="25" />
      <rect x="0" y="430" rx="6" ry="6" width="90" height="30" />
      <rect x="130" y="420" rx="20" ry="20" width="130" height="40" />
      <circle cx="135" cy="120" r="120" />
      <rect x="0" y="310" rx="6" ry="6" width="260" height="85" />
    </ContentLoader>
  );
};
