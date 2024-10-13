
class App {
    constructor() {
        this.body = document.querySelector('body');
        this.mobileHome = document.querySelector('.mobile-home');
        this.mobilecatalogo = document.querySelector('.mobile-catalogo');
        this.mobileCart = document.querySelector('.mobile-cart');

        this.home = document.querySelector('.home');
        this.catalogo = document.querySelector('.catalogo');
        this.cart = document.querySelector('.cart');
    }

    /**
     * @param {HTMLElement} ele 
     */
    set mobileHome(ele) {
        this.__mobileHome = ele;
    }

    get mobileHome() {
        return this.__mobileHome;
    }

    /**
     * @param {HTMLElement} ele 
     */
    set mobilecatalogo(ele) {
        this.__mobilecatalogo = ele;
    }

    get mobilecatalogo() {
        return this.__mobilecatalogo;
    }

    /**
     * @param {HTMLElement} ele 
     */
    set mobileCart(ele) {
        this.__mobileCart = ele;
    }

    get mobileCart() {
        return this.__mobileCart;
    }

        /**
     * @param {HTMLElement} ele 
     */
    set mobileHome(ele) {
        this.__mobileHome = ele;
    }

    get mobileHome() {
        return this.__mobileHome;
    }

    /**
     * @param {HTMLElement} ele 
     */
    set mobilecatalogo(ele) {
        this.__mobilecatalogo = ele;
    }

    get mobilecatalogo() {
        return this.__mobilecatalogo;
    }

    /**
     * @param {HTMLElement} ele 
     */
    set mobileCart(ele) {
        this.__mobileCart = ele;
    }

    get mobileCart() {
        return this.__mobileCart;
    }


        /**
     * @param {HTMLElement} ele 
     */
        set home(ele) {
            this.__home = ele;
        }
    
        get home() {
            return this.__home;
        }
    
        /**
         * @param {HTMLElement} ele 
         */
        set catalogo(ele) {
            this.__catalogo = ele;
        }
    
        get catalogo() {
            return this.__catalogo;
        }
    
        /**
         * @param {HTMLElement} ele 
         */
        set cart(ele) {
            this.__cart = ele;
        }
    
        get cart() {
            return this.__cart;
        }

    start() {
        this.mobileHome.innerHTML = `<img src="./src/img/icon_home.png" alt="">`;
        this.mobilecatalogo.innerHTML = `<img src="./src/img/icon_catalogo_close.png" alt="">`;
        this.mobileCart.innerHTML = `<img src="./src/img/icon_cart.png" alt="">`;
    }

    menuGestor() {
        this.home.onclick = () => {
            if(!this.home.classList.contains('active')) {
                this.mobileHome.classList.add('active');
                this.mobilecatalogo.classList.remove('active');
                this.mobileCart.classList.remove('active');

                this.home.classList.add('active');
                this.catalogo.classList.remove('active');
                this.cart.classList.remove('active');

                this.mobileHome.innerHTML = `<img src="./src/img/icon_home.png" alt=""> <p>Inicio</P>`;
                this.mobilecatalogo.innerHTML = `<img src="./src/img/icon_catalogo_close.png" alt="">`;
                this.mobileCart.innerHTML = `<img src="./src/img/icon_cart.png" alt="">`;
            }
        }

        this.catalogo.onclick = () => {
            if(!this.catalogo.classList.contains('active')) {
                this.mobileHome.classList.remove('active');
                this.mobilecatalogo.classList.add('active');
                this.mobileCart.classList.remove('active');

                this.home.classList.remove('active');
                this.catalogo.classList.add('active');
                this.cart.classList.remove('active');

                this.mobileHome.innerHTML = `<img src="./src/img/icon_home.png" alt="">`;
                this.mobilecatalogo.innerHTML = `<img src="./src/img/icon_catalogo_open.png" alt="">  <p>catalogo</p>`;
                this.mobileCart.innerHTML = `<img src="./src/img/icon_cart.png" alt="">`;
            }
        }

        this.cart.onclick = () => {
            if(!this.cart.classList.contains('active')) {
                this.mobileHome.classList.remove('active');
                this.mobilecatalogo.classList.remove('active');
                this.mobileCart.classList.add('active');

                this.home.classList.remove('active');
                this.catalogo.classList.remove('active');
                this.cart.classList.add('active');

                this.mobileHome.innerHTML = `<img src="./src/img/icon_home.png" alt="">`;
                this.mobilecatalogo.innerHTML = `<img src="./src/img/icon_catalogo_close.png" alt="">`;
                this.mobileCart.innerHTML = `<img src="./src/img/icon_cart.png" alt=""> <p>Carrinho</p>`;
            }
        }
    }

    mobileMenuGestor() {
       this.mobileHome.onclick = () => {
        if(!this.mobileHome.classList.contains('active')) {
            this.mobileHome.classList.add('active');
            this.mobilecatalogo.classList.remove('active');
            this.mobileCart.classList.remove('active');

            this.home.classList.add('active');
            this.catalogo.classList.remove('active');
            this.cart.classList.remove('active');

            this.mobileHome.innerHTML = `<img src="./src/img/icon_home.png" alt=""> <p>Inicio</P>`;
            this.mobilecatalogo.innerHTML = `<img src="./src/img/icon_catalogo_close.png" alt="">`;
            this.mobileCart.innerHTML = `<img src="./src/img/icon_cart.png" alt="">`;
        }
       }

       this.mobilecatalogo.onclick = () => {
        if(!this.mobilecatalogo.classList.contains('active')) {
            this.mobileHome.classList.remove('active');
            this.mobilecatalogo.classList.add('active');
            this.mobileCart.classList.remove('active');

            this.home.classList.remove('active');
            this.catalogo.classList.add('active');
            this.cart.classList.remove('active');

            this.mobileHome.innerHTML = `<img src="./src/img/icon_home.png" alt="">`;
            this.mobilecatalogo.innerHTML = `<img src="./src/img/icon_catalogo_open.png" alt="">  <p>catalogo</p>`;
            this.mobileCart.innerHTML = `<img src="./src/img/icon_cart.png" alt="">`;
        }
       }

       this.mobileCart.onclick = () => {
        if(!this.mobileCart.classList.contains('active')) {
            this.mobileHome.classList.remove('active');
            this.mobilecatalogo.classList.remove('active');
            this.mobileCart.classList.add('active');

            this.home.classList.remove('active');
            this.catalogo.classList.remove('active');
            this.cart.classList.add('active');

            this.mobileHome.innerHTML = `<img src="./src/img/icon_home.png" alt="">`;
            this.mobilecatalogo.innerHTML = `<img src="./src/img/icon_catalogo_close.png" alt="">`;
            this.mobileCart.innerHTML = `<img src="./src/img/icon_cart.png" alt=""> <p>Carrinho</p>`;
        }
       }
    }

    update() {
        this.mobileMenuGestor();
        this.menuGestor();
    }
}



const main = new App();
main.start();
main.update();