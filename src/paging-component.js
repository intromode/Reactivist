import { writePageToQuery } from './update-hash.js';
const previous = document.getElementById('previous-button');
const next = document.getElementById('next-button');

let currentPageNumber = 1;
previous.disabled = currentPageNumber === 1;

function updateQueryWithPage() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

previous.addEventListener('click', () => {
    currentPageNumber--;
    updateQueryWithPage();
});

next.addEventListener('click', () => {
    currentPageNumber++;
    updateQueryWithPage();
});


export function updatePaging(pagingInfo) {
    console.log(pagingInfo);
    // const totalPageDisplay = document.getElementById('total-pages');
    const currentPageDisplay = document.getElementById('current-page');

    // totalPageDisplay.textContent = pagingInfo.totalPages.toString();
    currentPageDisplay.textContent = pagingInfo.page.toString();
    previous.disabled = pagingInfo.page === 1;
    next.disabled = pagingInfo.page === 100;
}

