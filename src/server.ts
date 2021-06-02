import './util/module-alias';
import {Server} from '@overnightjs/core';
import bodyParser from 'body-parser';
import {PassageControler} from '@src/controllers/passage';
import { Application } from 'express';

export class SetupServer extends Server {
    constructor(private port = 3000){
        super();
    }

    public init():void {
        this.setupExpress();
        this.setupControllers();
    }
    private setupExpress():void {
        this.app.use(bodyParser.json());
    }
    private setupControllers():void {
        const passageControler  = new PassageControler('');
        this.addControllers([passageControler]);
    }
    public getApp():Application {
        return this.app;
    }
    public start():void {
        this.app.listen(this.port, () => {
            console.info('Server listening of port :', this.port);
        });
    }
}