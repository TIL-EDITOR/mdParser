const normalizationRule = {
  newline: /(\n){2,}/g,
};

const headingRule = {
  head1: /^(# )/g,
  head2: /^(## )/g,
};

export { normalizationRule, headingRule };
