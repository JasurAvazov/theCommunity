import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export function init(){
    gsap.utils.toArray(".places-top").forEach((section) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%",
                scrub: 2,
                markers: false,
            },
        });
        tl.add("start")
            .from(
                section.querySelector(".box-left-side"),
                {
                x: -200,
                opacity: 0,
                ease: "expo.ease",
                },
            "start"
          )
    });
}