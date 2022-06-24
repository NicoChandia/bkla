// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig : { //saco "const" que viene de la configuracion que me da firestore
    apiKey: "AIzaSyDqJ5YZT77TTkKv3nvLMo2Eod9SLRykxDs",
    authDomain: "proyprimeng.firebaseapp.com",
    projectId: "proyprimeng",
    storageBucket: "proyprimeng.appspot.com",
    messagingSenderId: "398767594713",
    appId: "1:398767594713:web:71eeceb24e49720ac372c8",
    measurementId: "G-QDPDWWBH1H"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
