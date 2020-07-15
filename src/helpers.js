export default function debounce(a,b,c) {
  let d, e
  return function() {
    function h() {
      d = null
      c || (e = a.apply(f, g))
    }
    let f = this
    let g = arguments
    return (clearTimeout(d), d = setTimeout(h, b), c&&!d&&(e=a.apply(f, g)), e)
  }
}

export const removeHTMLTags = (str) => {
  return str.replace(/<[^>]*>?/gm, '')
}