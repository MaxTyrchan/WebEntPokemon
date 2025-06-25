# 🧩 Nuxt Übung 3 – Komponenten & State Management

Diese Übung führt in die Erstellung von wiederverwendbaren Komponenten sowie die Nutzung von **Pinia** für State Management in Nuxt ein. Außerdem lernst du, wie man den Zustand zentral verwaltet und darauf in verschiedenen Seiten zugreift.

## 📋 Aufgabenbeschreibung

### 🧱 Komponenten erstellen und nutzen

- Komponente `PokemonCard.vue` in `components/` erstellen
- Inhalt frei gestaltbar (z. B. Name, Bild, Typen, etc.)
- In `pages/index.vue` einbinden und dynamisch verwenden

---

### 📦 Pinia installieren & einrichten

Installation des Pinia-Moduls:

```bash
npm install @pinia/nuxt
```

Anpassung der `nuxt.config.ts`:

```bash
export default defineNuxtConfig({
  modules: ['@pinia/nuxt']
})
```

---

### 🧠 State Management mit Pinia

Store erstellen z. B. `stores/usePokemonStore.ts`:

#### ✅ State

- `allPokemon` (Array)
- `searchQuery` (String)
- `selectedPokemon` (Einzelnes Pokémon)

#### 🧮 Getter

- `filteredPokemon`: Gibt Pokémon zurück, die zur Suchanfrage passen

#### 🔁 Actions

- `fetchAllPokemon`: Lädt alle Pokémon (zunächst Dummy-Daten)
- `fetchPokemonByName`: Sucht Pokémon nach Namen (ebenfalls mit Dummy-Daten)

---

## ⭐️ Zusatzaufgabe

### 🔄 Compare-Seite mit State Management

- Zugriff auf Pinia-Store von `pages/compare.vue` aus
- Nutzung der Actions/Getters für Suchfunktionen
- Dynamische Anzeige der Vergleichsdaten mithilfe von Komponenten

---

## ✅ Übersicht der Ziele

- Wiederverwendbare Komponente `PokemonCard.vue` erstellt  
- Komponente in `index.vue` verwendet  
- Pinia installiert und in `nuxt.config.ts` eingebunden  
- Store mit State, Gettern und Actions erstellt  
- Optional: Nutzung des Stores auf der Compare-Seite