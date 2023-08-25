console.log('test');

function burger() {
    const btn = document.querySelector('#burger-btn');
    const menu = document.querySelector('#menu');

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        // menu.classList.toggle('hidden');
        menu.classList.toggle('active');
    })
}

burger();

function tabs() {
    const btns = document.querySelector('.tab-btns');
    const contents = document.querySelector('.tab-contents');
    
    const resetActive = () => { Array.from(btns.children).forEach(child => child.classList.remove('tab_active')) }

    const hideContents = () => { Array.from(contents.children).forEach(content => content.classList.add('hidden')) }

    btns.addEventListener('click', (e) => {
        if(e.target.tagName === 'LI') {
            resetActive();
            hideContents();
            e.target.classList.add('tab_active');
            const content = Array.from(contents.children).find(item => item.dataset.tab === e.target.dataset.tab);
            content.classList.toggle('hidden')
        }
    })
}
tabs();