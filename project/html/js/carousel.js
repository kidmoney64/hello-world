/*
const track = document.querySelector("carousel__track");
const track = Array.from(track.children);
const nextButton = document.querySelector(' .carousel__button--right')
const prevButton = document.querySelector(' .carousel__button--left')
*/

var rightButton = document.querySelector( '.carousel__button--right' );
var leftButton = document.querySelector( '.carousel__button--left' );
var children = document.querySelector('.carousel__track').children;

var childrenArray = Array.from(children);

var imageIndex = 0;

const rightHandler = function() {
    imageIndex = (imageIndex + 1) % 3;
    for ( var index of [0, 1, 2] ) {
        if ( index == imageIndex ) {
            childrenArray[index].style.display = "inline-block";
        } else {
            childrenArray[index].style.display = "none";
         }
    }
}

rightButton.addEventListener( 'click', rightHandler );

leftButton.addEventListener(
    'click',
    function() {
        imageIndex = (imageIndex - 1 + 3) % 3;
console.log(imageIndex);
        for ( var index of [0, 1, 2] ) {
			if ( index == imageIndex ) {
				childrenArray[index].style.display = "inline-block";
            } else {
				childrenArray[index].style.display = "none";
 			}
        }
    }
)