module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'class',
    theme: {
        screens: {
            xs: { max: '768px' }, // Mobile
            tablet: { min: '769px', max: '1023px' },
            laptop: { min: '1024px', max: '1279px' },
            desktop: { min: '1280px', max: '1365px' }
        },
        extend: {
            fontFamily: {
                OpenSans: ['OpenSans', 'sans-serif'],
                Poppins: ['Poppins', 'sans-serif'],
                Roboto: ['Roboto', 'sans-serif']
            },
            colors: {
                primaryRed: '#fa4f08',
                primaryBlue: '#1a202c',
                primaryWhite: '#fff',
                primaryBlack: '#0a1033',
                secondaryWhite: '#fffaf9'
            }
        }
    },
    plugins: [
        // require('@tailwindcss/aspect-ratio'),
        // require('tw-elements/dist/plugin'),
        // require('tailwind-scrollbar-hide'),
        // require('@tailwindcss/forms')
    ],
    corePlugins: {
        fontFamily: true
    },
    important: true
};
