const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
searchEl.addEventListener("click", function () {
	searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
	searchEl.classList.add("focused");
	searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
	searchEl.classList.remove("focused");
	searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
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
		} else {
			// badgeEl.style.display = "block";
			gsap.to(badgeEl, 0.6, {
				opacity: 1,
				display: "block",
			});
		}
	}, 300),
);
// _throttle(함수, 시간)

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
	gsap.to(fadeEl, 1, {
		delay: (index + 0.1) * 0.3,
		opacity: 1,
	});
});

new Swiper(".notice-line .swiper-container", {
	direction: "vertical", // 수직 슬라이드
	autoplay: true, // 자동 재생 여부
	loop: true, // 반복 재생 여부
});

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
