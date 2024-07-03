import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem("token"))) {
            navigate("/signin");
        }
    }, [navigate]);

    const [balance, setBalance] = useState('')
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log(response)
                const newBal = parseFloat(response.data.balance.toFixed(2));
                setBalance(newBal)

            })

    }, [])
    return <div className='bg-sky-800 min-h-screen'>
        <Appbar firstLetter={"U"} className={"shadow-xl"} />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}