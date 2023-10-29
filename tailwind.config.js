module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './common/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'class',
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                OpenSans: ['OpenSans', 'sans-serif'],
                Poppins: ['Poppins', 'sans-serif'],
                Roboto: ['Roboto', 'sans-serif']
            },
            colors: {
                primaryRed: '#fa4f08',
                primaryBlue: '#005bf9',
                primaryWhite: '#fff',
                primaryBlack: '#0a1033',
                secondaryWhite: '#fffaf9'
            }
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
    corePlugins: {
        fontFamily: true
    },
    important: true
};
