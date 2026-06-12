import Icon from "@/components/ui/icon";

const AVATAR_URL =
  "https://cdn.poehali.dev/projects/82d830f4-26d8-4d4b-a5aa-07d08f384fc3/bucket/9c75056c-2bad-471e-bcca-dada5edf3eef.jpeg";

const TG_LINK = "https://t.me/spartakmihailovich";
const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOIhVJcfaneWMkhuYUbG6JYOu-Jqtd3dC5r1N86r_SYKr95qGHo";

const problems = [
  { icon: "Brain", title: "Постоянная тревога", desc: "Мысли не стихают, голова не отдыхает" },
  { icon: "MapPin", title: "Тупик", desc: "Не знаю куда двигаться и что делать дальше" },
  { icon: "Battery", title: "Выгорание", desc: "Нет сил, всё кажется бессмысленным" },
  { icon: "Compass", title: "Потерянность", desc: "Хочу перемен, но не знаю каких именно" },
];

const steps = [
  { num: "01", title: "Говорите вы", desc: "Рассказываете всё, что давит. Без оценок и готовых ответов." },
  { num: "02", title: "Находим опору", desc: "Вместе обнаруживаем, что уже есть — ресурсы, ценности, точки силы." },
  { num: "03", title: "План действий", desc: "Формулируем конкретные шаги, не абстрактные советы." },
  { num: "04", title: "Закрепление", desc: "Фиксируем результат и договариваемся о следующем шаге." },
];

const Index = () => {
  return (
    <main className="font-body bg-stone-50 text-stone-900 min-h-screen">
      {/* HERO */}
      <section className="relative flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-white" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 leading-tight mb-6">
                Когда внутри хаос, а решения не видно
              </h1>
              <p className="text-lg text-stone-500 leading-relaxed mb-8 max-w-md">
                Помогаю успокоить ум, вернуть ясность и найти выход. Без
                шаблонов, без магии, без лишних слов.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={TG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-stone-900 text-stone-50 px-7 py-4 rounded-full text-base font-medium hover:bg-stone-700 transition-colors duration-200"
                >
                  <Icon name="Send" size={18} />
                  Написать в Telegram
                </a>
                <a
                  href={MAX_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-stone-900 border border-stone-200 px-7 py-4 rounded-full text-base font-medium hover:bg-stone-50 transition-colors duration-200"
                >
                  <Icon name="MessageCircle" size={18} />
                  Написать в Макс
                </a>
              </div>
              <p className="text-xs text-stone-400 mt-4">
                Первые 20 минут — бесплатно
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
                  <img
                    src={AVATAR_URL}
                    alt="Спартак Захаров — коуч"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-3 shadow-lg border border-stone-100">
                  <p className="text-sm font-semibold text-stone-900">Спартак Захаров</p>
                  <p className="text-xs text-stone-400 mt-0.5">Коучинг онлайн</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-24 bg-white">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-3">
              Ситуации
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-stone-900">
              Когда стоит обратиться
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p) => (
              <div
                key={p.title}
                className="group p-7 rounded-2xl border border-stone-100 hover:border-stone-200 hover:shadow-md transition-all duration-200 bg-stone-50"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-stone-200 flex items-center justify-center mb-5 transition-colors">
                  <Icon name={p.icon} size={20} className="text-stone-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">{p.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-stone-50">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-3">
              Процесс
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-stone-900">
              Как проходит сессия
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num}>
                <div className="font-display text-6xl font-light text-stone-200 leading-none mb-4 select-none">
                  {s.num}
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">{s.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="py-24 bg-white">
        <div className="w-full max-w-3xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Icon name="Quote" size={32} className="text-stone-200 mx-auto" />
          </div>
          <blockquote className="font-display text-xl md:text-2xl font-light text-stone-700 leading-relaxed mb-8 italic">
            «Спартак помогает не просто успокоиться — он учит слышать себя даже
            в хаосе. После его сессий находишь решения, которые раньше казались
            неочевидными»
          </blockquote>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-px bg-stone-300" />
            <p className="text-sm text-stone-400">Отзыв клиента</p>
            <div className="w-8 h-px bg-stone-300" />
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="py-24 bg-stone-900 text-stone-50">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-3">
                Стоимость
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-stone-50 mb-8">
                Одна сессия — один шаг к ясности
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-stone-800 border border-stone-700">
                  <Icon name="Clock" size={20} className="text-stone-400 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-stone-100">Сессия 60–90 минут</p>
                    <p className="text-stone-400 text-sm mt-0.5">Онлайн, в удобное время</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-2xl font-semibold text-stone-50">2 700 ₽</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-stone-800 border border-stone-700">
                  <Icon name="Gift" size={20} className="text-stone-400 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-stone-100">Первые 20 минут</p>
                    <p className="text-stone-400 text-sm mt-0.5">Бесплатно — обсудим ваш запрос</p>
                  </div>
                  <div className="shrink-0">
                    <span className="text-sm font-medium text-stone-300 bg-stone-700 px-3 py-1 rounded-full">
                      Бесплатно
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <p className="text-stone-400 text-sm mb-6 max-w-xs md:text-right">
                Напишите мне — и мы договоримся о времени первой бесплатной
                встречи
              </p>
              <div className="flex flex-col gap-3 w-full sm:w-auto items-stretch md:items-end">
                <a
                  href={TG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-stone-50 text-stone-900 px-8 py-4 rounded-full text-base font-medium hover:bg-white transition-colors duration-200"
                >
                  <Icon name="Send" size={18} />
                  Записаться в Telegram
                </a>
                <a
                  href={MAX_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-stone-800 text-stone-200 border border-stone-700 px-8 py-4 rounded-full text-base font-medium hover:bg-stone-700 transition-colors duration-200"
                >
                  <Icon name="MessageCircle" size={18} />
                  Записаться в Макс
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-stone-100 border-t border-stone-200">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-semibold text-stone-900 text-lg mb-1">
                Спартак Захаров
              </p>
              <p className="text-sm text-stone-500">
                Коуч по тревожности и принятию решений
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-2">
              <a
                href="tel:+79969971527"
                className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors text-sm"
              >
                <Icon name="Phone" size={15} />
                +7 996 997 15 27
              </a>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors text-sm"
              >
                <Icon name="Send" size={15} />
                @spartakmihailovich
              </a>
              <a
                href={MAX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors text-sm"
              >
                <Icon name="MessageCircle" size={15} />
                Макс
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTON */}
      <a
        href={TG_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в Telegram"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-3.5 rounded-full shadow-xl hover:bg-stone-700 transition-colors duration-200"
      >
        <Icon name="Send" size={18} />
        <span className="hidden sm:inline text-sm font-medium">Написать</span>
      </a>
    </main>
  );
};

export default Index;