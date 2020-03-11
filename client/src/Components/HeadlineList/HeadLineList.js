import React from 'react';
import './style.css';
import HeadLineItem from '../HeadLineItem/HeadLineItem';


function HeadLineList ({ headlines }) {

  return (
    <div className="HeadLineList">
      <div className='flag' id="flagSpain"></div>
      <div className="wrapper wrapper-spain">
        {headlines
          .filter(headline => headline.locale === 'es-ES')
          .map(headline => <HeadLineItem key={headline.url} headline={headline} />
        )}
      </div>
      <div className='flag' id="flagUK"></div>
      <div className="wrapper">
        {headlines
          .filter(headline => headline.locale === 'en-GB')
          .map(headline => <HeadLineItem key={headline.url} headline={headline} />
          )}
      </div>
      <div className='flag' id="flagNL"></div>
      <div className="wrapper">
        {headlines
          .filter(headline => headline.locale === 'nl-NL')
          .map(headline => <HeadLineItem key={headline.url} headline={headline} />
          )}
      </div>
    </div>
  );
}

export default HeadLineList;
