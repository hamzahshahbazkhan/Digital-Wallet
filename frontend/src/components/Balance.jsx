export function Balance({ value }) {
    return (
        <div className="flex bg-inherit text-slate-300">
            <div className="font-bold text-slate-300 text-lg">
                Your Balance:
            </div>
            <div className="font-semibold ml-4 text-lg">
                Rs {value}
            </div>
        </div>
    )

}