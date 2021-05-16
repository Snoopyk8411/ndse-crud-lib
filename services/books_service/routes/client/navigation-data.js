const {
    MAIN_PAGE,
    NOT_FOUND_PAGE,
    ALL_BOOKS_PAGE,
    CREATE_BOOK_PAGE,
    VIEW_BOOK_PAGE,
    UPDATE_BOOK_PAGE,
} = require('./constants');

const getMenuData = (activePageId) => {
    const logoUrl = 'static/logo.png';
    const alt = 'logo';
    const menu = [
        {
            id: MAIN_PAGE,
            title: 'Главная',
            href: '/',
            active: false,
        },
        {
            id: ALL_BOOKS_PAGE,
            title: 'Книги',
            href: '/books',
            active: false,
        }
    ].map((pageItem) => {
        if (pageItem.id === activePageId) {
            pageItem.active = true;
        }
        return pageItem;
    });

    return {
        logoUrl,
        alt,
        menu,
    };
};
const pageWithMenu = (id) => ({
    title: 'Current page',
    stylesLink: '',
    content: undefined,
    menuData: getMenuData(id),
});

const pageTemplateData = {
    [MAIN_PAGE]: {
        ...pageWithMenu(MAIN_PAGE),
        title: 'Main page',
        content: {
            headline: 'Стартовая страница приложения',
            article: 'Для навигации, воспользуйтесь меню',
        },
    },
    [NOT_FOUND_PAGE]: {
        ...pageWithMenu(),
        title: '404 | Not found',
        content: {
            headline: 'Error: 404',
            article: 'No page found'
        },
    },
    [ALL_BOOKS_PAGE]: {
        ...pageWithMenu(ALL_BOOKS_PAGE),
        title: 'Books service page',
        stylesLink: '/books/all-books-page.css',
    },
    [CREATE_BOOK_PAGE]: {
        ...pageWithMenu(),
        title: 'Add new book page',
        stylesLink: '/books/all-books-page.css',
        content: {
            formTitle: 'New book creation form',
        },
    },
    [VIEW_BOOK_PAGE]: {
        ...pageWithMenu(),
        title: 'Detail view book page',
        stylesLink: '/books/all-books-page.css',
    },
    [UPDATE_BOOK_PAGE]: {
        ...pageWithMenu(),
        title: 'Update book info page',
        stylesLink: '/books/all-books-page.css',
        content: {
            formTitle: 'Update book info form',
        },
    },
};

module.exports = {
    pageTemplateData,
};