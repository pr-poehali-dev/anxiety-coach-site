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
    <main style={{ fontFamily: "'Golos Text', system-ui, sans-serif" }} className="bg-white text-stone-900 min-h-screen">

      {/* ШАПКА */}
      <header style={{ height: "52px", background: "#111", color: "#ccc" }} className="flex items-center">
        <div className="w-full max-w-5xl mx-auto px-5 flex items-center justify-between">
          <span style={{ fontSize: "13px" }} className="whitespace-nowrap">
            Спартак Захаров&nbsp;·&nbsp;Коуч
          </span>
          <div className="flex items-center gap-5" style={{ fontSize: "13px" }}>
            <a
              href="tel:+79969971527"
              style={{ color: "#ccc" }}
              className="hover:text-white transition-colors hidden sm:block whitespace-nowrap"
            >
              +7 996 997 15 27
            </a>
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ccc" }}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Telegram
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-white py-16 md:py-24">
        <div className="w-full max-w-5xl mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">

            {/* Фото + текст */}
            <div className="flex-1">
              {/* Аватар + имя */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={AVATAR_URL}
                  alt="Спартак Захаров"
                  style={{ width: "136px", height: "136px" }}
                  className="rounded-full object-cover object-top border border-stone-200 shrink-0"
                />
                <div>
                  <p className="font-semibold text-stone-900" style={{ fontSize: "16px" }}>
                    Спартак Захаров
                  </p>
                  <p style={{ fontSize: "14px", color: "#78716c" }}>
                    Коуч по тревожности и принятию решений
                  </p>
                </div>
              </div>

              {/* Заголовок */}
              <h1
                style={{
                  fontFamily: "'Cormorant', Georgia, serif",
                  fontSize: "clamp(32px, 5vw, 44px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: "#1c1917",
                }}
                className="mb-5"
              >
                Когда внутри хаос,<br className="hidden sm:block" /> а решения не видно
              </h1>

              {/* Подзаголовок */}
              <p style={{ fontSize: "17px", color: "#57534e", lineHeight: 1.7 }} className="mb-8 max-w-lg">
                Помогаю успокоить ум, вернуть ясность и найти выход.
                Без шаблонов, без магии, без лишних слов.
              </p>

              {/* Кнопки */}
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href={TG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "15px", background: "#1c1917", color: "#fff" }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  <Icon name="Send" size={16} />
                  Написать в Telegram
                </a>
                <a
                  href={MAX_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "15px", background: "#fff", color: "#1c1917", border: "1px solid #d6d3d1" }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium hover:bg-stone-50 transition-colors"
                >
                  <Icon name="MessageCircle" size={16} />
                  Написать в Макс
                </a>
              </div>

              {/* Плашка — незаметная */}
              <p style={{ fontSize: "12px", color: "#a8a29e" }}>
                Первые 20 минут — бесплатно
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* КОГДА СТОИТ ОБРАТИТЬСЯ */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="w-full max-w-5xl mx-auto px-5">
          <h2
            style={{ fontFamily: "'Cormorant', Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1c1917" }}
            className="mb-10"
          >
            Когда стоит обратиться
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-xl border border-stone-200 bg-white"
              >
                <div className="mb-4">
                  <Icon name={p.icon} size={20} className="text-stone-400" />
                </div>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#1c1917" }} className="mb-1">
                  {p.title}
                </p>
                <p style={{ fontSize: "14px", color: "#78716c", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАК ПРОХОДИТ СЕССИЯ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="w-full max-w-5xl mx-auto px-5">
          <h2
            style={{ fontFamily: "'Cormorant', Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1c1917" }}
            className="mb-10"
          >
            Как проходит сессия
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num}>
                <p style={{ fontSize: "36px", fontWeight: 300, color: "#e7e5e4", lineHeight: 1 }} className="mb-3 select-none">
                  {s.num}
                </p>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#1c1917" }} className="mb-1">
                  {s.title}
                </p>
                <p style={{ fontSize: "14px", color: "#78716c", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВ */}
      <section className="py-16 bg-stone-50">
        <div className="w-full max-w-2xl mx-auto px-5">
          <blockquote
            style={{
              fontFamily: "'Cormorant', Georgia, serif",
              fontSize: "18px",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#57534e",
              lineHeight: 1.8,
            }}
            className="mb-4"
          >
            «Спартак помогает не просто успокоиться — он учит слышать себя даже
            в хаосе. После его сессий находишь решения, которые раньше казались
            неочевидными»
          </blockquote>
          <p style={{ fontSize: "13px", color: "#a8a29e" }}>— отзыв клиента</p>
        </div>
      </section>

      {/* СТОИМОСТЬ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="w-full max-w-5xl mx-auto px-5">
          <h2
            style={{ fontFamily: "'Cormorant', Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1c1917" }}
            className="mb-8"
          >
            Стоимость
          </h2>
          <div className="flex flex-col sm:flex-row gap-5 max-w-2xl">
            <div className="flex-1 p-6 rounded-xl border border-stone-200">
              <p style={{ fontSize: "13px", color: "#a8a29e" }} className="mb-2">Индивидуальная сессия</p>
              <p style={{ fontSize: "32px", fontWeight: 700, color: "#1c1917", lineHeight: 1 }} className="mb-1">
                2 700 <span style={{ fontSize: "20px" }}>₽</span>
              </p>
              <p style={{ fontSize: "14px", color: "#78716c" }}>60–90 минут · онлайн</p>
            </div>
            <div className="flex-1 p-6 rounded-xl bg-stone-50 border border-stone-200">
              <p style={{ fontSize: "13px", color: "#a8a29e" }} className="mb-2">Первая встреча</p>
              <p style={{ fontSize: "32px", fontWeight: 700, color: "#1c1917", lineHeight: 1 }} className="mb-1">
                Бесплатно
              </p>
              <p style={{ fontSize: "14px", color: "#78716c" }}>20 минут · обсудим ваш запрос</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "15px", background: "#1c1917", color: "#fff" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Icon name="Send" size={16} />
              Записаться в Telegram
            </a>
            <a
              href={MAX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "15px", background: "#fff", color: "#1c1917", border: "1px solid #d6d3d1" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium hover:bg-stone-50 transition-colors"
            >
              <Icon name="MessageCircle" size={16} />
              Записаться в Макс
            </a>
          </div>
        </div>
      </section>

      {/* ПОДВАЛ */}
      <footer style={{ borderTop: "1px solid #e7e5e4", background: "#fafaf9" }} className="py-10">
        <div className="w-full max-w-5xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#1c1917" }} className="mb-1">
                Спартак Захаров
              </p>
              <p style={{ fontSize: "13px", color: "#78716c" }}>
                Коуч по тревожности и принятию решений
              </p>
            </div>
            <div className="flex flex-col gap-2" style={{ fontSize: "13px", color: "#78716c" }}>
              <a href="tel:+79969971527" className="hover:text-stone-900 transition-colors">
                +7 996 997 15 27
              </a>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">
                Telegram: @spartakmihailovich
              </a>
              <a href={MAX_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">
                Макс
              </a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
};

export default Index;
