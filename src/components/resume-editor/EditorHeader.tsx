import { ArrowLeft, Save, MoreVertical, Download, Eye, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface EditorHeaderProps {
  title: string;
  onTitleChange: (title: string) => void;
  isPreviewMode?: boolean;
  onTogglePreview?: () => void;
}

const EditorHeader = ({
  title,
  onTitleChange,
  isPreviewMode,
  onTogglePreview,
}: EditorHeaderProps) => {
  return (
    <header className="h-16 sticky top-0 z-50 bg-[hsl(var(--primary)_/_0.0)] backdrop-blur-lg border-b border-primary/10">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          
          <Input
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="max-w-xs border-none focus-visible:ring-0 font-semibold text-lg"
          />
        </div>

        <div className="flex items-center gap-3">
          {onTogglePreview && (
            <Button 
              variant={isPreviewMode ? "default" : "ghost"} 
              onClick={onTogglePreview}
              className="md:hidden"
            >
              {isPreviewMode ? (
                <>
                  <Pencil className="w-4 h-4 mr-2" />
                  Редактировать
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 mr-2" />
                  Предпросмотр
                </>
              )}
            </Button>
          )}

          <div className="flex items-center gap-2">
            <Button>
              <Save className="w-4 h-4 mr-2" />
              Сохранить
            </Button>
            <span className="text-xs text-muted-foreground">Сохранено</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Download className="w-4 h-4 mr-2" />
                Скачать PDF
              </DropdownMenuItem>
              <DropdownMenuItem>Дублировать</DropdownMenuItem>
              <DropdownMenuItem>Настройки</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Удалить</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default EditorHeader;
