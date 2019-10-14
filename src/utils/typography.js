import Typography from "typography"
// import fairyGateTheme from "typography-theme-fairy-gates"
import lincolnTheme from "typography-theme-lincoln"


//
// const typography = new Typography(lincolnTheme)
lincolnTheme.baseFontSize = '18px' // was 20px.
lincolnTheme.baseFontWeight = '700' // was 20px.
lincolnTheme.baseLineHeight = '2' // was 20px
lincolnTheme.headerFontFamily = ['Futura PT']
lincolnTheme.headerFontSize = '40px'
lincolnTheme.bodyFontFamily = ['Open Sans']



const typography = new Typography(lincolnTheme)

export const { scale, rhythm, options } = typography
export default typography
