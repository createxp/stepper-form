const Step3 = ({data}:{data:{
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
  }}) => {
  return <div>Step3</div>;
};

export default Step3;
