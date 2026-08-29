import { ReactNode } from 'react';
import './styles.scss';

interface IButtonProps {
    event: React.MouseEventHandler<HTMLDivElement> | undefined,
    children: ReactNode,
}

const CustomButton = ({ children, event }: IButtonProps) => {
    return (
        <div
            className="container-button"
            onClick={event}
        >
            {children}
        </div>
    )
}
export default CustomButton;
