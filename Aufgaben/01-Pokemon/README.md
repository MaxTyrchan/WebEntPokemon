# 🚀 Nuxt Übung 1 – Erste Schritte mit Nuxt.js

Dieses Projekt ist eine Übung zur Einführung in Nuxt.js. Ziel ist es, ein neues Nuxt-Projekt zu initialisieren, Tailwind CSS einzubinden, ein Layout mit Header/Footer zu erstellen und eine einfache Startseite mit Suchfeld umzusetzen.

## 📋 Aufgabenbeschreibung

### ⚙️ Initialisierung eines neuen Nuxt-Projekts

Empfohlen für **Nuxt 3**:

```bash
npx nuxi init <projektname>
```

Alternativ mit Paketmanager und Nuxt CLI:

```bash
npm create nuxt@latest <projektname>
# oder mit Template:
npm create nuxt@latest -- -t ui
```

Weitere Templates:  
[https://nuxt.com/templates](https://nuxt.com/templates)

**Veraltet (für Nuxt 2, nicht empfohlen):**

```bash
npx create-nuxt-app <projektname>
```

---

### 🎨 Tailwind CSS installieren & CSS einfügen

Tailwind über Nuxt Module hinzufügen:

```bash
npx nuxi module add tailwindcss
```

Dann die `main.css` in das Projekt kopieren – idealerweise nach `assets/css/main.css`.

---

### 🗃️ Projekt mit GitHub verbinden

- Git-Repository initialisieren
- Remote Repository bei GitHub erstellen und verbinden

---

### 🏠 Erstellen der Index-Seite

- Überschrift hinzufügen
- Suchfeld mit Löschbutton

#### 🔧 Konfiguration

Passe `nuxt.config.ts` an und füge folgende Zeile hinzu:

```bash
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  }
```

Bearbeite `app.vue`, um das Layout einzubinden.

Erstelle `pages/index.vue` mit:

- einem Titel
- einer Suchbox
- einem Button zum Löschen des Eingabefelds

---

### 🧱 Layout mit Header & Footer

Erstelle Datei `layouts/default.vue` mit Header und Footer-Komponenten.

Passe `app.vue` an, um das Layout korrekt zu nutzen.

---

### ⭐️ Zusatzaufgaben (optional)

- CSS-Styling nach eigenen Vorstellungen erweitern
- Nuxt DevTools ausprobieren:  
  [https://nuxt.com/docs/guide/tools/devtools](https://nuxt.com/docs/guide/tools/devtools)

---

## ✅ Ziele

- Nuxt-Projekt erstellt  
- Tailwind eingebunden  
- GitHub eingerichtet  
- Index-Seite mit Suchfeld umgesetzt  
- Header & Footer im Layout definiert  
- Optional: Styling erweitert, DevTools getestet
