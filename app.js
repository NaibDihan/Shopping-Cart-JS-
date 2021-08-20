function productIncreaseDecrease(product,price,addOrSubstract){
    const productCount=document.getElementById(product + '-count');
    let productCountConvert = parseInt(productCount.value);
    if(addOrSubstract==true)
    {
        productCount.value= productCountConvert + 1;
    }

   else{
        if(productCountConvert>0)
        {
            productCount.value=productCountConvert-1;
        }
        
    }
    const priceTotal = document.getElementById(product + '-total')
    priceTotal.innerText = price * productCount.value;

}


document.getElementById('phone-plus').addEventListener('click',function(){
//    const phoneCount=document.getElementById('phone-count');
//    let phoneCountConvert = parseInt(phoneCount.value);
//     phoneCount.value= phoneCountConvert + 1;
           productIncreaseDecrease('phone',1219,true);

});

document.getElementById('phone-minus').addEventListener('click',function(){
    // const phoneCount=document.getElementById('phone-count');
    // let phoneCountConvert = parseInt(phoneCount.value);
    // phoneCount.value=phoneCountConvert-1;
    productIncreaseDecrease('phone',1219,false);

});

document.getElementById('case-plus').addEventListener('click',function(){
    //    const caseCount=document.getElementById('case-count');
    //    let caseCountConvert = parseInt(caseCount.value);
    //     caseCount.value= caseCountConvert + 1;
               productIncreaseDecrease('case',59,true);
    
    });
    
    document.getElementById('case-minus').addEventListener('click',function(){
        //    const caseCount=document.getElementById('case-count');
        //    let caseCountConvert = parseInt(caseCount.value);
        //     caseCount.value= caseCountConvert - 1;
                   productIncreaseDecrease('case',59,false);
        
        });

