import React from "react";
import { TableHead } from "./TableHead";
import { TableData } from "./TableData";
import { data } from "../../model";

interface props {
  handleShowForm(): void;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  employees: data[];
  setEmployee: React.Dispatch<React.SetStateAction<data>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  handleEmployeeData(employeeData: data, id?: number): void;
  deleteEmployee(id: string): void;
}

export const EmployeeTable: React.FC<props> = ({
  handleShowForm,
  show,
  employees,
  handleEmployeeData,
  deleteEmployee,
  setEmployee,
  setId,
  setShow,
}) => {
  return (
    <div>
      <table
        className={` mt-20 flex items-center flex-col border border-cyan-600 rounded-md transition-all delay-200 duration-300 ease-in-out  ${
          !show ? "lg:-translate-y-36 -translate-y-[30rem]" : ""
        }`}
      >
        <thead className="w-full ">
          <TableHead />
        </thead>
        <tbody className="w-full ">
          {employees.map((details) => (
            <TableData
              key={details._id}
              data={details}
              handleEmployeeData={handleEmployeeData}
              deleteEmployee={deleteEmployee}
              setEmployee={setEmployee}
              setId={setId}
              setShow={setShow}
              show={show}
            />
          ))}
          {employees.length < 1 && (
            <tr>
              <td className="text-medium text-cyan-600 text-xl inline-block text-left w-[20%] p-5">
                No Employees{" "}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button
        onClick={() => {
          handleShowForm();
        }}
        className={`${
          show ? "hidden" : "block"
        } absolute top-40 right-3 lg:top-48 lg:right-40 bg-cyan-600 text-white rounded-md px-3 py-1 transition-all delay-150 duration-300 ease-in-out hover:scale-110`}
      >
        Add Employee
      </button>
    </div>
  );
};
