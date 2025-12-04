import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 3,
    minutes: 52,
    seconds: 33
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: 'Video',
      title: 'Пошаговая технология',
      description: 'Плетение сумочки-банта из бусин с подробными объяснениями'
    },
    {
      icon: 'Play',
      title: 'Видео-уроки',
      description: 'Подробные видео с объяснением каждого этапа работы'
    },
    {
      icon: 'FileText',
      title: 'PDF-инструкции',
      description: 'Инструкции с фотографиями для работы офлайн'
    },
    {
      icon: 'ShoppingBag',
      title: 'Список материалов',
      description: 'Все необходимое и проверенные поставщики'
    },
    {
      icon: 'Gift',
      title: 'Готовый аксессуар',
      description: 'Для себя, на подарок или на продажу'
    },
    {
      icon: 'TrendingUp',
      title: 'Монетизация навыка',
      description: 'Навык, который можно превратить в доход'
    },
    {
      icon: 'Camera',
      title: 'Бонус: Фото-модуль',
      description: 'Для красивых снимков изделий'
    },
    {
      icon: 'MessageCircle',
      title: 'Закрытый чат',
      description: 'Доступ к сообществу и поддержке автора'
    }
  ];

  const features = [
    {
      icon: 'Sparkles',
      title: 'Портфолио работ',
      description: 'Создайте уникальный аксессуар для своей коллекции'
    },
    {
      icon: 'Award',
      title: 'Сертификат мастера',
      description: 'Подтвердите свои навыки официальным документом'
    },
    {
      icon: 'Target',
      title: 'Практический результат',
      description: 'Готовое изделие, которое можно носить или продавать'
    }
  ];

  const faqs = [
    {
      question: 'Нужен ли опыт в бисероплетении?',
      answer: 'Нет, курс подходит для начинающих. Все техники объясняются пошагово с нуля.'
    },
    {
      question: 'Сколько времени займет создание сумки?',
      answer: 'В среднем 15-20 часов работы. Вы можете работать в своем темпе, доступ к курсу остается навсегда.'
    },
    {
      question: 'Где купить материалы?',
      answer: 'В курсе есть список проверенных поставщиков с контактами и ссылками.'
    },
    {
      question: 'Можно ли продавать готовые изделия?',
      answer: 'Да! Многие ученицы монетизируют свои навыки и продают изделия ручной работы.'
    },
    {
      question: 'Как долго доступен курс?',
      answer: 'Доступ к курсу бессрочный. Вы можете проходить его в любое удобное время.'
    },
    {
      question: 'Есть ли поддержка?',
      answer: 'Да, вы получите доступ к закрытому чату с автором и другими ученицами.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-muted to-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        
        <section className="text-center mb-16 md:mb-24 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-creative-purple to-creative-magenta text-white rounded-full text-sm font-semibold shadow-lg animate-float">
            ✨ Предпродажа до 12 декабря
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-creative-purple via-creative-magenta to-creative-orange bg-clip-text text-transparent leading-tight">
            Курс по плетению<br />сумки с бантом из бусин
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создайте уникальный аксессуар своими руками и освойте навык, который можно монетизировать
          </p>

          <div className="relative inline-block mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/2c3b6c6e-e69f-4232-be13-1c85b0d23e8e/files/a484cd3e-115c-4cc2-a3f9-fcc1ff43c16e.jpg" 
              alt="Сумка с бантом из бусин"
              className="rounded-3xl shadow-2xl max-w-full md:max-w-2xl w-full hover-scale"
            />
            <div className="absolute -top-4 -right-4 bg-creative-orange text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-scale-in">
              -34% 🎁
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-3xl mx-auto border-2 border-creative-magenta/20">
            <p className="text-sm uppercase tracking-wider text-creative-magenta font-semibold mb-4">
              До повышения цены осталось:
            </p>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { value: timeLeft.days, label: 'дней' },
                { value: timeLeft.hours, label: 'часов' },
                { value: timeLeft.minutes, label: 'минут' },
                { value: timeLeft.seconds, label: 'секунд' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-creative-purple to-creative-magenta rounded-2xl p-4 text-white shadow-lg hover-scale">
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm opacity-90">{item.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl md:text-5xl font-bold text-creative-purple">990 ₽</span>
              <span className="text-2xl md:text-3xl text-muted-foreground line-through">1490 ₽</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">
              Полный доступ к курсу + все бонусы + поддержка в чате
            </p>
            
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-creative-purple via-creative-magenta to-creative-orange hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg py-6 pulse-slow"
            >
              <Icon name="Sparkles" className="mr-2" />
              Забронировать доступ
            </Button>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-creative-purple to-creative-magenta bg-clip-text text-transparent">
            Что вы получите в курсе
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-creative-purple/50 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-creative-purple to-creative-magenta rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={benefit.icon} className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-24 bg-gradient-to-br from-creative-purple/10 via-creative-magenta/10 to-creative-orange/10 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground">
            Почему этот курс полезен
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover-scale">
                  <Icon name={feature.icon} className="w-10 h-10 text-creative-purple" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-creative-purple/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img 
                src="https://cdn.poehali.dev/projects/2c3b6c6e-e69f-4232-be13-1c85b0d23e8e/files/b8229d8e-c93a-463d-86a5-510309a8b9b8.jpg" 
                alt="Виктория Бибикова"
                className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-creative-magenta/30 hover-scale"
              />
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                  Виктория Бибикова
                </h2>
                <p className="text-creative-magenta font-semibold mb-4">Основатель Bibikova Club</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Мастер по бисероплетению с 7-летним опытом. Создательница уникальных авторских техник плетения из бусин.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Автор 15+ курсов по хендмейду, эксперт в создании уникальных украшений и аксессуаров из бусин и бисера.
                </p>
                <p className="font-medium text-foreground italic">
                  "Моя миссия — показать, что создание красивых вещей своими руками доступно каждой. Это не только творчество, но и возможность дополнительного дохода."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-creative-orange to-creative-pink bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-creative-purple/30 px-6 transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-creative-purple">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-creative-purple via-creative-magenta to-creative-orange rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Начните создавать уже сегодня! 🎨
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Забронируйте курс по специальной цене и получите доступ к эксклюзивным бонусам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-creative-purple hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-xl"
              >
                <Icon name="ShoppingBag" className="mr-2" />
                Забронировать за 990 ₽
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
