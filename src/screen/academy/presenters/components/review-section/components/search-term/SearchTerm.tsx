import React, { ReactElement } from "react";
import "./SearchTerm.scss";
interface ISearchTermProps {
  content: string;
  onclick?: () => {};
}
const SearchTerm = (props: ISearchTermProps): ReactElement => {
  const { content, onclick = () => {} } = props;
  return <span className="search-term">{content}</span>;
};
export default SearchTerm;
