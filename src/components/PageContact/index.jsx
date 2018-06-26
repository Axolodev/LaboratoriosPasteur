import React from 'react';
import styled from 'styled-components';

import ContactData from './ContactData';
import Delivery from './Delivery';

const Placeholder = styled.div`
	height: 200px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	box-sizing: border-box;
	padding: 75px;
`;

const Mapa = styled.div`
	height: 100%;
	border: 1px solid red;
`;

const Div = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: ${props => props.width}%;
	padding: 10px;
`;

const Contact = styled(ContactData)`
	margin-bottom: 80px;
`;

const PageContact = () => (
	<div>
		<Placeholder />
		<Container>
			<Div width={20}>
				<Contact />
				<Delivery />
			</Div>
			<Div width={80}>
				<Mapa />
			</Div>
		</Container>
	</div>
);

export default PageContact;