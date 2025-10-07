import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ResumeCard } from "./ResumeCard";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface Resume {
  id: string;
  title: string;
  template: string;
  status: "complete" | "draft";
  updatedAt: Date;
  isPublic: boolean;
}

interface ResumeGridProps {
  resumes: Resume[];
}

export function ResumeGrid({ resumes }: ResumeGridProps) {
  const handleCreateNew = () => {
    toast.success("Создание нового резюме...");
    // Здесь будет навигация к редактору
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Мои резюме</h1>
          <p className="text-muted-foreground mt-1">
            У вас {resumes.length} {resumes.length === 1 ? "резюме" : "резюме"}
          </p>
        </div>
        <Link to="/resume/new">
          <Button size="lg" className="gap-2">
            <Plus className="h-5 w-5" />
            Создать новое
          </Button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumes.map((resume, index) => (
          <ResumeCard
            key={resume.id}
            resume={resume}
            style={{ animationDelay: `${index * 50}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
