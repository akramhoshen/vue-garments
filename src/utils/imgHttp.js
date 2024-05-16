// export default 'http://localhost/Laravel-Practice-ERP/public/img/'; // Image Path URL
const imgURL = 'http://localhost/laravel-garments-api/public/img/';

function getImg(photo) {
    if (photo) {
      return imgURL + photo;
    } else {
      return 'Not Found';
    }
  }
  
  export default getImg;
