// import each Tailwind style variable using desctructuring
// this declutters the inline styling that would otherwise exist by storing it all in a helper file
import { header } from './style'

// import custom CSS (this will mainly be animations I think)
// may not be necessary for every component.  only needs to be here if the component uses non-Tailwind styling.
import './custom.css'

/* Also plugging in that cheatsheet here!  It's super super super helpful!
https://nerdcave.com/tailwind-cheat-sheet
*/

export default function demonstration() {
    return (
        // import the header variable into your className to assign that the string in style.js as this element's styling
        // this will render a header that is 3xl size of normal, bold font, and is centered, as defined in the import
        <header className={header}></header>
    )
}