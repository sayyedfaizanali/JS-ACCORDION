let content = document.querySelectorAll('.accordion-item');
let title = document.querySelectorAll('.accordion-item .title');
let x = 'isopen';
const clickDefault = () => {
    for (let i = 0; i < title.length; i++) {
        title[i].onclick = function () {
            let contentClass = this.parentNode.className;
            for (let j = 0; j < content.length; j++) {
                content[j].className = 'accordion-item hide';
            }
            if (contentClass == 'accordion-item hide') {
                this.parentNode.className = 'accordion-item show';
            }
        }
    }
}
clickDefault();
const clickExpand = () => {
    for (let i = 0; i < title.length; i++) {
        title[i].onclick = function () {
            let contentClass = this.parentNode.className;
            if (contentClass == 'accordion-item show') {
                this.parentNode.className = 'accordion-item hide';
            } else if (contentClass == 'accordion-item hide') {
                this.parentNode.className = 'accordion-item show';
                clickDefault();
            }
        }
    }
}
let expandButton = document.querySelector('.btn_expand');
expandButton.innerHTML = "Expand All";
expandButton.onclick = function () {
    if (x === 'isopen') {
        content.forEach((element = 'accordion-item hide') => {
            element.className = 'accordion-item show';
            expandButton.innerHTML = "Close All";
            x = 'isclose';
            clickExpand();
        });
    } else if (x === 'isclose') {
        content.forEach((element = 'accordion-item show') => {
            element.className = 'accordion-item hide';
            expandButton.innerHTML = "Expand All";
            x = 'isopen';
        });
    }
}