import Typography from 'typography'

const options = {
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Georgia', 'serif'],
}

const typography = new Typography(options)

typography.injectStyles()

export default typography
