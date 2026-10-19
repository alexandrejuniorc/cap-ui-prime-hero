sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"alexandre/booksui/test/integration/pages/ListOfBooksList.gen",
	"alexandre/booksui/test/integration/pages/ListOfBooksObjectPage.gen"
], function (JourneyRunner, ListOfBooksListGenerated, ListOfBooksObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('alexandre/booksui') + '/test/flp.html#app-preview',
        pages: {
			onTheListOfBooksListGenerated: ListOfBooksListGenerated,
			onTheListOfBooksObjectPageGenerated: ListOfBooksObjectPageGenerated
        },
        async: true
    });

    return runner;
});

