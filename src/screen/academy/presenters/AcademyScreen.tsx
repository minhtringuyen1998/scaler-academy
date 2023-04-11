import React, { useEffect } from "react";
import BannerSection from "./components/banner-section/BannerSection";
import FeatureSection from "./components/feature-section/FeatureSection";
import "./AcademyScreen.scss";
import FlexibilitySection from "./components/flexibility-section/FlexibilitySection";
import CurriculumSection from "./components/curriculum-section/CurriculumSection";
import ReviewSection from "./components/review-section/ReviewSection";
import TestimonialSection from "./components/testimonial-section/TestimonialSection";
import PeopleSection from "./components/people-card-section/PeopleSection";
import MentorBanner from "./components/mentor-banner-section/MentorBanner";
import CommnunitySection from "./components/community-section/CommunitySection";
import CareerSection from "./components/career-section/CareerSection";
import PartnersSection from "./components/partners-section/PartnersSection";
import CareerBannerSection from "./components/career-banner-roadmap/CareerBannerSection";
import JourneySection from "./components/journey-section/JourneySection";
import MeetSection from "./components/meet-section/MeetSection";
const AcademyScreen = () => {
  return (
    <>
      <BannerSection />
      <FeatureSection />
      <FlexibilitySection />
      <CurriculumSection />
      <ReviewSection />
      <TestimonialSection />
      <PeopleSection />
      <MentorBanner />
      <CommnunitySection />
      <CareerSection />
      <PartnersSection />
      <CareerBannerSection />
      <JourneySection />
      <MeetSection />
    </>
  );
};
export default AcademyScreen;
