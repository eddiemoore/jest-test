window.matchMedia = window.matchMedia || function matchMedia() {
  return {
    matches: false,
    addListener: function dummy() {},
    removeListener: function dummy() {},
  }
}

window.document = {
  cookieValue: '',
  get cookie() { // eslint-disable-line
    return this.cookieValue
  },
  set cookie(value) { // eslint-disable-line
    this.cookieValue += `${value};`
  },
}
