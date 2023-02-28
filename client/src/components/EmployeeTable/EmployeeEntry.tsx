import React from "react";
import { data } from "../../model";
import { dummyData } from "../../dummyData";
import "react-phone-number-input/style.css";

interface props {
  handleShowForm(): void;
  handleEmployeeData(employeeData: data, id?: number): void;
  show: boolean;
  employee: data;
  error: string;
  setEmployee: React.Dispatch<React.SetStateAction<data>>;
}

export const EmployeeEntry: React.FC<props> = ({
  handleShowForm,
  show,
  employee,
  setEmployee,
  handleEmployeeData,
  error,
}) => {
  const handleChange = (e: React.ChangeEvent): void => {
    const { value, name } = e.target as HTMLInputElement;
    setEmployee((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleEmployeeData(employee);
    setEmployee(dummyData);
  };
  const handleClear = () => {
    setEmployee(dummyData);
    handleShowForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={` flex pt-10  flex-col transition-all delay-150 duration-300 ease-in-out w-full ${
        show ? "opacity-100  visible" : " opacity-0 invisible"
      }`}
    >
      <span
        className={`${
          error ? "opacity-100  visible" : " opacity-0 invisible"
        } w-full p-2 lg:p-3 border border-red-600 bg-red-600/5 flex item-center justify-center rounded-md text-red-600  font-medium capitalize`}
      >
        {error}
      </span>
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 py-4 w-full">
        <input
          className="shadow-md rounded-md p-2 lg:w-[20%]  focus:outline-none focus:border-cyan-500 focus:border"
          type="text"
          value={employee.firstname}
          name="firstname"
          placeholder="Firstname"
          onChange={(e: React.ChangeEvent) => handleChange(e)}
          required
        />
        <input
          className="shadow-md rounded-md p-2 lg:w-[20%]  focus:outline-none focus:border-cyan-500 focus:border"
          type="text"
          value={employee.lastname}
          name="lastname"
          placeholder="Lastname"
          onChange={(e: React.ChangeEvent) => handleChange(e)}
          required
        />
        <input
          className="shadow-md rounded-md p-2 lg:w-[20%] focus:outline-none focus:border-cyan-500 focus:border"
          type="tel"
          value={employee.phone}
          name="phone"
          placeholder="123-45-678"
          onChange={(e: React.ChangeEvent) => handleChange(e)}
          required
        />
        <input
          className="shadow-md rounded-md p-2 lg:w-[20%]  focus:outline-none focus:border-cyan-500 focus:border"
          type="date"
          value={employee.birthday}
          name="birthday"
          placeholder="MM/DD/YYYY"
          max="2022-12-31"
          min="1950-01-02"
          onChange={(e: React.ChangeEvent) => handleChange(e)}
          required
        />
        <input
          className="shadow-md rounded-md p-2 lg:w-[20%]  focus:outline-none focus:border-cyan-500 focus:border"
          type="text"
          value={employee.address}
          name="address"
          placeholder="Address"
          onChange={(e: React.ChangeEvent) => handleChange(e)}
          required
        />
        <input
          className="shadow-md rounded-md p-2 lg:w-[20%] focus:outline-none focus:border-cyan-500 focus:border"
          type="text"
          value={employee.city}
          name="city"
          placeholder="City"
          onChange={(e: React.ChangeEvent) => handleChange(e)}
          required
        />
        <input
          className="shadow-md rounded-md p-2 lg:w-[20%] focus:outline-none focus:border-cyan-500 focus:border"
          type="number"
          value={employee.zipCode}
          name="zipCode"
          placeholder="Zip Code"
          onChange={(e: React.ChangeEvent) => handleChange(e)}
        />
      </div>
      <span className="w-36 flex justify-between">
        <button
          type="submit"
          className="bg-cyan-600 rounded-md px-3 py-1 text-white font-medium transition-all delay-75 duration-300 ease-in-out hover:scale-110"
        >
          Save
        </button>
        <button
          type="reset"
          onClick={() => handleClear()}
          className="border-2 border-cyan-600 rounded-md px-3 py-1 text-cyan-600 font-medium transition-all delay-75 duration-300 ease-in-out hover:scale-110"
        >
          Cancel
        </button>
      </span>
    </form>
  );
};
