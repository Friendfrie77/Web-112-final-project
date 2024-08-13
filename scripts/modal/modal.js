"use strict";
const createModal = (product) =>{
    const wrapper = document.querySelector('#mainContent');
    const modal = document.createElement('div');
    modal.classList ='modal';
    wrapper.append(modal)
    modalInnerContent(modal, product);
    thumbnailOnClick();
}

const modalInnerContent = (modal, product) =>{
    const innerModal = document.createElement('div')
    innerModal.classList = 'innerModal flex-col';
    innerModal.innerHTML = `
    <div class='close-span flex-row justify-content-end'>
        <button id='close-modal'>X</button>
    </div>
    <div class='flex-row'>
        <div class='product-img'>
            <img class='modal-main-img' src=${product.imgList[0]} width='450px' height='450px'/>
        </div>
        <div class='product-thumbnails'>
            <span>${product.brand} ${product.title}</span>
            <div class='flex-row flex-space-even'>
                ${product.imgList.map(img =>
                    `
                    <div class='thumbnail-box'>
                        <img class='thumbnail' src='${img}' width='50px' height='50px'/>
                    </div>
                    `
                ).join(' ')}
            </div>
        </div>
    </div>
    `
    modal.append(innerModal)
    innerModal.querySelector('#close-modal').onclick = closeModal
}

const thumbnailOnClick = () =>{
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((pics)=>{
        pics.onclick = () => thumbnailClicked(pics)
    })
}

const closeModal = () =>{
    const modal = document.querySelector('.modal')
    modal.remove()
}

const thumbnailClicked = (pics) =>{
    const mainPicture = document.querySelector('.modal-main-img');
    mainPicture.src = pics.src;
}
export {createModal}