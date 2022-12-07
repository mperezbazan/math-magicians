import React from 'react';

const QuoteContainer = () => {
  const data = {
    title: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: 'William Paul Thurston',
  };
  return (
    <div className="quote-container">
      <p className="quote-text">
        {`${data.title} -`}
        <span className="quote-author">
          {data.author}
        </span>
      </p>
    </div>
  );
};

export default QuoteContainer;
