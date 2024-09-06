import React from "react";
import LogoCoverUploader from "./LogoCoverUploader";
import { MdDelete } from "react-icons/md";

const CompanyDetail = ({
  length,
  detail,
  companyDetails,
  setCompanyDetails,
}) => {
  return (
    <div className="row border border-dashed border-slate-200 p-4 relative mb-3">
      {/* <LogoCoverUploader /> */}
      <div className="form-group col-lg-6 col-md-6">
        <LogoCoverUploader text="Company Logo" />
      </div>
      <div className="form-group col-lg-6 col-md-6">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Title of company" />
      </div>

      <div className="form-group col-lg-12 col-md-12">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          placeholder="description of company"
          rows="1"
        ></textarea>
      </div>
      {length > 1 && (
        <span className="absolute top-3 right-0 flex justify-end">
          <MdDelete
            className="text-red-600 cursor-pointer"
            size={24}
            onClick={() =>
              setCompanyDetails(
                companyDetails.filter((item) => item?.id !== detail?.id)
              )
            }
            title="Delete"
          />
        </span>
      )}
    </div>
  );
};

export default CompanyDetail;
