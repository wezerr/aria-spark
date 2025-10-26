import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { useState } from "react";

// Временные данные для статей
const blogPosts = [
  {
    id: 1,
    title: "Как создать идеальное резюме в 2025 году",
    excerpt: "Узнайте о последних трендах в создании резюме и о том, что ищут работодатели в кандидатах",
    category: "Советы",
    date: "2025-01-15",
    readTime: "5 мин",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
  },
  {
    id: 2,
    title: "10 ошибок в резюме, которые стоят вам работы",
    excerpt: "Избегайте этих распространенных ошибок, чтобы увеличить свои шансы на получение работы мечты",
    category: "Ошибки",
    date: "2025-01-10",
    readTime: "7 мин",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
  },
  {
    id: 3,
    title: "ATS-оптимизация: как пройти через системы отбора",
    excerpt: "Практическое руководство по созданию резюме, которое понравится автоматическим системам отбора",
    category: "Технологии",
    date: "2025-01-05",
    readTime: "6 мин",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
  },
  {
    id: 4,
    title: "Сопроводительное письмо: полное руководство",
    excerpt: "Как написать сопроводительное письмо, которое выделит вас среди других кандидатов",
    category: "Советы",
    date: "2024-12-28",
    readTime: "8 мин",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
  },
  {
    id: 5,
    title: "Как адаптировать резюме под разные вакансии",
    excerpt: "Стратегии персонализации резюме для максимального успеха в различных отраслях",
    category: "Стратегия",
    date: "2024-12-20",
    readTime: "5 мин",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
  },
  {
    id: 6,
    title: "Дизайн резюме: минимализм vs креатив",
    excerpt: "Когда использовать классический дизайн, а когда можно позволить себе творческий подход",
    category: "Дизайн",
    date: "2024-12-15",
    readTime: "4 мин",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  }
];

const POSTS_PER_PAGE = 3;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

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

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Блог о карьере
          </h1>
          <p className="text-lg text-muted-foreground">
            Полезные советы, инструкции и лучшие практики для создания эффективного резюме
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Link to={`/blog/tag/${post.category}`}>
                    <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm hover:bg-primary cursor-pointer transition-colors">
                      {post.category}
                    </Badge>
                  </Link>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" className="w-full group/btn">
                      Читать далее
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
