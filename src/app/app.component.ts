import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    public appPages = [
        {
            title: 'Catálogo',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Pedidos',
            url: '/list',
            icon: 'list'
        },
        {
            title: 'Login',
            url: '/list',
            icon: 'contact'
        }
    ];

    constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
        this.initializeApp();
    }

    private initializeApp(): void {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

}