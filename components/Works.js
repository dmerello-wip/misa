import React from 'react';

const Works = ({works}) => {

  const renderWorks = () => {
    return works.map((el) => {
      return (
        <div key={`work-${el.id}`}>
          <h2>{el.title}</h2>
          <h4>{el.author}</h4>
          <img src={`images/works/${el.picture}`} alt=""/>
        </div>
      )
    });
  };

  return (
    <>
    {renderWorks()}
    </>
  );
};

export default Works;