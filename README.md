

  <div align="center">
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
  </div>

  <h3 align="center">Intervu.AI: A job interview preparation platform powered by Vapi AI Voice agents</h3>



## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🤸 [Quick Start](#quick-start)  
5. 🕸️ [Snippets (Code to Copy)](#snippets)  
6. 🔗 [Assets](#links)  
7. 🚀 [More](#more)  

---

## <a name="introduction">🤖 Introduction</a>

Built with Next.js for the user interface and backend logic, Firebase for authentication and data storage, styled with TailwindCSS and using Vapi's voice agents, **Prepwise** is a website project designed to help you learn integrating AI models with your apps. The platform offers a sleek and modern experience for job interview preparation.
---

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js  
- Firebase  
- Tailwind CSS  
- Vapi AI  
- shadcn/ui  
- Google Gemini  
- Zod  

---

## <a name="features">🔋 Features</a>

👉 **Authentication** – Sign Up and Sign In using password/email authentication handled by Firebase.  
👉 **Create Interviews** – Easily generate job interviews with help of Vapi voice assistants and Google Gemini.  
👉 **Get feedback from AI** – Take the interview with AI voice agent, and receive instant feedback based on your conversation.  
👉 **Modern UI/UX** – A sleek and user-friendly interface designed for a great experience.  
👉 **Interview Page** – Conduct AI-driven interviews with real-time feedback and detailed transcripts.  
👉 **Dashboard** – Manage and track all your interviews with easy navigation.  
👉 **Responsiveness** – Fully responsive design that works seamlessly across devices.  

...and many more including code architecture and reusability!

---

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### **Prerequisites**

Ensure you have the following installed on your machine:

- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/)  

### **Cloning the Repository**

```bash
git clone [https://github.com/adrianhajdin/ai_mock_interviews.git](https://github.com/skyyycodes/intervu.ai_mockinterview.git)
cd intervu.ai_mockinterview
```

### **Installation**

Install the dependencies:

```bash
npm install
```

### **Set Up Environment Variables**

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

> Replace the above placeholders with your actual Firebase and Vapi credentials.

### **Run the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app in action!

---

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>globals.css</code></summary>

```css
@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme {
  --color-success-100: #49de50;
  --color-success-200: #42c748;
  --color-destructive-100: #f75353;
  --color-destructive-200: #c44141;
  ...
}
```
</details>

---

## <a name="links">🔗 Assets</a>

All the visuals, icons, and UI elements used in this project are stored inside the `public` directory.

---

Happy building! 🚀
