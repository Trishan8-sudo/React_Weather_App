# 🌤️ Weather App (React + Vite)

A simple and modern weather application built using **React** and **Vite**.
Users can search for any city and view real-time weather data along with a history of previous searches.

---

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Displays:

  * City
  * Temperature
  * Weather condition
* 🔄 Toggle between **°C and °F**
* 📜 Maintains **search history** (only valid searches)
* ❌ Handles invalid city input with error message
* ⏳ Loading state while fetching data
* 🎨 Clean UI with gradient background and card layout

---

## 🧠 How It Works

* The app uses a **single-page architecture (SPA)** — no page reloads
* Weather data is fetched from an external API
* State is managed using React’s `useState`
* Previous valid searches are stored and displayed as history

---

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   └── InputBox.jsx
│   │   └── InputBox.css
│   ├── services/
│   │   └── weatherApi.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-url>
cd weather-app
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Create `.env` file

Create a `.env` file in the root directory and add:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

> ⚠️ Make sure the key starts with `VITE_` (required for Vite)

---

### 4. Run the app

```
npm run dev
```

---

## 🔑 API Used

* OpenWeather API
  https://openweathermap.org/api

---

## 🎨 UI Highlights

* Gradient background for modern look
* Centered card layout
* Smooth shadow effects
* Consistent design for history items and empty state

---

## 📌 Behavior Details

* On clicking **Search**:

  * Previous result is moved to history (if valid)
  * Current result is cleared
  * New result (or error) is displayed
* Invalid searches:

  * Show error message
  * Do NOT affect history

---

## 🛠️ Tech Stack

* React
* Vite
* JavaScript (ES6+)
* CSS

---

## 🔒 Security Note

* API key is stored in `.env`
* `.env` should be added to `.gitignore`

---

## 💡 Future Improvements

* Click history item to reload weather
* Limit history size
* Add weather icons
* Autocomplete for city search
* Responsive design for mobile

---

## 👨‍💻 Author

**Trishan Das**

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
