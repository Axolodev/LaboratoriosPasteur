import React from 'react';
import styled from 'styled-components';
import { MainText } from '../../styles/AppStyles';

const Div = styled.div`
	width: 100%;
	height: 25vh;
	background-color: #989898;
	text-align: center;
`; 

const Text = MainText(styled.p`
	font-size: 1.5em;
	color: white;
	font-style: italic;
`);

const Quote = (props) => (
	<Div>
		<Text>{props.text}</Text>
	</Div>
);

export default Quote;