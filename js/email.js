
function ValidMail() {
  let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  let myMail = document.getElementById('email').value;
  let valid = re.test(myMail);

  if (valid) {
    output = ' Отправлено'
    // output = 'Адрес эл. почты введен правильно!';
    document.querySelector('.footer__message').style.color='green';
  } else {
    output = 'Адрес электронной почты введен неправильно!';
    document.querySelector('.footer__message').style.color='red';
  }

  document.getElementById('message').innerHTML = output;
  return valid;

}
