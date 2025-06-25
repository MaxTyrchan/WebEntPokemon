# 🚀 Nuxt Übung 5 – Deployment mit Vercel

In dieser letzten Übung bringst du dein NuxtJS-Projekt live! Du lernst, wie du dein Projekt auf GitHub verfügbar machst und über Vercel in wenigen Schritten online bereitstellst.

## 📋 Aufgabenbeschreibung

### 🗂️ Projekt auf GitHub sichern

- Stelle sicher, dass dein Projekt auf GitHub gehostet ist
- Falls noch nicht geschehen:

```bash
git init
git remote add origin <GitHub-Repo-URL>
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

### 🌐 Vercel-Konto erstellen und verknüpfen

- Erstelle ein Konto auf [https://vercel.com](https://vercel.com)
- Verbinde dein GitHub-Konto mit Vercel
- Importiere dein Nuxt-Projekt über die Benutzeroberfläche

---

### ⚙️ Automatische Konfiguration prüfen

- Vercel erkennt das Nuxt-Projekt automatisch
- Stelle sicher, dass folgende Einstellungen erkannt wurden:
  - **Framework Preset:** Nuxt 3
  - **Build Command:** `npm run build`
  - **Output Directory:** `.output/public`

---

### 🚀 Deployment starten

- Starte den Build-Prozess
- Warte, bis das Deployment abgeschlossen ist
- Öffne die bereitgestellte Live-URL

---

### ✅ Funktion überprüfen

- Teste, ob alle Seiten funktionieren
- Achte besonders auf API-Abfragen und Navigationsverhalten

---

## ⭐️ Zusatzaufgaben für die Schnellen

### 🔍 Monitoring mit Vercel

- Öffne das Dashboard deines Projekts
- Sieh dir Build-Zeiten, Logs und Fehlerberichte an

### 🌱 Branch Deployment testen

- Erstelle einen neuen Git-Branch, z. B. `feature/test-deployment`
- Führe Änderungen durch und pushe diesen Branch

```bash
git checkout -b feature/test-deployment
git push -u origin feature/test-deployment
```

- Beobachte, wie Vercel automatisch ein Preview-Deployment erzeugt

---

## ✅ Übersicht der Ziele

- Projekt ist auf GitHub verfügbar  
- Vercel-Konto erstellt und verknüpft  
- Projekt erfolgreich deployed  
- Anwendung unter Live-URL erreichbar  
- Optional: Monitoring ausprobiert  
- Optional: Preview-Deployments per Branch getestet