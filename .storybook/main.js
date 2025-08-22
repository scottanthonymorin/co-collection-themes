import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [react()],
      css: {
        modules: {
          localsConvention: 'camelCaseOnly',
        },
      },
    });
  },
};

export default config;
