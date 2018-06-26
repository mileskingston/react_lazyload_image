import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  border: 1px solid red;
`;

const Image = props => (
  <Img className="img" src="http://via.placeholder.com/400x200" alt="placeholder" />
);

export default Image;
