# 🌐 Nuxt Übung 4 – API-Management mit PokéAPI

In dieser Übung geht es darum, echte Daten aus der öffentlichen PokéAPI in deine Nuxt-Anwendung zu integrieren. Ziel ist es, die bisherigen Dummy-Daten durch echte Daten zu ersetzen und sinnvoll darzustellen.

## 📋 Aufgabenbeschreibung

### 🔄 Abruf der Daten aus der PokéAPI

Nutze `$fetch` mit `await Promise.all()` für parallele API-Aufrufe, da `useFetch` hier nicht geeignet ist.

---

### 🧠 Anpassung des Stores (usePokemonStore.ts)

- Ersetze in der Action `fetchAllPokemon` die Dummy-Daten durch echte API-Daten
- Ersetze die Dummy-Daten auch in `fetchPokemonByName`

---

### 🖼️ Bilder anzeigen

- Verwende die URL zur Pokémon-Grafik aus der API-Datenstruktur

---

## ⭐️ Zusatzaufgabe

### 🔄 Dummy-Daten auch auf Compare-Seite ersetzen

- Auch auf `pages/compare.vue` die State-Daten durch API-Daten ersetzen
- Bei Bedarf zusätzliche Funktionen im Store ergänzen

---

## ✅ Übersicht der Ziele

- Abruf der Pokémon-Daten per API  
- Nutzung von `$fetch` und `Promise.all`  
- Ersetzen der Dummy-Daten im Store  
- Anzeigen der Pokémon-Bilder  
- Optional: API-Nutzung auf der Compare-Seite
