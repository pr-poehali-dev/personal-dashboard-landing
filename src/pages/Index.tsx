import { useState } from "react";
import Icon from "@/components/ui/icon";

type Section = "profile" | "subscriptions" | "support";

const SUBSCRIPTIONS = [
  { id: 1, name: "Логоша Старт", price: "490 ₽/мес", status: "active", expires: "01.06.2026", color: "#f97316" },
  { id: 2, name: "Логоша Про", price: "990 ₽/мес", status: "inactive", expires: "—", color: "#94a3b8" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [name, setName] = useState("Мария Иванова");
  const [email, setEmail] = useState("ivanova@example.ru");
  const [phone, setPhone] = useState("+7 (999) 123-45-67");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [supportMessage, setSupportMessage] = useState("");
  const [supportTopic, setSupportTopic] = useState("");

  const navItems = [
    { id: "profile" as Section, label: "Мои данные", icon: "User" },
    { id: "subscriptions" as Section, label: "Мои подписки", icon: "Star" },
    { id: "support" as Section, label: "Поддержка", icon: "MessageCircle" },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#fdf6ee", fontFamily: "'Golos Text', sans-serif" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #f0e8dc" }} className="sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black shadow-sm" style={{ background: "linear-gradient(135deg, #f97316, #fb923c)", color: "#fff" }}>
              🦕
            </div>
            <span className="text-xl font-black tracking-tight" style={{ color: "#1a1a1a", fontFamily: "'Montserrat', sans-serif" }}>
              ЛОГО<span style={{ color: "#f97316" }}>ША</span>
            </span>
            <div className="hidden sm:block w-px h-6 mx-2" style={{ backgroundColor: "#e5d8c8" }} />
            <span className="hidden sm:block text-sm font-medium" style={{ color: "#aaa" }}>Личный кабинет</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-orange-50" style={{ color: "#aaa" }}>
              <Icon name="Bell" size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ backgroundColor: "#f97316" }} />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all hover:bg-orange-50">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                М
              </div>
              <span className="hidden sm:block text-sm font-semibold" style={{ color: "#333" }}>Мария Иванова</span>
              <Icon name="ChevronDown" size={14} style={{ color: "#aaa" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="flex-1 flex max-w-[1280px] mx-auto w-full px-4 sm:px-6 py-6 gap-6">
        {/* Sidebar */}
        <aside className="w-56 flex-shrink-0 hidden md:flex flex-col gap-1">
          <div className="rounded-2xl p-4 flex flex-col gap-1" style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
            <div className="flex items-center gap-3 p-3 mb-2 rounded-xl" style={{ backgroundColor: "#fff8f2" }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                М
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold truncate" style={{ color: "#1a1a1a" }}>Мария Иванова</div>
                <div className="text-xs truncate" style={{ color: "#999" }}>ivanova@example.ru</div>
              </div>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left w-full font-medium text-sm"
                style={
                  activeSection === item.id
                    ? { backgroundColor: "#f97316", color: "#ffffff", boxShadow: "0 4px 12px rgba(249,115,22,0.35)" }
                    : { color: "#555", backgroundColor: "transparent" }
                }
              >
                <Icon
                  name={item.icon}
                  size={17}
                  style={{ color: activeSection === item.id ? "#ffffff" : (item.id === "subscriptions" ? "#f97316" : "#999") }}
                />
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-red-50 mt-2"
            style={{ color: "#e55" }}
          >
            <Icon name="LogOut" size={16} />
            Выйти из аккаунта
          </button>
        </aside>

        {/* Mobile nav */}
        <div className="flex md:hidden gap-2 w-full -mt-2 mb-0">
          <div className="flex gap-2 w-full overflow-x-auto pb-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0"
                style={
                  activeSection === item.id
                    ? { backgroundColor: "#f97316", color: "#fff" }
                    : { backgroundColor: "#fff", color: "#555", border: "1px solid #f0e8dc" }
                }
              >
                <Icon name={item.icon} size={15} />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 min-w-0">

          {/* МОИ ДАННЫЕ */}
          {activeSection === "profile" && (
            <div>
              <h1 className="text-2xl font-black mb-5" style={{ fontFamily: "'Montserrat', sans-serif", color: "#1a1a1a" }}>
                Мои данные
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="rounded-2xl p-6" style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
                  <h2 className="text-sm font-bold mb-5" style={{ color: "#888" }}>ЛИЧНЫЕ ДАННЫЕ</h2>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block" style={{ color: "#555" }}>ФИО</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: "1.5px solid #f0e8dc", backgroundColor: "#fdf6ee", color: "#1a1a1a", fontFamily: "'Golos Text', sans-serif" }}
                        onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                        onBlur={(e) => (e.target.style.borderColor = "#f0e8dc")}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block" style={{ color: "#555" }}>E-mail</label>
                      <div className="relative">
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all pr-10"
                          style={{ border: "1.5px solid #f0e8dc", backgroundColor: "#fdf6ee", color: "#1a1a1a", fontFamily: "'Golos Text', sans-serif" }}
                          onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                          onBlur={(e) => (e.target.style.borderColor = "#f0e8dc")}
                        />
                        <Icon name="ChevronDown" size={16} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#ccc" }} />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block" style={{ color: "#555" }}>Телефон</label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: "1.5px solid #f0e8dc", backgroundColor: "#fdf6ee", color: "#1a1a1a", fontFamily: "'Golos Text', sans-serif" }}
                        onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                        onBlur={(e) => (e.target.style.borderColor = "#f0e8dc")}
                      />
                    </div>
                    <button
                      className="w-full py-3 rounded-xl text-sm font-bold text-white mt-1 transition-all hover:shadow-lg"
                      style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 4px 12px rgba(249,115,22,0.3)" }}
                    >
                      Сохранить изменения
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl p-6" style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
                  <h2 className="text-sm font-bold mb-5" style={{ color: "#888" }}>ИЗМЕНЕНИЕ ПАРОЛЯ</h2>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block" style={{ color: "#555" }}>Новый пароль</label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Новый пароль"
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all pr-11"
                          style={{ border: "1.5px solid #f0e8dc", backgroundColor: "#fdf6ee", color: "#1a1a1a", fontFamily: "'Golos Text', sans-serif" }}
                          onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                          onBlur={(e) => (e.target.style.borderColor = "#f0e8dc")}
                        />
                        <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 transition-all" style={{ color: "#bbb" }}>
                          <Icon name={showPassword ? "EyeOff" : "Eye"} size={16} />
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block" style={{ color: "#555" }}>Повторите пароль</label>
                      <div className="relative">
                        <input
                          type={showRepeatPassword ? "text" : "password"}
                          value={repeatPassword}
                          onChange={(e) => setRepeatPassword(e.target.value)}
                          placeholder="Повторите пароль"
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all pr-11"
                          style={{ border: "1.5px solid #f0e8dc", backgroundColor: "#fdf6ee", color: "#1a1a1a", fontFamily: "'Golos Text', sans-serif" }}
                          onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                          onBlur={(e) => (e.target.style.borderColor = "#f0e8dc")}
                        />
                        <button onClick={() => setShowRepeatPassword(!showRepeatPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 transition-all" style={{ color: "#bbb" }}>
                          <Icon name={showRepeatPassword ? "EyeOff" : "Eye"} size={16} />
                        </button>
                      </div>
                    </div>

                    {password.length > 0 && (
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-1.5 flex-1 rounded-full transition-all" style={{
                            backgroundColor: password.length >= i * 2
                              ? password.length >= 8 ? "#22c55e" : "#f97316"
                              : "#f0e8dc"
                          }} />
                        ))}
                      </div>
                    )}

                    <div className="flex gap-3 mt-1">
                      <button
                        className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-gray-50"
                        style={{ border: "1.5px solid #e5d8c8", color: "#555" }}
                        onClick={() => { setPassword(""); setRepeatPassword(""); }}
                      >
                        Отменить
                      </button>
                      <button
                        className="flex-1 py-3 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg"
                        style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 4px 12px rgba(249,115,22,0.3)" }}
                      >
                        Сохранить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* МОИ ПОДПИСКИ */}
          {activeSection === "subscriptions" && (
            <div>
              <h1 className="text-2xl font-black mb-5" style={{ fontFamily: "'Montserrat', sans-serif", color: "#1a1a1a" }}>
                Мои подписки
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                {SUBSCRIPTIONS.map((sub) => (
                  <div key={sub.id} className="rounded-2xl p-5 relative overflow-hidden" style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10" style={{ backgroundColor: sub.color }} />
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-base font-black" style={{ fontFamily: "'Montserrat', sans-serif", color: "#1a1a1a" }}>{sub.name}</div>
                        <div className="text-sm font-semibold mt-0.5" style={{ color: sub.color }}>{sub.price}</div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: sub.status === "active" ? "#fef3e8" : "#f5f5f5",
                          color: sub.status === "active" ? "#f97316" : "#999"
                        }}>
                        {sub.status === "active" ? "Активна" : "Неактивна"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{ color: "#888" }}>
                      <Icon name="Calendar" size={14} />
                      <span>До: {sub.expires}</span>
                    </div>
                    {sub.status === "active" ? (
                      <button className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-red-50" style={{ border: "1.5px solid #fdddd9", color: "#e55" }}>
                        Отменить подписку
                      </button>
                    ) : (
                      <button className="mt-4 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all"
                        style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 4px 12px rgba(249,115,22,0.25)" }}>
                        Подключить
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-6 flex items-center gap-5" style={{ background: "linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%)" }}>
                <div className="text-4xl flex-shrink-0">🦕</div>
                <div>
                  <div className="text-white font-black text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Попробуй Логоша Про!</div>
                  <div className="text-orange-100 text-sm mt-1">Полный доступ ко всем материалам без ограничений</div>
                </div>
                <button className="ml-auto flex-shrink-0 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:shadow-lg"
                  style={{ backgroundColor: "#ffffff", color: "#f97316" }}>
                  Попробовать
                </button>
              </div>
            </div>
          )}

          {/* ПОДДЕРЖКА */}
          {activeSection === "support" && (
            <div>
              <h1 className="text-2xl font-black mb-5" style={{ fontFamily: "'Montserrat', sans-serif", color: "#1a1a1a" }}>
                Поддержка
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="rounded-2xl p-6" style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
                  <h2 className="text-sm font-bold mb-5" style={{ color: "#888" }}>НАПИСАТЬ В ПОДДЕРЖКУ</h2>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block" style={{ color: "#555" }}>Тема обращения</label>
                      <select
                        value={supportTopic}
                        onChange={(e) => setSupportTopic(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                        style={{ border: "1.5px solid #f0e8dc", backgroundColor: "#fdf6ee", color: supportTopic ? "#1a1a1a" : "#bbb", fontFamily: "'Golos Text', sans-serif" }}
                      >
                        <option value="" disabled>Выберите тему</option>
                        <option value="billing">Оплата и подписка</option>
                        <option value="technical">Технический вопрос</option>
                        <option value="content">Контент и материалы</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block" style={{ color: "#555" }}>Сообщение</label>
                      <textarea
                        value={supportMessage}
                        onChange={(e) => setSupportMessage(e.target.value)}
                        placeholder="Опишите ваш вопрос..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                        style={{ border: "1.5px solid #f0e8dc", backgroundColor: "#fdf6ee", color: "#1a1a1a", fontFamily: "'Golos Text', sans-serif" }}
                        onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                        onBlur={(e) => (e.target.style.borderColor = "#f0e8dc")}
                      />
                    </div>
                    <button
                      className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg"
                      style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 4px 12px rgba(249,115,22,0.3)" }}
                    >
                      Отправить обращение
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl p-5" style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
                    <h2 className="text-sm font-bold mb-4" style={{ color: "#888" }}>КОНТАКТЫ</h2>
                    <div className="flex flex-col gap-3">
                      {[
                        { icon: "MapPin", text: "г. Москва" },
                        { icon: "Phone", text: "+7 (123) 456-78-90" },
                        { icon: "Mail", text: "info@logosha.ru" },
                      ].map((c) => (
                        <div key={c.text} className="flex items-center gap-3 text-sm" style={{ color: "#555" }}>
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#fef3e8" }}>
                            <Icon name={c.icon} size={14} style={{ color: "#f97316" }} />
                          </div>
                          {c.text}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl p-5" style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
                    <h2 className="text-sm font-bold mb-4" style={{ color: "#888" }}>ЧАСТЫЕ ВОПРОСЫ</h2>
                    <div className="flex flex-col gap-2">
                      {[
                        "Как отменить подписку?",
                        "Как изменить способ оплаты?",
                        "Как получить доступ к материалам?",
                      ].map((q) => (
                        <button key={q}
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm transition-all hover:bg-orange-50 w-full"
                          style={{ border: "1.5px solid #f0e8dc", color: "#555" }}>
                          {q}
                          <Icon name="ChevronRight" size={14} style={{ color: "#f97316" }} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#2a2018", color: "#ccc" }} className="mt-8">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🦕</span>
                <span className="text-xl font-black" style={{ fontFamily: "'Montserrat', sans-serif", color: "#fff" }}>
                  ЛОГО<span style={{ color: "#f97316" }}>ША</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#8a7a6a" }}>
                Большой опыт работы в области с детьми
              </p>
            </div>

            <div>
              <div className="text-xs font-black tracking-widest mb-4 pb-2 border-b" style={{ color: "#f97316", borderColor: "#f97316", fontFamily: "'Montserrat', sans-serif" }}>
                О КОМПАНИИ
              </div>
              <div className="flex flex-col gap-2.5">
                {["О нас", "История", "Партнёры", "Преимущества"].map((l) => (
                  <a key={l} href="#" className="text-sm transition-all hover:text-orange-400" style={{ color: "#8a7a6a" }}>{l}</a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-black tracking-widest mb-4 pb-2 border-b" style={{ color: "#f97316", borderColor: "#f97316", fontFamily: "'Montserrat', sans-serif" }}>
                НУЖНА ПОМОЩЬ?
              </div>
              <div className="flex flex-col gap-2.5">
                {["Условия использования", "Политика конфиденциальности"].map((l) => (
                  <a key={l} href="#" className="text-sm transition-all hover:text-orange-400" style={{ color: "#8a7a6a" }}>{l}</a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-black tracking-widest mb-4 pb-2 border-b" style={{ color: "#f97316", borderColor: "#f97316", fontFamily: "'Montserrat', sans-serif" }}>
                КОНТАКТЫ
              </div>
              <div className="flex flex-col gap-2.5">
                {[
                  { icon: "MapPin", text: "Адрес: г. Москва" },
                  { icon: "Phone", text: "+7 (123) 456-78-90" },
                  { icon: "Mail", text: "info@logosha.ru" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-2 text-sm" style={{ color: "#8a7a6a" }}>
                    <Icon name={c.icon} size={13} style={{ color: "#f97316" }} />
                    {c.text}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-black tracking-widest mb-4 pb-2 border-b" style={{ color: "#f97316", borderColor: "#f97316", fontFamily: "'Montserrat', sans-serif" }}>
                ПОДПИСЫВАЙТЕСЬ
              </div>
              <div className="flex gap-2 flex-wrap">
                {[
                  { icon: "Users", label: "VK" },
                  { icon: "Send", label: "TG" },
                  { icon: "Youtube", label: "YT" },
                  { icon: "Mail", label: "Email" },
                ].map((s) => (
                  <button key={s.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: "#3a2e22", color: "#f97316" }}>
                    <Icon name={s.icon} size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 text-center text-sm" style={{ borderTop: "1px solid #3a2e22", color: "#6a5a4a" }}>
            © 2024 Логоша. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
