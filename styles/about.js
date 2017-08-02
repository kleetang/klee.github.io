new Vue({
    el: '#interested-tops',
    data: {
        items: [
            { message: 'Christianity, ' },
            { message: 'Math, ' },
            { message: 'Physics, ' },
            { message: 'CS, ' },
            { message: 'and Games and puzzles' }
        ]
    }
});

$(function () {
  $('[data-toggle="popover"]').popover()
});