// decorator factory
export function Nationality(config:any) {
    return function(constructor:Function) {
        Object.defineProperty(constructor.prototype, "country", {
            "value": config.nation
        })
    }
}