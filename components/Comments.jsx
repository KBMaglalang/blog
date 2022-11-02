import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import parse from "html-react-parser";

// queries
import { getComments } from "../lib/queries";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug)
      .then((data) => setComments(data))
      .catch((error) => console.error(error));
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-gray-200 shadow-lg rounded-lg p-8">
          <h3 className="border-gray-400 text-xl font-semibold border-b mb-2 pb-2">
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-b border-gray-400 mb-2 pb-2"
            >
              <span className="font-semibold">{`${comment.name}`}</span>
              <span>
                {" "}
                on {moment(comment.createdAt).format("MMM DD, YYYY")}
              </span>
              <p className="w-full">{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
