const productJaketURL = 'https://demo.vercel.store/product/lightweight-jacket';
const checkoutURL = 'https://acmedemo.mybigcommerce.com/checkout';
const orderConfirmationURL = 'https://acmedemo.mybigcommerce.com/checkout/order-confirmation';

Feature('Checkout Barang')

  Scenario('Checkout Barang', ({I, checkoutGuest}) => {
    I.amOnPage(process.env.HOST_VARCEL);
    // checkoutGuest.loginApp('nizarnugraha9@gmail.com', 'e26qBqY84CLXvKY');
    I.fillField(checkoutGuest.field.fieldSearch, "Lightweight Jacket");
    I.pressKey('Enter');
    I.waitForElement(checkoutGuest.button.imgJaket, 10);
    I.click(checkoutGuest.button.imgJaket);
    I.click(checkoutGuest.button.addToCart);
    I.click(checkoutGuest.button.addToCart);
    I.waitForElement(checkoutGuest.button.proccessedCheckout);
    I.click(checkoutGuest.button.proccessedCheckout);
    I.waitUrlEquals(checkoutURL);
  });

  Scenario('Fill Information Shipping', ({I, checkoutGuest}) => {
    I.fillField(checkoutGuest.field.fieldEmailCheckout, "nizar@yopmail.com");
    I.click(checkoutGuest.button.btnContinueAsGuest);
    I.waitForElement(checkoutGuest.field.fieldFirstName, 10);
    I.fillField(checkoutGuest.field.fieldFirstName, "Nizar");
    I.fillField(checkoutGuest.field.fieldLastName, "Nugraha");
    I.fillField(checkoutGuest.field.fieldCompanyName, "Flip");
    I.fillField(checkoutGuest.field.fieldPhoneNumber, "081296052887");
    I.fillField(checkoutGuest.field.fieldAddress, "Jl. Jakarta");
    I.fillField(checkoutGuest.field.fieldPlacement, "Apartement 1");
    I.fillField(checkoutGuest.field.fieldCity, "Jakarta Selatan");
    checkoutGuest.scrollToFieldPostalcode();
    I.selectOption('Country', 'United States');
    I.selectOption('State/Province', 'Alabama');
    I.fillField(checkoutGuest.field.fieldPostalCode,"12345");
    checkoutGuest.scrollToBtnContinue();
    I.wait(5);
    I.waitForElement(checkoutGuest.button.btnFreeShipping, 3);
    I.fillField(checkoutGuest.field.fieldOrderComment,"Test Bayar");
    I.click(checkoutGuest.button.btnShippingContinue);
    I.waitForElement(checkoutGuest.field.fieldCreditCardNumber,3);
  });

  Scenario('Fill Information Payment', ({I, checkoutGuest}) => {
    I.fillField(checkoutGuest.field.fieldCreditCardNumber, "4111 1111 1111 1111");
    I.fillField(checkoutGuest.field.fieldCreditCardExpiry, "12/25");
    I.fillField(checkoutGuest.field.fieldCreditCardName, "Testing Flip");
    I.fillField(checkoutGuest.field.fieldCreditCardCVV, "123");
    I.wait(5);
    I.click(checkoutGuest.button.btnCheckoutContinue);
    I.wait(5);
    I.waitUrlEquals(orderConfirmationURL,10);
  });
