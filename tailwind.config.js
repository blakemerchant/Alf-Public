module.exports = {
    purge: [
        './templates/**/*.html',
        './templates/**/*.twig',
    ],
    theme: {},
    variants: {},
    plugins: [
        require('@tailwindcss/forms'),
    ],
}