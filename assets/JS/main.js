const tipemode = document.querySelector('.mode-switch')
const html = document.querySelector('html')

const toggleElement = (element, nameClass) => {
	element.classList.toggle(nameClass)
}

// mode dack 
tipemode.addEventListener('click', () => {
	toggleElement(html, 'dark')
})

// seccion de meet claces o del grupo
const card1 = document.querySelector('.meet')
const menu1 = document.querySelector('.menu1')
const card2 = document.querySelector('.grupo')
const menu2 = document.querySelector('.menu2')

card1.addEventListener('click', function () {
  card1.classList.add('active')
  card2.classList.remove('active')
  menu1.classList.add('active')
  menu2.classList.remove('active')
})

card2.addEventListener('click', function () {
  card1.classList.remove('active')
  card2.classList.add('active')
  menu1.classList.remove('active')
  menu2.classList.add('active')
})


// grid o list de meet
var list1 = document.querySelector('.list1')
var grid1 = document.querySelector('.grid1')
var card_info1 = document.querySelector('.card1')
  
  list1.addEventListener('click', function () {
    grid1.classList.remove('active')
    list1.classList.add('active')
    card_info1.classList.remove('GRID')
    card_info1.classList.add('LIST')
  });
  
  grid1.addEventListener('click', function () {
    grid1.classList.add('active')
    list1.classList.remove('active')
    card_info1.classList.remove('LIST')
    card_info1.classList.add('GRID')
  });

  // grid o list de grupo
  var list2 = document.querySelector('.list2')
  var grid2 = document.querySelector('.grid2')
  var card_info2 = document.querySelector('.card2')
  
  list2.addEventListener('click', function () {
    grid2.classList.remove('active')
    list2.classList.add('active')
    card_info2.classList.remove('GRID')
    card_info2.classList.add('LIST')
  });
  
  grid2.addEventListener('click', function () {
    grid2.classList.add('active')
    list2.classList.remove('active')
    card_info2.classList.remove('LIST')
    card_info2.classList.add('GRID')
  });