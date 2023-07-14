# `gmi-viewer`

> A web application used to view and edit `text/gemini` content, described
> in [§ 5 of Gemini's spec](https://gemini.circumlunar.space/docs/specification.gmi).

This project is more-or-less an excuse to learn how to parse and display a specific content type. Gemini's file spec is
very simple, so it's a good candidate to learn from :)

## features

This project can render the following line types defined in the Gemini spec:

- [x] Text lines (§ 5.4.1)
- [ ] Link lines (§ 5.4.2)
- [x] Preformatted toggle lines (§ 5.4.3)
- [x] Preformatted text lines (§ 5.4.4)
- [x] Heading lines (§ 5.5.1)
- [ ] Unordered list items (§ 5.5.2)
- [ ] Quote lines (§ 5.5.3)

Additionally, this project provides a few QOL tweaks:

- Stores current text input in localStorage, under `gmi-viewer:content`

## usage

Visit [https://webcrawls.github.io/gmi-viewer](#) to try it out!

Otherwise, if you're looking to run it locally:

- `git clone` the repository
- run `npm install` in the project root
- run `npm run dev` to start a local server, probably on `localhost:5173`
- enjoy!