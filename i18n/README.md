# Portfolio internationalization

The portfolio supports Turkish (`tr`) and English (`en`), with Turkish as the default.

## Structure

- `i18n/dictionaries.ts` contains the `Language` type and the typed `copy` and `details` dictionaries.
- `app/page.tsx` selects the active dictionary and passes the locale into the project preview component.
- The selected language is stored in `localStorage` under `portfolio-language`. If storage is unavailable or no preference exists, the page uses Turkish.
- The document `lang`, title, and description are updated when the language changes.

## Adding or editing copy

1. Add the same key to both `tr` and `en` entries. Keep the meaning aligned rather than translating word-for-word where that sounds unnatural.
2. Prefer adding content to the dictionaries instead of adding locale conditionals in JSX.
3. Keep technology names, product names, and standards such as REST, RAG, YOLO, and PostgreSQL unchanged when translating them would be misleading.
4. Check both languages, the mobile navigation, the project preview tabs, accessibility labels, and metadata after changing copy.

No additional i18n runtime package is needed for this single-page, two-language switcher. If the site later needs locale-specific URLs, server-rendered translations per locale, or a larger set of languages, evaluate a routing-aware solution such as `next-intl`.
