import { CheckCircle2, Sparkles } from "lucide-react";

const Step7Generate = () => {
  return (
    <div className="space-y-6 text-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-10 h-10 text-primary" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Почти готово!</h2>
        <p className="text-muted-foreground">
          Сейчас AI создаст профессиональное резюме на основе введённых данных
        </p>
      </div>

      <div className="bg-muted/50 rounded-lg p-6 space-y-3 text-sm">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-primary mt-0.5" />
          <div className="text-left">
            <p className="font-medium">Что будет сделано:</p>
            <ul className="text-muted-foreground space-y-1 mt-1">
              <li>• Структурируем ваш опыт работы</li>
              <li>• Добавим детали к вашим достижениям</li>
              <li>• Оформим информацию профессионально</li>
              <li>• Подберём оптимальный шаблон</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        После создания вы сможете отредактировать любую часть резюме
      </p>
    </div>
  );
};

export default Step7Generate;
