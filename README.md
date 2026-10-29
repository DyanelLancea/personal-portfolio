# Personal portfolio

Next.js version of [dyanel-lancea.vercel.app](https://dyanel-lancea.vercel.app/). The home page and project pages keep the same layout, copy, and routes.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add a project

Edit only [`content/projects.ts`](content/projects.ts). Put images in `public/assets/images/projects/<name>/`.

A standard page is one object:

```ts
{
  id: 103,
  group: "personal", // or "school"
  title: "New Project",
  category: "Hackathon",
  date: "Oct 2026",
  description: "Short text for the home card.",
  image: "/assets/images/projects/new/cover.png",
  template: "default",
  body: "Longer text for the detail page.",
  tech: ["Next.js"],
  links: { demo: "https://example.com", github: "https://github.com/example" }
}
```

`group` chooses the carousel. The page is `/project/103`.

Leave `body` empty to show “Lancea has not finished adding content here, sorry!”

A custom layout (like EzBiz) is a component in `components/projects/pages/`, registered in `components/projects/ProjectView.tsx`, with `template` set to that name. The card still comes from `content/projects.ts`. Use `pageTitle` when the detail heading should be shorter than the card title.

Intro text and contact links live in [`content/site.ts`](content/site.ts).
