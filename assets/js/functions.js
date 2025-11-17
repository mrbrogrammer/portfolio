let clientStuffInterval = true;
let wordStuffOnYoutubeScroll = true;
var prevSelection = $('a[href^="#about"]');
let showWork = true;

$(function() {
	smoothScroll(500, prevSelection);
	workBelt(showWork);
	navbar();
	workLoad();
	clientStuff();
	clientsBubbleClick();
	setInterval(function(){blogTada()}, 4000 );
	wordStuff();
	startBlog();
	startClients();
	navSelectionScroll(prevSelection, wordStuffOnYoutubeScroll);

	// This function takes in a function and the timeout duration in miliseconds.
	if (clientStuffInterval) {
		setInterval(function() {$('.client-control-next').click()}, 10000);
	}

	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
	$(".biglink").fitText(1.5);

	$('textarea').autosize();
});

$(window).scroll(function(){
	youtubeVidScroll();
});

function youtubeVidScroll(){
	var wScroll = $(window).scrollTop();
	$('.video-strip').css('background-position','center -'+ wScroll + 'px');
}

$(window).scroll(function(){
	startBlog();
	startClients();
	navSelectionScroll(prevSelection);
});

function startClients() {
		var wScroll = $(window).scrollTop();
		if($('#reviews').offset().top - 700 < wScroll) {
			if ($(window).width() > 680) {
				$('.faces').addClass('launched');
			} else {
				clientNarrowStart();
			}
			// setTimeout()function;
		}
}

function clientsBubbleClick() {
	// .on() is more efficient than click(), it essential triggers all the all
	// the items or something to that extand.
	$('.face').on('click', function() {
		var $this = $(this),
			faceTop = $this.position().top,
			vertMath = -1 * (faceTop - 220),
			faceLeft = $this.position().left,
			horMath = 0 - faceLeft;

		if ($(window).width() > 680) {
			$this.parent().css('top', + vertMath + 'px');
		} else {
			if ($this.hasClass('back-btn')) {
				clientNarrowStart();
			} else {
				$this.parent().css('left', + horMath + 'px');
			}
		}
		if (!$this.hasClass('back-btn')) {
			$this.addClass('has-bubble-open')
				.siblings().removeClass('has-bubble-open');
		}
	});

	// When I click a face
	// Get the distance of the face from its parent
	// Move the whole container up by 115px + the count
	// Add the is-open class rto the face, pop the ballon
}

function clientNarrowStart() {
	$('.faces').css({
		'top': '280px',
		'left': '0px',
	});

	$('.face').first().addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');
}

function clientWideStart() {
	$('.faces').css({
		'top': '0px',
		'left': '0px',
	});

	$('.face:nth-child(3)').first().addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');
}

$(window).resize(function() {
	if ($(window).width() < 680) {
		clientNarrowStart();
	} else {
		clientWideStart();
	}
	ScrollTrigger.refresh(true);
});


function navSelectionScroll (prevSelection) {
	var wScroll = $(window).scrollTop();

	$('a[href^="#"').find('div').removeClass('toggle-arrow');
	$('a[href^="#"').removeClass('toggle-section');

	if($('#reviews').offset().top - 500 < wScroll && $('#notes').offset().top - 500 > wScroll) {
		$('a[href^="#"').find('div').removeClass('toggle-arrow');
		$('a[href^="#reviews"').find('div').addClass('toggle-arrow');
		$('a[href^="#reviews"').addClass('toggle-section');
	} else if ($('#youtube').offset().top - 500 < wScroll && $('#blog').offset().top - 500 > wScroll) {
		$('a[href^="#"').find('div').removeClass('toggle-arrow');
		$('a[href^="#youtube"').find('div').addClass('toggle-arrow');
		$('a[href^="#youtube"').addClass('toggle-section');
	} else if ($('#work').offset().top - 500 < wScroll && $('#reviews').offset().top - 500 > wScroll) {
		$('a[href^="#"').find('div').removeClass('toggle-arrow');
		$('a[href^="#work"').find('div').addClass('toggle-arrow');
		$('a[href^="#work"').addClass('toggle-section');
	} else if ($('#blog').offset().top - 500 < wScroll && $('#work').offset().top - 500 > wScroll) {
		$('a[href^="#"').find('div').removeClass('toggle-arrow');
		$('a[href^="#blog"').find('div').addClass('toggle-arrow');
		$('a[href^="#blog"').addClass('toggle-section');
	} else if ($('#about').offset().top - 500 < wScroll && $('#youtube').offset().top - 500 > wScroll) {
		$('a[href^="#"').find('div').removeClass('toggle-arrow');
		$('a[href^="#about"').find('div').addClass('toggle-arrow');
		$('a[href^="#about"').addClass('toggle-section');
	} else if ($('#notes').offset().top - 500 < wScroll && $('#notes').offset().top - 400 > wScroll) {
		$('a[href^="#"').find('div').removeClass('toggle-arrow');
		$('a[href^="#notes"').find('div').addClass('toggle-arrow');
		$('a[href^="#notes"').addClass('toggle-section');
	} else if ($('#notes').offset().top - 400 < wScroll) {
		$('a[href^="#"').find('div').removeClass('toggle-arrow');
		$('a[href^="#contact"').find('div').addClass('toggle-arrow');
		$('a[href^="#contact"').addClass('toggle-section');
	}
}

// smoothScroll function is applied from the document ready function
function smoothScroll (duration, prevSelection) {
	$('a[href^="#"]').on('click', function(event) {
			prevSelection.find('div').removeClass('toggle-arrow');
			prevSelection.removeClass('toggle-section');

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
					// prevSelection = $(this);

					// $(this).find('div').addClass('toggle-arrow');

					if (target.selector === "#notes") {
						event.preventDefault();
						$('html, body').animate({
								scrollTop: target.offset().top - 400
						}, duration);
					} else {
						event.preventDefault();
						$('html, body').animate({
								scrollTop: target.offset().top - 100
						}, duration);
					}
	    }
			$('.mobile-header-position').removeClass('is-open');
			$('.mobile-nav-toggle').removeClass('is-open');
			isOpen = true;
	});
}




function blogTada() {
	var randNum = Math.floor(Math.random() * $('.article-thumb').length) + 1

	$('.article-thumb').eq(randNum).addClass('is-emp')
		.siblings().removeClass('is-emp');
}

function startBlog(wordStuffOnScroll) {
	var wScroll = $(window).scrollTop();

	if ($('#blog').offset().top - $(window).height() / 2 - 500 < wScroll) {
		if (wordStuffOnScroll) {
			wordStuff();
		}

		$('.article-thumb').each(function(i) {
			setTimeout(function(){$('.article-thumb').eq(i).addClass('is-visible')}, 200 * i);
		});
	}
}

function openResume() {
    window.open('./assets/js/Simphiwe_Madi_CV.pdf', '_blank');
}

var isOpen = false;

function navbar() {
	$(".mobile-nav-toggle").click(function() {
		$(".mobile-header-position").hasClass("is-open") ? isOpen = true : isOpen = false;
		if (!isOpen) {
			isOpen = true;
			$(".mobile-header-position").addClass("is-open");
			$(".mobile-nav-toggle").addClass("is-open");
		} else {
			isOpen = false;
			$(".mobile-header-position").removeClass("is-open");
			$(".mobile-nav-toggle").removeClass("is-open");
		}
	});

}

function workBelt() {
	var target = $( $('a[href^="#work"').attr('href') );
	let height = window.innerHeight;

  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-container label').click(function() {
    $('.work-belt').addClass("slided");
		$('#work').addClass("change-size");
    $('.work-container').show();
		$('.thumb-container').css({
			'display': 'none'
		});
		if ($(window).width() > 680) {
			$('html, body').animate({
					scrollTop: target.offset().top
			}, 500);
		} else {
			$('html, body').animate({
					scrollTop: target.offset().top - 100
			}, 500);
		}
		showWork = true;
  });

  $('.work-return').click(function() {
		showWork = false;
		$('html, body').animate({
				scrollTop: target.offset().top - (height * 30) / 100
		}, 300);
		$('.thumb-container').css({
			'display': 'inline-flex'
		});
    $('.work-belt').removeClass("slided");
    $('.work-container').hide(800);
  });

}


function  workLoad() {

  $.ajaxSetup({ cache: true });

  $('.thumb-container label').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        spinner = '<div class="loader">Loading...</div>',
        url = $this.find('.thumb-unit').data('url');

    $('.project-load').html(spinner).load(url);
    $('.project-title').text(newTitle);
  });

}

function clientStuff() {

  $('.client-logo, .client-button').click(function() {
    var $this = $(this),
        position = $this.parent().children().index($this);

    $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
		$('.bubble').removeClass('active-client').eq(position).addClass('active-client');
		$('.face').removeClass('active-client').eq(position).addClass('active-client');
    $('.client-logo').removeClass('active-client').eq(position).addClass('active-client');
    $('.client-button').removeClass('active-client').eq(position).addClass('active-client');
  });

  $('.client-control-next, .client-control-prev').click(function() {

		clientStuffInterval = false;

    var $this = $(this),
        curActiveClient = $('.clients-belt').find('.active-client'),
        position = $('.clients-belt').children().index(curActiveClient),
        clientNum = $('.client-unit').length;

      if($this.hasClass('client-control-next')) {

        if(position < clientNum -1){
          $('.active-client').removeClass('active-client').next().addClass('active-client');
        } else {
          $('.client-unit').removeClass('active-client').first().addClass('active-client');
					$('.bubble').removeClass('active-client').first().addClass('active-client');
					$('.face').removeClass('active-client').first().addClass('active-client');
          $('.client-logo').removeClass('active-client').first().addClass('active-client');
          $('.client-button').removeClass('active-client').first().addClass('active-client');
        }

      } else {
				var position = 3

        if (position === 3) {
          $('.client-unit').removeClass('active-client').last().addClass('active-client');
					$('.bubble').removeClass('active-client').last().addClass('active-client');
					$('.face').removeClass('active-client').last().addClass('active-client');
					$('.client-content').removeClass('active-client').last().addClass('active-client');
          $('.client-logo').removeClass('active-client').last().addClass('active-client');
          $('.client-button').removeClass('active-client').last().addClass('active-client');
        } else {
          $('.active-client').removeClass('active-client').prev().addClass('active-client');
        }

      }


  });

}


// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
	if (showWork) {

		gsap.registerPlugin(ScrollTrigger)
		// gsap code here!

		let horizontalSection = document.querySelector(".thumb-container");

		ScrollTrigger.matchMedia({

			// large
			"(min-width: 680px)": function() {
				gsap.to(".thumb-container", {
					x: () => -(horizontalSection.scrollWidth - $(window).width() + 200),
					scrollTrigger: {
						trigger: ".thumb-container",
						start: "center center",
						end: () => "+=" -(horizontalSection.scrollWidth),
						pin: ".thumb-wrap",
						scrub: 1,
						invalidateOnRefresh: true
					}
				})

				document.querySelectorAll("label").forEach((unit) => {
					gsap.from(unit, {
						x: 250,
						duration: 0.8,
						scrollTrigger: {
							trigger: unit,
							start: "top center bottom",
							toggleActions: "play reverse play reverse"
						}
					})
				})
			}
		});

		ScrollTrigger.matchMedia({

			// small
			"(max-width: 680px)": function() {
				gsap.to(".thumb-container", {
					x: () => -(horizontalSection.scrollWidth  - $(window).width() + 100),
					scrollTrigger: {
						trigger: ".thumb-container",
						start: "center center",
						end: () => "+=" -(horizontalSection.scrollWidth),
						pin: ".thumb-wrap",
						scrub: 1,
						invalidateOnRefresh: true,
					}
				})

				document.querySelectorAll("label").forEach((unit) => {
					gsap.from(unit, {
						x: 100,
						duration: 0.8,
						scrollTrigger: {
							trigger: unit,
							start: "top bottom",
							toggleActions: "play none none reverse"
						}
					})
				})
			}
		});
	}
});

function wordStuff() {
	gsap.registerPlugin(SplitText);

	const segmenter = new Intl.Segmenter("zh", { granularity: "word" });

	document.fonts.ready.then(() => {

		$('.blurb-section').addClass('highlight');

	  gsap.set(".split", { opacity: 1 });

	  const split = SplitText.create(".split", {
	    type: "words",
	    wordsClass: "word",
	    prepareText: (text, el) => {
	      return [...segmenter.segment(text)].map(s => s.segment).join(String.fromCharCode(8204))
	    },
	    wordDelimiter: { delimiter: /\u200c/, replaceWith: " " },
	    autoSplit: true,
	    onSplit: (self) => {
	      return gsap.from(self.words, {
	        y: 50,
	        opacity: 0,
	        stagger: 0.1,
	        ease: "back"
	      });
	    }
	  });
	});
}


$(document).ready(function() {
    // Configuration
    const CONFIG = {
        maxRetries: 3,
        retryDelay: 2000, // milliseconds
        loadTimeout: 10000 // 10 seconds timeout
    };

    // Function to load YouTube iframe
    function loadYouTubeVideo($placeholder, retryCount = 0) {
        const videoId = $placeholder.data('video-id');
        const maxRetries = $placeholder.data('max-retries') || CONFIG.maxRetries;

        // Show loading state
        $placeholder.html(`
            <div class="loading">
                <div class="spinner"></div>
                <div></div>
                ${retryCount > 0 ? `<div style="font-size: 14px; margin-top: 10px;">Retry attempt ${retryCount}</div>` : ''}
            </div>
        `);

        // Simulate checking if YouTube is accessible via Ajax
        $.ajax({
            url: `https://img.youtube.com/vi/${videoId}/0.jpg`,
            type: 'HEAD',
            timeout: CONFIG.loadTimeout,
            success: function() {
                // YouTube is accessible, load the iframe
                const iframe = `
                    <iframe
                        class="video-iframe"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                `;

								// $placeholder.removeClass('loading');
                $placeholder.html(iframe);

                // Monitor iframe load
                const $iframe = $placeholder.find('iframe');
                const iframeLoadTimeout = setTimeout(function() {
                    handleLoadError($placeholder, retryCount, maxRetries);
                }, CONFIG.loadTimeout);

                $iframe.on('load', function() {
                    clearTimeout(iframeLoadTimeout);
                    console.log('Video loaded successfully');
                });
            },
            error: function(xhr, status, error) {
                handleLoadError($placeholder, retryCount, maxRetries);
            }
        });
    }

    // Function to handle load errors
    function handleLoadError($placeholder, retryCount, maxRetries) {
        retryCount++;

        if (retryCount <= maxRetries) {
            console.log(`Load failed. Retrying in ${CONFIG.retryDelay/1000} seconds... (${retryCount}/${maxRetries})`);

            $placeholder.html(`
                <div class="loading">
                    <div class="spinner"></div>
                    <div>Connection failed. Retrying...</div>
                    <div style="font-size: 14px; margin-top: 10px;">Attempt ${retryCount} of ${maxRetries}</div>
                </div>
            `);

            setTimeout(function() {
                loadYouTubeVideo($placeholder, retryCount);
            }, CONFIG.retryDelay);
        } else {
            // Max retries reached, show error with manual retry option
            showError($placeholder);
        }
    }

    // Function to show error message
    function showError($placeholder) {
        const videoId = $placeholder.data('video-id');

        $placeholder.html(`
            <div class="error">
                <div style="font-size: 48px; margin-bottom: 10px;">⚠️</div>
                <div style="font-size: 18px; margin-bottom: 5px;">Failed to load video</div>
                <div style="font-size: 14px; margin-bottom: 15px;">Please check your connection</div>
                <button class="retry-button" data-video-id="${videoId}">Try Again</button>
            </div>
        `);
    }

    // Click handler for video placeholder (initial load)
    $(document).on('click', '.video-placeholder', function() {
        const $this = $(this);

        // Prevent multiple clicks
        if ($this.hasClass('loading')) {
            return;
        }

        // $this.addClass('loading');
        loadYouTubeVideo($this);
    });

    // Click handler for retry button
    $(document).on('click', '.retry-button', function(e) {
        e.stopPropagation();
        const $placeholder = $(this).closest('.video-placeholder');
        $placeholder.removeClass('loading');
        loadYouTubeVideo($placeholder, 0);
    });

    // Optional: Intersection Observer for automatic lazy loading when scrolling
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const $placeholder = $(entry.target);
                    // Uncomment the line below to auto-load when scrolling into view
                    // $placeholder.trigger('click');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });

        $('.video-placeholder').each(function() {
            observer.observe(this);
        });
    }
});


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );


/*!
	Autosize 1.18.12
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function ($) {
	var
	defaults = {
		className: 'autosizejs',
		id: 'autosizejs',
		append: '\n',
		callback: false,
		resizeDelay: 10,
		placeholder: true
	},

	// border:0 is unnecessary, but avoids a bug in Firefox on OSX
	copy = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',

	// line-height is conditionally included because IE7/IE8/old Opera do not return the correct value.
	typographyStyles = [
		'fontFamily',
		'fontSize',
		'fontWeight',
		'fontStyle',
		'letterSpacing',
		'textTransform',
		'wordSpacing',
		'textIndent',
		'whiteSpace'
	],

	// to keep track which textarea is being mirrored when adjust() is called.
	mirrored,

	// the mirror element, which is used to calculate what size the mirrored element should be.
	mirror = $(copy).data('autosize', true)[0];

	// test that line-height can be accurately copied.
	mirror.style.lineHeight = '99px';
	if ($(mirror).css('lineHeight') === '99px') {
		typographyStyles.push('lineHeight');
	}
	mirror.style.lineHeight = '';

	$.fn.autosize = function (options) {
		if (!this.length) {
			return this;
		}

		options = $.extend({}, defaults, options || {});

		if (mirror.parentNode !== document.body) {
			$(document.body).append(mirror);
		}

		return this.each(function () {
			var
			ta = this,
			$ta = $(ta),
			maxHeight,
			minHeight,
			boxOffset = 0,
			callback = $.isFunction(options.callback),
			originalStyles = {
				height: ta.style.height,
				overflow: ta.style.overflow,
				overflowY: ta.style.overflowY,
				wordWrap: ta.style.wordWrap,
				resize: ta.style.resize
			},
			timeout,
			width = $ta.width(),
			taResize = $ta.css('resize');

			if ($ta.data('autosize')) {
				// exit if autosize has already been applied, or if the textarea is the mirror element.
				return;
			}
			$ta.data('autosize', true);

			if ($ta.css('box-sizing') === 'border-box' || $ta.css('-moz-box-sizing') === 'border-box' || $ta.css('-webkit-box-sizing') === 'border-box'){
				boxOffset = $ta.outerHeight() - $ta.height();
			}

			// IE8 and lower return 'auto', which parses to NaN, if no min-height is set.
			minHeight = Math.max(parseInt($ta.css('minHeight'), 10) - boxOffset || 0, $ta.height());

			$ta.css({
				overflow: 'hidden',
				overflowY: 'hidden',
				wordWrap: 'break-word' // horizontal overflow is hidden, so break-word is necessary for handling words longer than the textarea width
			});

			if (taResize === 'vertical') {
				$ta.css('resize','none');
			} else if (taResize === 'both') {
				$ta.css('resize', 'horizontal');
			}

			// The mirror width must exactly match the textarea width, so using getBoundingClientRect because it doesn't round the sub-pixel value.
			// window.getComputedStyle, getBoundingClientRect returning a width are unsupported, but also unneeded in IE8 and lower.
			function setWidth() {
				var width;
				var style = window.getComputedStyle ? window.getComputedStyle(ta, null) : false;

				if (style) {

					width = ta.getBoundingClientRect().width;

					if (width === 0 || typeof width !== 'number') {
						width = parseInt(style.width,10);
					}

					$.each(['paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth'], function(i,val){
						width -= parseInt(style[val],10);
					});
				} else {
					width = $ta.width();
				}

				mirror.style.width = Math.max(width,0) + 'px';
			}

			function initMirror() {
				var styles = {};

				mirrored = ta;
				mirror.className = options.className;
				mirror.id = options.id;
				maxHeight = parseInt($ta.css('maxHeight'), 10);

				// mirror is a duplicate textarea located off-screen that
				// is automatically updated to contain the same text as the
				// original textarea.  mirror always has a height of 0.
				// This gives a cross-browser supported way getting the actual
				// height of the text, through the scrollTop property.
				$.each(typographyStyles, function(i,val){
					styles[val] = $ta.css(val);
				});

				$(mirror).css(styles).attr('wrap', $ta.attr('wrap'));

				setWidth();

				// Chrome-specific fix:
				// When the textarea y-overflow is hidden, Chrome doesn't reflow the text to account for the space
				// made available by removing the scrollbar. This workaround triggers the reflow for Chrome.
				if (window.chrome) {
					var width = ta.style.width;
					ta.style.width = '0px';
					var ignore = ta.offsetWidth;
					ta.style.width = width;
				}
			}

			// Using mainly bare JS in this function because it is going
			// to fire very often while typing, and needs to very efficient.
			function adjust() {
				var height, original;

				if (mirrored !== ta) {
					initMirror();
				} else {
					setWidth();
				}

				if (!ta.value && options.placeholder) {
					// If the textarea is empty, copy the placeholder text into
					// the mirror control and use that for sizing so that we
					// don't end up with placeholder getting trimmed.
					mirror.value = ($ta.attr("placeholder") || '') + options.append;
				} else {
					mirror.value = ta.value + options.append;
				}

				mirror.style.overflowY = ta.style.overflowY;
				original = parseInt(ta.style.height,10);

				// Setting scrollTop to zero is needed in IE8 and lower for the next step to be accurately applied
				mirror.scrollTop = 0;

				mirror.scrollTop = 9e4;

				// Using scrollTop rather than scrollHeight because scrollHeight is non-standard and includes padding.
				height = mirror.scrollTop;

				if (maxHeight && height > maxHeight) {
					ta.style.overflowY = 'scroll';
					height = maxHeight;
				} else {
					ta.style.overflowY = 'hidden';
					if (height < minHeight) {
						height = minHeight;
					}
				}

				height += boxOffset;

				if (original !== height) {
					ta.style.height = height + 'px';
					if (callback) {
						options.callback.call(ta,ta);
					}
					$ta.trigger('autosize.resized');
				}
			}

			function resize () {
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					var newWidth = $ta.width();

					if (newWidth !== width) {
						width = newWidth;
						adjust();
					}
				}, parseInt(options.resizeDelay,10));
			}

			if ('onpropertychange' in ta) {
				if ('oninput' in ta) {
					// Detects IE9.  IE9 does not fire onpropertychange or oninput for deletions,
					// so binding to onkeyup to catch most of those occasions.  There is no way that I
					// know of to detect something like 'cut' in IE9.
					$ta.on('input.autosize keyup.autosize', adjust);
				} else {
					// IE7 / IE8
					$ta.on('propertychange.autosize', function(){
						if(event.propertyName === 'value'){
							adjust();
						}
					});
				}
			} else {
				// Modern Browsers
				$ta.on('input.autosize', adjust);
			}

			// Set options.resizeDelay to false if using fixed-width textarea elements.
			// Uses a timeout and width check to reduce the amount of times adjust needs to be called after window resize.

			if (options.resizeDelay !== false) {
				$(window).on('resize.autosize', resize);
			}

			// Event for manual triggering if needed.
			// Should only be needed when the value of the textarea is changed through JavaScript rather than user input.
			$ta.on('autosize.resize', adjust);

			// Event for manual triggering that also forces the styles to update as well.
			// Should only be needed if one of typography styles of the textarea change, and the textarea is already the target of the adjust method.
			$ta.on('autosize.resizeIncludeStyle', function() {
				mirrored = null;
				adjust();
			});

			$ta.on('autosize.destroy', function(){
				mirrored = null;
				clearTimeout(timeout);
				$(window).off('resize', resize);
				$ta
					.off('autosize')
					.off('.autosize')
					.css(originalStyles)
					.removeData('autosize');
			});

			// Call adjust in case the textarea already contains text.
			adjust();
		});
	};
}(jQuery || $)); // jQuery or jQuery-like library, such as Zepto
