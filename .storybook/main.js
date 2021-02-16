module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@whitespace/storybook-addon-html',
        '@storybook/addon-backgrounds',
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-viewport',
        '@storybook/addon-toolbars',
        '@storybook/preset-create-react-app',
    ],
};