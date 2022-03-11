//------------------------------------------------------------------------------------------------------------------------------------//

const mainNeonColor = ['00FFFF', '39FF14', 'F3E600', 'FF5F1F', 'D2042D', 'B026FF', 'FF10F0', 'FFFFFF']; //blue green yellow orange red violet pink white
const lightColor = ['1E90FF', '61B33B', 'FFBF00', 'FF5F1F', 'FF3131', '4B0082', '9400D3', '000000']; //blue green yellow orange red violet pink black
const mainCardList = ['About Me', 'Education', 'Experience', 'Skills', 'Projects', 'Achievements', 'Interests', 'Profiles'];
const imageList = ['https://images.pexels.com/photos/4066295/pexels-photo-4066295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', //about
                   'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', //education
                   'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //experience
                   'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //skills
                   'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //projects
                   'https://images.pexels.com/photos/6250995/pexels-photo-6250995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //achievements
                   'https://images.pexels.com/photos/1152854/pexels-photo-1152854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //interests
                   'https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']; //Profiles

const jsContent = document.querySelector('#content');

const modalBox = document.querySelectorAll('.modal'); //selected all modal
const modalContent = document.querySelectorAll('.modalContent');

const darkModeButton = document.querySelector('.darkModeBttn'); //dark mode button selected
const darkModeImage = document.querySelector('img');

const styleSheet = document.querySelector('link');

const bodyTag = document.getElementsByTagName('body')[0];

let count = 0;

//-----------------------------------------------------------------------------------------------------------------------------------//


///////////////////////////////////////////////////////////////////////////////////////////////////Main Card append and Modal Connection
for(let i = 0; i < 8; i++)
{
    let jsCard = document.createElement('div'); //creating card div
    jsCard.setAttribute("class", "card");
    jsCard.style.color = `#${mainNeonColor[i]}`;

    let jsCardImage = document.createElement('div'); //creating image on card
    jsCardImage.setAttribute("class", "cardImage");
    jsCardImage.style.backgroundImage = `url(${imageList[i]})`;

    let jsCardContent = document.createElement('div'); //creating text/content box on card
    jsCardContent.setAttribute("class", "cardContent");

    let jsCardContentText = document.createElement('h2'); //creating text on card
    jsCardContentText.innerHTML = `${mainCardList[i]}`;

    modalContent[i].style.color = `#${mainNeonColor[i]}`;

    jsCardContent.appendChild(jsCardContentText);
    jsCard.appendChild(jsCardImage);
    jsCard.appendChild(jsCardContent);
    jsContent.appendChild(jsCard);

    jsCard.addEventListener('click', () =>{ //adding onclick option on each card making modal visible and scrolling disabled
        modalBox[i].style.display = 'flex';
        bodyTag.style.overflow = 'hidden';
    })

    modalBox[i].addEventListener('click', e =>{
        if(e.target == e.currentTarget)
        {
            modalBox[i].style.display = 'none';
            bodyTag.style.overflow = 'visible';
        }
    })

    if(i == 5)
    {
        jsCard.style.display = "none";
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////Main Card append and Modal Connection


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Dark Mode Light Mode
const cardList = document.querySelectorAll('.card');
darkModeButton.addEventListener('click', ()=>{
    ++count; //incrementing counter even means dark, odd means light vice-versa
    if(count % 2 != 0) //light mode enabled when counter is odd
    {
        styleSheet.setAttribute('href', 'lightStyle.css');
        for(let i = 0; i < 8; i++)
        {
            cardList[i].style.color = `#${lightColor[i]}`;
            cardList[i].style.backgroundColor = `#${lightColor[i]}`;
            modalContent[i].style.color = `#${lightColor[i]}`;
        }
        darkModeImage.setAttribute("src", "dark.png");
    }

    else //dark mode enabled as count is even
    {
        styleSheet.setAttribute('href', 'darkStyle.css');
        for(let i = 0; i < 8; i++)
        {
            cardList[i].style.color = `#${mainNeonColor[i]}`;
            cardList[i].style.backgroundColor = "inherit";
            modalContent[i].style.color = `#${mainNeonColor[i]}`;
        }
        darkModeImage.setAttribute("src", "light.png");
    }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////Dark Mode Light Mode