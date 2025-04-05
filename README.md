# Andrew Otema - Software Developer Portfolio

This is my professional portfolio showcasing my skills, projects, and experience as a software developer. I've built this using Next.js and modern web technologies to create a responsive and interactive experience.

---

# About Me

I am Andrew Otema, a dedicated Software Developer with a strong foundation in JavaScript and web technologies. With a passion for creating robust web solutions, I specialize in full-stack development and continuously enhance my technical expertise across various frameworks. I approach challenges with analytical thinking and innovative problem-solving methods. My commitment to ongoing learning allows me to adapt quickly to emerging technologies and industry best practices.

---

# Features :scroll:

- Modern and responsive design
- Project showcase with live demos
- Skills and technologies section
- Professional experience timeline
- Education history
- Contact information

---

# Technologies Used

- Next.js
- React
- Tailwind CSS
- JavaScript
- Node.js
- Email.js for contact form

---

# Projects Showcase

The portfolio showcases several of my key projects:

1. **Modern Landing Page** - A responsive landing page with clean design and smooth animations
2. **Real Estate Website** - A full-stack real estate platform with property listings
3. **Lamborghini Showcase** - An interactive landing page with dynamic galleries
4. **Eleganza** - A luxury fashion e-commerce showcase

Visit the live portfolio to see detailed information and demos of each project.

---

## View live portfolio [here](https://landingpageug.netlify.app/).

---

# Contact

Feel free to reach out:

- Email: otemaach@gmail.com
- Phone: 0765162414
- LinkedIn: [Andrew Otema](https://profile.indeed.com/p/andrewo-ysmeo4s)
- Location: Mutungo, Kampala

---

# Developer Portfolio

#### This is a professional portfolio website designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.

---

# Demo :movie_camera:

![](./public/image/screen.png)

## View live preview [here](https://landingpageug.netlify.app/).

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Deployment](#deployment-rocket)
- [Tutorials](#tutorials-wrench)
  - [Gmail App Password Setup](#gmail-app-password-setup)
  - [Create a Telegram Bot](#create-a-telegram-bot)
  - [Fetching Blog from dev.to](#fetching-blog-from-devto)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```bash
node --version
git --version
```

## <br />

# Getting Started :dart:

### Clone the repo

```bash
git clone <repository-url>

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### Running with Docker Compose

1. **Build Docker Image and Run Container**:
    ```bash
    docker-compose up --build
    ```

2. **Access the Application**:
    Visit [http://localhost:3000](http://localhost:3000) in your web browser to view the running application.

---

### Building the Docker Image

1. **Build the Docker Image using Dockerfile.dev**:

    ```bash
    docker build -t nextjs-app -f Dockerfile.dev .
    ```

2. **Running the Docker Container**:

    ```bash
    docker run -p 3000:3000 nextjs-app
    ```

3. **Access the Application**:
    Visit [http://localhost:3000](http://localhost:3000) in your web browser to view the running application.

---

# Usage :joystick:

Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_GTM =
NEXT_PUBLIC_APP_URL =
TELEGRAM_BOT_TOKEN =
TELEGRAM_CHAT_ID =
GMAIL_PASSKEY =
EMAIL_ADDRESS =
```

### Then, Customize data in the `utils/data` folder.

Eg:

```javascript
export const personalData = {
  name: "OTEMA",
  profile: "/profile.png",
  designation: "Full-Stack Software Developer",
  description: "My name is OTEMA....",
  email: "abusaid7388@gmail.com",
  phone: "+8801608797655",
  address: "Dhaka, Bangladesh",
  facebook: "https://www.facebook.com/abusaid.riyaz/",
  linkedIn: "https://www.linkedin.com/in/abu-said-bd/",
  twitter: "https://twitter.com/said7388",
  stackOverflow: "https://stackoverflow.com/users/16840768/abu-said",
  leetcode: "https://leetcode.com/said3812/",
  devUsername: "said7388",
  resume: "...",
};
```

`devUsername` is used for fetching blog posts from `dev.to`.

---

# Deployment :rocket:

Deploying the app to platforms like Vercel or Netlify is quick and easy.

## Deploying to Vercel:

1. **Sign up or log in** to [Vercel](https://vercel.com/).
2. Once logged in, click on **"New Project"**.
3. Select your repository and click **Import**.
4. Configure your environment variables in the Vercel dashboard by adding each key from your `.env` file.
   - E.g., `NEXT_PUBLIC_GTM`, `NEXT_PUBLIC_APP_URL`, `TELEGRAM_BOT_TOKEN`, etc.
5. Click on **Deploy**. Vercel will automatically detect your Next.js app and build it.
6. Once the deployment is complete, you can visit your live website!

### Updating After Deployment

Whenever you push changes to your repository, Vercel will automatically redeploy the app, keeping your portfolio up-to-date.

## Deploying to Netlify:

1. **Sign up or log in** to [Netlify](https://www.netlify.com/).
2. In the **Netlify Dashboard**, click **"New site from Git"**.
3. Connect your repository account and select your repo.
4. Configure your environment variables by going to **Site Settings > Build & Deploy > Environment** and adding keys from your `.env` file.
5. Click **Deploy Site**. Netlify will build and deploy your portfolio.

---

# Tutorials :wrench:

## Gmail App Password Setup

1. **Log in to your Google Account** at [https://myaccount.google.com/](https://myaccount.google.com/).
2. Navigate to **Security** from the left sidebar.
3. Scroll down to the **"Signing in to Google"** section and make sure **2-Step Verification** is turned ON.
4. Once 2-Step Verification is enabled, you'll see an option for **App Passwords**.
5. Click on **App Passwords**. You may need to enter your Google account password again.
6. In the **Select app** dropdown, choose "Mail", and for **Select device**, choose "Other (Custom name)" and name it appropriately (e.g., "Portfolio").
7. Click **Generate**. A 16-character app password will be displayed. Save this password for later use in your environment variables (e.g., `GMAIL_PASSKEY`).

## Create a Telegram Bot

1. **Open Telegram** and search for the user **@BotFather**.
2. Start a chat with BotFather and use the `/newbot` command to create a new bot.
3. Choose a name for your bot.
4. Set a unique username for your bot (must end with `bot`, e.g., `PortfolioAssistantBot`).
5. Once your bot is created, BotFather will send you a **Token**. Save this token, as you will need it for your environment variables (e.g., `TELEGRAM_BOT_TOKEN`).
6. To get your chat ID:
   - Open your bot in Telegram and send it a message.
   - Visit the following URL in your browser, replacing `BOT_TOKEN` with your actual bot token:  
     `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
   - Look for the `chat` object in the response, which contains your **chat ID** (you can use this value for `TELEGRAM_CHAT_ID`).

## Fetching Blog from dev.to

To display your blog posts from dev.to on the portfolio:

1. Set your `devUsername` in the `utils/data.js` file to your dev.to username.
2. The application will automatically fetch your latest blog posts and display them in the **BLOG** section.
3. Ensure your blogs are publicly visible on dev.to, and the application will fetch them using the dev.to API.

---

# Packages Used :package:

|   Used Package List    |
| :--------------------: |
|    @emailjs/browser    |
|  @next/third-parties   |
|         axios          |
|      lottie-react      |
|          next          |
|       nodemailer       |
|         react          |
|       react-dom        |
|   react-fast-marquee   |
| react-google-recaptcha |
|      react-icons       |
|     react-toastify     |
|         sharp          |
|          sass          |
|      tailwindcss       |

---

# FAQ:

1. For those facing the issue of "`next` is not recognized as an internal or external command, operable program or batch file."

Run the following command:

```bash

npm install -g next

```

This installs Next.js globally

then do the usual `npm run dev`
