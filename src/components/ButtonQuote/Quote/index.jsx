import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	width: 100%;
	height: 220px;
	text-align: center;
	vertical-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`; 

/**
 * CHANGE FONT FAMILY
 */
const Text = styled.p`
	font-size: 1.65rem;
	color: white;
	font-style: italic;
	line-height: 1.25em;
	width: 50%;
`;

const Quote = ({text}) => (
	<Div>
		<Text>"{text}"</Text>
	</Div>
);

export default Quote;