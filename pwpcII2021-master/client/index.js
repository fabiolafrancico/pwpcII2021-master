import './stylesheets/style.css';
import './stylesheets/mystyle.css';

//Iniciando scripts de materialize
document.addEventListener('DOMContentLoaded', () => {
  const sideNav = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line no-undef
  M.Sidenav.init(sideNav);
  //Iniciando dropdown
  document
    .querySelectorAll('.dropdown-trigger')
    // eslint-disable-next-line no-undef
    .forEach((dropdown) => M.Dropdown.init(dropdown));
  //const dropdowns = document.querySelectorAll('.dropdown-trigger');
  //for (let i = 0; i < dropdowns.length; i++) {
  //  // eslint-disable-next-line no-undef
  //  M.Dropdown.init(dropdowns[i]);
  //}
  // eslint-disable-next-line no-undef
  //dropdowns.forEach((dropdown) => M.Dropdown.init(dropdown));
});

//console.log('Webpack working!');
// Default parameters están disponibles solamente en ES6/2015
//let show = (m = 'Hot module replacement working ') => {
//alert(m);
//};

//show();

//function resolveAfter25Seconds() {
//return new Promise((resolve) => {
//setTimeout(() => {
//resolve('resolved');
//}, 2000);
//});
//}

//async function asyncCall() {
//console.log('Calling an async function');
//const result = await resolveAfter25Seconds();
//console.log(result);
//}

//asyncCall();-->
