# Working with Gemini on Your SvelteKit Project

Hello! I am Gemini, a CLI agent designed to help you with your software engineering tasks. This guide will help us collaborate effectively on your SvelteKit project for NCS Painting.

## Project Overview

*   **Project:** NCS Painting marketing website.
*   **Technology:** SvelteKit, TypeScript, TailwindCSS.
*   **Goal:** Create a high-performance, SEO-friendly marketing website to attract new customers.

## My Role

I can help you with a variety of tasks, including:

*   **Code Generation:** Creating Svelte components, TypeScript modules, and more.
*   **Code Modification:** Refactoring code, fixing bugs, and implementing new features.
*   **File Operations:** Creating, reading, and modifying files.
*   **Running Commands:** Executing shell commands for tasks like installing dependencies, running tests, and building the project.
*   **Answering Questions:** Providing information about the codebase and suggesting solutions to problems.

## Development Workflow

Here is a suggested workflow for our collaboration:

1.  **Assign a Task:** Tell me what you want to do. Be as specific as possible. For example, instead of "build a new page," say "create a new Svelte component for the about page with content from `docs/pages/about.md`."
2.  **I Ask Questions (if needed):** If the task is unclear, I may ask for more details.
3.  **I Formulate a Plan:** I will outline the steps I'll take to complete the task.
4.  **I Execute the Plan:** I will use my tools to perform the necessary actions.
5.  **Review the Changes:** Once I'm done, you can review the changes I've made.

## Key Project Files & Directories

*   `src/routes/`: This is where your pages and API routes live.
*   `src/lib/`: This directory is for your Svelte components, TypeScript modules, and other library code.
*   `src/lib/components/`: A good place to store reusable Svelte components.
*   `static/`: For static assets like images and fonts.
*   `docs/`: Contains the project documentation, which is a great source of truth for content and plans.
*   `svelte.config.js`: SvelteKit configuration file.
*   `vite.config.ts`: Vite configuration file.
*   `package.json`: Project dependencies and scripts.

## Common Tasks & Commands

Here are some examples of how you can ask me to perform common tasks:

*   **Install a new dependency:**
    > "Install the `clsx` package."

*   **Create a new component:**
    > "Create a new Svelte component named `Button.svelte` in `src/lib/components/ui`."

*   **Read a file:**
    > "Read the content of `src/routes/+page.svelte`."

*   **Run a script from `package.json`:**
    > "Run the `dev` script to start the development server."

*   **Run a test:**
    > "Run the tests."

## Best Practices for Working with Me

*   **Be Specific:** The more specific your instructions, the better I can help you.
*   **Provide Context:** When asking for changes, tell me which file to modify. Referencing the `docs` is a great way to provide context.
*   **One Task at a Time:** It's best to focus on one task at a time. This helps us stay on track and avoid confusion.
*   **Review My Work:** Always review the changes I make to ensure they meet your expectations.

I look forward to working with you on this project!

## Creating Web Content

You can ask me to create components, pages, and other web content. Here are some examples:

*   **Create a UI element:**
    > "Create a new Svelte component named `PrimaryButton.svelte` in `src/lib/components/ui`. It should be a red button with white text."

*   **Create a page section from a doc:**
    > "Create a new Svelte component for the 'Why Choose Us' section. Use the content from `docs/sections/why-choose-us.md`. Place it in `src/lib/components/pages/landing`."

*   **Create a new page:**
    > "Create a new page route for `/about` using the content from `docs/pages/about.md`."

*   **Styling:**
    > I will use TailwindCSS for styling, following the guidelines in `docs/plans/visual-style-guide.md`.

*   **Content Integration:**
    > I can use the content from the `docs` folder to build out components and pages.

## Running Development Tasks

You can ask me to run development tasks like starting the dev server, building the project, or running tests.

*   **Start the dev server:**
    > "Run the dev server."

*   **Build the project:**
    > "Build the project for production."

*   **Run tests:**
    > "Run the unit tests."

### Working with Images

I can use images as a visual reference to build components and layouts.

*   **Provide a layout image:** Place your layout design images in `static/layouts/` and images for smaller UI elements in `static/ui/`, as you suggested.
*   **Reference the image in your request:** When you want me to build something from an image, tell me the path to the image file.

**Example:**
> "Create a new hero section component in `src/lib/components/Hero.svelte`. Use the layout from the image at `static/layouts/hero-desktop.png` for the desktop view and `static/layouts/hero-mobile.png` for the mobile view. The content for this section is in `docs/sections/hero.md`."

