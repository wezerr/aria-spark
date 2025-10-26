import { Link } from "react-router-dom";
import { ShieldAlert, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Forbidden = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <div className="flex justify-center">
          <ShieldAlert className="w-24 h-24 text-warning" />
        </div>
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">403</h1>
          <p className="text-xl text-muted-foreground">Доступ запрещен</p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            У вас нет прав для просмотра этой страницы. Пожалуйста, войдите в систему или обратитесь к администратору
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" asChild>
            <Link to="/auth">
              Войти
            </Link>
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

export default Forbidden;
