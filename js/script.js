const MBPOS = {
    categories: [
        {
            name: "Starters"
        },
        {
            name: "Burgers"
        },
        {
            name: "Pasta"
        },
        {
            name: "Entrees"
        },
        {
            name: "Sandwiches"
        },
        {
            name: "Kids Menu"
        }
    ]
};

function createTab(ele_name) {
                    //     <li class="nav-item" role="presentation">
                    //     <button class="nav-link active" id="products-tab" data-bs-toggle="tab" data-bs-target="#products" type="button" role="tab"
                    //         aria-controls="products" aria-selected="true"><i class="fas fa-shopping-cart"></i> Products</button>
                    // </li>
    var li = document.createElement("li"); 
    li.classList.add( "nav-item" );
    li.setAttribute('role','presentation');
    var btn = document.createElement('button');
    btn.innerHTML = ele_name;
    btn.classList.add("nav-link");
    btn.setAttribute('data-bs-toggle','tab');
    btn.setAttribute('data-bs-target','fee');
    btn.setAttribute('type','button');
    btn.setAttribute('role','tab');
    btn.setAttribute('aria-selected','false');
    var icon = document.createElement('i');
    icon.classList.add("fas");
    icon.classList.add("fa-shopping-cart");
    btn.prepend(icon);

    li.append(btn);
    return li;
}

var tabs = document.getElementById('myTab');
MBPOS.categories.forEach((element) => {
    tabs.append(createTab(element.name));
    // console.log(element.name);
});

// tabs.append(createTab());

document.getElementsByClassName('mobile')[0].addEventListener('click',function(e){
e.preventDefault();
    document.getElementsByClassName('products-panel')[0].classList.toggle("hide");
    document.getElementsByClassName('customer-panel')[0].classList.toggle("hide");
});
$(".categoryelement").on('click',function(e){
    e.preventDefault();
    var subcategoryName = $(this).data('subcategory');
    $('#'+subcategoryName).fadeIn(0);
    $('.categories-box').fadeOut(0);
});
$(".subcategoryelement").on('click',function(e){
    e.preventDefault();
    var productName = $(this).data('product');
    $('#'+productName).fadeIn(0);
    $('.subcategories').fadeOut(0);
});
$(".productdetails").on('click',function(e){
    e.preventDefault();
    var productNameDetail = $(this).data('productname');
    var productPriceDetail = $(this).data('price');
    var productImageDetail = $(this).data('image');
    var productCatDetail = $(this).data('catname');
    console.log(productCatDetail);
    $('.users').append(`
    <div class="item">
        <div class="item-head d-flex align-items-center justify-content-between">
            <div class="info d-flex align-items-center justify-content-between">
                <img src="${productImageDetail}" alt="">
                <div class="item-info">
                    <h3>${productNameDetail}</h3>
                    <span>${productCatDetail}</span>
                </div>
            </div>
            <div class="details d-flex align-items-center justify-content-between">
                <a href="" class="open-details"><i class="fas fa-angle-down"></i></a>
                <input type="number" value="1" class="form-control" disabled>
            </div>
            <span class="price">$${productPriceDetail}</span>
        </div>
        <div class="item-body">
            <div class="row">
                <div class="col-sm-4">
                    <div class="q-box standard-box">
                        <h4>Quantity</h4>
                        <div class="input-holder">
                            <span>pcs</span>
                            <input type="number" value="1" class="form-control quantity">
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="d-box standard-box">
                        <h4>Discount</h4>
                        <div class="input-holder">
                            <span>%</span>
                            <input type="number" value="" class="form-control discount">
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="p-box standard-box">
                        <h4>Price</h4>
                        <div class="input-holder">
                            <span>$</span>
                            <div class="price-value">${productPriceDetail}</div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <textarea rows="3" class="form-control" placeholder="Note"></textarea>
                </div>
                <div class="col-sm-4">
                    <button class="btn btn-secondary w-100 edit">Edit</button>
                </div>
                <div class="col-sm-4">
                    <button class="btn btn-secondary w-100 view">View</button>
                </div>
                <div class="col-sm-4">
                    <button class="btn btn-danger w-100 delete">Delete</button>
                </div>
            </div>
        </div>
    </div>
    `);
    var prices = [];
    $('#items-number').html(document.getElementsByClassName('quantity').length + ' item');
    for(var i=0; i < $('.quantity').length; i++){
        var quantity = parseInt(document.getElementsByClassName('quantity')[i].value);
        var discount = parseInt(document.getElementsByClassName('discount')[i].value);
        var price =  parseInt(document.getElementsByClassName('price-value')[i].innerHTML);
        if(isNaN(discount)){
            var priceAfterDiscount = quantity * price;
        }else{
            var discountPrice = quantity * price * (discount / 100);
            var priceAfterDiscount = (quantity * price) - discountPrice;
        }
        prices.push(priceAfterDiscount);
    }
    var sum = prices.reduce((a, b) => a + b, 0);
    $('.sum').html('$'+sum);
});
$(document).on('click','.open-details',function(e){
    e.preventDefault();
    $(this).parent().parent().next().slideToggle();
    $(this).toggleClass('rotate');
});
$('.breadcrumb-item').on('click',function(e){
    e.preventDefault();
    $('.breadhide').fadeOut(0);
    $('#'+$(this).data('box')).show(0);
});
$(document).on('change','.quantity',function(){
    var prices = [];
    $('#items-number').html(document.getElementsByClassName('quantity').length + ' item');
    for(var i=0; i < $('.quantity').length; i++){
        var quantity = parseInt(document.getElementsByClassName('quantity')[i].value);
        var discount = parseInt(document.getElementsByClassName('discount')[i].value);
        var price =  parseInt(document.getElementsByClassName('price-value')[i].innerHTML);
        if(isNaN(discount)){
            var priceAfterDiscount = quantity * price;
        }else{
            var discountPrice = quantity * price * (discount / 100);
            var priceAfterDiscount = (quantity * price) - discountPrice;
        }
        prices.push(priceAfterDiscount);
    }
    var sum = prices.reduce((a, b) => a + b, 0);
    $('.sum').html('$'+sum);
});
$(document).on('change','.discount',function(){
    var prices = [];
    $('#items-number').html(document.getElementsByClassName('quantity').length + ' item');
    for(var i=0; i < $('.quantity').length; i++){
        var quantity = parseInt(document.getElementsByClassName('quantity')[i].value);
        var discount = parseInt(document.getElementsByClassName('discount')[i].value);
        var price =  parseInt(document.getElementsByClassName('price-value')[i].innerHTML);
        if(isNaN(discount)){
            var priceAfterDiscount = quantity * price;
        }else{
            var discountPrice = quantity * price * (discount / 100);
            var priceAfterDiscount = (quantity * price) - discountPrice;
        }
        prices.push(priceAfterDiscount);
    }
    var sum = prices.reduce((a, b) => a + b, 0);
    $('.sum').html('$'+sum);
});