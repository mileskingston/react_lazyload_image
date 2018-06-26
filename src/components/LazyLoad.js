import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';
import Spinner from './Spinner';

const Div = styled.div`
  position: relative;
  display: inline-block;
`;

class LazyLoad extends PureComponent() {
  componentDidMount() {
    const newImage = document.createElement('img');

    newImage.src = this.props.src;

    newImage.onload = () => {
      this.setState({ loaded: true });
    };
  }

  render () {
    const { props } = this;

    return (
      <Div>
        <Spinner />
        <img className={props.class} src={props.src} alt={props.alt} />
      </Div>
    );
  }
}

LazyLoad.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  class: PropTypes.string
};

LazyLoad.defaultProps = {
  alt: '',
  class: ''
};

export default LazyLoad;


  componentDidMount() {
    const newImage = document.createElement('img');

    newImage.src = this.props.src;

    newImage.onload = () => {
      this.setState({ loaded: true });
    };
  }

  render() {
    const { props, state } = this;
    const productImage = props.src
      ? <img className="dc-lazy-loaded-image__img" src={props.src} alt={props.alt} />
      : null;

    return (
      <div className={cx('dc-lazy-loaded-image', props.className)}>
        {state.loaded ? (productImage) : (<Loader />)}
      </div>
    );
  }
}
