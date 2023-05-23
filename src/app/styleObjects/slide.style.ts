import { style } from '@angular/animations';

type StyleT = any;

export const SlideInS: StyleT = style({
    opacity: 1,
    transform: "translateX(0)"
})

export const SlideOutS: StyleT = style({
    opacity: 0,
    transform: "translateX(-100%)"
})

export const SlideInBottomUpS: StyleT = style({
    opacity: 1,
    transform: "translateY(0)"
})

export const SlideOutUpBottomS: StyleT = style({
    opacity: 0,
    transform: "translateY(100%)"
})