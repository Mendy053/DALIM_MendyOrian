export function SaveToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
    console.log(value);
}

export function GetFromLocalStorage(key: string): string {
    let value = localStorage.getItem(key);

    if (value === null) {
        SaveToLocalStorage(key, "[]");
        return "[]";
    }
    
    return value;
}