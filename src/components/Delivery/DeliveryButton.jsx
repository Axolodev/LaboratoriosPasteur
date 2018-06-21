import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {MainText, SecondaryText} from './../../styles/AppStyles';


const ButtonCont = styled.div`
	color: #2c4486;
	width: 55%;
	height: 70px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: white;
`;

const Title = MainText(styled.p`
	text-transform: uppercase;
	font-weight: bold;
	font-size: 1.75em;
	padding: 2px;
	margin: auto 0px;
`);

const Text = SecondaryText(styled.p`
	font-style: italic;
	font-size: 1em;
	padding: 2px;
	margin: auto 0px;

`);

const Button = styled(NavLink)`
	background-color: #2c4486;
	color: white;
	text-transform: uppercase;
	text-align: center;
	font-size: 1em;
	padding: 25px;
	border: none;
	text-decoration: none;

	&:hover{
		background-color: #405496;
		cursor: pointer;
	}
`;

const Div = styled.div`
	display: flex;
	height: inherit;
	flex-direction: column;
	line-height: 1em;
	width: ${props => props.width}%;
	
`;

const DeliveryButton = () => (
	<ButtonCont>
		<Div width={60}>
			<Title>Lorem ipsum dolor sit </Title>
			<Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</Text>
		</Div>
		<Div width={35}>
			<Button to="/">Servicio a Domicilio</Button>
		</Div>
	</ButtonCont>
);

export default DeliveryButton;