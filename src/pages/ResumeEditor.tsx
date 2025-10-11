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
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Plus, FileText, Layout, Palette } from "lucide-react";

const ResumeEditor = () => {
  const { id } = useParams();
  const [resumeTitle, setResumeTitle] = useState("Новое резюме");
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
        isPreviewMode={isPreviewMode}
        onTogglePreview={() => setIsPreviewMode(!isPreviewMode)}
      />

      <div className="h-[calc(100vh-90px)] lg:h-[calc(100vh-64px)]">
        {/* Мобильная версия - один экран с переключением */}
        <div className="h-full lg:hidden">
          {isPreviewMode ? (
            <div className="h-full">
              <ResumePreview 
                data={resumeData} 
                template="modern"
                layout={layout}
                colors={colors}
                fullScreen={true}
              />
            </div>
          ) : (
            <div className="h-full overflow-y-auto bg-background p-3">
              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="content" className="gap-1 text-xs sm:text-sm">
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">Содержание</span>
                  </TabsTrigger>
                  <TabsTrigger value="layout" className="gap-1 text-xs sm:text-sm">
                    <Layout className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">Макет</span>
                  </TabsTrigger>
                  <TabsTrigger value="colors" className="gap-1 text-xs sm:text-sm">
                    <Palette className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">Цвета</span>
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

                <TabsContent value="layout" className="mt-0">
                  <CustomizationPanel
                    colors={colors}
                    onColorsChange={setColors}
                    layout={layout}
                    onLayoutChange={setLayout}
                    activeTab="layout"
                  />
                </TabsContent>

                <TabsContent value="colors" className="mt-0">
                  <CustomizationPanel
                    colors={colors}
                    onColorsChange={setColors}
                    layout={layout}
                    onLayoutChange={setLayout}
                    activeTab="colors"
                  />
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>

        {/* Десктопная версия - две панели рядом */}
        <div className="h-full hidden lg:block">
          <ResizablePanelGroup direction="horizontal">
            {/* Левая панель - редактирование */}
            <ResizablePanel defaultSize={40} minSize={30} maxSize={60}>
              <div className="h-full overflow-y-auto bg-muted/30 p-6">
                <Tabs defaultValue="content" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="content" className="gap-2">
                      <FileText className="w-4 h-4" />
                      Содержание
                    </TabsTrigger>
                    <TabsTrigger value="layout" className="gap-2">
                      <Layout className="w-4 h-4" />
                      Макет
                    </TabsTrigger>
                    <TabsTrigger value="colors" className="gap-2">
                      <Palette className="w-4 h-4" />
                      Цвета
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

                  <TabsContent value="layout" className="mt-0">
                    <CustomizationPanel
                      colors={colors}
                      onColorsChange={setColors}
                      layout={layout}
                      onLayoutChange={setLayout}
                      activeTab="layout"
                    />
                  </TabsContent>

                  <TabsContent value="colors" className="mt-0">
                    <CustomizationPanel
                      colors={colors}
                      onColorsChange={setColors}
                      layout={layout}
                      onLayoutChange={setLayout}
                      activeTab="colors"
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Правая панель - превью */}
            <ResizablePanel defaultSize={60} minSize={40}>
              <div className="h-full">
                <ResumePreview 
                  data={resumeData} 
                  template="modern"
                  layout={layout}
                  colors={colors}
                  fullScreen={false}
                />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;
