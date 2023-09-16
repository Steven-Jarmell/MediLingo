import React from 'react';

interface ErrorPageProps {
  errorCode: number;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode }) => {
  return (
    <div>
      <img src={`https://http.cat/${errorCode}`} alt={`Error ${errorCode}`} />
    </div>
  );
};

export default ErrorPage;
