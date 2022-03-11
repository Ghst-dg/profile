////////////////////////////////////////////////////////////////////////////////////////////////////////////////education modal content
const eduBack = ['https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/7944064/pexels-photo-7944064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];

const eduLogo = ['https://upload.wikimedia.org/wikipedia/en/thumb/9/95/CBSE_new_logo.svg/150px-CBSE_new_logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/95/CBSE_new_logo.svg/150px-CBSE_new_logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/KIIT_logo.svg/220px-KIIT_logo.svg.png'];

const eduScore = ['8.8', '69.4%', '8.1'];
const edu = ['10th Board', '12th Board', 'Graduation (ongoing)'];

for(let i = 0; i < 3; i++)
{
    const eduCard = document.createElement('div');
    const eduBackground = document.createElement('div');
    const eduContentBox = document.createElement('div');
    const eduDpContainer = document.createElement('div');
    const eduDp = document.createElement('img');
    const eduMarks = document.createElement('div');
    const eduMarksText = document.createElement('p');
    const educ = document.createElement('p');

    eduCard.setAttribute("class", "eduCard");
    eduBackground.setAttribute("class", "eduCardImage");
    eduBackground.style.backgroundImage = `url(${eduBack[i]})`;

    eduContentBox.setAttribute("class", "eduCardContent");
    eduMarks.setAttribute("class", "eduScoreCircle");
    eduMarksText.innerText  = `${eduScore[i]}`;
    educ.innerText = `${edu[i]}`;

    eduDpContainer.setAttribute("class", "frame");
    eduDp.setAttribute("src", `${eduLogo[i]}`);
    eduDp.setAttribute('width', '60px');

    eduMarks.appendChild(eduMarksText);
    eduContentBox.appendChild(eduMarks);
    eduContentBox.appendChild(educ);
    eduDpContainer.appendChild(eduDp);
    eduBackground.appendChild(eduDpContainer);
    eduCard.appendChild(eduBackground);
    eduCard.appendChild(eduContentBox);
    modalContent[1].appendChild(eduCard);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////education modal content


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////skill modal content
const skillDisplay = document.createElement('div');
skillDisplay.setAttribute('class', 'skillCont');
modalContent[3].appendChild(skillDisplay);

const skillList = ["C++", "HTML", "CSS", "Vanilla JS", "Inkscape", "Figma", "Unreal Engine", "Git", "jQuery", "SASS", "React JS", "Redux", "SQL", "Python", "JAVA", "Shell", "UNIX", "Blender", "Node-JS", "Express JS", "MongoDB", "C"];
const skillCounter = [87, 95, 90, 75, 85, 60, 30, 60, 10, 10, 5, 5, 5, 30, 25, 5, 45, 55, 0, 0, 0, 75 ];
const skillID = ['cpp', 'html', 'css', 'js', 'inkscape', 'figma', 'unreal', 'git', 'jQ', 'sass', 'react', 'redux', 'sql', 'python', 'java', 'shell', 'unix', 'blender', 'node', 'express', 'mongo', 'c'];

for(let i = 0; i < skillList.length; i++)
{
    const skill = document.createElement('div');
    const details = document.createElement('div');
    const name = document.createElement('p');
    const counter = document.createElement('p');
    const bar = document.createElement('div');
    const progress = document.createElement('div');

    skill.setAttribute("class", "skillList");

    name.innerText = `${skillList[i]}`;
    counter.innerText = `${skillCounter[i]}%`;
    details.setAttribute("class", "skillDetails");

    bar.setAttribute("class", "skillBar");
    progress.setAttribute("id", `${skillID[i]}`);

    details.appendChild(name);
    details.appendChild(counter);

    bar.appendChild(progress);

    skill.appendChild(details);
    skill.appendChild(bar);

    skillDisplay.appendChild(skill);

    if(skillCounter[i] <= 25)
    {
        progress.style.backgroundColor = "#FF3131"
        progress.style.color = "#FF3131"
    }

    else if(skillCounter[i] <= 50)
    {
        progress.style.backgroundColor = "#FFBF00"
        progress.style.color = "#FFBF00"
    }

    else if(skillCounter[i] <= 75)
    {
        progress.style.backgroundColor = "#39FF14"
        progress.style.color = "#39FF14"
    }

    else
    {
        progress.style.backgroundColor = "#1E90FF"
        progress.style.color = "#1E90FF"
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////skill modal content


////////////////////////////////////////////////////////////////////////////////////////////////////////////////project modal content
const projBack = ['https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];
const projLogo = ['cpproj', 'resume'];
const projTitle = ['PV Template Library', 'Resume Builder'];
const projLink = ['https://github.com/Ghst-dg/PV_TemplateLibrary', 'https://github.com/Ghst-dg/resumeBuilder'];

for(let i = 0; i < 2; i++)
{
    const projCard = document.createElement('a');
    const projBackground = document.createElement('div');
    const projContentBox = document.createElement('div');
    const projDpContainer = document.createElement('div');
    const projDp = document.createElement('img');
    const projText = document.createElement('p');

    projCard.setAttribute("class", "proCard");
    projCard.setAttribute("href", `${projLink[i]}`);
    projBackground.setAttribute("class", "proCardImage");
    projBackground.style.backgroundImage = `url(${projBack[i]})`;
    projContentBox.setAttribute("class", "proCardContent");
    projText.innerText = `${projTitle[i]}`;

    projDpContainer.setAttribute("class", "frame");
    projDp.setAttribute("src", `${projLogo[i]}.png`);
    projDp.setAttribute('width', '60px');

    projContentBox.appendChild(projText);
    projDpContainer.appendChild(projDp);
    projBackground.appendChild(projDpContainer);
    projCard.appendChild(projBackground);
    projCard.appendChild(projContentBox);
    modalContent[4].appendChild(projCard);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////project modal content


////////////////////////////////////////////////////////////////////////////////////////////////////////////////interest modal content
const intBack = ['https://images.pexels.com/photos/3361471/pexels-photo-3361471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/4009398/pexels-photo-4009398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];

const inter = ['Football', 'Video Games', 'Movies'];

for(let i = 0; i < 3; i++)
{
    const intCard = document.createElement('div');
    const intBackground = document.createElement('div');
    const intContentBox = document.createElement('div');

    intCard.setAttribute("class", "intCard");
    intBackground.setAttribute("class", "intCardImage");
    intBackground.style.backgroundImage = `url(${intBack[i]})`;
    intContentBox.setAttribute("class", "intCardContent");

    intContentBox.innerText = `${inter[i]}`;

    intCard.appendChild(intBackground);
    intCard.appendChild(intContentBox);
    modalContent[6].appendChild(intCard);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////interest modal content


////////////////////////////////////////////////////////////////////////////////////////////////////////////////profiles modal content
const profList = ['CodePen', 'FreeCodeCamp','GitHub', 'HackerRank', 'LeetCode', 'StackOverFlow'];
const profImage = ['codepen', 'freecodecamp','github', 'hackerrank', 'leetcode', 'stackoverflow'];
const profLinks = ['https://codepen.io/ghost-_-dog',
                    'https://www.freecodecamp.org/ghst_dg',
                    'https://github.com/Ghst-dg',
                    'https://www.hackerrank.com/Gh0st_D0g',
                    'https://leetcode.com/ghstDG/',
                    'https://stackoverflow.com/users/13443041/gh0st-d0g']

for(let i = 0; i < 6; i++)
{
    const profCard = document.createElement('a');
    const profPic = document.createElement('img');
    const profText = document.createElement('p');

    profCard.setAttribute('class', 'profBox');
    profPic.setAttribute('src', `${profImage[i]}.png`);
    profPic.setAttribute('width', '100px');
    profCard.setAttribute('href', `${profLinks[i]}`);

    profText.innerText = `${profList[i]}`;
    profCard.appendChild(profPic);
    profCard.appendChild(profText);
    modalContent[7].appendChild(profCard);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////profiles modal content