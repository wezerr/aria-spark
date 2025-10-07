import { useState } from "react";
import { useParams } from "react-router-dom";
import EditorHeader from "@/components/resume-editor/EditorHeader";
import PersonalInfoSection from "@/components/resume-editor/PersonalInfoSection";
import ExperienceSection from "@/components/resume-editor/ExperienceSection";
import EducationSection from "@/components/resume-editor/EducationSection";
import SkillsSection from "@/components/resume-editor/SkillsSection";
import LanguagesSection from "@/components/resume-editor/LanguagesSection";
import ProjectsSection from "@/components/resume-editor/ProjectsSection";
import ResumePreview from "@/components/resume-editor/ResumePreview";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const ResumeEditor = () => {
  const { id } = useParams();
  const [resumeTitle, setResumeTitle] = useState("Новое резюме");
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [showPreview, setShowPreview] = useState(true);

  // Mock resume data - в реальном приложении будет из состояния или API
  const [resumeData, setResumeData] = useState({
    personalInfo: {},
    experience: [],
    education: [],
    skills: {},
    languages: [],
    projects: []
  });

  return (
    <div className="min-h-screen bg-background">
      <EditorHeader
        title={resumeTitle}
        onTitleChange={setResumeTitle}
        selectedTemplate={selectedTemplate}
        onTemplateChange={setSelectedTemplate}
        showPreview={showPreview}
        onTogglePreview={() => setShowPreview(!showPreview)}
      />

      <div className="flex h-[calc(100vh-64px)]">
        {/* Форма редактирования */}
        <div className={`${showPreview ? 'w-3/5' : 'w-full'} overflow-y-auto border-r`}>
          <div className="max-w-3xl mx-auto p-6 space-y-6">
            <PersonalInfoSection data={resumeData.personalInfo} onChange={(data) => setResumeData({...resumeData, personalInfo: data})} />
            <ExperienceSection data={resumeData.experience} onChange={(data) => setResumeData({...resumeData, experience: data})} />
            <EducationSection data={resumeData.education} onChange={(data) => setResumeData({...resumeData, education: data})} />
            <SkillsSection data={resumeData.skills} onChange={(data) => setResumeData({...resumeData, skills: data})} />
            <LanguagesSection data={resumeData.languages} onChange={(data) => setResumeData({...resumeData, languages: data})} />
            <ProjectsSection data={resumeData.projects} onChange={(data) => setResumeData({...resumeData, projects: data})} />
            
            <Button variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Добавить секцию
            </Button>
          </div>
        </div>

        {/* Preview */}
        {showPreview && (
          <div className="w-2/5 bg-muted/30">
            <ResumePreview data={resumeData} template={selectedTemplate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeEditor;
