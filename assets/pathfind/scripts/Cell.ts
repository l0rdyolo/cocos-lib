// Cell.ts
import { _decorator, Component, Vec3 } from 'cc';
import { ICell } from './ICell';

const { ccclass } = _decorator;

@ccclass('Cell')
export class Cell extends Component implements ICell {
    public isWalkable: boolean = true;
    public position: Vec3;
    public gridX: number;
    public gridY: number;

    private todo : boolean;

    constructor(x: number, y: number, position: Vec3, isWalkable: boolean = true) {
        super();
        this.gridX = x;
        this.gridY = y;
        this.position = position;
        this.isWalkable = isWalkable;
    }
}
