import { FileText, Smile, Building2, Clock } from 'lucide-react';

const stats = [
  {
    icon: FileText,
    number: '10,000+',
    label: 'Резюме создано'
  },
  {
    icon: Smile,
    number: '95%',
    label: 'Довольных пользователей'
  },
  {
    icon: Building2,
    number: '500+',
    label: 'Компаний-партнёров'
  },
  {
    icon: Clock,
    number: '24/7',
    label: 'AI поддержка'
  }
];

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-full h-full text-white" />
                </div>
              </div>

              {/* Number */}
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-lg text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
