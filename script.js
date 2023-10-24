const productcontainer =document.querySelector(".content")

const getAllProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    renderproduct(data.products)
}
getAllProducts();
function renderproduct(data){
    data.forEach(producte => {
        productcontainer.innerHTML +=
`<div class="content">
<div class="product">
        <div class="image">
            <img src="${producte.thumbnail}">
        </div>
        <h1 >"${data.title}"</h1>
        <P>An apple mobile which is nothing like apple</P>
        <div class="price"> "${producte.price}"<del></del></div>
        <div class="button">
            <button><i class="fa-solid fa-bag-shopping"></i>Add to cart </button>
            <button class="heart"><i class="fa-regular fa-heart"></i></button>
        </div>
    </div></div>`;
    })
}
