import { Vec3 } from "cc";

export interface ICell {
    isWalkable: boolean;
    position: Vec3;
    gridX: number;
    gridY: number;
}
