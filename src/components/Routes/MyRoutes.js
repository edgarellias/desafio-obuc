import { Route, Routes } from "react-router-dom";

import GoalsRegister from "../screens/GoalsRegister";
import AreaRegister from "../screens/AreaRegister";
import OriginRegister from "../screens/OriginRegister";
import HabilityRegister from "../screens/HabilityRegister";

export function MyRoutes() {
	return (
		<Routes>
			<Route index element={<GoalsRegister />} />
			<Route path="goals" element={<GoalsRegister />} />
			<Route path="areas" element={<AreaRegister />} />
			<Route path="origins" element={<OriginRegister />} />
			<Route path="habilitys" element={<HabilityRegister />} />
		</Routes>
	);
}

