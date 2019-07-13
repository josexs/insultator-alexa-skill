export class Utils {

    public randomNumber = (min: number, max: number): number => {
        return Number((Math.random() * (max - min) + min).toFixed(0));
    }

}
