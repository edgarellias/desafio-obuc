import { IoMdReorder } from "react-icons/io";
import styled from "styled-components";

export const Header =  ( { setMenuIsVisible } ) => {
    return (
		<Top>
			<LeftItens>
				<h1>Teste Obuc</h1>
			</LeftItens>
			<RightItens >
				<IoMdReorder size={35} onClick={() => setMenuIsVisible(true)}/>
			</RightItens>
		</Top>
	);
};

const Top = styled.header`
	background-color: rgba(10, 64, 96, 1);
	height: 55px;
	padding: 0 40px 0 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LeftItens = styled.div``;


const RightItens = styled.div`
	display: none;
    padding-top: 2px;
    @media screen and (max-width: 930px) {
        display: inline;
    }
`;
