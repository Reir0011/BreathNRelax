const container=document.querySelector('.container');
const text=document.querySelector('#text');

const totalTime=7500;

const breatheTime=(totalTime/5)*2;

const holdTime=totalTime/5;
 breatheAnimation();

function breatheAnimation(){
    text.innerHTML='Breathe In!';
    container.className='container grow';
    
    setTimeout(()=>{
        text.innerHTML='Hold';
      
        setTimeout(()=>{
            container.className='container shrink';
            text.innerHTML='Breathe Out!';
        },holdTime);
        
    },breatheTime);
}

setInterval(breatheAnimation,totalTime);