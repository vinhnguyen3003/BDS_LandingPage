export default function scrollTop(){
    if(window.pageYOffset !== 0){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}