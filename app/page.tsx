"use client";
import { NextPrev, Step1, Step2, Step3 } from "@/components";
import { SetStateAction, useState } from "react";

export type DataType = {
  profile: {
    name: string;
    email: string;
    age: number;
  };
  interest: {
    sports: string[];
    movies: string[];
  };
  settings: {
    theme: "dark" | "light";
  };
};

type stepProp = {
  data: DataType;
  setData: React.Dispatch<SetStateAction<DataType>>;
};

export default function Home() {
  const tabs: {
    name: string;
    component: React.ComponentType<stepProp>;
  }[] = [
    {
      name: "Profile",
      component: Step1,
    },
    {
      name: "Interests",
      component: Step2,
    },
    {
      name: "Settings",
      component: Step3,
    },
  ];

  const [data, setData] = useState<DataType>({
    profile: {
      name: "",
      email: "",
      age: 0,
    },
  } as {
    profile: {
      name: string;
      email: string;
      age: number;
    };
    interest: {
      sports: string[];
      movies: string[];
    };
    settings: {
      theme: "dark" | "light";
    };
  });

  const [currentStep, setCurrentStep] = useState<number>(0);

  const ActiveTabComponent = tabs[currentStep]?.component;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-10">
      <div className="flex items-center">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`border px-2 py-1 cursor-pointer rounded hover:bg-white hover:text-black transition-all
                ${index === currentStep && "bg-white text-black"}
              `}
            >
              <p>{tab.name}</p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center w-full px-10">
        {<ActiveTabComponent data={data} setData={setData} />}
      </div>

      <NextPrev
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        stepLength={tabs.length}
      />
    </main>
  );
}
