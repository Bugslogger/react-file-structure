import React, { useRef } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "../Button/button";
import Modal from "../models/modal";

const Uploadfile = ({
  isLoading,
  handleFileChange,
  fileType = ".xls, .xlsx",
  handleModalClose,
  handleUploadClick,
  open,
  fileName,
}) => {
  const fileInput = useRef(null);

  return (
    <Modal open={open}>
      <div className="w-full">
        <div className="my-3 text-center">
          <div className="text-black font-bold text-2xl"> Upload Your File</div>
        </div>
        <div
          onClick={() => fileInput.current.click()}
          className="dotted-border bg-blue-50/40 cursor-pointer h-56 rounded-lg border-blue-600 border flex border-dashed justify-center items-center gap-3 flex-col px-2 py-4"
        >
          <FaCloudUploadAlt fontSize={"52px"} className="text-blue-600" />
          <input
            onChange={handleFileChange}
            ref={fileInput}
            type="file"
            hidden
            accept={fileType}
          />
          <div className="text-gray-400 text-sm uppercase">
            {fileName ? fileName : "Click here to choose the file."}
          </div>
        </div>
        <div className="text-xs my-2 text-gray-400">
          Supoorted files: XLS, XLSX
        </div>

        <div className="flex justify-end items gap-2 my-3">
          <Button
            ButtonClick={handleModalClose}
            className={{
              Class:
                "text-[#37415180] border-[#37415180] border rounded-lg hover:bg-gray-300",
            }}
          >
            Cancel
          </Button>
          <Button
            ButtonClick={handleUploadClick}
            disbale={isLoading}
            className={{
              Class: `${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white`,
            }}
          >
            Upload
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default memo(Uploadfile);
