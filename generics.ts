/* 
Function generic
*/

// Without generic
function identityNumber(arg: number): number {
    return arg;
}

// Without generic
function identityAny(arg: any): any {
    return arg;
}

// With generic function
function identity<T>(arg: T): T {
    return arg;
}

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return [...arr1, ...arr2];
}


/* 
Function generic
*/
class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
}

// Stack<number>
// Stack<string>


interface ApiResponse<T> {
    data: T;
    status: number;
}