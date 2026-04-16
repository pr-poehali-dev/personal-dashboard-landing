import { useState } from "react";
import Icon from "@/components/ui/icon";

type Section = "profile" | "subscriptions" | "support";

const PLANS = [
  {
    id: "trial", name: "Пробный", emoji: "🌱",
    priceMonth: 0, priceYear: 0,
    gradient: "linear-gradient(135deg, #6ee7b7, #34d399)",
    glow: "rgba(52,211,153,0.25)",
    color: "#059669",
    features: ["5 уроков", "Базовые материалы", "Email поддержка"],
    popular: false,
  },
  {
    id: "start", name: "Старт", emoji: "⭐",
    priceMonth: 490, priceYear: 3900,
    gradient: "linear-gradient(135deg, #f97316, #fb923c)",
    glow: "rgba(249,115,22,0.25)",
    color: "#f97316",
    features: ["50 уроков", "Все базовые материалы", "Email поддержка", "Прогресс ребёнка"],
    popular: false,
  },
  {
    id: "premium", name: "Премиум", emoji: "👑",
    priceMonth: 890, priceYear: 7900,
    gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
    glow: "rgba(249,115,22,0.3)",
    color: "#f97316",
    features: ["Все уроки", "Эксклюзивный контент", "Приоритетная поддержка", "100 ГБ хранилища", "Оффлайн доступ"],
    popular: true,
  },
  {
    id: "pro", name: "Про", emoji: "🚀",
    priceMonth: 1490, priceYear: 13900,
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    glow: "rgba(139,92,246,0.25)",
    color: "#8b5cf6",
    features: ["Всё из Премиум", "Несколько детей", "Персональный куратор", "API доступ", "Ранний доступ к новинкам"],
    popular: false,
  },
];

const PAYMENTS = [
  { date: "11 апр 2026", amount: "890 ₽", plan: "Премиум", status: "success" },
  { date: "11 мар 2026", amount: "890 ₽", plan: "Премиум", status: "success" },
  { date: "11 фев 2026", amount: "490 ₽", plan: "Старт", status: "success" },
  { date: "11 янв 2026", amount: "490 ₽", plan: "Старт", status: "success" },
];

const STATS = [
  { label: "Уроков пройдено", value: "24", icon: "BookOpen", color: "#f97316", bg: "#fff7ed" },
  { label: "Дней в системе", value: "86", icon: "Calendar", color: "#8b5cf6", bg: "#f5f3ff" },
  { label: "Достижений", value: "7", icon: "Trophy", color: "#f59e0b", bg: "#fffbeb" },
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
  const [billingCycle, setBillingCycle] = useState<"month" | "year">("month");
  const [showPayments, setShowPayments] = useState(false);
  const activePlan = PLANS.find(p => p.id === "premium")!;
  const daysTotal = 61;
  const daysLeft = 30;
  const daysUsed = daysTotal - daysLeft;
  const progressPct = Math.round((daysUsed / daysTotal) * 100);

  const navItems = [
    { id: "profile" as Section, label: "Мои данные", icon: "User" },
    { id: "subscriptions" as Section, label: "Мои подписки", icon: "Star" },
    { id: "support" as Section, label: "Поддержка", icon: "MessageCircle" },
  ];

  const inputStyle = {
    border: "1.5px solid #f0e6d3",
    backgroundColor: "#fffaf5",
    color: "#1a1208",
    fontFamily: "'Golos Text', sans-serif",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <div style={{ backgroundColor: "#faf4ec", fontFamily: "'Golos Text', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Decorative background blobs */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-120px", right: "-80px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "40%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)" }} />
      </div>

      {/* Header */}
      <header style={{ backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(249,115,22,0.12)", position: "sticky", top: 0, zIndex: 30, boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 14, background: "linear-gradient(135deg, #f97316, #fb923c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, boxShadow: "0 4px 14px rgba(249,115,22,0.4)" }}>
              🦕
            </div>
            <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.5px", fontFamily: "'Montserrat', sans-serif", color: "#1a1208" }}>
              ЛОГО<span style={{ color: "#f97316" }}>ША</span>
            </span>
            <div style={{ width: 1, height: 24, backgroundColor: "#f0e6d3", margin: "0 8px" }} className="hidden sm:block" />
            <span style={{ fontSize: 13, color: "#b8a898", fontWeight: 500 }} className="hidden sm:block">Личный кабинет</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Notification bell */}
            <button style={{ position: "relative", width: 40, height: 40, borderRadius: 12, border: "1.5px solid #f0e6d3", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#b8a898", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f97316"; (e.currentTarget as HTMLButtonElement).style.color = "#f97316"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f0e6d3"; (e.currentTarget as HTMLButtonElement).style.color = "#b8a898"; }}>
              <Icon name="Bell" size={17} />
              <span style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, borderRadius: "50%", backgroundColor: "#f97316", border: "2px solid #fff" }} />
            </button>

            {/* User */}
            <button style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 14px 6px 6px", borderRadius: 50, border: "1.5px solid #f0e6d3", backgroundColor: "#fff", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f97316"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(249,115,22,0.15)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f0e6d3"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "none"; }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #f97316, #ea580c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff" }}>М</div>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#3d2e1a" }} className="hidden sm:block">Мария Иванова</span>
              <Icon name="ChevronDown" size={13} style={{ color: "#c8b8a8" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div style={{ flex: 1, maxWidth: 1280, margin: "0 auto", width: "100%", padding: "28px 24px", display: "flex", gap: 24, position: "relative", zIndex: 1 }}>

        {/* Sidebar */}
        <aside style={{ width: 220, flexShrink: 0 }} className="hidden md:flex flex-col gap-3">
          {/* Profile card */}
          <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 20px rgba(0,0,0,0.07)", backgroundColor: "#fff" }}>
            <div style={{ background: "linear-gradient(135deg, #f97316 0%, #fb923c 60%, #fbbf24 100%)", padding: "20px 16px 16px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)" }} />
              <div style={{ position: "absolute", bottom: -10, left: -10, width: 60, height: 60, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)" }} />
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.25)", backdropFilter: "blur(10px)", border: "2px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 10 }}>М</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'Montserrat', sans-serif" }}>Мария Иванова</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", marginTop: 2 }}>ivanova@example.ru</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 10, padding: "3px 10px", borderRadius: 20, backgroundColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#fff" }} />
                <span style={{ fontSize: 11, color: "#fff", fontWeight: 600 }}>Старт</span>
              </div>
            </div>

            <div style={{ padding: "8px 8px" }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 10, padding: "11px 14px",
                    borderRadius: 12, width: "100%", textAlign: "left", fontSize: 13, fontWeight: 600,
                    transition: "all 0.2s", cursor: "pointer", border: "none",
                    ...(activeSection === item.id
                      ? { background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", boxShadow: "0 4px 14px rgba(249,115,22,0.4)" }
                      : { backgroundColor: "transparent", color: "#5a4535" })
                  }}
                >
                  <Icon name={item.icon} size={16} style={{ color: activeSection === item.id ? "#fff" : "#f97316", flexShrink: 0 }} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick stats */}
          <div style={{ borderRadius: 20, padding: "14px", backgroundColor: "#fff", boxShadow: "0 2px 20px rgba(0,0,0,0.07)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#c8b8a8", letterSpacing: "0.08em", marginBottom: 12, fontFamily: "'Montserrat', sans-serif" }}>МОЙ ПРОГРЕСС</div>
            {STATS.map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, backgroundColor: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={s.icon} size={14} style={{ color: s.color }} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#1a1208", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "#b8a898", marginTop: 2 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Logout */}
          <button style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 14, fontSize: 13, fontWeight: 600, color: "#e57373", cursor: "pointer", border: "1.5px solid #fde8e8", backgroundColor: "transparent", transition: "all 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fff5f5"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}>
            <Icon name="LogOut" size={15} />
            Выйти из аккаунта
          </button>
        </aside>

        {/* Mobile nav */}
        <div className="flex md:hidden w-full overflow-x-auto gap-2 pb-1 -mt-1" style={{ flexWrap: "nowrap" }}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActiveSection(item.id)}
              style={{
                display: "flex", alignItems: "center", gap: 7, padding: "9px 16px",
                borderRadius: 14, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0, cursor: "pointer", border: "none", transition: "all 0.2s",
                ...(activeSection === item.id
                  ? { background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", boxShadow: "0 4px 12px rgba(249,115,22,0.35)" }
                  : { backgroundColor: "#fff", color: "#5a4535", border: "1.5px solid #f0e6d3" })
              }}>
              <Icon name={item.icon} size={14} />
              {item.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <main style={{ flex: 1, minWidth: 0 }}>

          {/* МОИ ДАННЫЕ */}
          {activeSection === "profile" && (
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                <div>
                  <h1 style={{ fontSize: 26, fontWeight: 900, fontFamily: "'Montserrat', sans-serif", color: "#1a1208", margin: 0 }}>Мои данные</h1>
                  <p style={{ fontSize: 13, color: "#b8a898", marginTop: 4 }}>Управляйте личной информацией и безопасностью</p>
                </div>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg, #fff7ed, #ffedd5)", border: "1.5px solid #fed7aa", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="Settings" size={20} style={{ color: "#f97316" }} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
                {/* Personal info */}
                <div style={{ borderRadius: 24, padding: 24, backgroundColor: "#fff", boxShadow: "0 2px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(249,115,22,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 12, background: "linear-gradient(135deg, #fff7ed, #ffedd5)", border: "1.5px solid #fed7aa", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="User" size={16} style={{ color: "#f97316" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1208" }}>Личные данные</div>
                      <div style={{ fontSize: 11, color: "#c8b8a8" }}>Основная информация</div>
                    </div>
                  </div>

                  {[
                    { label: "ФИО", value: name, setter: setName, type: "text", icon: "UserCircle" },
                    { label: "E-mail", value: email, setter: setEmail, type: "email", icon: "Mail" },
                    { label: "Телефон", value: phone, setter: setPhone, type: "tel", icon: "Phone" },
                  ].map((field) => (
                    <div key={field.label} style={{ marginBottom: 16 }}>
                      <label style={{ fontSize: 12, fontWeight: 700, color: "#8a7a6a", display: "block", marginBottom: 6, letterSpacing: "0.04em" }}>{field.label.toUpperCase()}</label>
                      <div style={{ position: "relative" }}>
                        <Icon name={field.icon} size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#d4c4b0", zIndex: 1 }} />
                        <input
                          type={field.type}
                          value={field.value}
                          onChange={(e) => field.setter(e.target.value)}
                          className="w-full"
                          style={{ ...inputStyle, padding: "11px 14px 11px 38px", borderRadius: 14, fontSize: 14, width: "100%", outline: "none" }}
                          onFocus={(e) => { e.target.style.borderColor = "#f97316"; e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.12)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "#f0e6d3"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                    </div>
                  ))}

                  <button style={{ width: "100%", padding: "13px", borderRadius: 14, background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(249,115,22,0.4)", transition: "all 0.2s", marginTop: 4 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 22px rgba(249,115,22,0.5)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(249,115,22,0.4)"; }}>
                    Сохранить изменения
                  </button>
                </div>

                {/* Password */}
                <div style={{ borderRadius: 24, padding: 24, backgroundColor: "#fff", boxShadow: "0 2px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(139,92,246,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 12, background: "linear-gradient(135deg, #f5f3ff, #ede9fe)", border: "1.5px solid #ddd6fe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="Lock" size={16} style={{ color: "#8b5cf6" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1208" }}>Безопасность</div>
                      <div style={{ fontSize: 11, color: "#c8b8a8" }}>Изменение пароля</div>
                    </div>
                  </div>

                  {[
                    { label: "НОВЫЙ ПАРОЛЬ", value: password, setter: setPassword, show: showPassword, toggle: () => setShowPassword(!showPassword) },
                    { label: "ПОВТОРИТЕ ПАРОЛЬ", value: repeatPassword, setter: setRepeatPassword, show: showRepeatPassword, toggle: () => setShowRepeatPassword(!showRepeatPassword) },
                  ].map((field) => (
                    <div key={field.label} style={{ marginBottom: 16 }}>
                      <label style={{ fontSize: 12, fontWeight: 700, color: "#8a7a6a", display: "block", marginBottom: 6, letterSpacing: "0.04em" }}>{field.label}</label>
                      <div style={{ position: "relative" }}>
                        <Icon name="Lock" size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#d4c4b0" }} />
                        <input
                          type={field.show ? "text" : "password"}
                          value={field.value}
                          onChange={(e) => field.setter(e.target.value)}
                          placeholder="••••••••"
                          style={{ ...inputStyle, padding: "11px 44px 11px 38px", borderRadius: 14, fontSize: 14, width: "100%", outline: "none" }}
                          onFocus={(e) => { e.target.style.borderColor = "#8b5cf6"; e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,0.12)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "#f0e6d3"; e.target.style.boxShadow = "none"; }}
                        />
                        <button onClick={field.toggle} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "#c8b8a8", background: "none", border: "none", cursor: "pointer", padding: 4 }}>
                          <Icon name={field.show ? "EyeOff" : "Eye"} size={16} />
                        </button>
                      </div>
                    </div>
                  ))}

                  {password.length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} style={{
                            height: 5, flex: 1, borderRadius: 3, transition: "background 0.3s",
                            backgroundColor: password.length >= i * 2
                              ? password.length >= 8 ? "#22c55e" : password.length >= 5 ? "#f97316" : "#ef4444"
                              : "#f0e6d3"
                          }} />
                        ))}
                      </div>
                      <div style={{ fontSize: 11, color: password.length >= 8 ? "#22c55e" : password.length >= 5 ? "#f97316" : "#ef4444" }}>
                        {password.length >= 8 ? "Надёжный пароль" : password.length >= 5 ? "Средний пароль" : "Слабый пароль"}
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={() => { setPassword(""); setRepeatPassword(""); }}
                      style={{ flex: 1, padding: "13px", borderRadius: 14, border: "1.5px solid #f0e6d3", backgroundColor: "#fdf6ee", color: "#8a7a6a", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#d4c4b0"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f0e6d3"; }}>
                      Отменить
                    </button>
                    <button style={{ flex: 1, padding: "13px", borderRadius: 14, background: "linear-gradient(135deg, #8b5cf6, #7c3aed)", color: "#fff", fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(139,92,246,0.4)", transition: "all 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}>
                      Сохранить
                    </button>
                  </div>
                </div>
              </div>

              {/* Activity strip */}
              <div style={{ marginTop: 20, borderRadius: 20, padding: "16px 20px", background: "linear-gradient(135deg, rgba(249,115,22,0.06), rgba(245,158,11,0.06))", border: "1px solid rgba(249,115,22,0.12)", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #fff7ed, #ffedd5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 20 }}>🔥</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1208" }}>Активность: 3 дня подряд!</div>
                  <div style={{ fontSize: 12, color: "#b8a898", marginTop: 2 }}>Продолжайте — до следующего достижения осталось 4 дня</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
                  {[1,2,3,0,0,0,0].map((active, i) => (
                    <div key={i} style={{ width: 10, height: 10, borderRadius: 3, backgroundColor: active ? "#f97316" : "#f0e6d3" }} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* МОИ ПОДПИСКИ */}
          {activeSection === "subscriptions" && (
            <div>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <h1 style={{ fontSize: 26, fontWeight: 900, fontFamily: "'Montserrat', sans-serif", color: "#1a1208", margin: 0 }}>Мои подписки</h1>
                  <p style={{ fontSize: 13, color: "#b8a898", marginTop: 4 }}>Управляйте тарифом, просматривайте детали и получайте максимум от Логоши</p>
                </div>
                <button
                  onClick={() => setShowPayments(!showPayments)}
                  style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 14, border: "1.5px solid #f0e6d3", backgroundColor: "#fff", fontSize: 13, fontWeight: 600, color: "#5a4535", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f97316"; (e.currentTarget as HTMLButtonElement).style.color = "#f97316"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f0e6d3"; (e.currentTarget as HTMLButtonElement).style.color = "#5a4535"; }}>
                  <Icon name="Receipt" size={15} />
                  История платежей
                </button>
              </div>

              {/* История платежей (collapse) */}
              {showPayments && (
                <div style={{ borderRadius: 20, backgroundColor: "#fff", boxShadow: "0 2px 20px rgba(0,0,0,0.07)", marginBottom: 20, overflow: "hidden" }}>
                  <div style={{ padding: "16px 20px", borderBottom: "1px solid #f5ede0", display: "flex", alignItems: "center", gap: 10 }}>
                    <Icon name="Receipt" size={16} style={{ color: "#f97316" }} />
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1208" }}>История платежей</span>
                  </div>
                  {PAYMENTS.map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: i < PAYMENTS.length - 1 ? "1px solid #f5ede0" : "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 34, height: 34, borderRadius: 10, backgroundColor: "#fff7ed", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon name="CreditCard" size={15} style={{ color: "#f97316" }} />
                        </div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1208" }}>{p.plan}</div>
                          <div style={{ fontSize: 11, color: "#b8a898" }}>{p.date}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1208" }}>{p.amount}</span>
                        <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, backgroundColor: "#ecfdf5", color: "#059669" }}>✓ Оплачено</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Активная подписка — большая карточка */}
              <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 40px rgba(249,115,22,0.25)", marginBottom: 24, position: "relative" }}>
                <div style={{ background: activePlan.gradient, padding: "28px 28px 24px", position: "relative", overflow: "hidden" }}>
                  {/* Декоративные круги */}
                  <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)" }} />
                  <div style={{ position: "absolute", bottom: -30, left: -20, width: 140, height: 140, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)" }} />
                  <div style={{ position: "absolute", top: 20, right: 120, width: 60, height: 60, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)" }} />

                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, position: "relative" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ width: 56, height: 56, borderRadius: 18, backgroundColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", border: "2px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>
                        {activePlan.emoji}
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 22, fontWeight: 900, color: "#fff", fontFamily: "'Montserrat', sans-serif" }}>{activePlan.name}</span>
                          <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, backgroundColor: "rgba(255,255,255,0.25)", color: "#fff", border: "1px solid rgba(255,255,255,0.4)" }}>Активен</span>
                        </div>
                        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>Максимальный доступ ко всем материалам и платформам</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                        <span style={{ fontSize: 36, fontWeight: 900, color: "#fff", fontFamily: "'Montserrat', sans-serif" }}>890</span>
                        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>₽/месяц</span>
                      </div>
                    </div>
                  </div>

                  {/* Даты */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 24, position: "relative" }}>
                    {[
                      { label: "Дата приобретения", value: "11 апреля 2026" },
                      { label: "Дата окончания", value: "11 июня 2026" },
                      { label: "Дней до окончания", value: `${daysLeft} дней` },
                    ].map((item) => (
                      <div key={item.label}>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>{item.label}</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "'Montserrat', sans-serif" }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Нижняя часть карточки */}
                <div style={{ backgroundColor: "#fff", padding: "20px 28px 24px" }}>
                  {/* Прогресс */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#5a4535" }}>Подписка активна</span>
                    <span style={{ fontSize: 12, color: "#b8a898" }}>Осталось {daysLeft} дней</span>
                  </div>
                  <div style={{ height: 8, borderRadius: 8, backgroundColor: "#f5ede0", overflow: "hidden", marginBottom: 8 }}>
                    <div style={{ height: "100%", width: `${progressPct}%`, background: "linear-gradient(90deg, #f97316, #fbbf24)", borderRadius: 8, transition: "width 0.5s ease" }} />
                  </div>
                  <div style={{ fontSize: 12, color: "#b8a898", marginBottom: 20 }}>Мы напомним о продлении за 3 дня до окончания срока</div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <button style={{ padding: "13px 24px", borderRadius: 14, background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(249,115,22,0.4)", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 8 }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 22px rgba(249,115,22,0.5)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(249,115,22,0.4)"; }}>
                      <Icon name="Zap" size={15} />
                      Продлить подписку
                    </button>
                    <button style={{ padding: "13px 24px", borderRadius: 14, border: "1.5px solid #f0e6d3", backgroundColor: "#faf4ec", color: "#5a4535", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f97316"; (e.currentTarget as HTMLButtonElement).style.color = "#f97316"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f0e6d3"; (e.currentTarget as HTMLButtonElement).style.color = "#5a4535"; }}>
                      Сменить тариф
                    </button>
                  </div>
                </div>
              </div>

              {/* Что входит в тариф */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#1a1208", fontFamily: "'Montserrat', sans-serif" }}>Что входит в ваш тариф</span>
                  <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, background: "linear-gradient(135deg, #fff7ed, #ffedd5)", color: "#f97316", border: "1px solid #fed7aa" }}>
                    {activePlan.emoji} {activePlan.name}-возможности
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
                  {[
                    { icon: "Cloud", label: "100 ГБ", sub: "Облачного хранилища", desc: "Храните все ваши материалы в безопасности", color: "#3b82f6", bg: "#eff6ff", emoji: "☁️" },
                    { icon: "Play", label: "Доступ ко всем материалам", sub: "", desc: "Полный доступ ко всем материалам и играм", color: "#8b5cf6", bg: "#f5f3ff", emoji: "▶️" },
                    { icon: "Zap", label: "Приоритетная поддержка", sub: "", desc: "Ваши запросы обрабатываются в первую очередь", color: "#f59e0b", bg: "#fffbeb", emoji: "⚡" },
                    { icon: "Trophy", label: "Достижения", sub: "", desc: "Система наград и мотивации для ребёнка", color: "#f97316", bg: "#fff7ed", emoji: "🏆" },
                  ].map((item) => (
                    <div key={item.label} style={{ borderRadius: 20, padding: "20px 18px", backgroundColor: "#fff", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #f5ede0", transition: "all 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}>
                      <div style={{ width: 44, height: 44, borderRadius: 14, backgroundColor: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>
                        {item.emoji}
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1208", lineHeight: 1.3, marginBottom: 6 }}>{item.label}{item.sub && <><br /><span style={{ color: item.color }}>{item.sub}</span></>}</div>
                      <div style={{ fontSize: 12, color: "#b8a898", lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Сменить тариф — все планы */}
              <div style={{ borderRadius: 24, padding: "24px", backgroundColor: "#fff", boxShadow: "0 2px 20px rgba(0,0,0,0.07)", border: "1px solid rgba(249,115,22,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, backgroundColor: "#fff7ed", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="RefreshCw" size={15} style={{ color: "#f97316" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1208" }}>Хотите попробовать другой тариф?</div>
                      <div style={{ fontSize: 12, color: "#b8a898" }}>Вы можете в любой момент перейти на другой тариф</div>
                    </div>
                  </div>
                  {/* Переключатель месяц / год */}
                  <div style={{ display: "flex", alignItems: "center", gap: 0, borderRadius: 14, border: "1.5px solid #f0e6d3", overflow: "hidden", backgroundColor: "#faf4ec" }}>
                    {(["month", "year"] as const).map((cycle) => (
                      <button key={cycle} onClick={() => setBillingCycle(cycle)}
                        style={{ padding: "8px 18px", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer", transition: "all 0.2s",
                          ...(billingCycle === cycle
                            ? { background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", borderRadius: 11 }
                            : { backgroundColor: "transparent", color: "#8a7a6a" })
                        }}>
                        {cycle === "month" ? "Месяц" : "Год −20%"}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
                  {PLANS.map((plan) => {
                    const isActive = plan.id === activePlan.id;
                    const price = billingCycle === "month" ? plan.priceMonth : Math.round(plan.priceYear / 12);
                    return (
                      <div key={plan.id} style={{ borderRadius: 18, overflow: "hidden", border: isActive ? `2px solid #f97316` : "1.5px solid #f0e6d3", position: "relative", transition: "all 0.2s" }}
                        onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLDivElement).style.borderColor = "#f97316"; }}
                        onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLDivElement).style.borderColor = "#f0e6d3"; }}>
                        {plan.popular && (
                          <div style={{ background: "linear-gradient(90deg, #f97316, #fbbf24)", padding: "4px 0", textAlign: "center", fontSize: 10, fontWeight: 700, color: "#fff", letterSpacing: "0.06em" }}>⭐ ПОПУЛЯРНЫЙ</div>
                        )}
                        <div style={{ padding: "16px" }}>
                          <div style={{ fontSize: 20, marginBottom: 6 }}>{plan.emoji}</div>
                          <div style={{ fontSize: 14, fontWeight: 800, color: "#1a1208", marginBottom: 4, fontFamily: "'Montserrat', sans-serif" }}>{plan.name}</div>
                          <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 12 }}>
                            <span style={{ fontSize: 20, fontWeight: 900, color: plan.color }}>{price === 0 ? "Бесплатно" : price + " ₽"}</span>
                            {price > 0 && <span style={{ fontSize: 11, color: "#b8a898" }}>/мес</span>}
                          </div>
                          {plan.features.slice(0, 3).map((f) => (
                            <div key={f} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                              <div style={{ width: 14, height: 14, borderRadius: "50%", background: plan.gradient, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <Icon name="Check" size={8} style={{ color: "#fff" }} />
                              </div>
                              <span style={{ fontSize: 11, color: "#7a6a5a" }}>{f}</span>
                            </div>
                          ))}
                          <button style={{ width: "100%", padding: "10px", borderRadius: 12, marginTop: 14, fontSize: 12, fontWeight: 700, border: "none", cursor: isActive ? "default" : "pointer", transition: "all 0.2s",
                            ...(isActive
                              ? { background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff" }
                              : { backgroundColor: "#faf4ec", color: "#f97316", border: "1.5px solid #f0e6d3" })
                          }}
                            onMouseEnter={(e) => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.background = plan.gradient; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; (e.currentTarget as HTMLButtonElement).style.border = "none"; }}}
                            onMouseLeave={(e) => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.background = ""; (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#faf4ec"; (e.currentTarget as HTMLButtonElement).style.color = "#f97316"; (e.currentTarget as HTMLButtonElement).style.border = "1.5px solid #f0e6d3"; }}}>
                            {isActive ? "✓ Текущий" : "Перейти →"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ПОДДЕРЖКА */}
          {activeSection === "support" && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: 26, fontWeight: 900, fontFamily: "'Montserrat', sans-serif", color: "#1a1208", margin: 0 }}>Поддержка</h1>
                <p style={{ fontSize: 13, color: "#b8a898", marginTop: 4 }}>Мы отвечаем в среднем за 2 часа</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
                <div style={{ borderRadius: 24, padding: 24, backgroundColor: "#fff", boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 12, background: "linear-gradient(135deg, #fff7ed, #ffedd5)", border: "1.5px solid #fed7aa", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="MessageSquare" size={16} style={{ color: "#f97316" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1208" }}>Новое обращение</div>
                      <div style={{ fontSize: 11, color: "#c8b8a8" }}>Опишите ваш вопрос</div>
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ fontSize: 12, fontWeight: 700, color: "#8a7a6a", display: "block", marginBottom: 6, letterSpacing: "0.04em" }}>ТЕМА ОБРАЩЕНИЯ</label>
                    <div style={{ position: "relative" }}>
                      <select
                        value={supportTopic}
                        onChange={(e) => setSupportTopic(e.target.value)}
                        style={{ ...inputStyle, padding: "11px 14px", borderRadius: 14, fontSize: 14, width: "100%", outline: "none", appearance: "none", cursor: "pointer" }}>
                        <option value="" disabled>Выберите тему...</option>
                        <option value="billing">Оплата и подписка</option>
                        <option value="technical">Технический вопрос</option>
                        <option value="content">Контент и материалы</option>
                        <option value="other">Другое</option>
                      </select>
                      <Icon name="ChevronDown" size={14} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#c8b8a8", pointerEvents: "none" }} />
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ fontSize: 12, fontWeight: 700, color: "#8a7a6a", display: "block", marginBottom: 6, letterSpacing: "0.04em" }}>СООБЩЕНИЕ</label>
                    <textarea
                      value={supportMessage}
                      onChange={(e) => setSupportMessage(e.target.value)}
                      placeholder="Подробно опишите ваш вопрос или проблему..."
                      rows={5}
                      style={{ ...inputStyle, padding: "11px 14px", borderRadius: 14, fontSize: 14, width: "100%", outline: "none", resize: "none" }}
                      onFocus={(e) => { e.target.style.borderColor = "#f97316"; e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.12)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#f0e6d3"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <button style={{ width: "100%", padding: "13px", borderRadius: 14, background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(249,115,22,0.4)", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 22px rgba(249,115,22,0.5)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(249,115,22,0.4)"; }}>
                    <Icon name="Send" size={15} />
                    Отправить обращение
                  </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Contacts */}
                  <div style={{ borderRadius: 24, padding: 20, backgroundColor: "#fff", boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#c8b8a8", letterSpacing: "0.08em", marginBottom: 14, fontFamily: "'Montserrat', sans-serif" }}>КОНТАКТЫ</div>
                    {[
                      { icon: "MapPin", text: "г. Москва", color: "#f97316", bg: "#fff7ed" },
                      { icon: "Phone", text: "+7 (123) 456-78-90", color: "#8b5cf6", bg: "#f5f3ff" },
                      { icon: "Mail", text: "info@logosha.ru", color: "#f59e0b", bg: "#fffbeb" },
                    ].map((c) => (
                      <div key={c.text} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 34, height: 34, borderRadius: 10, backgroundColor: c.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon name={c.icon} size={15} style={{ color: c.color }} />
                        </div>
                        <span style={{ fontSize: 13, color: "#5a4535", fontWeight: 500 }}>{c.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* FAQ */}
                  <div style={{ borderRadius: 24, padding: 20, backgroundColor: "#fff", boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#c8b8a8", letterSpacing: "0.08em", marginBottom: 14, fontFamily: "'Montserrat', sans-serif" }}>ЧАСТЫЕ ВОПРОСЫ</div>
                    {[
                      { q: "Как отменить подписку?", icon: "HelpCircle" },
                      { q: "Как изменить способ оплаты?", icon: "CreditCard" },
                      { q: "Как получить доступ к материалам?", icon: "BookOpen" },
                    ].map((item) => (
                      <button key={item.q} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "11px 14px", borderRadius: 14, marginBottom: 8, border: "1.5px solid #f0e6d3", backgroundColor: "#faf4ec", cursor: "pointer", transition: "all 0.2s", textAlign: "left" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f97316"; (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fff7ed"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#f0e6d3"; (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#faf4ec"; }}>
                        <span style={{ fontSize: 13, color: "#5a4535", fontWeight: 500 }}>{item.q}</span>
                        <Icon name="ChevronRight" size={14} style={{ color: "#f97316", flexShrink: 0 }} />
                      </button>
                    ))}
                  </div>

                  {/* Response time badge */}
                  <div style={{ borderRadius: 20, padding: "14px 18px", background: "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(167,139,250,0.06))", border: "1px solid rgba(139,92,246,0.15)", display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 12, background: "linear-gradient(135deg, #8b5cf6, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name="Clock" size={16} style={{ color: "#fff" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#5b21b6" }}>Среднее время ответа</div>
                      <div style={{ fontSize: 18, fontWeight: 900, color: "#7c3aed", fontFamily: "'Montserrat', sans-serif" }}>~2 часа</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1a1208", marginTop: 32, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #f97316, #fbbf24, #8b5cf6, #f97316)" }} />
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.08), transparent)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 24 }}>🦕</span>
                <span style={{ fontSize: 18, fontWeight: 900, fontFamily: "'Montserrat', sans-serif", color: "#fff" }}>
                  ЛОГО<span style={{ color: "#f97316" }}>ША</span>
                </span>
              </div>
              <p style={{ fontSize: 13, color: "#6a5a4a", lineHeight: 1.6 }}>Большой опыт работы в области с детьми</p>
              <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                {[
                  { icon: "Users", color: "#4a90d9" },
                  { icon: "Send", color: "#0088cc" },
                  { icon: "Youtube", color: "#ff0000" },
                  { icon: "Mail", color: "#f97316" },
                ].map((s) => (
                  <button key={s.icon} style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: "#2a1e10", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #3a2e20", cursor: "pointer", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = s.color; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2a1e10"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}>
                    <Icon name={s.icon} size={15} style={{ color: "#8a7a6a" }} />
                  </button>
                ))}
              </div>
            </div>

            {[
              { title: "О КОМПАНИИ", links: ["О нас", "История", "Партнёры", "Преимущества"] },
              { title: "НУЖНА ПОМОЩЬ?", links: ["Условия использования", "Политика конфиденциальности"] },
            ].map((col) => (
              <div key={col.title}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#f97316", letterSpacing: "0.1em", marginBottom: 16, fontFamily: "'Montserrat', sans-serif", paddingBottom: 10, borderBottom: "1px solid rgba(249,115,22,0.2)" }}>{col.title}</div>
                {col.links.map((l) => (
                  <a key={l} href="#" style={{ display: "block", fontSize: 13, color: "#6a5a4a", marginBottom: 10, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#f97316"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6a5a4a"; }}>
                    {l}
                  </a>
                ))}
              </div>
            ))}

            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#f97316", letterSpacing: "0.1em", marginBottom: 16, fontFamily: "'Montserrat', sans-serif", paddingBottom: 10, borderBottom: "1px solid rgba(249,115,22,0.2)" }}>КОНТАКТЫ</div>
              {[
                { icon: "MapPin", text: "Адрес: г. Москва" },
                { icon: "Phone", text: "+7 (123) 456-78-90" },
                { icon: "Mail", text: "info@logosha.ru" },
              ].map((c) => (
                <div key={c.text} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, fontSize: 13, color: "#6a5a4a" }}>
                  <Icon name={c.icon} size={12} style={{ color: "#f97316", flexShrink: 0 }} />
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid #2a1e10", paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{ fontSize: 13, color: "#4a3a2a" }}>© 2024 Логоша. Все права защищены.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}