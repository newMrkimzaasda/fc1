const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener(
	"scroll",
	_.throttle(function () {
		console.log(window.scrollY);
		if (window.scrollY > 500) {
			// badgeEl.style.display = "none";
			// gsap.to(요소, 지속시간, 옵션);
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				display: "none",
			});
			gsap.to(toTopEl, 0.2, {
				// opacity: 1,
				x: 0,
			});
		} else {
			// badgeEl.style.display = "block";
			gsap.to(badgeEl, 0.6, {
				opacity: 1,
				display: "block",
			});
			gsap.to(toTopEl, 0.2, {
				// opacity: 0,
				x: 100,
			});
		}
	}, 300),
);
// _throttle(함수, 시간)

toTopEl.addEventListener("click", function () {
	gsap.to(window, 0.7, {
		scrollTo: 0,
	});
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
	gsap.to(fadeEl, 1, {
		delay: (index + 0.1) * 0.3,
		opacity: 1,
	});
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
	direction: "vertical", // 수직 슬라이드
	autoplay: true, // 자동 재생 여부
	loop: true, // 반복 재생 여부
});

// new Swiper(선택자, 옵션)
new Swiper(".promotion .swiper-container", {
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 1000,
	},
	pagination: {
		el: ".promotion .swiper-pagination",
		clickable: true,
	},
	navigation: {
		prevEl: ".promotion .swiper-prev",
		nextEl: ".promotion .swiper-next",
	},
	// autoplay: true, // 자동 재생 여부
	// loop: true, // 반복 재생 여부
});
// new Swiper(선택자, 옵션)
new Swiper(".awards .swiper-container", {
	autoplay: true,
	loop: true,
	slidesPerView: 5,
	navigation: {
		prevEl: ".awards .swiper-prev",
		nextEl: ".awards .swiper-next",
	},
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
	isHidePromotion = !isHidePromotion;
	if (isHidePromotion) {
		promotionEl.classList.add("hide");
	} else {
		promotionEl.classList.remove("hide");
	}
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
	// `.toFixed()`를 통해 반환된 '문자 데이터'를,
	// `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
	return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
	gsap.to(
		selector, // 선택자
		random(1.5, 2.5), // 애니메이션 동작 시간
		{
			delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
			y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
			repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
			yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
			ease: Power1.easeInOut, // Easing 함수 적용.
		},
	);
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
	new ScrollMagic.Scene({
		triggerElement: spyEl,
		triggerHook: 0.8,
	})
		.setClassToggle(spyEl, "show") //
		.addTo(new ScrollMagic.Controller());
});
