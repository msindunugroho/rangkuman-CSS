/**
 * navEventStyle
 */
const navEventStyle = () => {
    const navBar = document.getElementById('navBar')
    const navMenu = document.getElementById('navMenu')
    let menuToggle = false;

    navMenu.addEventListener('click' , () => {
        menuToggle = !menuToggle;
        navBar.style.right= 
        menuToggle? '20px':'-360px'
        navBar.style.opacity= 
        menuToggle? '1':'0'
    })
}

/**
 * docClass
 */
const docClass = () => {
    const linkClass = document.querySelectorAll("a[class='doc']");
    for(let index = 0; index < linkClass.length; index++) {
        linkClass[index].innerText="Documentation Here!";
        linkClass[index].setAttribute("target", "_blank")
    }
}

/**
 * pracClass
 */
const pracClass = () => {
    const linkClass = document.querySelectorAll("a[class='prac']");
    for(let index = 0; index < linkClass.length; index++) {
        linkClass[index].innerText="Code Usage Here!";
        linkClass[index].setAttribute("target", "_blank")
    }
}


/**
 * dropdown_list
*/

const createExpandArrow = () => {
  const expandArrow = document.createElement('div')
  expandArrow.classList.add('expand_arrow');
  const img = document.createElement('img');
  img.setAttribute('src', './../src/img/expand_circle_down.svg');
  expandArrow.append(img);
  return expandArrow;
}

const dropdownList = () => {
    const expandList = document.querySelectorAll('.expand_list');

    for (let i = 0; i < expandList.length; i++) {
       // create li with class value "expand_list-item"
      const expandListItems = expandList[i].querySelectorAll('li');
      if(expandListItems) {
        for(let i = 0; i < expandListItems.length; i++) {
          expandListItems[i].classList.add('expand_list-item');
        }
      }
      
      const firstExpandListItem = expandList[i].querySelector('.expand_list-item')
      const isExpandArrowAxis = expandList[i].querySelector('.expand_arrow');

      const newExpandArrow = createExpandArrow();
      if(!isExpandArrowAxis) {expandList[i].insertBefore(newExpandArrow, firstExpandListItem)}

      expandList[i].addEventListener('click', () => {
        const listItem = expandList[i].querySelectorAll('.expand_list-item');
        const arrowImg = expandList[i].querySelector('.expand_arrow > img');
        const isRotated = arrowImg.style.transform === 'rotate(180deg)';

        arrowImg.style.setProperty('transform', isRotated ? 'rotate(0deg)' : 'rotate(180deg)');
        listItem.forEach(item => {
          item.style.display = (item.style.display === 'none' || item.style.display === '') ? 'block' : 'none';
          item.style.paddingBottom = (item.style.paddingBottom === '0px' || item.style.paddingBottom === '') ? '30px' : '0px';
        });
      });
    }
  };

  dropdownList();
  

navEventStyle();
docClass();
pracClass();