import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { ResumeGrid } from "@/components/dashboard/ResumeGrid";

// Mock data - в будущем заменить на реальные данные
const mockResumes = [
  {
    id: "1",
    title: "Frontend Developer",
    template: "Современное",
    status: "complete" as const,
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    isPublic: true,
  },
  {
    id: "2",
    title: "Senior React Engineer",
    template: "Профессиональное",
    status: "draft" as const,
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    isPublic: false,
  },
  {
    id: "3",
    title: "Full Stack Developer",
    template: "Минималист",
    status: "complete" as const,
    updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    isPublic: true,
  },
];

const Dashboard = () => {
  // Mock user - в будущем получать из auth context
  const [user] = useState({
    name: "Иван Иванов",
    email: "ivan@example.com",
    avatar: null,
  });

  // Переключатель для демонстрации empty state
  const [hasResumes, setHasResumes] = useState(true);
  const [hasDraft, setHasDraft] = useState(false);

  const resumes = hasResumes ? mockResumes : [];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} />
      
      <main className="container mx-auto px-4 py-8">
        {resumes.length === 0 ? (
          <EmptyState 
            hasDraft={hasDraft}
            draftTitle="Frontend Developer"
            draftUpdatedAt={new Date(Date.now() - 3 * 60 * 60 * 1000)}
          />
        ) : (
          <ResumeGrid resumes={resumes} />
        )}
      </main>

      {/* Debug toggle - удалить в продакшене */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        <button
          onClick={() => setHasResumes(!hasResumes)}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm shadow-lg"
        >
          Toggle Resumes
        </button>
        {!hasResumes && (
          <button
            onClick={() => setHasDraft(!hasDraft)}
            className="px-4 py-2 bg-secondary text-white rounded-lg text-sm shadow-lg"
          >
            Toggle Draft
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
