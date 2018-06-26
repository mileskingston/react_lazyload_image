import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import cx from 'classnames';
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

  render() {
    const { props } = this;

    const productImage = props.src
      ? <img className={props.class} src={props.src} alt={props.alt} />
      : null;

    return (
      <Div>
        {this.state.loaded ? productImage : <Spinner />}
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
