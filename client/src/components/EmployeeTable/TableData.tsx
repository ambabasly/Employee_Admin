import React, { useState } from "react";
import { EmployeeDetailsModal } from "./EmployeeDetailsModal";
import { data } from "../../model";
import trash from "./assets/Trash.svg";
import Pen from "./assets/pen.svg";

interface props {
  data: data;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setEmployee: React.Dispatch<React.SetStateAction<data>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  handleEmployeeData(employeeData: data, id?: number): void;
  deleteEmployee(id: string): void;
}

export const TableData: React.FC<props> = ({
  data,
  handleEmployeeData,
  deleteEmployee,
  setEmployee,
  setId,
  setShow,
  show,
}) => {
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);

  const handleEmployeeEdit = () => {
    setId(data._id);
    setEmployee({ ...data });
    setShow(true);
  };

  const handleModal = (): void => {
    setShowDetailsModal(!showDetailsModal);
  };

  return (
    <>
      <tr
        className="flex justify-between w-full p-1 lg:p-3 border-b border-gray-900 cursor-pointer"
        key={data._id}
        onClick={() => handleModal()}
      >
        <td className="lg:w-10 mr-3 text-center"></td>
        <td className="inline-block text-left lg:w-[20%] capitalize lg:text-base text-sm">{`${data.firstname} ${data.lastname}`}</td>
        <td className="inline-block text-left lg:w-[20%]  lg:text-base text-sm">
          {data.birthday}
        </td>
        <td className="inline-block text-left lg:w-[20%] lg:text-base text-sm">
          {data.phone}
        </td>
        <td className="inline-block text-left lg:w-[20%]  lg:text-base text-sm capitalize">
          {data.city}
        </td>
        <td className="inline-block text-left lg:w-[20%]  lg:text-base text-sm mx-auto pl-1 lg:pl-0 ">
          <span
            className="flex justify-center lg:justify-start gap-2  lg:gap-10 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              onClick={() => handleEmployeeEdit()}
              src={Pen}
              alt="edit svg"
              className="bg-cyan-600 lg:p-1 p-0.5 rounded-md transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-600/70"
            />
            <img
              onClick={() => deleteEmployee(data._id)}
              src={trash}
              alt="trash svg"
              className="bg-cyan-600 p-0.5 lg:p-1 rounded-md transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-600/70"
            />
          </span>
        </td>
      </tr>
      {showDetailsModal && (
        <div className="w-full h-[100%] flex justify-center">
          <EmployeeDetailsModal
            showDetailsModal={showDetailsModal}
            data={data}
            handleModal={handleModal}
            show={show}
          />
        </div>
      )}
    </>
  );
};
