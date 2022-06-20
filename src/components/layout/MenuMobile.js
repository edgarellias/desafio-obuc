import styled, { css } from "styled-components";
import { SidebarDB } from "../database/SidebarDB";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
	useEffect(() => {
		document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
	}, [menuIsVisible]);

	return (
		<Container isVisible={menuIsVisible}>
			<IoClose size={45} onClick={() => setMenuIsVisible(false)} />

			<List>
				{SidebarDB.map((item) => {
					return (
						<Text key={item.id}>
							<Navigation to={item.to} onClick={() => setMenuIsVisible(false)}>
								<p>{item.name}</p>
							</Navigation>
						</Text>
					);
				})}
			</List>
		</Container>
	);
}

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 5;
	background: rgb(10, 64, 96);
	background: linear-gradient(180deg, rgba(10, 64, 96, 1) 41%, rgba(18, 159, 209, 1) 74%);
	display: none;
	pointer-events: none;
	transform: translateY(50px);
	transition: 0.5s;
	svg {
		position: absolute;
		top: 1rem;
		right: 1rem;
		transform: rotate(45deg);
		transition: 0.7s;
		cursor: pointer;
	}
	${({ isVisible }) =>
		isVisible &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;

			pointer-events: auto;
			transform: translateY(0px);
			> svg {
				transform: rotate(0deg);
			}
			nav {
				transform: scale(1);
			}
		`}
`;

const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	transform: scale(0.7);
	transition: 0.7s;
`;

const Text = styled.li`
	font-weight: 600;
	font-size: 2rem;
	margin-top: 5px;
	list-style: none;
	border-bottom: 1px solid white;
	text-align: justify;
	
	@media screen and (max-width: 400px) {
		font-size: 1.6rem;
	}
`;

const Navigation = styled(NavLink)`
	text-decoration: none;
	color: white;
	cursor: pointer;
`;
