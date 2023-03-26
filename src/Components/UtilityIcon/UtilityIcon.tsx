import { NavLink } from 'react-router-dom';
import './UtilityIcon.scss';
import cn from 'classnames';

type Props = {
  url: string;
  modifier: string; 
}

export const UtilityIcon: React.FC<Props> = ({
  url,
  modifier,
}) => {
  return (
    <div className="utilityicon">
      <NavLink
        to={url}
        className={({ isActive }) => cn(
          "utilityicon--icon",
          `utilityicon--${modifier}`,
          {
            test: isActive
          }
        )}
      ></NavLink>
    </div>
  )
}