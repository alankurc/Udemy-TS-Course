const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiple = function (a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
    // Con void podemos retornar null, undefined o nada mismo
}

/*
const throwError = (message: string): never => {
    throw new Error(message);
    // Con never nunca retornamos nada
};
*/

const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);