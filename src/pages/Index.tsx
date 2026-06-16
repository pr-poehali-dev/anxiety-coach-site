import { useState } from "react";
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

const SectionTitle = ({ label, title, light }: { label: string; title: string; light?: boolean }) => (
  <div className="mb-14">
    <p className={`text-xs font-medium tracking-widest uppercase mb-3 ${light ? "text-stone-400" : "text-stone-400"}`}>
      {label}
    </p>
    <h2 className={`font-display text-3xl md:text-4xl font-light ${light ? "text-stone-50" : "text-stone-900"}`}>
      {title}
    </h2>
  </div>
);

const Index = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    window.open(`${TG_LINK}?text=${encodeURIComponent(`Хочу записаться на знакомство. Мой телефон: ${phone}`)}`, "_blank");
    setSent(true);
  };

  return (
    <main className="font-body bg-stone-50 text-stone-900 min-h-screen">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-stone-100 via-stone-50 to-white">
        <div className="w-full max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 leading-tight mb-6">
                Когда внутри хаос, а решения не видно
              </h1>
              <p className="text-lg text-stone-500 leading-relaxed mb-4 max-w-md">
                Помогаю успокоить ум, вернуть ясность и найти выход. Без
                шаблонов, без магии, без лишних слов.
              </p>
              <p className="text-sm text-stone-400 mb-8" style={{ fontSize: "14px" }}>
                6+ лет коучинга · 300+ сессий · 10+ лет йоги
              </p>
              {!sent ? (
                <form onSubmit={handlePhoneSubmit} className="flex flex-col gap-3 max-w-sm">
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      className="flex-1 bg-white border border-stone-200 text-stone-900 placeholder-stone-400 rounded-full px-5 py-3.5 text-base outline-none focus:border-stone-400 transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-stone-900 text-stone-50 hover:bg-stone-700 transition-colors rounded-full px-6 py-3.5 text-base font-medium whitespace-nowrap"
                    >
                      Записаться
                    </button>
                  </div>
                  <p className="text-sm text-stone-400 pl-1">Знакомство 20 мин · без оплаты</p>
                </form>
              ) : (
                <div className="max-w-sm">
                  <p className="text-base text-stone-700 mb-1 font-medium">Спасибо! Открываю Telegram...</p>
                  <p className="text-sm text-stone-400">Спартак свяжется с вами в ближайшее время.</p>
                </div>
              )}
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
                  <p className="text-xs text-stone-400 mt-0.5">5 лет коучинга · 500+ сессий</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-24 bg-white">
        <div className="w-full max-w-3xl mx-auto px-6">
          <SectionTitle label="Обо мне" title="Кто я и как работаю" />
          <p className="text-lg text-stone-500 leading-relaxed mb-10">
            Я помогаю людям выбираться из тревоги и неопределённости — спокойно,
            без давления и готовых рецептов. Моя задача не дать совет, а помочь
            вам услышать себя и найти собственное решение.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-display text-4xl font-light text-stone-900 mb-1">5+ лет</p>
              <p className="text-sm text-stone-500">практики в коучинге</p>
            </div>
            <div>
              <p className="font-display text-4xl font-light text-stone-900 mb-1">300+</p>
              <p className="text-sm text-stone-500">проведённых сессий</p>
            </div>
            <div>
              <p className="font-display text-4xl font-light text-stone-900 mb-1">Онлайн</p>
              <p className="text-sm text-stone-500">из любой точки мира</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-20 md:py-24 bg-stone-50">
        <div className="w-full max-w-5xl mx-auto px-6">
          <SectionTitle label="Ситуации" title="Когда стоит обратиться" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p) => (
              <div
                key={p.title}
                className="group h-full p-7 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all duration-200 bg-white"
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
      <section className="py-20 md:py-24 bg-stone-50">
        <div className="w-full max-w-5xl mx-auto px-6">
          <SectionTitle label="Процесс" title="Как проходит сессия" />
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
      <section className="py-20 md:py-24 bg-white">
        <div className="w-full max-w-3xl mx-auto px-6 text-center">
          <Icon name="Quote" size={32} className="text-stone-200 mx-auto mb-8" />
          <blockquote className="font-display text-xl md:text-2xl font-light text-stone-700 leading-relaxed mb-8 italic">
            «Спартак помогает не просто успокоиться — он учит слышать себя даже
            в хаосе. После его сессий находишь решения, которые раньше казались
            неочевидными»
          </blockquote>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-px bg-stone-300" />
            <p className="text-sm text-stone-400">— Анна, предприниматель, работа с 2020</p>
            <div className="w-8 h-px bg-stone-300" />
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="py-20 md:py-24 bg-stone-900 text-stone-50">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-light text-stone-50 mb-4">
              Одна сессия — один шаг к ясности
            </h2>
            <p className="text-stone-400 leading-relaxed">
              Напишите мне — и мы спокойно договоримся о времени первой встречи.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-800 border border-stone-700">
              <Icon name="Clock" size={22} className="text-stone-400 mb-4" />
              <p className="text-3xl font-semibold text-stone-50 mb-2">2 700 ₽</p>
              <p className="font-medium text-stone-100 mb-1">Сессия 60–90 минут</p>
              <p className="text-sm text-stone-400">Онлайн, в удобное время</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-800 border border-stone-700">
              <Icon name="Gift" size={22} className="text-stone-400 mb-4" />
              <p className="text-xl font-semibold text-stone-50 mb-2 leading-tight">
                20 минут — знакомство без оплаты
              </p>
              <p className="text-sm text-stone-400">Обсудим ваш запрос</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-800 border border-stone-700">
              <Icon name="Package" size={22} className="text-stone-400 mb-4" />
              <p className="text-3xl font-semibold text-stone-50 mb-2">12 000 ₽</p>
              <p className="font-medium text-stone-100 mb-1">5 сессий</p>
              <p className="text-sm text-stone-400">Экономия 1 500 ₽</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-stone-50 text-stone-900 hover:bg-white transition-colors no-underline"
              style={{ fontSize: "16px", padding: "14px 36px", borderRadius: "100px" }}
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-stone-100 border-t border-stone-200">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-semibold text-stone-900 text-lg mb-1">Спартак Захаров</p>
              <p className="text-sm text-stone-500">Коуч по тревожности и принятию решений</p>
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
                href="https://instagram.com/spartakmihailovich"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors text-sm"
              >
                <Icon name="Instagram" size={15} />
                @spartakmihailovich
              </a>
              <a
                href="mailto:almaznayaspina@gmail.com"
                className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors text-sm"
              >
                <Icon name="Mail" size={15} />
                almaznayaspina@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTON */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        <div
          className={`flex flex-col items-end gap-3 transition-all duration-200 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-stone-900 border border-stone-200 px-5 py-3 rounded-full shadow-lg text-sm font-medium hover:bg-stone-50 transition-colors"
          >
            <Icon name="Send" size={16} />
            Telegram
          </a>
          <a
            href={MAX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-stone-900 border border-stone-200 px-5 py-3 rounded-full shadow-lg text-sm font-medium hover:bg-stone-50 transition-colors"
          >
            <Icon name="MessageCircle" size={16} />
            Макс
          </a>
        </div>
        <div className="relative">
          {!open && (
            <>
              <span className="absolute inset-0 rounded-full bg-stone-900 animate-ripple-soft pointer-events-none" />
              <span
                className="absolute inset-0 rounded-full bg-stone-900 animate-ripple-soft pointer-events-none"
                style={{ animationDelay: "1.75s" }}
              />
            </>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Написать"
            className="relative inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-3.5 rounded-full shadow-xl hover:bg-stone-700 transition-colors duration-200"
          >
            <Icon name={open ? "X" : "MessageSquare"} size={18} />
            <span className="text-sm font-medium">{open ? "Закрыть" : "Написать"}</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Index;