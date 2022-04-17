const { I } = inject();

module.exports= {
    field: {
        fieldSearch :{xpath:'//input[@id="search"]'},
        fieldEmailCheckout :{xpath:'//input[contains(@id,"email")]'},
        fieldFirstName: {xpath: '//input[contains(@id,"firstNameInput")]'},
        fieldLastName: {xpath: '//input[contains(@id,"lastNameInput")]'},
        fieldCompanyName: {xpath: '//input[contains(@id,"companyInput")]'},
        fieldPhoneNumber: {xpath: '//input[contains(@id,"phoneInput")]'},
        fieldAddress: {xpath: '//input[contains(@id,"addressLine1Input")]'},
        fieldPlacement: {xpath: '//input[contains(@id,"addressLine2Input")]'},
        fieldCity: {xpath: '//input[contains(@id,"cityInput")]'},
        fieldCountry: {xpath:'//select[@id="countryCodeInput"]'},
        fieldProvince : {xpath:'//select[@id="provinceCodeInput"]'},
        fieldPostalCode : {xpath:'//input[@id="postCodeInput"]'},
        fieldOrderComment : {xpath:'//input[@name="orderComment"]'},
        fieldCreditCardNumber : {xpath:'//input[@id="ccNumber"]'},
        fieldCreditCardExpiry : {xpath:'//input[@id="ccExpiry"]'},
        fieldCreditCardName : {xpath:'//input[@id="ccName"]'},
        fieldCreditCardCVV : {xpath:'//input[@id="ccCvv"]'},
        fieldEmail : {xpath:'//input[@type="email"]'},
        fieldPassword : {xpath:'//input[@type="password"]'},
    },
    button: {
        listJaket :{xpath:'//img[contains(@alt,"Lightweight Jacket")]'},
        addToCart :{xpath:'//button[@data-variant="flat"][contains(.,"Add To Cart")]'},
        proccessedCheckout : {xpath:'//a[@href="/checkout"]'},
        btnContinueAsGuest : {xpath:'//button[contains(@id,"checkout-customer-continue")]'},
        btnShippingContinue : {xpath:'//button[@id="checkout-shipping-continue"]'},
        btnCheckoutContinue : {xpath:'//button[@id="checkout-payment-continue"]'},
        btnProfile : {xpath:'//div[@class="inline-block h-8 w-8 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear"]'},
        btnLogin : {xpath:'//button[@data-variant="slim"][contains(.,"Log In")]'},
        imgJaket : {xpath:'//img[contains(@alt,"Lightweight Jacket")]'},
        imgJoggers : {xpath:'//img[contains(@alt,"Unisex Joggers")]'},
        btnFreeShipping : {xpath:'//span[@class="shippingOption-desc"][contains(.,"Free Shipping")]'},
        btnPlusQty : {xpath:'(//button[contains(@type,"button")])[5]'},
        btnCloseCart : {xpath:'//span[@class="ml-2 text-accent-7 text-sm "][contains(.,"Close")]'}
    },
    text: {
        errorTextEmailRequiered: { xpath:'//label[@aria-live="polite"][contains(.,"Email address is required")]'}
    },
    form: {
        formLogin: { xpath:'//div[contains(@class,"Modal_modal__99I0C")]'}
    },

    // methods

    loginApp(email, password) {
        I.fillField(this.field.fieldEmail, email);
        I.fillField(this.field.fieldPassword, password);
        I.click(this.button.btnLogin);
        I.wait(10);
    },
    scrollCart(){
        I.scrollTo(this.button.addToCart);
        I.wait(30);
    },
    scrollToBtnContinue(){
        I.scrollTo(this.button.btnShippingContinue);
        I.wait(30);
    },
    scrollToFieldPostalcode(){
        I.scrollTo(this.field.fieldPostalCode);
        I.wait(30);
    },
    scrollToBtnPlaceOrder(){
        I.scrollTo(this.button.btnCheckoutContinue);
        I.wait(30);
    },
    clearProductSearch(product){
        I.click(this.field.fieldSearch);
        I.clearField(this.field.fieldSearch);
        I.fillField(this.field.fieldSearch, product);
    }

}