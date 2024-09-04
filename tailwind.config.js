/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // App Routerを使用している場合
    "./components/**/*.{js,ts,jsx,tsx}", // コンポーネントディレクトリがある場合
    "./public/**/*.html", // 公開フォルダ内のHTMLファイル
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

