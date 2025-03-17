import { NavLink } from "react-router-dom";
import { paths } from "../../config/paths";

export const BackNavigation = () => {
  return (
    <nav>
      <NavLink to={paths.katas}>👈 Go back to Katas</NavLink>
    </nav>
  );
};
