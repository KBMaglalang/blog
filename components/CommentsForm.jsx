import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

// queries
import { submitComment } from "../lib/queries";

const CommentsForm = ({ slug }) => {
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();

  const handleSubmit = () => {
    const commentObj = {
      name: nameEl.current.value,
      email: emailEl.current.value,
      comment: commentEl.current.value,
      slug,
    };

    if (!commentObj.comment || !commentObj.name || !commentObj.email) {
      toast.error("All Fields Required to Comment", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    submitComment(commentObj).then(() => {
      toast.success("Submitting Comment", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (
    <div className="bg-gray-200 shadow-lg rounded-lg p-4 mb-8">
      <h3 className="text-xl font-semibold border-b pb-2">
        Leave A Reply - All Comments Will Be Under Review
      </h3>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="py-2 px-4 w-full rounded-lg bg-white"
          placeholder="Name"
          name="name"
          required
        />
        <input
          type="text"
          ref={emailEl}
          className="py-2 px-4 w-full rounded-lg bg-white"
          placeholder="Email"
          name="email"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4  w-full rounded-lg bg-white"
          placeholder="Comment"
          name="comment"
          required
        />
      </div>

      <div className="w-full inline-block">
        <button
          type="button"
          onClick={handleSubmit}
          className="float-right transition duration-500 ease hover:bg-slate-900 bg-slate-500 rounded-xl text-white px-4 py-2 "
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsForm;
