/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                // sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1600px',
        },
        colors: {
            black: '#000',
            white: '#fff',
            main: {
                200: '#FBF8F8',
                300: '#F8F2F2',
                400: '#F0E4E4',
                500: '#E2C9C9  ',
                600: '#D3AEAF',
                700: '#C59394',
                800: '#BD8586',
                900: '#B67879',
            },
            blue: {
                200: '#F4F6F7',
                300: '#E9EEEE',
                400: '#D2DCDD',
                500: '#A6B9BB  ',
                600: '#79979A',
                700: '#4D7478',
                800: '#366267',
                900: '#205156',
            },
            gray: {
                100: '#F3F3F5',
                200: '#E7E8EC',
                300: '#CFD1D9',
                400: '#9FA3B3',
                500: '#6E758D  ',
                600: '#3E4767',
                700: '#4D7478',
                800: '#263054',
                900: '#0E1941',
            },
        },
        fontFamily: {
            jost: ['Jost', 'sans-serif'],
            sail: ['Sail', 'sans-serif'],
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [
        require('daisyui', 'tailwindcss/defaultTheme', '@tailwindcss/forms'),
    ],
};
