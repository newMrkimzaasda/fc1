

/*
for( i=0; i<tab.length; i++){
	$(tab).removeClass('orange');      
	$(tab).eq(i).addClass('orange');  
	$(tabC).removeClass('show');  
	$(tabC).eq(i).addClass('show'); 
}

$('.tab-button').eq(0).on('click',function(){
	$('.tab-button').removeClass('orange');  
	$('.tab-content').removeClass('show');  
	$('.tab-content').eq(0).addClass('show');
	$('.tab-button').eq(0).addClass('orange');
})

$('.tab-button').eq(1).on('click',function(){
	$('.tab-button').removeClass('orange');  
	$('.tab-content').removeClass('show');  
	$('.tab-content').eq(1).addClass('show');
	$(this).addClass('orange');
})


$('.tab-button').eq(2).on('click',function(){
	$('.tab-button').removeClass('orange');  
	$('.tab-content').removeClass('show');  
	$('.tab-content').eq(2).addClass('show');
	$('.tab-button').eq(2).addClass('orange');
})  
*/

/*
	for( i=0; i<x.length; i++){
	}
*/

// let tab = $('.tab-button');
// let tabC = $('.tab-content');
// for( let i = 0; i < tab.length; i++){
//   $(tab).eq(i).on('click',function(e){    
//     tabOpen(i);
//   });
// }
// function tabOpen(i){
//   $(tab).removeClass('orange');      
//   $(tab).eq(i).addClass('orange');  
//   $(tabC).removeClass('show');  
//   $(tabC).eq(i).addClass('show');  
// }

// $('.list').click(function(e){
//   if(e.target == document.querySelectorAll('tab')[i]){
//     tabOpen(i);
//   }
// })

// let tab = $('.tab-button');
// let tabCt = $('.tab-content');
// for( let i = 0; i < tab.length; i++){
//   $(tab).eq(i).on('click',function(e){    
//     tabOpen(i);
//   });
// }
// function tabOpen(i){
//   $(tab).removeClass('orange');      
//   $(tab).eq(i).addClass('orange');  
//   $(tabCt).removeClass('show');  
//   $(tabCt).eq(i).addClass('show');  
// }


let tab = $('.tab-button');
let tabCt = $('.tab-content');
$('.list').click(function(e){    
	console.log(e.target.dataset.id);
	tabOpen(e.target.dataset.id);
})

function tabOpen(i){
	$(tab).removeClass('orange');      
	$(tab).eq(i).addClass('orange');  
	$(tabCt).removeClass('show');  
	$(tabCt).eq(i).addClass('show');  
}



    var car = ['쏘나타', 500000, 'white']; // array 
    // console.log(car[0]);
    // car[0] = '제네시스'; //수정
    // car[4] = '년식'; // 년식
    // console.log(car);
    // document.querySelector('prd-tit').innerHTML=car[1];
    $('.prd-tit').text(car[0]);
    // $('.prd-price').text(car[1])

    // car2 = {name : '쏘나타', price : 50000 , color : '화이트', year : 24}  // ke:value 형태
    // console.log(car2['price']); // 변수도 입력가능
    // console.log(car2.price); // . 접근
    // car2.price = 600000;
    // car2.price = 70000;
    // console.log(car2.price); // . 접근
    // console.log(car2);
    // car2.state = 'good';
    // car2.option = 10;
    // console.log(car2);

    car2 = {name : '쏘나타', price : [50000,3000,4000]}  // key:value 형태
    $('.prd-price').html(car2.price[0]); //jquery
    // document.querySelector('.prd-price').innerHTML = car2.price[0]; // javascript
    // console.log(car2['price'][1])


					//jquery			
					$('.form-select').eq(0).on('change',function(e){		
						var value = e.currentTarget.value;	
						if(value == '1'){
							$('.form-select').eq(1).removeClass('form-hide');
						}else{
							$('.form-select').eq(1).addClass('form-hide');
						}
					})
		
				// javascript
				// document.querySelector('.form-select').addEventListener('input', function () {
				// 	if (document.querySelector('.form-select').value == 1) {
				// 		$('.form-select').eq(1).removeClass('form-hide');
				// 	} else {
				// 		$('.form-select').eq(1).addClass('form-hide');
				// 	}
				// })
		
				// javascript
				// document.querySelector('.form-select').addEventListener('click', function () {
				// 	if (document.querySelector('.form-select').value == 1) {
				// 		$('.form-select').eq(1).removeClass('form-hide');
				// 	} else {
				// 		$('.form-select').eq(1).addClass('form-hide');
				// 	}
				// })
		
				//jquery
				// $('.form-select').on('click',function(){			
				// 	if($('.form-select').eq(0).val() == '1'){
				// 		$('.form-select').eq(1).removeClass('form-hide');
				// 	}else{
				// 		$('.form-select').eq(1).addClass('form-hide');
				// 	}
				// })
		
				// 	jquery
				// 	$('.form-select').eq(0).on('change',function(){			
				// 	if($('.form-select').eq(0).val() == '1'){
				// 		$('.form-select').eq(1).removeClass('form-hide');
				// 	}else{
				// 		$('.form-select').eq(1).addClass('form-hide');
				// 	}
				// })
