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
import CustomizationPanel from "@/components/resume-editor/CustomizationPanel";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, FileText, Palette } from "lucide-react";

const ResumeEditor = () => {
  const { id } = useParams();
  const [resumeTitle, setResumeTitle] = useState("Новое резюме");
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [layout, setLayout] = useState("classic");
  const [colors, setColors] = useState({
    background: "#ffffff",
    text: "#000000",
    heading: "#1f2937",
    accent: "#3b82f6"
  });

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
        isPreviewMode={isPreviewMode}
        onTogglePreview={() => setIsPreviewMode(!isPreviewMode)}
      />

      <div className="h-[calc(100vh-64px)]">
        {isPreviewMode ? (
          /* Режим предпросмотра */
          <div className="h-full bg-muted/30">
            <ResumePreview 
              data={resumeData} 
              template={selectedTemplate} 
              layout={layout}
              colors={colors}
              fullScreen 
            />
          </div>
        ) : (
          /* Режим редактирования */
          <div className="h-full overflow-y-auto bg-muted/30">
            <div className="max-w-4xl mx-auto p-6">
              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 max-w-md mx-auto">
                  <TabsTrigger value="content" className="gap-2">
                    <FileText className="w-4 h-4" />
                    Содержание
                  </TabsTrigger>
                  <TabsTrigger value="design" className="gap-2">
                    <Palette className="w-4 h-4" />
                    Дизайн
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="content" className="space-y-4 mt-0">
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
                </TabsContent>

                <TabsContent value="design" className="mt-0">
                  <div className="max-w-2xl mx-auto">
                    <CustomizationPanel
                      colors={colors}
                      onColorsChange={setColors}
                      layout={layout}
                      onLayoutChange={setLayout}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeEditor;
