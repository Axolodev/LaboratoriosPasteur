import React from 'react';
import styled from 'styled-components';

import InfoP from './InfoP/InfoP';
import AboutImage from './../../assets/icons/adultomayor.svg';

import { SecondaryText } from '../../styles/AppStyles';


const introMessage = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

const firstParagraph = "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.";
const secondParagraph = "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.";
const thirdParagraph = "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.";

const InfoDesc = styled.div`
	display: grid;
	width: 100%;
	height: calc(100% - 10em);
	grid-template-columns: 40% 60%;
	grid-template-rows: 10% 40% 35% 15%;
	grid-template-areas: 
	"intro intro"
	"image par1"
	"image par2"
	"par3 par3";  
	grid-auto-flow: row;
	grid-gap: 1px;
	overflow: hidden;
	padding: 5px;
	background-color: white;
`;

const AboutUsTitle = SecondaryText(styled.h1`
	font-size: 2em;
	font-weight: bold;
	line-height: 2em;
	text-align: left;
	padding-left: 0.5em;
	color: #989898;
`);

const Intro = styled.div`
	grid-area: intro;
	padding: 10px;
`;

const Image = styled.img`
	grid-area: image;
	width: 60%;
	margin: auto;
`;

const Par1 = styled.div`
	grid-area: par1;
	padding: 10px;
`;

const Par2 = styled.div`
	grid-area: par2;
	padding: 10px;
`;

const Par3 = styled.div`
	grid-area: par3;
	padding: 10px;
`;

const OurInfo = (props) => (
	<InfoDesc> 
		<Intro> 
			<AboutUsTitle> Sobre Nosotros </AboutUsTitle>
			<InfoP message={introMessage} />
		</Intro>
		<Image src={AboutImage}/>
		<Par1>
			<InfoP message={firstParagraph} title="Subtitle 1" />
		</Par1>
		<Par2>
			<InfoP message={secondParagraph} title="Subtitle 2" />
		</Par2>
		<Par3>
			<InfoP message={thirdParagraph} />
		</Par3>
	</InfoDesc>
);

export default OurInfo;