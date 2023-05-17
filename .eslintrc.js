module.exports = {
  // 기존 설정파일을 확장하는 개념
  extends: [
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],

  // 사용자가 명시적으로 필요한 것들을 적어줘야 함
  plugins: ['prettier', '@typescript-eslint', 'eslint-plugin-react'],

  // 글로벌 객체를 eslint가 인식가능하게 해줌
  env: {
    browser: true, // document 혹은 window를 인식할 수 있도록 해주는 설정
  },

  // eslint를 적용하지 않을 폴더나 파일을 명시
  ignorePatterns: ['node_modules/'],

  // settings 는 모든 규칙에 의해 공유되는 설정을 하는 부분
  // 절대경로를 사용하는 경우에 src 폴더부터 시작하기 때문에 import를 사용할 때부터 에러가 날 수 있는 부분을 설정
  settings: {
    'import/resolver': {
      // import/resolver는 eslint-plugin-import의 경로 설정 옵션
      node: {
        paths: ['src'], // node에서 사용되는 경로부분을 src로 적어주면 절대경로를 인식함
      },
    },
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7,
  },

  // 제공되는 규칙들을 세부적으로 설정하는 부분
  // extends와 plugins에서 제공되는 규칙들을 세부적으로 설정하는 부분
  // 배열에 들어가는 순서에 따라 표시하는 방법이 다름
  // 0번째 인덱스 : "off"-> 규칙을 끈다, "warn"-> 경고를 띄운다, "error"-> 에러를 띄운다(실행 불가)
  rules: {
    // "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    // "no-new-object": "error",
    // "object-shorthand": ["error", "always"],
    // "prefer-object-spread": "error",
    // "prefer-destructuring": [
    // 	"error",
    // 	{
    // 		array: true,
    // 		object: true,
    // 	},
    // 	{
    // 		enforceForRenamedProperties: false,
    // 	},
    // ],
    // "func-style": "error",
    // "prefer-template": "error",
    // "template-curly-spacing": ["error", "never"],
    // "prefer-rest-params": "error",
    // "default-param-last": "error",
    // "no-param-reassign": "error",
    // "prefer-arrow-callback": "error",
    // "no-duplicate-imports": "error",
    // "import/first": "error",
    // "import/extensions": "error",
    // "dot-notation": "error",
    // "no-restricted-properties": "error",
    // "prefer-const": "error",
    // "no-var": "error",
    // eqeqeq: ["error", "always"],
    // "no-case-declarations": "error",
    // "no-nested-ternary": "error",
    // "no-unneeded-ternary": "error",
    // "nonblock-statement-body-position": ["error", "beside"],
    // "spaced-comment": ["error", "always", { markers: ["/"] }],
    // "padded-blocks": ["error", { blocks: "never" }],
    // "no-multiple-empty-lines": "error",
    // "no-new-wrappers": "error",
    // radix: ["error", "always"],
    // "id-length": "error",
  },
};
