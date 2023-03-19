import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const FileDetails = (props) => {
  return (
    <>
      <div className="navbar bg-base-100 m-5 w-auto">
        <Link to={"/home/file"} className="btn btn-ghost normal-case text-xl"><AiOutlineArrowLeft/></Link>
        <h1>En desarrollo</h1>
      </div>
     
    </>
  );
};

export default FileDetails;
