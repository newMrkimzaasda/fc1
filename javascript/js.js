
// window.addEventListener('scroll',function(){
//   console.log(window.screenY) 
//   window.scrollTo(0,100); 위에서 강제로 100px
//   window.scrollBy(0,100); 100만큼 스크롤을 해주세요. 버튼누르면 100px
// })

// $(window).on('scroll',function(){
//   // console.log($(window).scrollTop()); //현재스크롤바의 위치 출력 window.scroolY 와동일
//   $(window).scrollTop(100);   
// })

//s: 모달창 띄우기
//javascript
document.getElementById('login').addEventListener('click', function(){		
  document.querySelector('.black-bg').classList.add('show-modal');
});	
// jQuery
// $('#login').on('click', function(){
// 	$('.black-bg').addClass('show-modal');
// })
//e: 모달창 띄우기

//s: 모달창 닫기
document.querySelector('.black-bg').addEventListener('click',function(e){
  ////e.target, e.currentTarget, e.preventDefault, e.stopPropagation
  //console.log(e.target); // 클릭한거
  //console.log(e.currentTarget); // this
  //console.log(e.preventDefault); // 이벤트기본동작 막아줌
  //console.log(e.stopPropagation); // 내 상위요소로 이벤트 버블링 막아줌
  //실제로 클릭한 누르기
  if(e.target == document.querySelector('.black-bg')){
          document.querySelector('.black-bg').classList.remove('show-modal');
  }  
})
//e: 모달창 닫기

//s: 이벤트 버블링
//e.target > 유저가 실제 누른거 > console.log(e.target);
//e.currentTarget > 이벤트리스너 달린 곳
//e.preventDefault() > 이벤트기본동작 막아줌
//e.stopPropagation() > 내 상위요소를 이벤트 버블링 막아줌
//e: 이벤트 버블링\

//가로
//공부해야 될 내용
// DOM.offsetTop,offsetWidth,offsetHeight
// >>>>>>>>>>>>>>>>>>


//세로
//div의 스크롤바 내린 양 + 100px(clientHeight) ==  div의 실제높이 240px
let $lorem = document.querySelector('.lorem');
$lorem.addEventListener('scroll', function () {
    if ($lorem.clientHeight + $lorem.scrollTop >= $lorem.scrollHeight - 5) {
      alert('약관을 다 읽으셨습니다');
      $lorem.removeEventListener('scroll', arguments.callee);
    }
});
// function alertEnd() {
// 	if ($lorem.clientHeight + $lorem.scrollTop >= $lorem.scrollHeight - 5) {
// 		alert('약관을 다 읽으셨습니다');
// 		$lorem.removeEventListener('scroll', alertEnd);
// 	}
// }
// $lorem.addEventListener('scroll', alertEnd);

// $('.lorem').on('scroll',function(){
// 	var loremScrollTop = document.querySelector('.lorem').scrollTop; 			
// 	var loremClientHeight = document.querySelector('.lorem').clientHeight;
// 	var loremScrollHeight = document.querySelector('.lorem').scrollHeight; // 실제높이A
// 	console.log(loremScrollTop,loremClientHeight,loremScrollHeight);
// })
// $('.lorem').on('scroll',function(){
// 	var loremScrollTop = document.querySelector('.lorem').scrollTop; 			
// 	var loremClientHeight = document.querySelector('.lorem').clientHeight;
// 	var loremScrollHeight = document.querySelector('.lorem').scrollHeight; // 실제높이A
// 	console.log(loremScrollTop,loremClientHeight,loremScrollHeight);
// 	var loremHeight = loremScrollTop + loremClientHeight; console.log(loremHeight);			
// 	if( loremHeight > loremScrollHeight - 5){
// 		alert('끝까지 다 읽으셨습니다.');
// 		this.removeEventListener('scroll', arguments.callee);
// 	}			

// 	// document.documentElement.scrollTop;
// 	document.querySelector('html').scrollTop;
// 	document.querySelector('html').clientHeight;
// })

// $(window).on('scroll',function(){
// 	// console.log($(window).scrollTop()); //현재스크롤바의 위치 출력 window.scroolY 와동일
// 	$(window).scrollTop(100);   
// })


$(window).on('scroll',function(){
  if(window.scrollY > 100){
    $('.navbar-brand').css('font-size','20px');
  }else if(window.scrollY <= 100){
    $('.navbar-brand').css('font-size','30px');
  }
})

//s: if문 체크
// 전송버튼 누르면 알림창 띄워주세요.	
$('formWrap').on('change', function(){			
  if(document.getElementById('email').value == '' && document.getElementById('pass').value == ''){			
    alert('아이디 / 비밀번호를 입력해 주세요.');
    // e.preventDefault();
  }else if(document.getElementById('email').value == ''){
    alert('아이디를 입력해 주세요.');
    // e.preventDefault();
  }else if(document.getElementById('pass').value == ''){
    alert('비밀번호를 입력해 주세요.');
    // e.preventDefault();			
  }else if(document.getElementById('pass').value.length < 3){
    alert('비밀번호 짧음.');
    // e.preventDefault();			
  }
});	
//e: if문 체크


// setTimeout(function(){
// 	$('.alert').hide()
// }, 5000)
// setTimeout(함수, 5000)
// addEventListener(함수)
num = 3;		
setInterval(function(){			
  num--;					
  if(num >= 0){
    $('.num').html(num);
  }else{
    clearTimeout(num);					
    $('.alert').hide();								
  }			
}, 1000)

// <!--s: 다크/라이트 모드 변경 -->
// badge bg-dark
count=0;
$('.badge').on('click', function(){	
	count++; console.log(count);	
	if(count % 2 == 1){
		function odd(){
			document.querySelector('.badge').innerHTML='<span>Light</span> 🔄';
			document.querySelector('.badge').classList.add('white');
		}
		odd();
	}else if((count % 2 == 0)){
		function even(){
			document.querySelector('.badge').innerHTML='<span>Block</span> 🔄';
			document.querySelector('.badge').classList.remove('white');
		}
		even();
	}	
})
// <!--e: 다크/라이트 모드 변경 -->



/*
<input type="number" id="i1"> + 
<input type="number" id="i2">
<button id="i4">확인필요</button>
<span id="i3"> </span>
<span id="i5"> </span>
<button onclick="ok(s1, s2)">함수</button>
//문제풀이
//공인중개사 1차 시험은 개론, 민법 2개 과목이 있습니다.
//과목마다 100점 만점이지만 두 과목 합해서 120점 이상이면 합격시켜줍니다. 
//다만 한 과목이 40점 미만이면 과락으로 불합격됩니다.
//과목 점수 2개를 파라미터로 입력하면 합격인지 불합격인지 여부를 콘솔창에 출력하는 함수를 만들어보십시오. 

document.querySelector('#i4').addEventListener('click',function(){
  $('#i5').html();
  var s1 = Number(document.getElementById('i1').value);
  var s2 = Number(document.getElementById('i2').value);
  var s3 = Number(s1 + s2);
  document.querySelector('#i3').innerHTML= Number(s3);

if(s1 < 40 || s2 < 40 || s3 < 120){
  document.querySelector('#i5').innerHTML="불합격";	
  }else{
    document.querySelector('#i5').innerHTML="합격";
  }	
})

function ok(a, b){
if( a < 40 || b < 40){
  alert('불합격');
  console.log('불합격')
}else if(a + b >= 120){
  alert('합격');
  console.log('합격')
}else{
  alert('불합격');
  console.log('불합격')
}
}
*/



//s: 모달창 닫기
// javascript
// document.getElementById('close').addEventListener('click', function(){
// 	document.querySelector('.black-bg').classList.remove('show-modal');
// })
// jquery
$('#close').on('click',function(){
  $('.black-bg').removeClass('show-modal');
})
//cf) classList.toggle('')
//e: 모달창 닫기





	// <p>태조 이성계가 태어난 년도는?</p>
	// <input type="text" id="answer">
	// <button id="send-answer">제출</button>
	cunt=0;	
  $('#send-answer').on('click',function(){
		var result = $('answer').value;
		cunt++;
		if( result == 1335){
			alert('성공');
		}else if( cunt >= 3 && result != 1335){
			alert('멍청이');
		}else{
			alert('실패');
		}
	})


  $('.slide-1').on('click',function(){		
		$('.slide-container').css('transform','translateX(0vw)')		
	})
	$('.slide-2').on('click',function(){		
		$('.slide-container').css('transform','translateX(-100vw)')		
	})
	$('.slide-3').on('click',function(){		
		$('.slide-container').css('transform','translateX(-200vw)')
	})	

	var viewPhoto = 1;	
	$('#next').on('click',function(){					
		$('.slide-container').css(`transform`,`translateX(-${viewPhoto}00vw)`);					
		viewPhoto += 1;
	})


  function aa(a){
    return a * 10;
  }
  aa(10);
  var 변수1 = aa(10);
  console.log(변수1);


  function 함수(){
    return 123; // 문자, 수식 등 아무거나 다 넣  을수 있음. 리턴은 함수 종료.
  }
  함수();
  var 변수 = 함수();
  console.log(변수);

  function vat(a){
    var num = (a * 1.1).toFixed(5); // 문자
    return parseFloat(num) // 숫자로 변환    
  }
  var vat = vat(11000022132);
  console.log(parseInt(vat));

//(10의 10% 할인가격 9에 추가할인 1.5 해줌)

function cc(){
  return parseFloat((10*0.1)*1.5);
}
cc();
var cc1 = cc();
console.log(cc1);

function calc(){
  var toF = ((10 * 0.1) * 1.5).toFixed(2);
  return parseFloat(toF);
}
calc();
var c1 = calc()
console.log(c1);


// Q1. 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수를 만들어봅시다.
// (1초 == 1000ms 입니다)
// (동작예시)
// console.log(함수(1,30))
// 이렇게 사용하면 콘솔창에 90000이 출력되어야 합니다.
// 1분 30초는 총 90초인데
// x 1000 하면 ms단위로 바꿀 수 있으니까 90000이 나와야함


function ex1(a, b){
  return ((a*60+b)*1000).toFixed(2);
}
ex1(1,30);
var ex1 = ex1(1,30);
console.log(ex1);
// > 90000 


