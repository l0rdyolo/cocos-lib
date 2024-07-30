import { _decorator, Component, Node } from 'cc';
import { ITweenable } from './ITweenable';
const { ccclass, property } = _decorator;

@ccclass('Capsule')
export class Capsule extends Component implements ITweenable {
    start() {

    }

    update(deltaTime: number) {
        
    }

    run(args?: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            
        });
    }
}

