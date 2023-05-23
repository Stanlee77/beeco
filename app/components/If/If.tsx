import { FC, ReactElement } from "react";

interface IfProps {
  condition: boolean;
  children: ReactElement<any, any>;
  elseComponent?: ReactElement<any, any> | null;
}

const If: FC<IfProps> = ({ condition, children, elseComponent = null }) => {
  return condition ? children : elseComponent;
};

export default If;
