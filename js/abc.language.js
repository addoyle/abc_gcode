Prism.languages.abc = {
  property: {
    pattern: /^[A-Z](?=\:)/m,
    lookbehind: true,
    greedy: true
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  comment: {
    pattern: /\%.*/,
    greedy: true
  },
  keyword: {
    pattern: /(?<=[A-G])[\d,'\/]\d*|[<>]*[\^_]?[~^_=\.vu<>](?=[A-G])/i,
    lookbehind: true,
    greedy: true
  },
  number: /\d/i,
  operator: /[:\|\\[\](){}-]/,
  boolean: {
    pattern: /((?:[A-Z])\d)/,
    lookbehind: true
  }
};

Prism.languages.webmanifest = Prism.languages.abc;
