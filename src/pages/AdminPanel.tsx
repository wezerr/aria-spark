import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Users, TrendingUp, Calendar, Clock } from "lucide-react";
import { useState } from "react";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("stats");
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [articleTags, setArticleTags] = useState("");

  // Mock data
  const stats = {
    total: 1247,
    week: 89,
    day: 23,
  };

  const recentUsers = [
    { id: 1, name: "Иван Петров", email: "ivan@example.com", registered: "2025-10-26 14:32" },
    { id: 2, name: "Мария Сидорова", email: "maria@example.com", registered: "2025-10-26 13:15" },
    { id: 3, name: "Алексей Кузнецов", email: "alex@example.com", registered: "2025-10-26 11:45" },
    { id: 4, name: "Елена Иванова", email: "elena@example.com", registered: "2025-10-26 09:20" },
    { id: 5, name: "Дмитрий Смирнов", email: "dmitry@example.com", registered: "2025-10-25 18:30" },
  ];

  const weeklyGrowth = [
    { day: "Пн", users: 12 },
    { day: "Вт", users: 15 },
    { day: "Ср", users: 8 },
    { day: "Чт", users: 18 },
    { day: "Пт", users: 14 },
    { day: "Сб", users: 11 },
    { day: "Вс", users: 11 },
  ];

  const maxUsers = Math.max(...weeklyGrowth.map(d => d.users));

  const handlePublish = () => {
    console.log("Publishing article:", { articleTitle, articleContent, articleTags });
    // Логика публикации статьи
  };

  const renderStatsSection = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всего пользователей</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.total.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              С момента запуска
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">За неделю</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.week}</div>
            <p className="text-xs text-success mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +12% к предыдущей неделе
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">За сутки</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.day}</div>
            <p className="text-xs text-success mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +8% к вчерашнему дню
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Weekly Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Регистрации за неделю</CardTitle>
            <CardDescription>Количество новых пользователей по дням</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {weeklyGrowth.map((item) => (
                <div key={item.day} className="flex items-center gap-4">
                  <div className="w-8 text-sm font-medium text-muted-foreground">
                    {item.day}
                  </div>
                  <div className="flex-1">
                    <div className="h-8 bg-primary/10 rounded-md relative overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-md transition-all flex items-center justify-end pr-2"
                        style={{ width: `${(item.users / maxUsers) * 100}%` }}
                      >
                        <span className="text-xs font-medium text-primary-foreground">
                          {item.users}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Последние регистрации</CardTitle>
            <CardDescription>5 последних зарегистрированных пользователей</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Имя</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Дата</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">
                      {user.registered}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderArticlesSection = () => (
    <Card>
      <CardHeader>
        <CardTitle>Создать новую статью</CardTitle>
        <CardDescription>Заполните информацию о статье для блога</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Заголовок статьи</Label>
          <Input
            id="title"
            placeholder="Введите заголовок статьи"
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Содержание</Label>
          <Textarea
            id="content"
            placeholder="Напишите содержание статьи"
            className="min-h-[300px]"
            value={articleContent}
            onChange={(e) => setArticleContent(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags">Теги</Label>
          <Input
            id="tags"
            placeholder="Введите теги через запятую"
            value={articleTags}
            onChange={(e) => setArticleTags(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Например: карьера, технологии, советы
          </p>
        </div>

        <div className="flex gap-3 justify-end">
          <Button variant="outline">Сохранить черновик</Button>
          <Button onClick={handlePublish}>Опубликовать</Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderUsersSection = () => (
    <Card>
      <CardHeader>
        <CardTitle>Управление пользователями</CardTitle>
        <CardDescription>Список всех пользователей системы</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Раздел в разработке</p>
      </CardContent>
    </Card>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold">Панель администратора</h1>
              <p className="text-sm text-muted-foreground">Управление платформой</p>
            </div>
          </header>
          <div className="p-6">
            {activeSection === "stats" && renderStatsSection()}
            {activeSection === "articles" && renderArticlesSection()}
            {activeSection === "users" && renderUsersSection()}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminPanel;
