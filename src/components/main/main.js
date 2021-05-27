import React from "react";
import AboutUsSlider from "./components/about-us-slider/about-us-slider";
import Activities from "./components/activities/activities";
import BreadCrumb from "./components/bread-crumb/bread-crumb";
import CardsMenu from "./components/cards-menu/cards-menu";
import GuestReview from "./components/guest-review/guest-review";
import HotelName from "./components/hotel-name/hotel-name";
import NewSletter from "./components/new-sletter/new-sletter";
import PackageSummery from "./components/package-summery/package-summery";
import Slider from "./components/slider/slider";

const Main = () => {
    return (
        <main>
            <BreadCrumb />
            <HotelName />
            <Slider />
            <CardsMenu />
            <PackageSummery />
            <GuestReview />
            <AboutUsSlider />
            <NewSletter />
            <Activities />
        </main>
    )
}

export default Main;