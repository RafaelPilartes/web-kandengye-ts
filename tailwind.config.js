/** @type {import('tailwindcss').Config} */

// Os tokens vem do antigo `src/themes/default.ts`. Os nomes sao os mesmos,
// para que a traducao de `theme.colors['brand-primary']` para `bg-brand-primary`
// seja directa e verificavel. O ficheiro de tema foi apagado: a paleta vive aqui.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          white: '#FFFFFF',
          black: '#000000',
          gray: '#DEDEDE',
          background: '#FFFFFF',
          'background-dark': '#3A3A3A',
          'background-dark-black': '#929292D2',
          title: '#000313',
          subtitle: '#F0F0F0',
          error: '#F84747',
          text: '#6C6A72',
          'text-bold': '#1D1729',
          'text-gray': '#ACACAC',
          'border-gray': '#D6D6D6A6'
        },
        brand: {
          DEFAULT: '#C5161D',
          primary: '#C5161D',
          'primary-dark': '#05171C',
          'primary-light': '#B86C6C',
          secondary: '#A93939',
          'secondary-dark': '#720B0B',
          'secondary-light': '#B86C6CCC',
          'base-dark': '#010627',
          'super-dark': '#000313',
          pink: '#B882FC',
          'pink-dark': '#5F2DEE'
        },

        // A paleta de trabalho. O equipamento real dos estafetas e preto e
        // vermelho — e e isso que o site passa a vestir. O vermelho da marca
        // nao muda; o que entra e um preto quente como superficie alternada,
        // em vez do azul-preto #000313, que puxava a pagina para o frio.
        ink: {
          DEFAULT: '#14110F',
          soft: '#241F1C',
          line: '#332C28'
        },
        red: {
          DEFAULT: '#C5161D',
          deep: '#7A0E12',
          wash: '#FBEDED'
        },
        mute: {
          DEFAULT: '#6B6560',
          light: '#9A938D',
          line: '#E4E0DC'
        }
      },
      fontFamily: {
        // `sans` e o corpo de texto; `title` fica para titulos e destaques.
        sans: ['Barlow', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        title: ['"Baloo 2"', 'Barlow', 'system-ui', 'sans-serif']
      },
      fontSize: {
        // Escala do tema antigo, mantida com os nomes originais.
        'title-xl': ['3rem', { lineHeight: '1.15' }],
        'title-l': ['2rem', { lineHeight: '1.2' }],
        'title-m': ['1.5rem', { lineHeight: '1.3' }],
        'title-s': ['1.2rem', { lineHeight: '1.35' }],
        'title-xs': ['1.125rem', { lineHeight: '1.4' }],
        tag: ['0.625rem', { lineHeight: '1.4' }],

        // Escala de display. Cresce com a largura sem `@media`, e trava nos
        // extremos — a Baloo 2 e para ser usada grande, e em telemovel um
        // `clamp` sem tecto parte o titulo.
        display: ['clamp(2.5rem, 6.5vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        lede: ['clamp(1.05rem, 1.4vw, 1.25rem)', { lineHeight: '1.6' }]
      },
      maxWidth: {
        // Largura util do conteudo, repetida em quase todas as seccoes.
        page: '1390px'
      },
      boxShadow: {
        dropdown: '0 18px 40px -12px rgba(20, 17, 15, 0.28)',
        card: '0 4px 20px 0 rgba(20, 17, 15, 0.08)',
        lift: '0 24px 60px -24px rgba(20, 17, 15, 0.35)'
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(1.5rem)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease both',
        'fade-in': 'fade-in 0.4s ease both'
      }
    }
  },
  plugins: []
}
