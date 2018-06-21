import React from 'react';

import Quote from './Quote';
import DeliveryButton from './DeliveryButton';

import styled from 'styled-components';

const Contain = styled.div`
	width: 100%;
`;

const Separator = styled.div`
  padding: 45px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;


const ButtonQuoteContainer = (props) => (
	<Contain>
		<Separator>
			<DeliveryButton />
		</Separator>
		<Quote text={props.quote}/>
	</Contain>
);

export default ButtonQuoteContainer;