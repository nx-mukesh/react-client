import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { style } from './style';
import { PUBLIC_IMAGE_FOLDER } from '../../configs/constants';
import { gerRandomNumber } from '../../lib/utils/math';

const Slider = (props) => {
  const { altText, banners, defaultBanner, duration, height, random } = props;

  const [image, setImage] = useState(defaultBanner);

  useEffect(() => {
    setInterval(() => {
      const interval = gerRandomNumber();
      setImage(banners[interval]);
    }, duration);
  }, [random]);

  return (
    <section className="slide" style={{ height }}>
      <div className="slider__img_block" style={style.slider__img_block}>
        <img style={style.slider__img} src={`${PUBLIC_IMAGE_FOLDER}${image}`} alt={altText} />
      </div>
    </section>
  );
};

Slider.propTypes = {
  altText: PropTypes.string,
  banners: PropTypes.string,
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
  height: 300,
  random: false,
};

export default Slider;
