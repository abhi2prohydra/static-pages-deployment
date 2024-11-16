const cursor = document.querySelector('.cursor');
const body = document.body;
body.addEventListener('mousemove', (e)=>{
    const mx = e.pageX;
    const my = e.pageY;
    cursor.style.transform = `translate(${mx-100}px, ${my-100}px)`;
    cursor.style.transition = '0.08s'
})