
function formatDate( isoDate ) {
    const date = new Date( isoDate );
    return date.toDateString();
}

const dateall = document.querySelectorAll( '.date' );
for( let i = 0; i < dateall.length; i++ ) {
    dateall[i].innerText = formatDate( dateall[i].innerText );
}