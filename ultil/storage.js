const Storage_key = 'TODO-LIST'
export default {
  get() {
    return JSON.parse(localStorage.getItem(Storage_key)) || []
  },
  set(todos) {
    return localStorage.setItem(Storage_key, JSON.stringify(todos))
  }
}