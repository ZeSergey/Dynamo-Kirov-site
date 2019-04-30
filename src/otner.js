const showVisible = () =>{
    const isVisible = (elem) => {
        const coords = elem.getBoundingClientRect();
        const windowHeight = document.documentElement.clientHeight;
        const topVisible = coords.top > 0 && coords.top < windowHeight;
        const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
        return topVisible || bottomVisible;
    }


    const blocks = document.getElementsByClassName('block');
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        const animClass = block.classList.contains('anim');
        if (animClass) continue;

        if (isVisible(block)) {
            block.classList.add('anim');
            const animSide  = block.querySelector('[data-anim-side]');

            if(animSide.getAttribute('data-anim-side') == 'rigth'){
                animSide.classList.add('animSideRight');
            }else {
                animSide.classList.add('animSideLeft');
            }
        }
    }

}

export default showVisible;