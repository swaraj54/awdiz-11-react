import React, { useEffect } from "react";
import PersonalInfo from "./PersonalInfo";
import AccountInfo from "./AccountInfo";
import Review from "./Review";
import { useState } from "react";
import toast from "react-hot-toast";
import ConfirmModule from "./ConfirmModule";

const MultiStepperForm = () => {
  const [displayConfirmModule, setDisplayConfirmModule] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [currentStepName, setCurrentStepName] = useState("Personal Info");
  console.log(userData, "userData");
  const [step, setStep] = React.useState(1);
  const handleChange = (e) => {
    localStorage.setItem(
      "userdata",
      JSON.stringify({ ...userData, [e.target.name]: e.target.value })
    );
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  function getStep(step) {
    switch (step) {
      case 1:
        return <PersonalInfo handleChange={handleChange} userData={userData} />;
      case 2:
        return <AccountInfo handleChange={handleChange} userData={userData} />;
      case 3:
        return <Review handleSubmit={handleSubmit} userData={userData} />;
      default:
        return <PersonalInfo />;
    }
  }
  function nextStep() {
    if (step == 1) {
      if (!userData.name || !userData.email || !userData.mobile) {
        toast.error("Please fill all the fields in Personal Info");
        return;
      } else {
        console.log(step, "before");
        setStep(step + 1);
        console.log(step, "after");
        localStorage.setItem("currentStep", JSON.stringify(step + 1));
      }
    } else if (step == 2) {
      if (
        !userData.username ||
        !userData.password ||
        !userData.confirmpassword
      ) {
        toast.error("Please fill all the fields in Personal Info");
        return;
      }
      if (userData.password != userData.confirmpassword) {
        toast.error("Password and Confiurm Password should be same.");
        return;
      }
      localStorage.setItem("currentStep", JSON.stringify(step + 1));
      setStep(step + 1);
    }
  }
  function backStep() {
    setStep(step - 1);
    localStorage.setItem("currentStep", JSON.stringify(step - 1));
  }

  function handleSubmit() {
    toast.success(`Thank you ${userData.name}, your form has been submitted!`);
    setUserData({
      name: "",
      email: "",
      mobile: "",
      username: "",
      password: "",
      confirmpassword: "",
    });
    localStorage.clear();
    setStep(1);
    handleConfrimModule()
  }

  function handleConfrimModule() {
    setDisplayConfirmModule(!displayConfirmModule);
  }

  useEffect(() => {
    if (step == 1) {
      setCurrentStepName("Personal Info");
    } else if (step == 2) {
      setCurrentStepName("Account Info");
    } else {
      setCurrentStepName("Review and Submit");
    }
  }, [step]);
  useEffect(() => {
    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
    const lastRecordedStep = localStorage.getItem("currentStep");
    if (lastRecordedStep) {
      setStep(JSON.parse(lastRecordedStep));
    }
  }, []);
  return (
    <div>
      {displayConfirmModule ? (
        <ConfirmModule handleConfrimModule={handleConfrimModule} handleSubmit={handleSubmit} />
      ) : (
        <>
          <h1>
            Step {step}: {currentStepName}
          </h1>
          {getStep(step)}
          {step > 1 && <button onClick={backStep}>Back</button>}
          {step == 3 ? (
            <button onClick={handleConfrimModule}>Submit</button>
          ) : (
            <button onClick={nextStep}>Next</button>
          )}
        </>
      )}
    </div>
  );
};

export default MultiStepperForm;
