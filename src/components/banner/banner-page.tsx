import MainBanner from "./main-banner";
import OffersBanner from "./offers-banner";


export default async function BannerPage() {

    return (
        <div className="w-full flex flex-col space-y-10">
            <MainBanner />
            <OffersBanner />
        </div>
    )

}