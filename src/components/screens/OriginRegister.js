import styled from "styled-components";


export default function OriginRegister() {
	return (
		<Container>
			<p>Origens:</p>
		</Container>
	);
}

const Container = styled.div`
	padding: 30px;
	width: 100%;
	height: 100%;
	box-shadow: 0px 1px 3px #00000029;
	background-color: #ffffff90;
	border: 1px solid #a9abac40;
	border-radius: 5px;

	p {
		font-weight: 600;
		font-size: 20px;
		color: #0a4060;
	}
`;