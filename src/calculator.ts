class Calculator {
    add(a:number,b:number):number {
        return a+b;
    }

    sub(a:number,b:number):number {
        return a-b;
    }

    mul(a:number,b:number):number {
        return a*b;
    }

    div(a:number,b:number):number {
       if(b == 0)
       {
        throw new Error(`can not divde by ${b}`);
       }
        return a/b;
    }
}
export default Calculator;