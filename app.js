
const buttonPressed = () => {

    // const student1 = {name : "Jacob", age:35, friend: {name: "vector"}}
    // console.log(student1)

    // student1.email = "jacob@gmail.com"
    // student1.id = 1234
    // student1.friend.age = 22
    // console.log(student1)

    // delete student1.id
    // console.log(student1)

    const names = ["jacob", "victor", "simon"]
    console.log(names)
    console.log(names[1])

    names[0] = "xiaojia"
    console.log(names)

    names.push("unknown")
    console.log(names)

    for (let name of names) {

        console.log(name)
        if (name === "simon") {
            break
        }
    }

    const hasSimon = names.includes("simon")
    console.log(hasSimon)


    names.splice(1, 2)
    console.log(names)
}

document.querySelector("button").addEventListener("click", buttonPressed)



