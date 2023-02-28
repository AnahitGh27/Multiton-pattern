class Multiton 
{
    static id = 0;
    static times = 3;
    static object = [];

    static createobject() 
    {
        Multiton.id++;

        if (Multiton.id <= Multiton.times) {
            Multiton.object.push(new Multiton());
            return Multiton.object[Multiton.id - 1];
        } 

        const timesCount = Math.floor((Multiton.id / Multiton.times));
        let index = Multiton.id - (Multiton.times * timesCount);
        if (index === 0) { index = Multiton.object.length - 1; }
        else { index -= 1; }
        return Multiton.object[index];
    }
}