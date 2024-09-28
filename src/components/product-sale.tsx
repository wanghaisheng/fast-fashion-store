

export default function ProductSaleLabel({
    amount,
    compareAmount,
    }: {
    amount: string;
    compareAmount: string;
}) {

    const salePercentage = ((parseInt(compareAmount) - parseInt(amount)) / parseInt(compareAmount)) * 100;
    return (
       <div className="absolute inset-2 z-10 rounded-xl" >
            {compareAmount && compareAmount !== amount &&  parseInt(compareAmount) > 0 ? (
                <div className="flex flex-col space-y-1 rounded-xl">
                    <div className="bg-red-500 backdrop-blur-md w-min pl-2 pr-2 text-center rounded-xl">
                        <p className="text-white text-sm font-thin">-{Math.round(salePercentage)}%</p>
                    </div>
                </div>
            ) : null}
        </div>
    );

}