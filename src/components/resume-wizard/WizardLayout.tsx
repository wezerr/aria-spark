import { ReactNode } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface WizardLayoutProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  canGoNext: boolean;
  canSkip?: boolean;
  onSkip?: () => void;
  children: ReactNode;
  title: string;
  description?: string;
}

const WizardLayout = ({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  canGoNext,
  canSkip = false,
  onSkip,
  children,
  title,
  description,
}: WizardLayoutProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
              ← Назад к дашборду
            </Link>
            <span className="text-sm text-muted-foreground">
              Шаг {currentStep} из {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>

          <div className="bg-background rounded-lg shadow-lg p-8 mb-6">
            {children}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={onBack}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>

            <div className="flex gap-2">
              {canSkip && onSkip && (
                <Button variant="outline" onClick={onSkip}>
                  Пропустить
                </Button>
              )}
              <Button onClick={onNext} disabled={!canGoNext}>
                {currentStep === totalSteps ? "Создать резюме" : "Далее"}
                {currentStep !== totalSteps && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardLayout;
