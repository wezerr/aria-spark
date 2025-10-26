import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Временные данные для статей (должны быть синхронизированы с Blog.tsx)
const blogPosts = [
  {
    id: 1,
    title: "Как создать идеальное резюме в 2025 году",
    excerpt: "Узнайте о последних трендах в создании резюме и о том, что ищут работодатели в кандидатах",
    category: "Советы",
    date: "2025-01-15",
    readTime: "5 мин",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    content: `
      <h2>Введение</h2>
      <p>В 2025 году рынок труда продолжает эволюционировать, и вместе с ним меняются требования к резюме. Работодатели становятся всё более избирательными, а конкуренция за лучшие позиции растёт.</p>
      
      <h2>Ключевые тренды</h2>
      <p>Современное резюме должно быть не просто списком ваших достижений, а продуманным документом, который рассказывает историю вашей карьеры.</p>
      
      <h3>1. Оптимизация под ATS</h3>
      <p>Системы автоматического отбора (ATS) используются в 90% крупных компаний. Важно структурировать информацию так, чтобы эти системы могли её правильно распознать.</p>
      
      <h3>2. Фокус на результатах</h3>
      <p>Вместо описания обязанностей делайте акцент на конкретных достижениях с цифрами и метриками. Например: "Увеличил продажи на 35% за 6 месяцев".</p>
      
      <h3>3. Персонализация</h3>
      <p>Создавайте отдельную версию резюме для каждой вакансии, адаптируя ключевые навыки и опыт под требования конкретной позиции.</p>
      
      <h2>Структура идеального резюме</h2>
      <p>Современное резюме должно включать:</p>
      <ul>
        <li>Краткое профессиональное резюме (2-3 предложения)</li>
        <li>Ключевые навыки, релевантные вакансии</li>
        <li>Опыт работы с акцентом на достижения</li>
        <li>Образование и сертификаты</li>
        <li>Дополнительные секции (проекты, публикации, волонтёрство)</li>
      </ul>
      
      <h2>Заключение</h2>
      <p>Создание эффективного резюме — это инвестиция времени, которая окупится возможностью получить работу мечты. Следуйте современным трендам, но не забывайте о своей уникальности.</p>
    `
  },
  {
    id: 2,
    title: "10 ошибок в резюме, которые стоят вам работы",
    excerpt: "Избегайте этих распространенных ошибок, чтобы увеличить свои шансы на получение работы мечты",
    category: "Ошибки",
    date: "2025-01-10",
    readTime: "7 мин",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    content: `
      <h2>Почему даже отличные кандидаты получают отказы?</h2>
      <p>Часто проблема не в квалификации, а в том, как вы её презентуете. Рассмотрим самые критичные ошибки.</p>
      
      <h2>10 критических ошибок</h2>
      
      <h3>1. Грамматические ошибки</h3>
      <p>Опечатки и ошибки — первое, что бросается в глаза рекрутеру. Они сигнализируют о невнимательности.</p>
      
      <h3>2. Слишком длинное резюме</h3>
      <p>Оптимальная длина — 1-2 страницы. Больше — значит меньше шансов, что резюме прочитают до конца.</p>
      
      <h3>3. Отсутствие конкретики</h3>
      <p>Фразы типа "Ответственный за продажи" ничего не говорят. Нужны цифры и результаты.</p>
      
      <h3>4. Нерелевантная информация</h3>
      <p>Хобби, личные фото, семейное положение — всё это лишнее, если не требуется явно.</p>
      
      <h3>5. Плохое форматирование</h3>
      <p>Использование экзотических шрифтов, слишком яркие цвета или неструктурированный текст отталкивают.</p>
      
      <h2>Как избежать этих ошибок?</h2>
      <p>Используйте современные инструменты для создания резюме, проверяйте текст несколько раз и просите знакомых дать обратную связь перед отправкой.</p>
    `
  },
  {
    id: 3,
    title: "ATS-оптимизация: как пройти через системы отбора",
    excerpt: "Практическое руководство по созданию резюме, которое понравится автоматическим системам отбора",
    category: "Технологии",
    date: "2025-01-05",
    readTime: "6 мин",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    content: `
      <h2>Что такое ATS?</h2>
      <p>ATS (Applicant Tracking System) — это программное обеспечение, которое компании используют для автоматизации процесса найма. Оно сканирует, сортирует и ранжирует резюме.</p>
      
      <h2>Как работает ATS</h2>
      <p>Система анализирует ваше резюме на предмет ключевых слов из описания вакансии, проверяет структуру и форматирование, а затем присваивает резюме рейтинг.</p>
      
      <h3>Ключевые слова</h3>
      <p>Используйте точные формулировки из описания вакансии. Если в вакансии упоминается "управление проектами", используйте эту фразу, а не "руководство проектами".</p>
      
      <h3>Формат файла</h3>
      <p>Наиболее безопасный формат — .docx или .pdf. Избегайте сложных таблиц, текстовых блоков и графических элементов.</p>
      
      <h3>Структура</h3>
      <p>Используйте стандартные заголовки разделов: "Опыт работы", "Образование", "Навыки". ATS лучше распознаёт привычную структуру.</p>
      
      <h2>Практические рекомендации</h2>
      <ul>
        <li>Используйте простые шрифты (Arial, Calibri, Times New Roman)</li>
        <li>Избегайте колонок и таблиц</li>
        <li>Не используйте изображения и графику</li>
        <li>Сохраняйте файл с понятным названием (Имя_Фамилия_Резюме.pdf)</li>
      </ul>
      
      <h2>Тестирование</h2>
      <p>Существуют сервисы для проверки ATS-совместимости вашего резюме. Используйте их перед отправкой.</p>
    `
  },
  {
    id: 4,
    title: "Сопроводительное письмо: полное руководство",
    excerpt: "Как написать сопроводительное письмо, которое выделит вас среди других кандидатов",
    category: "Советы",
    date: "2024-12-28",
    readTime: "8 мин",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    content: `
      <h2>Зачем нужно сопроводительное письмо?</h2>
      <p>Сопроводительное письмо — это ваш шанс рассказать историю, которую невозможно передать через резюме. Это мост между вашим опытом и потребностями компании.</p>
      
      <h2>Структура идеального письма</h2>
      
      <h3>Вступление</h3>
      <p>Привлеките внимание в первых двух предложениях. Объясните, почему вы заинтересованы именно в этой позиции и этой компании.</p>
      
      <h3>Основная часть</h3>
      <p>Расскажите о 2-3 ключевых достижениях, которые делают вас идеальным кандидатом. Используйте конкретные примеры и цифры.</p>
      
      <h3>Заключение</h3>
      <p>Выразите энтузиазм и готовность обсудить детали на собеседовании. Поблагодарите за внимание.</p>
      
      <h2>Чего избегать</h2>
      <ul>
        <li>Пересказа резюме — письмо должно дополнять, а не дублировать</li>
        <li>Шаблонных фраз — каждое письмо должно быть персонализировано</li>
        <li>Слишком большого объёма — оптимально 200-300 слов</li>
        <li>Негатива о прошлых работодателях</li>
      </ul>
      
      <h2>Примеры эффективных фраз</h2>
      <p>Вместо "Я хотел бы работать в вашей компании" напишите "Меня впечатлил ваш недавний проект по [название], и я хотел бы внести вклад в развитие этого направления".</p>
    `
  },
  {
    id: 5,
    title: "Как адаптировать резюме под разные вакансии",
    excerpt: "Стратегии персонализации резюме для максимального успеха в различных отраслях",
    category: "Стратегия",
    date: "2024-12-20",
    readTime: "5 мин",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    content: `
      <h2>Почему одно резюме не работает для всех вакансий?</h2>
      <p>Каждая компания и позиция имеют уникальные требования. Универсальное резюме редко попадает в цель.</p>
      
      <h2>Стратегия адаптации</h2>
      
      <h3>Анализ вакансии</h3>
      <p>Выделите 5-7 ключевых требований из описания вакансии. Именно на них вы будете делать акцент.</p>
      
      <h3>Настройка профессионального резюме</h3>
      <p>Перепишите вступительный абзац так, чтобы он отражал потребности конкретной компании.</p>
      
      <h3>Переупорядочивание навыков</h3>
      <p>Поместите наиболее релевантные навыки в начало списка. То, что важно для одной компании, может быть вторичным для другой.</p>
      
      <h3>Акценты в опыте работы</h3>
      <p>В описании каждой позиции выделите те достижения и обязанности, которые наиболее близки к требованиям вакансии.</p>
      
      <h2>Практический пример</h2>
      <p>Для вакансии в стартап делайте акцент на гибкости и многозадачности. Для корпорации — на процессах и соблюдении стандартов.</p>
      
      <h2>Инструменты для адаптации</h2>
      <p>Создайте базовую версию резюме и несколько вариантов для разных типов позиций. Это сократит время на адаптацию каждой новой версии.</p>
    `
  },
  {
    id: 6,
    title: "Дизайн резюме: минимализм vs креатив",
    excerpt: "Когда использовать классический дизайн, а когда можно позволить себе творческий подход",
    category: "Дизайн",
    date: "2024-12-15",
    readTime: "4 мин",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    content: `
      <h2>Дизайн имеет значение</h2>
      <p>Внешний вид резюме влияет на первое впечатление о вас как о кандидате. Но как выбрать правильный стиль?</p>
      
      <h2>Минималистичный дизайн</h2>
      
      <h3>Когда использовать</h3>
      <p>Корпоративные позиции, финансовый сектор, право, медицина, госсектор — везде, где ценится консерватизм.</p>
      
      <h3>Ключевые элементы</h3>
      <ul>
        <li>Простой чистый шрифт (Helvetica, Arial)</li>
        <li>Минимум цветов (1-2 акцентных)</li>
        <li>Чёткая иерархия информации</li>
        <li>Много белого пространства</li>
      </ul>
      
      <h2>Креативный дизайн</h2>
      
      <h3>Когда использовать</h3>
      <p>Дизайн, маркетинг, реклама, медиа, стартапы — области, где креативность — часть профессии.</p>
      
      <h3>Возможности</h3>
      <ul>
        <li>Необычные шрифтовые сочетания</li>
        <li>Инфографика и визуализация данных</li>
        <li>Яркие цветовые акценты</li>
        <li>Нестандартные макеты</li>
      </ul>
      
      <h2>Золотая середина</h2>
      <p>Для большинства позиций идеален "профессионально-современный" стиль: чистый дизайн с одним-двумя акцентными цветами и хорошей типографикой.</p>
      
      <h2>Важное правило</h2>
      <p>Каким бы ни был дизайн, контент всегда важнее формы. Красивое резюме без содержания не принесёт результата.</p>
    `
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Статья не найдена</h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться к блогу
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-foreground">
              ResumeBuilder
            </Link>
            <nav className="flex items-center gap-4">
              <Link to="/blog">
                <Button variant="ghost">Блог</Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="ghost">Мои резюме</Button>
              </Link>
              <Link to="/auth">
                <Button>Войти</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Назад к блогу
          </Link>

          {/* Article header */}
          <div className="mb-8">
            <Link to={`/blog/tag/${post.category}`}>
              <Badge className="mb-4 hover:bg-primary/80 cursor-pointer">
                {post.category}
              </Badge>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('ru-RU', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Поделиться
            </Button>
          </div>

          {/* Featured image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-muted-foreground prose-ul:my-6
              prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Похожие статьи
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Link to={`/blog/tag/${relatedPost.category}`}>
                      <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm hover:bg-primary cursor-pointer transition-colors">
                        {relatedPost.category}
                      </Badge>
                    </Link>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {relatedPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/blog/${relatedPost.id}`}>
                      <Button variant="ghost" className="w-full group/btn">
                        Читать далее
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
