import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WizardLayout from "@/components/resume-wizard/WizardLayout";
import Step1Personal from "@/components/resume-wizard/steps/Step1Personal";
import Step2Experience from "@/components/resume-wizard/steps/Step2Experience";
import Step3WorkHistory from "@/components/resume-wizard/steps/Step3WorkHistory";
import Step4Education from "@/components/resume-wizard/steps/Step4Education";
import Step5Skills from "@/components/resume-wizard/steps/Step5Skills";
import Step6Languages from "@/components/resume-wizard/steps/Step6Languages";
import Step7Generate from "@/components/resume-wizard/steps/Step7Generate";
import { toast } from "sonner";

interface WizardData {
  step1: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
  };
  step2: {
    position: string;
    yearsOfExperience: string;
    description: string;
  };
  step3: {
    workHistory: Array<{ id: string; company: string; position: string }>;
  };
  step4: {
    institution: string;
    degree: string;
    year: string;
  };
  step5: {
    skills: string[];
  };
  step6: {
    languages: Array<{ name: string; level: string }>;
  };
}

const TOTAL_STEPS = 7;

const ResumeWizard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [wizardData, setWizardData] = useState<WizardData>({
    step1: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
    },
    step2: {
      position: "",
      yearsOfExperience: "",
      description: "",
    },
    step3: {
      workHistory: [{ id: "1", company: "", position: "" }],
    },
    step4: {
      institution: "",
      degree: "",
      year: "",
    },
    step5: {
      skills: [],
    },
    step6: {
      languages: [],
    },
  });

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(
          wizardData.step1.firstName &&
          wizardData.step1.lastName &&
          wizardData.step1.email &&
          wizardData.step1.city
        );
      case 2:
        return !!(
          wizardData.step2.position &&
          wizardData.step2.yearsOfExperience &&
          wizardData.step2.description
        );
      case 3:
        return wizardData.step3.workHistory.every(
          (entry) => entry.company && entry.position
        );
      case 4:
        return !!(
          wizardData.step4.institution &&
          wizardData.step4.degree &&
          wizardData.step4.year
        );
      case 5:
        return true; // Can skip
      case 6:
        return true; // Can skip
      case 7:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }

    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }

    if (currentStep === TOTAL_STEPS) {
      // Generate resume and navigate to editor
      toast.success("Создаём ваше резюме...");
      setTimeout(() => {
        navigate("/resume/editor/new");
      }, 2000);
    } else {
      setDirection("forward");
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection("backward");
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setDirection("forward");
    setCurrentStep(currentStep + 1);
  };

  const updateStepData = <K extends keyof WizardData>(
    step: K,
    data: WizardData[K]
  ) => {
    setWizardData({ ...wizardData, [step]: data });
  };

  const getStepConfig = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "Давайте познакомимся",
          description: "Расскажите нам о себе",
          canSkip: false,
        };
      case 2:
        return {
          title: "Расскажите о вашем опыте",
          description: "Это поможет создать более точное резюме",
          canSkip: false,
        };
      case 3:
        return {
          title: "Где вы работали",
          description: "Укажите основные места работы",
          canSkip: false,
        };
      case 4:
        return {
          title: "Ваше образование",
          description: "Расскажите о вашем образовании",
          canSkip: false,
        };
      case 5:
        return {
          title: "Ваши навыки",
          description: "Какими технологиями и инструментами вы владеете",
          canSkip: true,
        };
      case 6:
        return {
          title: "Какими языками владеете",
          description: "Укажите языки и уровень владения",
          canSkip: true,
        };
      case 7:
        return {
          title: "Почти готово!",
          description: "",
          canSkip: false,
        };
      default:
        return { title: "", description: "", canSkip: false };
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Personal
            data={wizardData.step1}
            onChange={(data) => updateStepData("step1", data)}
          />
        );
      case 2:
        return (
          <Step2Experience
            data={wizardData.step2}
            onChange={(data) => updateStepData("step2", data)}
          />
        );
      case 3:
        return (
          <Step3WorkHistory
            data={wizardData.step3}
            onChange={(data) => updateStepData("step3", data)}
          />
        );
      case 4:
        return (
          <Step4Education
            data={wizardData.step4}
            onChange={(data) => updateStepData("step4", data)}
          />
        );
      case 5:
        return (
          <Step5Skills
            data={wizardData.step5}
            onChange={(data) => updateStepData("step5", data)}
          />
        );
      case 6:
        return (
          <Step6Languages
            data={wizardData.step6}
            onChange={(data) => updateStepData("step6", data)}
          />
        );
      case 7:
        return <Step7Generate />;
      default:
        return null;
    }
  };

  const config = getStepConfig();

  return (
    <WizardLayout
      currentStep={currentStep}
      totalSteps={TOTAL_STEPS}
      onNext={handleNext}
      onBack={handleBack}
      canGoNext={validateStep(currentStep)}
      canSkip={config.canSkip}
      onSkip={config.canSkip ? handleSkip : undefined}
      title={config.title}
      description={config.description}
      direction={direction}
    >
      {renderStep()}
    </WizardLayout>
  );
};

export default ResumeWizard;
