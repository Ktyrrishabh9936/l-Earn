 const scrollWithOffset = (el)=>{
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffest = -100;
    window.scrollTo({top:yCoordinate+yOffest,behavior:'smooth'})
}
export {
    scrollWithOffset
}