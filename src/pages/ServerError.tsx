import { Link } from "react-router-dom";
import { ServerCrash, Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServerError = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <div className="flex justify-center">
          <ServerCrash className="w-24 h-24 text-destructive" />
        </div>
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">500</h1>
          <p className="text-xl text-muted-foreground">Ошибка сервера</p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Что-то пошло не так на нашей стороне. Мы уже работаем над решением проблемы
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={handleRefresh}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Обновить страницу
          </Button>
          <Button asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              На главную
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
