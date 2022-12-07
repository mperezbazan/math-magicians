import React from 'react';

const QuoteContainer = () => {
  const data = {
    title: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: 'William Paul Thurston',
  };
  return (
    <div className="quote-container">
      <h1 className="quote-text">
        {`${data.title} -`}
        <span className="quote-author">
          {data.author}
        </span>
      </h1>
    </div>
  );
};

export default QuoteContainer;
