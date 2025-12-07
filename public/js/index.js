/* eslint-disable */
import '@babel/polyfill';
import { displayMap } from './leaflet';
import { login, logout, signup } from './login';
import { updateSettings } from './updateSettings';
import { bookTour } from './stripe';
import { showAlert } from './alerts';
import { deleteResource } from './admin';

// DOM ELEMENTS
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-tour');

// DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (signupForm)
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    signup(name, email, password, passwordConfirm);
  });

if (userDataForm)
  userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);
    updateSettings(form, 'data');
  });

if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });

if (bookBtn)
  bookBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const tourId = e.target.dataset.tourId;
    bookTour(tourId);
  });

const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showAlert('success', alertMessage, 20);

// If alert is about booking success, redirect to my-tours after 2s to clean URL
if (window.location.search.includes('alert=booking')) {
  setTimeout(() => {
    // location.assign('/my-tours'); // Clean Redirect
    window.history.replaceState(null, '', '/my-tours'); // Or verify user wants actual redirect? "redirect to mybookings section"
    // To match "redirect" behavior exactly like a page load:
    location.assign('/my-tours');
  }, 2000); // 2 seconds
}

// ADMIN DASHBOARD DELEGATION
const userView = document.querySelector('.user-view');

if (userView) {
  userView.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-tour')) {
      const tourId = e.target.dataset.tourId;
      deleteResource('tours', tourId);
    }
    if (e.target.classList.contains('delete-user')) {
      const userId = e.target.dataset.userId;
      deleteResource('users', userId);
    }
    if (e.target.classList.contains('delete-review')) {
      const reviewId = e.target.dataset.reviewId;
      deleteResource('reviews', reviewId);
    }
    if (e.target.classList.contains('delete-booking')) {
      const bookingId = e.target.dataset.bookingId;
      deleteResource('bookings', bookingId);
    }
  });
}
