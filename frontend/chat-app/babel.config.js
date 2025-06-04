export default {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
    'next/babel',
  ],
  plugins: ['@babel/plugin-syntax-import-attributes'],
};
