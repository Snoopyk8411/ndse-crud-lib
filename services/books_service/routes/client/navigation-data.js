const {
    MAIN_PAGE,
    ALL_BOOKS_PAGE,
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
    [ALL_BOOKS_PAGE]: {
        ...pageWithMenu(ALL_BOOKS_PAGE),
        title: 'Books service page',
    }
};

module.exports = {
    pageTemplateData,
};