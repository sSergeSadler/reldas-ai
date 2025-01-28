import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import UserTypeCard from "./user-type-card";

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const TypeSelectionForm = ({ register, userType, setUserType }: Props) => {
  return (
    <>
      {" "}
      <h2 className="text-gravel md:text-4xl font-bold">Create Account</h2>
      <p className="text-iriduim md:text-sm">
        Tell us about yourself! what do you do ? Let's tailor you
        <br />
        experience so it best suits you.
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="I own a business"
        text="Setting up my account for my company"
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="student"
        title="I own a Student"
        text="Looking to learn about the tool"
      />
    </>
  );
};

export default TypeSelectionForm;
