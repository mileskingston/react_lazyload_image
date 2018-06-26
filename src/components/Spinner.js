import React from 'react';
import styled from 'styled-components';
import icon from '../img/icon-loading.gif';

const Img = styled.img`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Spinner = () => (
  <Img className="img" src={icon} alt="spinner" />
);

export default Spinner;
