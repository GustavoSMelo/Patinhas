import { IButton } from "./interface";

const Button = ({ children } : any) => {
    return <button type="button" className="p-4 bg-orange-500 border-2 border-black rounded-full cursor-pointer">{children}</button>
};

export default Button;
