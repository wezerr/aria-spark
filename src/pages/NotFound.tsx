import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FileQuestion, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <div className="flex justify-center">
          <FileQuestion className="w-24 h-24 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <p className="text-xl text-muted-foreground">Страница не найдена</p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            К сожалению, запрашиваемая страница не существует или была перемещена
          </p>
        </div>
        <Button asChild>
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
