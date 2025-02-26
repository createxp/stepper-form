import { SetStateAction } from "react";

const NextPrev = ({
  currentStep,
  setCurrentStep,
  stepLength,
}: {
  currentStep: number;
  setCurrentStep: React.Dispatch<SetStateAction<number>>;
  stepLength: number;
}) => {
  return (
    <div>
         <button
        onClick={() =>
          setCurrentStep(
            currentStep < stepLength - 1 ? currentStep - 1 : 0
          )
        }
      >
        Prev
      </button>
      <button
        onClick={() =>
          setCurrentStep(
            currentStep !== stepLength - 1 ? currentStep + 1 : currentStep
          )
        }
      >
        Next
      </button>
     

      {currentStep === stepLength - 1 && <button>Submit</button>}
    </div>
  );
};

export default NextPrev;
