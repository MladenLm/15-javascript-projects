function expandedForm(num) {
    if (num < 10) {
      return toString(num)
    } else if (num < 100) {
      let first = (Math.floor(num / 10) * 10).toString()
      let second = (num % 10).toString()
      let result = first + ' + ' + second
      return result
    } else if (num < 1000) {
        let first = (Math.floor(num / 100) * 100).toString()
        let second = (Math.floor(num / 100) * 100).toString()
        let third = (num % 10).toString()
        let result = first + ' + ' + second
        return result
    }
  }