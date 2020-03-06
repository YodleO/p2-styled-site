const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const end = document.getElementById("end")

const jokeURI = 'https://api.icndb.com/jokes/random?limitTo=[explicit]'


function averager(){
    let f = parseInt(first.value)
    let s = parseInt(second.value)
    let t = parseInt(third.value)
    //document.body.style.backgroundColor = `rgb(${r},${},${b})`
    //test.innerHTML = `Red: ${r}, Green: ${g}, Blue: ${b}`
    let average = (f + s + t) / 3
    end.innerHTML = `Average: ${average}`
}

/*Note: The following code has been taken from https://github.com/profcase/js-gui-storage and https://github.com/profcase/js-gui-ajax
This is my citation for the code taken.
The values have been altered to work with my site.
I would not have been able to do this on my own.
I am the same thing one programmer I have worked with has called himself: a shameful coder*/

window.addEventListener('load', (event) => {
    console.log('  Starting initialization ')
    if (localStorage.getItem('number1')) {
      document.querySelector('#first').value = parseInt(localStorage.number1)
      console.log(`  Stored num1 = ${localStorage.number1}`)
    }
    if (localStorage.getItem('number2')) {
      document.querySelector('#second').value = parseInt(localStorage.number2)
      console.log(`  Stored num2 = ${localStorage.number2}`)
    }
    if (localStorage.getItem('number3')) {
        document.querySelector('#third').value = parseInt(localStorage.number3)
        console.log(`  Stored num3 = ${localStorage.number3}`)
    }
    console.log('  Finished initialization')
})

document.querySelector('#funcStart').addEventListener('click', () => {
    console.log('  Starting clicker click handler')
    const i = parseInt(document.querySelector('#first').value)
    console.log('i=' + i)
    const j = parseInt(document.querySelector('#second').value)
    console.log('j=' + j)
    const k = parseInt(document.querySelector('#third').value)
    console.log('k=' + k)

    localStorage.setItem('number1', i)
    localStorage.setItem('number2', j)
    localStorage.setItem('number3', k)
    console.log('  Finished clicker click handler')
  })

  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getExplicitJoke') { updateWithJoke(event) }
  })

  // fetch information
const getJoke = async () => {
    try {
      const response = await fetch(jokeURI)
      const obj = await response.json()
      console.log(`FETCHED. Response JSON ${obj}`)
      const joke = obj.value.joke || 'No joke for you.'
      return joke
    } catch (error) { console.error(error) }
  }
  
  // interact with DOM
  const updateWithJoke = async (event) => {
    try {
      document.querySelector('#joke').innerHTML = ''
      const answer = await getJoke()
      document.querySelector('#joke').innerHTML = answer
    } catch (error) { console.error(error) }
  }