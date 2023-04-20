import TextUnderline from "components/UI/text-undeline/TextUnderline";
import React, { useState, useEffect } from "react";
import "./PeopleSection.scss";
import SliderList from "./components/SliderList/SliderList";
import PeopleCard from "./components/PeopleCard/PeopleCard";
import PeopleModalInfo from "./components/PeopleModalInfo/PeopleModalInfo";
import { openModal, closeModal } from "reducers/modal/ModalSlice";
import { ModalName } from "utils/modalName";
import { useDispatch, useSelector } from "react-redux";
import { useGetMentorsQuery } from "reducers/mentors/MentorSlice";
import { useActiveLink } from "hooks/hooks";
import { RootState } from "store";
const PeopleSection = () => {
  const {
    data: mentors,
    isLoading,
    isError,
    isFetching,
  } = useGetMentorsQuery(20);
  const dispatch = useDispatch();
  const { ref } = useActiveLink("teaching");
  const { ref: refMentor } = useActiveLink("mentor");
  const isShowModal =
    useSelector((state: RootState) => state.modalSlice.nameModal) ===
    ModalName.MODAL_PEOPLE_INFO;
  return (
    <>
      <section className=" section people-card-section" id="teaching" ref={ref}>
        <div className="sr-container">
          <h3 className="section__header">
            Our <strong>teaching army</strong> will make you{" "}
            <strong>
              <TextUnderline contents="confident about your" position="33px" />{" "}
              fundamentals
            </strong>
          </h3>
          <p className="section__sub-header fw-800">
            Our tutors have built scalable systems and realise the real-life
            importance of DSA and System Design, not just in interviews but
            throughout your career
          </p>
          <SliderList autoplay={true}>
            {mentors &&
              mentors.map((mentor: any) => {
                return (
                  <PeopleCard
                    {...mentor.attributes}
                    key={`${mentor.id}`}
                    onOpenModal={() => {
                      dispatch(
                        openModal({
                          nameModal: ModalName.MODAL_PEOPLE_INFO,
                          dataModal: mentor.attributes,
                        })
                      );
                    }}
                  />
                );
              })}
          </SliderList>
        </div>
        {isShowModal && (
          <PeopleModalInfo
            show={isShowModal}
            onHide={() => dispatch(closeModal())}
          />
        )}
      </section>
      <section id="mentor" className="section mentor">
        <div className="sr-container">
          <h3
            className="section__header mentor-heading"
            id="mentor"
            ref={refMentor}
          >
            {" "}
            Our{" "}
            <strong>
              <TextUnderline contents="experienced mentors" position="33px" />
            </strong>{" "}
            help you with your <strong>career choices &amp; interviews</strong>
          </h3>
          <p className="section__sub-header mentor-sub">
            Multiple Career Oriented Sessions &amp; Mock Interviews by Tech
            Experts. These helped thousands of learners gain first-hand insights
            &amp; guidance for their respective career trajectories.
          </p>
          <SliderList autoplay={true}>
            {mentors &&
              mentors.map((mentor: any) => {
                return (
                  <PeopleCard
                    {...mentor.attributes}
                    key={`${mentor.id}`}
                    onOpenModal={() => {
                      dispatch(
                        openModal({
                          nameModal: ModalName.MODAL_PEOPLE_INFO,
                          dataModal: mentor.attributes,
                        })
                      );
                    }}
                  />
                );
              })}
          </SliderList>
        </div>
      </section>
    </>
  );
};
export default PeopleSection;
