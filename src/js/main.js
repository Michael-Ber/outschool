console.log('test');

function burger() {
    try {
        const btn = document.querySelector('#burger-btn');
        const menu = document.querySelector('#menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            // menu.classList.toggle('hidden');
            menu.classList.toggle('active');
        })
    } catch (error) {
        console.log(error)
    }
    
}

burger();

function tabs() {
    try {
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
    } catch (error) {
        console.log(error)
    }
    
}
tabs();

//Working version of accordion

function accordion() { 
    try {
        const accordBtn = document.querySelectorAll('.accordion-btn');
        accordBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                const svg = btn.querySelector('svg');
                if(!btn.classList.contains('active')) {
                    accordBtn.forEach(item => {
                        const svg = item.querySelector('svg');
                        item.nextElementSibling.style.maxHeight = '0px';
                        item.classList.remove('active');
                        svg.classList.remove('accordion-btn_active');
                    })
                    btn.classList.add('active');
                    svg.classList.add('accordion-btn_active');
                    btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 40 + 'px';
                }else {
                    btn.classList.toggle('active');
                    svg.classList.toggle('accordion-btn_active');
                    btn.nextElementSibling.style.maxHeight = '0px';
                }
            })
        })
        
    } catch (error) {
        console.log(error)
    }
    
}
accordion();


