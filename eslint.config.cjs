module.exports = [
  {
    // Global language options (replaces `env` from the old config)
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        module: "readonly",
        require: "readonly",
        process: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly"
      }
    }
  },
  {
    files: ["**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];
