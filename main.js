const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
.bars{
    display: none;
}
.nav{
    display: flex;
    align-items:center;
    gap: 3rem;
    position: absolute;
    top: 4rem;
    left: 3rem;
}
ul{
        display: flex;
        align-items: center;
        gap: 1rem;

}
li{
        list-style: none;
}
a{
        text-decoration: none;
        color: white;
        font-weight: 600;
}
a:hover{
        color: blue;
        transition: all .3s ease-out;
}
.container{
    display: flex;
    /* border: 2px solid red; */
    margin-bottom: -4px;
}
.right-col{
    margin-top: 5%;
    /* border: 2px solid red; */
}
h1{
        margin-bottom: 1rem;
}
p{
        line-height: 1.5rem;
        font-size: 1rem;
}
.shop-now{
    margin-top: 1rem;
    letter-spacing: .6rem;
    font-weight: 600;
}
.direction{
    margin-bottom: 48rem;
    position:absolute;
}
.image-about-light{
    /* border: 2px solid red; */
    margin-left: 2rem;
}
.content{
    padding: 3rem 0 0 2rem;
}
h3{
        letter-spacing: .5rem;
        margin-bottom: 1rem;
}
p{
        font-size: .88rem;
        line-height: 1.4rem;
}
.direction{
    background-color:black;
    display:flex;
    width: 129px;
    margin-top: 77px;
    margin-left: -85px;
    position: absolute;
    padding: 12px;
    border: 2px solid black;
}
.prev{
    padding-left: 15px;
    padding-right: 20px;
    font-size: 22px;
}
.fa{
    color: gray;
}
.next{
    font-size: 22px;
    padding-left: 20px;
}
.mobile-container{
    display: none;
}
@media (max-width:1440px){
    .mobile-container{
        display: none;
    }
    .direction{
        width: 178px;
        position: absolute;
        top: 350px;
    }
    .prev{
        margin-left: 1.5rem;
    }
}
@media (max-width: 1024px){
    .right-col h1{
        font-size: 17px;
    }
    .right-col{
        margin-top: 3%;
    }
    .hero-2{
        width: 70%;
    }
    ul{
        font-size: 10px;
    }
    .main-content{
        margin-right: 5rem;
    }
}
/* @media (max-width: 600px){
    .container{
        display: none;
    }
    .sub-container{
        display: none;
    }
    .bars{
        display: block;
        color: white;
        margin-left: 2rem;
    }
    .mobile-container{
        width: 100%;
        margin: 0;
        display: block;
    }
    .mobile-direction{
        display:flex;
        padding: 13px 30px 13px 30px;
        background-color:black;
        justify-content: space-around;
        position: absolute;
        right: .0rem;
        top: 33.2rem;
    }
    .m-prev{
        padding: 0 .9rem 0 0;
    }
    .m-next{
        padding: 0 0 0 .6rem;
    }
    .top-nav{
        display: flex;
        position: absolute;
        top: 4%;
    }
    .new-logo{
       margin-left: 7rem;
    }
    .discovery{
        margin: 2.5rem 0 2rem 4rem;
    }
    h3{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    p{
        font-size: 1.1rem;
        line-height: 1.5rem;
    }
    .shop-now{
        margin: 2rem 0 2rem 0;
    }
}
.m-about{
    margin: 2.5rem 0 2rem 4rem;
    h3{
        font-size: 24px;
        font-weight: 700;
    }
}
@media (max-width: 414px){
    .mobile-direction{
        position: absolute;
        top: 22rem;
    }
    P{
        font-size: .9rem;
    }
    h3{
        font-size: 20px;
    }
    .discovery{
        margin: 2.5rem 0 0 2rem;
    }
    .m-about h3{
        font-size: 15px;
    }
    .m-about{
        margin: 2.5rem 0 2rem 2rem;
    }
}
@media (min-width: 393px){
    .mobile-direction{
        position: absolute;
        top: 20.8rem;
    }
}
@media (min-width: 384px){
    .mobile-direction{
        position: absolute;
        top: 20.2rem;
    }
    h3{
        font-size: 18px;
    }
}
@media (min-width: 375px){
    .mobile-direction{
        position: absolute;
        top: 19.7rem;
    }
    .discovery h3{
        font-size: 18px;
    }
}
@media (min-width: 360px){
    .mobile-direction{
        position: absolute;
        top: 18.8rem;
    }
}
@media (min-width: 320px){
    .mobile-direction{
        position: absolute;
        top: 16.4rem;
    }
    .discovery{
        margin: .8rem;
    }
    .m-about{
        margin: .8rem;
    }
} */