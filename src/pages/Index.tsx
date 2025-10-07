import { DialogDemo } from '@/components/showcase/DialogDemo';
import { MenuDemo } from '@/components/showcase/MenuDemo';
import { TabDemo } from '@/components/showcase/TabDemo';
import { ListboxDemo } from '@/components/showcase/ListboxDemo';
import { ComboboxDemo } from '@/components/showcase/ComboboxDemo';
import { SwitchDemo } from '@/components/showcase/SwitchDemo';
import { RadioGroupDemo } from '@/components/showcase/RadioGroupDemo';
import { DisclosureDemo } from '@/components/showcase/DisclosureDemo';
import { PopoverDemo } from '@/components/showcase/PopoverDemo';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-[hsl(250,70%,62%)] to-[hsl(280,60%,55%)] text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTE0IDBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-in">
              Headless UI Components
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              Beautiful, accessible components built with React & Headless UI
            </p>
            <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200">
                View Docs
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* Grid Layout for Components */}
          <section className="grid gap-12 md:gap-16">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <DialogDemo />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <MenuDemo />
              </div>
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <PopoverDemo />
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <TabDemo />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <ListboxDemo />
              </div>
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <ComboboxDemo />
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <SwitchDemo />
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <RadioGroupDemo />
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <DisclosureDemo />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-muted-foreground">
              Built with React, Headless UI, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
