import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { style } from './style';
import { PUBLIC_IMAGE_FOLDER, DEFAULT_BANNER_IMAGE } from '../../configs/constants';
import {getNextRoundRobin, gerRandomNumber} from '../../lib/utils/math';

const Slider = (props) => {
  const { altText, banners, defaultBanner, duration, height, random } = props;
  const [image, setImage] = useState('default.png');

  // const handleSlider = () => {
  //   const randomNumber = gerRandomNumber()
  //   console.log("handler called", randomNumber)
  //   return randomNumber;
  // }

//   useEffect(()=>{
//     setImage(banners[random])
//     if(getNextRoundRobin)
//     const randomSlider = setInterval(handleSlider, 200)
//     console.log("handler called", image)
//  },[])

  return (
    <section className="slide">
      <div className={style.slider__img} style={{ height: '400px', alineItem: 'center' }}>
        <img src={`${PUBLIC_IMAGE_FOLDER}${image}`} alt={altText} />
      </div>
    </section>
  );
};

Slider.propsTypes = {
  altText: PropTypes.string,
  banners: PropTypes.array,
  defaultBanner: PropTypes.string,
  duration: PropTypes.number,
  height: PropTypes.number,
  random: PropTypes.bool,
};

Slider.defaultProps = {
  altText: 'img',
  banners: [],
  defaultBanner: 'default.png',
  duration: 2000,
  height: 200,
  random: false,
};

export default Slider;
