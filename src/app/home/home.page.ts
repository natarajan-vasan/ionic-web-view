import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
// import AndroidPermissions  from '@ionic-native/android-permissions/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private iab: InAppBrowser,
    private transfer: FileTransfer,
    private file: File,
    private androidPermissions: AndroidPermissions,
    private fileOpener: FileOpener
  ) {
    this.openInAppBrowser();
  }
  openInAppBrowser() {
    // this.androidPermissions.requestPermissions([
    //   this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
    //   this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
    // ]);
    // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
    //   result => {
    //     if (result.hasPermission) {
    //       alert("1")
    //       // Permission granted
    //     } else {
    //       alert("2")
    //       // Permission denied, request it
    //     }
    //   },
    //   err => {
    //     alert("3")
    //     this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
    //       result => {
    //         if (result.hasPermission) {
    //           // Permission granted
    //           alert('Write external storage permission granted')
    //           console.log('Write external storage permission granted');
    //         } else {
    //           alert('Write external storage permission denied')
    //           // Permission denied
    //           console.log('Write external storage permission denied');
    //         }
    //       },
    //       err => {
    //         alert('Failed to request write external storage permission')
    //         // Permission request failed
    //         console.error('Failed to request write external storage permission', err);
    //       }
    //     );
    //   }
    // );
    // const browser = this.iab.create(
    //   'https://financesone.worldbank.org/',
    //   '_self',
    //   {
    //     location: 'no',
    //     hidden: 'no',
    //     hardwareback: 'yes',
    //     toolbar: 'no',
    //     toolbarposition: 'top',
    //     fullscreen: 'no'
    //   }
    // );
    const xxx = this.iab.create("https://financesone.worldbank.org/", "_self")

    xxx.on('loadstop').subscribe(() => {
      // alert("12")
      xxx.executeScript({ code: '' })
      this.file.checkFile(this.file.externalRootDirectory, 'Download/123.pdf').then(() => {
        // alert("33333")
        // this.iab.create('https://dataappsfilesuat.worldbank.org/f-one/DS00520/RS01267/IBRD_Statement_of_Loans_Latest_Available_Snapshot.csv', "_self")
        this.fileOpener.open(this.file.externalRootDirectory + 'Download/123.pdf', 'application/pdf')
          // .then(() => alert('File is opened'))
          // .catch(e => alert('Error opening file' + JSON.stringify(e)));
      }).catch(() => {
        // alert("232")

      });
      // this.fileOpener.open('Download/123.pdf', 'application/pdf')
      //   .then(() => alert('File is opened'))
      //   .catch(e => alert('Error opening file' + JSON.stringify(e)));
      // xxx.executeScript({  code: 'var checkCookie=function(){var o=document.cookie;return alert("2111323"),function(){var e=document.cookie;e!=o&&(o=e,alert("2323"))}}();window.setInterval(checkCookie,100);' })
      // this.iab.create(this.file.externalRootDirectory + 'Download/123.pdf', '_system', 'location=yes');
    });
    // this.fileOpener.open(this.file.externalRootDirectory + 'Download/123.pdf', 'application/pdf')
    //   .then(() => alert('File is opened'))
    //   .catch(e => alert('Error opening file' + JSON.stringify(e)));

    // const url = 'https://file-examples.com/storage/fef44df12666d835ba71c24/2017/10/file-sample_150kB.pdf';
    // const targetPath = this.file.externalRootDirectory + 'Download/';
    // const fileName = 'file-sample_150kB.pdf';
    // const fullPath = targetPath + fileName;
    // const fileTransfer = this.transfer.create();
    // fileTransfer.download(url, fullPath).then((entry) => {
    //   alert('targetPath: ' + targetPath);
    //   alert('Download complete: ' + entry.toURL());
    //   this.file.readAsArrayBuffer(targetPath, fileName).then((buffer) => {
    //     // Convert ArrayBuffer to Blob
    //     const blob = new Blob([buffer], { type: 'application/pdf' });
    //     alert('Blob created' + blob);
    //     this.file.writeFile(targetPath, fileName, blob, { replace: true, append: false }).then(createdFile => {
    //       alert('File written successfully.');
    //       alert(createdFile)
    //     }).catch(err => {
    //       alert(JSON.stringify(err));
    //     });
    //     // Now you have the Blob, you can use it as needed
    //     // e.g., upload it, preview it, etc.
    //   }).catch((error) => {
    //     alert('Error reading file as Blob');
    //   });
    // }, (error) => {
    //   alert('Download failed:' + JSON.stringify(error));
    // });





    // this.file.writeFile(this.file.externalRootDirectory, "Download/example.txt", 'Hello, world!', { replace: true, append: false }).then(createdFile => {
    //   alert('File written successfully.');
    //   alert(createdFile)
    // }).catch(err => {
    //   alert(JSON.stringify(err));
    // });
    // browser.on("loadstop")
    // browser.executeScript("")
    // browser.on('loadstop').subscribe(event => {
    //   browser.insertCSS({ code: "body{color: red;" });
    // });
    // browser.close();
  }
}
// import { Component, OnInit } from '@angular/core';
// import InAppBrowser from '@awesome-cordova-library/inappbrowser';
// import { File } from '@awesome-cordova-plugins/file';
// import { FileTransfer } from '@awesome-cordova-plugins/file-transfer';
// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage implements OnInit {
//   constructor() { }
//   ngOnInit(): void {
//     this.lodadHomePage()
//   }
//   lodadHomePage() {
//     const google = InAppBrowser.open('https://financesone.worldbank.org/', "_system", { location: "yes", toolbar: "yes", hardwareback: "yes" })
//     google?.addEventListener('loadstart', () => {
//       this.downloadFile();
//       alert("1234")
//     });
//     // const browser = this.iab.create('https://ionicframework.com/', "_blank", { location: "no" });
//     // browser.executeScript(...);
//     // browser.insertCSS(...);
//     // browser.on('loadstop').subscribe(event => {
//     //   browser.insertCSS({ code: "body{color: red;" });
//     // });
//     // browser.close();
//   }
//   async downloadFile() {
//     // const fileTransfer: FileTransferObject = this.fileTransfer.create();
//     const url = 'https://file-examples.com/storage/fef44df12666d835ba71c24/2017/10/file-sample_150kB.pdf';
//     const targetPath = File.externalDataDirectory + 'your-file.pdf';
//     // fileTransfer.download(url, targetPath).then((entry) => {
//     //   alert('Download complete: ' + entry.toURL());
//     // }, (error) => {
//     //   console.error('Download failed:', error);
//     // });
//     alert("3333" + File.dataDirectory)
//     alert("222" + File.documentsDirectory)
//     alert("1111" + File.externalDataDirectory)
//     try {
//       const x = FileTransfer.create();
//       const uuuu = await x.download(url, targetPath)
//       alert("ffffffffffffffffff")
//     } catch (error) {
//       alert("222222222222222222")
//     }
//     // x.download(url, targetPath).then((entry) => { alert("Success") }, () => {
//     //   alert("Error")
//     // });
//     // alert('Data Directory:' + this.file.dataDirectory);
//     // alert('Documents Directory:' + this.file.documentsDirectory);
//     // alert('External Data Directory:' + this.file.externalDataDirectory);
//   }
// }
