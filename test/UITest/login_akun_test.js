const productJaketURL = 'https://demo.vercel.store/product/lightweight-jacket';
const productJoggersURL = 'https://demo.vercel.store/product/unisex-joggers';
const checkoutURL = 'https://acmedemo.mybigcommerce.com/checkout';
const orderConfirmationURL = 'https://acmedemo.mybigcommerce.com/checkout/order-confirmation';

Feature('Login Akun Checkout Barang')

  Scenario('Login Akun', ({I, checkoutGuest}) => {
    I.amOnPage(process.env.HOST_VARCEL);
    I.click(checkoutGuest.button.btnProfile);
    I.waitForElement(checkoutGuest.form.formLogin);
    checkoutGuest.loginApp('nizarnugraha9@gmail.com', 'e26qBqY84CLXvKY');
  });

  Scenario('Checkout Barang', ({I, checkoutGuest}) => {
    I.fillField(checkoutGuest.field.fieldSearch, "Lightweight Jacket");
    I.pressKey('Enter');
    I.waitForElement(checkoutGuest.button.imgJaket, 10);
    I.click(checkoutGuest.button.imgJaket);
    I.click(checkoutGuest.button.addToCart);
    I.click(checkoutGuest.button.addToCart);
    I.waitForElement(checkoutGuest.button.proccessedCheckout,3);
    I.wait(2);
    I.click(checkoutGuest.button.btnPlusQty);
    I.wait(2);
    I.click(checkoutGuest.button.btnCloseCart);
    checkoutGuest.clearProductSearch("joggers");
    I.pressKey('Enter');
    I.wait(3);
    I.click(checkoutGuest.button.imgJoggers);
    I.click(checkoutGuest.button.addToCart);
    I.click(checkoutGuest.button.addToCart);
    I.waitForElement(checkoutGuest.button.proccessedCheckout);
    I.click(checkoutGuest.button.proccessedCheckout);
    I.waitUrlEquals(checkoutURL);
  });

  Scenario('Fill Information Shipping', ({I, checkoutGuest}) => {
    I.waitForElement(checkoutGuest.field.fieldFirstName, 10);
    I.fillField(checkoutGuest.field.fieldFirstName, "Nizar");
    I.fillField(checkoutGuest.field.fieldLastName, "Nugraha");
    I.fillField(checkoutGuest.field.fieldCompanyName, "Flip");
    I.fillField(checkoutGuest.field.fieldPhoneNumber, "081296052887");
    I.fillField(checkoutGuest.field.fieldAddress, "Jl. Jakarta");
    I.fillField(checkoutGuest.field.fieldPlacement, "Apartement 1");
    I.fillField(checkoutGuest.field.fieldCity, "Jakarta Selatan");
    checkoutGuest.scrollToBtnContinue();
    I.click(checkoutGuest.field.fieldCountry);
    I.wait(10);
    let country = locate('//select[@id="countryCodeInput"]/option').at(2);
    I.click(country);
    I.click(checkoutGuest.field.fieldProvince);
    I.wait(10);
    let province = locate('//select[@id="provinceCodeInput"]/option').at(2);
    I.click(province);
    I.fillField(checkoutGuest.field.fieldPostalCode,"12345");
    I.waitForElement(checkoutGuest.button.btnFreeShipping, 10);
    I.fillField(checkoutGuest.field.fieldOrderComment,"Test Bayar");
    I.click(checkoutGuest.button.btnShippingContinue);
    I.waitForElement(checkoutGuest.field.fieldCreditCardNumber);
  });

  Scenario('Fill Information Payment', ({I, checkoutGuest}) => {
    I.fillField(checkoutGuest.field.fieldCreditCardNumber, "4111 1111 1111 1111");
    I.fillField(checkoutGuest.field.fieldCreditCardExpiry, "12/25");
    checkoutGuest.scrollToBtnPlaceOrder();
    I.wait(10);
    I.fillField(checkoutGuest.field.fieldCreditCardName, "Testing Flip");
    I.fillField(checkoutGuest.field.fieldCreditCardCVV, "123");
    I.click(checkoutGuest.button.btnCheckoutContinue);
    I.waitUrlEquals(orderConfirmationURL);
    
  });
