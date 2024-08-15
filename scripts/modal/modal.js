"use strict";
const createModal = (product, type) =>{
    const wrapper = document.querySelector('#mainContent');
    const modal = document.createElement('div');
    modal.classList ='modal';
    wrapper.append(modal)
    if(type === 'pictureModal'){
        modalInnerContent(modal, product);
        thumbnailOnClick();
    } else if(type === 'review' && product ===false){
        reviewInnerContent(modal)
    }
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
                ${product.imgList.map((img, index) =>
                    `
                    <div class='thumbnail-box'>
                        <img class='thumbnail' id='thumbnail-${index}' src='${img}' width='50px' height='50px'/>
                    </div>
                    `
                ).join(' ')}
            </div>
        </div>
    </div>
    `
    modal.append(innerModal)
    innerModal.querySelector('#close-modal').onclick = closeModal
    document.querySelector('#thumbnail-0').closest('div').classList = 'thumbnail-box-selected'
}

const reviewInnerContent = (modal) =>{
    console.log(modal)
    const innerModal = document.createElement('div');
    innerModal.classList ='innerModal flex-col'
    innerModal.innerHTML = `
    <div class='close-span flex-row justify-content-end'>
        <button id='close-modal'>X</button>
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

const thumbnailClicked = (pics, id) =>{
    const mainPicture = document.querySelector('.modal-main-img');
    document.querySelector('.thumbnail-box-selected').classList = 'thumbnail-box'
    pics.closest('div').classList = 'thumbnail-box-selected'
    mainPicture.src = pics.src;
}
export {createModal}