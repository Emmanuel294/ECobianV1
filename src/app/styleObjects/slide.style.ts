import { style } from '@angular/animations';

export const SlideInS = style({
    opacity: 1,
    transform: "translateX(0)"
})

export const SlideOutS = style({
    opacity: 0,
    transform: "translateX(-100%)"
})

export const SlideInBottomUpS = style({
    opacity: 1,
    transform: "translateY(0)"
})

export const SlideOutUpBottomS = style({
    opacity: 0,
    transform: "translateY(100%)"
})