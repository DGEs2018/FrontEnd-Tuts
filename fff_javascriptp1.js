let dog = {
    sound: 'woof',
    talk: function(){
        console.log(this.sound)
    }
}

dog.talk() // expected output 'woof'

let talkFunction = dog.talk
talkFunction() // returns undefined, a bit counter-intuitive, although it's expected to be to return the same output as for dog.talk !!!


let boundFunction = talkFunction.bind(dog)

//What does the 'this' in Javascript do ?

