import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export function Appbar({ username, firstLetter }) {
    const navigate = useNavigate();
    const signout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="shadow h-16 flex justify-between items-center bg-sky-950 px-4">
            <div className="text-4xl font-extrabold text-gray-900 dark:text-white">
                Digital Wallet
            </div>
            <div className="flex items-center">
                <Button label="Sign out" onClick={signout} />
                <div className=" fkex flex-col items-center ">

                    <div className="rounded-full ml-5 h-8 w-8 bg-slate-200 flex items-center justify-center">
                        <span className="text-xl text-sky-950">
                            {firstLetter}
                        </span>
                    </div>
                    <div className="text-s text-white mx-4">
                        {username}
                    </div>
                </div>

            </div>
        </div>
    );
}
