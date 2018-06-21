import React from 'react';
import styled from 'styled-components';
import { MainText } from '../../styles/AppStyles';

const Div = styled.div`
	width: 100%;
	height: 220px;
	text-align: center;
	vertical-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`; 

const Text = MainText(styled.p`
	font-size: 1.75em;
	color: white;
	font-style: italic;
	line-height: 1.25em;
	width: 50%;
`);

const Quote = (props) => (
	<Div>
		<Text>"{props.text}"</Text>
	</Div>
);

export default Quote;