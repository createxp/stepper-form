"use client";
import { DataType } from "@/app/page";
import { SetStateAction } from "react";

const Step1 = ({
  data,
  setData,
}: {
  data: DataType;
  setData: React.Dispatch<SetStateAction<DataType>>;
}) => {
  const { name, age, email } = data.profile;

  const handleDataChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [key]: e.target.value,
      },
    }));
  };
  return (
    <div className=" w-full flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          placeholder="name"
          type="text"
          value={name}
          className="text-black"
          onChange={(e) => handleDataChange(e, "name")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="age">Age</label>
        <input
          placeholder="age"
          type="number"
          value={age}
          className="text-black"
          onChange={(e) => handleDataChange(e, "age")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          placeholder="email"
          type="email"
          value={email}
          className="text-black"
          onChange={(e) => handleDataChange(e, "email")}
        />
      </div>
    </div>
  );
};

export default Step1;
