import "./ReviewSection.scss";
import { IMentor, listTerm } from "utils/data";
import SearchTerm from "./components/search-term/SearchTerm";
import AlumiTestimonialCard from "./components/alumni-testimonial-card/AlumiTestimonialCard";
import AcademyButton from "components/UI/academy-button/AcademyButton";
import { useGetMentorsQuery } from "reducers/mentors/MentorSlice";
import { useActiveLink } from "hooks/hooks";
export interface IMentorData {
  id: number;
  type: string;
  attributes: IMentor;
}
const ReviewSection = () => {
  const { data: mentorList } = useGetMentorsQuery(4);
  const { ref } = useActiveLink("review");
  return (
    <section className="review" id="review" ref={ref}>
      <div className="sr-container">
        <h3 className="section__header">
          Discover &amp; connect with Alumni who have walked the same path as
          you
        </h3>
        <div className="quick-filter">
          <p className="filter-term">
            Frequently searched{" "}
            {listTerm.map((term: string, index: number) => {
              return <SearchTerm content={term} key={`${index}___${term}`} />;
            })}
          </p>
        </div>
        <div className="alumni__banner-container">
          {mentorList &&
            mentorList.map((mentor: IMentorData) => {
              return (
                <AlumiTestimonialCard
                  {...mentor.attributes}
                  path="/review"
                  target="_blank"
                  key={`${mentor.id}`}
                />
              );
            })}
        </div>
        <div className="btn-seemore-container">
          <AcademyButton
            content="SEE MORE PROFILES"
            variant="secondary"
            mode="solid"
            classes={["seemore-btn"]}
          />
        </div>
      </div>
    </section>
  );
};
export default ReviewSection;
