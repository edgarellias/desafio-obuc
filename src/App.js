import { MyRoutes } from "./components/Routes/MyRoutes";
import styled from "styled-components";
import SideBar from "./components/layout/SideBar";
import { Header } from "./components/layout/Header";
import { useState } from "react";
import { MenuMobile } from "./components/layout/MenuMobile";

function App() {
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	return (
		<>
			<MenuMobile 
			menuIsVisible={menuIsVisible} 
			setMenuIsVisible={setMenuIsVisible} />
			<Header setMenuIsVisible={setMenuIsVisible}/>
			<Container>
				<SideBar />
				<Content>
					<MyRoutes />
				</Content>
			</Container>
		</>
	);
}

export default App;

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 4fr;
	@media screen and (max-width: 930px) {
		grid-template-columns: 1fr;
	}
`;

const Content = styled.div`
	padding: 50px;
	background-color: #dcdfe090;
	@media screen and (max-width: 930px) {
		padding: 20px;
	}
`;
