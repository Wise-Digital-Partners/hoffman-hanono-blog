import InsurancePostPreview from "./InsurancePostPreview";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

function InsurancePostGrid(props) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {props.title}
      {props.nodes &&
        props.nodes.map((node) => (
          <div key={node.id}>
            <InsurancePostPreview {...node} isInList />
          </div>
        ))}
      {props.browseMoreHref && (
        <div>
          <AniLink fade to={props.browseMoreHref}>
            Browse more
          </AniLink>
        </div>
      )}
    </div>
  );
}

InsurancePostGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default InsurancePostGrid;
