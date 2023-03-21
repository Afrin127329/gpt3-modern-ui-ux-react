import React from 'react';
import './brand.css';
import { atlassian, dropbox, google, shopify, slack } from './imports';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="brand images" />
    </div>
    <div>
      <img src={slack}  alt="brand images"/>
    </div>
    <div>
      <img src={atlassian} alt="brand images" />
    </div>
    <div>
      <img src={dropbox} alt="brand images" />
    </div>
    <div>
      <img src={shopify}  alt="brand images"/>
    </div>
  </div>
);

export default Brand;