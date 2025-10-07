import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Edit,
  Download,
  Copy,
  Share2,
  Trash2,
  MoreVertical,
  FileText,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Resume {
  id: string;
  title: string;
  template: string;
  status: "complete" | "draft";
  updatedAt: Date;
  isPublic: boolean;
}

interface ResumeCardProps {
  resume: Resume;
  style?: React.CSSProperties;
}

export function ResumeCard({ resume, style }: ResumeCardProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleEdit = () => {
    // Navigation will be handled by Link component
  };

  const handleDownload = () => {
    toast.success(`Скачивание "${resume.title}.pdf"...`);
  };

  const handleDuplicate = () => {
    toast.success(`Создание копии "${resume.title}"...`);
  };

  const handleShare = () => {
    toast.success("Ссылка скопирована в буфер обмена");
  };

  const handleDelete = () => {
    toast.success(`Резюме "${resume.title}" удалено`);
    setDeleteDialogOpen(false);
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Сегодня";
    if (diffDays === 1) return "Вчера";
    if (diffDays < 7) return `${diffDays} дней назад`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} недель назад`;
    return date.toLocaleDateString("ru-RU");
  };

  return (
    <>
      <Card
        className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in overflow-hidden"
        style={style}
      >
        <Link to={`/resume/editor/${resume.id}`} className="block">
        {/* Preview/Thumbnail */}
        <div className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden border-b">
          <div className="absolute inset-0 flex items-center justify-center">
            <FileText className="w-20 h-20 text-muted-foreground/20" />
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant={resume.status === "complete" ? "default" : "secondary"}>
              {resume.status === "complete" ? "Завершено" : "Черновик"}
            </Badge>
          </div>

          {/* Public Badge */}
          {resume.isPublic && (
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                <Globe className="w-3 h-3 mr-1" />
                Публичное
              </Badge>
            </div>
          )}

          {/* Hover overlay with quick actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Edit className="w-4 h-4 mr-1" />
              Редактировать
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleDownload();
              }}
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <CardContent className="pt-4 pb-2">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg line-clamp-1">{resume.title}</h3>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{resume.template}</span>
              <span>{formatDate(resume.updatedAt)}</span>
            </div>
          </div>
        </CardContent>
        </Link>

        <CardFooter className="pt-0 pb-4 flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to={`/resume/editor/${resume.id}`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Редактировать
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Скачать PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDuplicate}>
                <Copy className="mr-2 h-4 w-4" />
                Дублировать
              </DropdownMenuItem>
              {resume.isPublic && (
                <DropdownMenuItem onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Поделиться
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  setDeleteDialogOpen(true);
                }}
                className="text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Удалить
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardFooter>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Удалить резюме?</AlertDialogTitle>
            <AlertDialogDescription>
              Вы уверены, что хотите удалить резюме "{resume.title}"? Это действие
              необратимо.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Удалить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
