// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  userSettings: {
    profilePicture: 'ecobian/images/profile-pictures/p1',
    resume: 'ecobian/resume/01_Emmanuel_Cobian_-_Software_Engineer.pdf'
  },
  firebase: {
    projectId: 'ecobian-5b0be',
    appId: '1:1026882673430:web:c9183374844b6a8b178e37',
    storageBucket: 'ecobian-5b0be.appspot.com',
    apiKey: 'AIzaSyBnnv-wAeUXqIzbjIg884bNzpgKYOGBEjQ',
    authDomain: 'ecobian-5b0be.firebaseapp.com',
    messagingSenderId: '1026882673430',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
