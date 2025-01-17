import axios from 'axios';
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import https from 'https';
import { useNavigate } from "react-router-dom"

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0)
    const navigate = useNavigate();
    return <div className="flex justify-center h-screen bg-sky-950 text-white">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-sky-800 shadow-lg rounded-lg"
            >
                <div className="flex flex-col space-y-1.5 p-6">
                    <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center">
                            <span className="text-2xl text-sky-950">{name[0].toUpperCase()}</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{name}</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="amount"
                            >
                                Amount (in Rs)
                            </label>
                            <input
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                }}
                                type="number"
                                className="flex text-sky-950 h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-sm"
                                id="amount"
                                placeholder="Enter amount"
                            />
                        </div>
                        <button onClick={async () => {
                            console.log("transaction completed")
                            await axios.post("https://digital-wallet-api1.vercel.app/api/v1/account/transfer", {
                                to: id,
                                amount
                            }, {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            })
                            navigate("/dashboard")
                        }} className="justify-center rounded-full text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-sky-950 text-white">
                            Initiate Transfer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}