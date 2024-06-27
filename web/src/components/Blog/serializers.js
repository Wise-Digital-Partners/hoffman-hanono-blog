import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
  },
  marks: {
    form: ({ children, mark }) => {
      switch (mark.formName) {
        case "Contact Us":
          return (
            <span
              data-modal-open="modal-contact"
              className="cursor-pointer font-bold text-[#002191] hover:text-[#002191]"
            >
              {children}
            </span>
          );
        default:
          return <span>{children}</span>;
      }
    },
  },
};

export default serializers;
