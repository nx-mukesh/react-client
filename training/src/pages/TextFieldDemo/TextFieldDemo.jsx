import React from 'react';
import { Slider, TextField } from '../../components';

const TextFieldDemo = () => {
  const IMAGE_LIST = [
    'cloud.jpg',
    'dns-server.png',
    'default.png',
    'full-stack-web-development.jpg',
    'js.jpg',
    'load-balancer.png',
  ];
  return (
    <div className="textFieldDemo">
      <div className="slider">
        <Slider
          altText="img"
          banners={IMAGE_LIST}
          defaultBanner="default.png"
          duration={2000}
          height={300}
          random
        />
      </div>
      <div className="textFieldDemo__disable">
        <span>
          <b> This is Disable Input</b>
        </span>
        <TextField value="Disable Input" error="" disable />
      </div>
      <div className="textFieldDemo__valid">
        <span>
          <b> A Valid Input</b>
        </span>
        <TextField value="Accessible" />
      </div>
      <div className="textFieldDemo__error">
        <span>
          {' '}
          <b>An Input With Error</b>
        </span>
        <TextField border={{ border: 'red' }} value="101" error="could not be greater then" />
      </div>
    </div>
  );
};

export default TextFieldDemo;
