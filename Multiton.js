class Multiton 
{
    static #id = -1;
    static #countOfInstances = 10;
    static #objects = [];
    static #isInternalConstructing = false;

    constructor() {
        if (!Multiton.#isInternalConstructing) {
            throw new TypeError("Multiton is not constructable");
        }
    }

    static createObject() 
    {
        Multiton.#id++;

        if (Multiton.#id < Multiton.#countOfInstances) {
            Multiton.#isInternalConstructing = true;
            Multiton.#objects.push(new Multiton());
            Multiton.#isInternalConstructing = false;
            return Multiton.#objects[Multiton.#id];
        } 

        const times = Math.floor(Multiton.#id / Multiton.#countOfInstances);
        const index = Multiton.#id - (Multiton.#countOfInstances * times);
        return Multiton.#objects[index];
    }
}