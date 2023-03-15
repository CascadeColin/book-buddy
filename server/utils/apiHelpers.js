// example:  converts "lord of the rings" to "lord+of+the+rings", per what OpenLibrary API needs to make a valid book title search
function bookTitleStrToURL(str) {
    return str.split(' ').join("+")
}

module.exports = bookTitleStrToURL