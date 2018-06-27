import React from 'react';
import styled from 'styled-components';

import ContactData from './ContactData';
import Delivery from './Delivery';
import Map from './Map';

const Placeholder = styled.div`
	height: 200px;
`;

const Container = styled.div`
	display: grid;
	grid-template-rows: 50% auto;
	grid-template-columns: 20% auto;
	grid-template-areas:
		"Contacto Mapa"
		"Domicilio Mapa";
	grid-column-gap: 50px;
	box-sizing: border-box;
	padding: 50px 100px;
`;

const Contact = styled(ContactData)`
	grid-area: Contacto
`;

const Del = styled(Delivery)`
	grid-area: Domicilio;
	align-self: end;
`;

const MapaCont = styled(Map)`
	grid-area: Mapa;
`;

const PageContact = () => (
	<div>
		<Placeholder />
		<Container>
			<Contact />
			<Del />
			<MapaCont /> 
		</Container>
	</div>
);

export default PageContact;