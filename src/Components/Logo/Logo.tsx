import './Logo.scss';
import cn from 'classnames';


type Props = {
  defaultBig: boolean;
};

export const Logo: React.FC<Props> = ({
  defaultBig
}) => (
  <div
    className={cn(
      "logo",
      {
        "logo--big": defaultBig,
      }
    )}
  ></div>
);