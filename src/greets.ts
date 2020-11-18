const greet = (firstname: string, lastname: string, age: number, isMarried: boolean) => {
    const name = firstname +' '+ lastname
    console.log(`
    Name: ${name}
    Age: ${age}
    Married: ${isMarried}`)
}

greet('Bagaskara', "Ramadhan", 23, false)