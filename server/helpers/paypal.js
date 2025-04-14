const paypal = require("paypal-rest-sdk");


paypal.configure({
  mode: "sandbox",
  client_id: "ASYKPsIidX4x4fGXCUMe8uw7QkKiWNl0UATwCt4JENSlV0iZrFUHbMJXB1-A_yX4en0MagzYcE-JBtgS",
  client_secret: "EGNUf_SjXDG76lUbVsnSJ2TEJjNRoEHxPtqdeqU8OJysPSHbRJXm-YaeIwpC7bFJw1O-dEGy_uKJx2N4",
});

module.exports = paypal;
