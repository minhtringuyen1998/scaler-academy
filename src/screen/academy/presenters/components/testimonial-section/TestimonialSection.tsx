import TextUnderline from "components/UI/text-undeline/TextUnderline";
import "./TestimonialSection.scss";
import TestimonialCard from "./testimonial-card/TestimonialCard";
import { useGetMentorsQuery } from "reducers/mentors/MentorSlice";
const TestimonialSection = () => {
  const { data: mentors } = useGetMentorsQuery(24);
  return (
    <section className="section testimonial-section">
      <div className="sr-container">
        <h3 className="testimonial__header section__header">
          Your learning is important. It’s a good idea to go through{" "}
          <TextUnderline contents=" reviews of previous students" /> to make an
          informed decision
        </h3>
        <p className="section__sub-header">
          1,000+ working professionals have joined the Scaler Academy family!
        </p>
        <div className="wrapper-list-mentor">
          <div className="testimonial__list">
            {mentors &&
              mentors.slice(0, 12).map((mentor: any, index: number) => {
                return (
                  <TestimonialCard
                    {...mentor.attributes}
                    key={`${mentor.name}___${index}`}
                  />
                );
              })}
          </div>
          <div className="testimonial__list">
            {mentors &&
              mentors.slice(11, 23).map((mentor: any, index: number) => {
                return (
                  <TestimonialCard
                    {...mentor.attributes}
                    key={`${mentor.name}___${index}`}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
