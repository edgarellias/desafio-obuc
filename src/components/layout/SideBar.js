import styled from "styled-components";

import { SidebarDB } from "../database/SidebarDB";
import { NavLink } from "react-router-dom";

export default function SideBar() {
	return (
		
		<Container>
			<List  >
				{SidebarDB.map((item) => {
					return (
						<Text key={item.id}>
							<Navigation  to={item.to}>
								<p>{item.name}</p>
							</Navigation>
						</Text>
					);
				})}
			</List>
		</Container>

	);
};

const Container = styled.div`
	border-top: 1px solid white;
	height: 95vh;
	background: rgb(10, 64, 96);
	background: linear-gradient(180deg, rgba(10, 64, 96, 1) 41%, rgba(18, 159, 209, 1) 74%);
	@media screen and (max-width: 930px) {
		display: none;
	}
`;

const List = styled.ul`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Text = styled.li`
:active, :hover{
	border-left: 3px solid white;
	
}
	font-weight: 600;
	font-size: 20px;
	list-style: none;
	background-color: #142540;
	padding: 13px 0 13px 40px;
`;

const Navigation = styled(NavLink)`
	text-decoration: none;
	color: white;
`;
