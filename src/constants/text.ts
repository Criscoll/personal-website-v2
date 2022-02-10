import pathfinderCover from "../assets/images/pathfinder-cover.png";
import sortingVisualiserCover from "../assets/images/sorting-visualiser-cover.png";
import photoproCover from "../assets/images/photopro-cover.png";


export const aboutIntro: string = `Hey! my name is <span class="text-green">Cristian</span>, welcome to my website. I built this website mainly for fun and experience but also as a way to host my projects to help keep them all in one place. Still a work in progress :d`;

export const aboutPenguin: string = `
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp.::::.<br/>
&nbsp&nbsp__...::O:::::<br/>
,''''::::::'  ::<br/>
&nbsp&nbsp&nbsp&nbsp\`':'':..:::<br/>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp::::::::<br/>
&nbsp&nbsp&nbsp&nbsp:   :::::::::<br/>
&nbsp&nbsp&nbsp:  :::::::::::<br/>
&nbsp&nbsp:  ::::::::::::<br/>
&nbsp&nbsp: :::: :::::::<br/>
&nbsp&nbsp: ::: .:::::::<br/>
&nbsp&nbsp&nbsp: ::: ::::::<br/>
&nbsp&nbsp&nbsp&nbsp:  :: ::::<br/>
,;;::'.:::::::<br/>



`


export const aboutSkills: string = `What I have experience with: <br /> 
<ul>
    <li>C++</li> 
    <li>Python</li> 
    <li>Javascript</li> 
    <li>Typescript</li> 
    <li>React</li>
    <li>PostgreSQL</li>  
    <li>AWS</li> 
<ul>
`


export const pathfinderProject = {
    imgBtnProps: {
        imgUrl: pathfinderCover,
        altText: "Visual Pathfinder Cover",
        projectTitle: "Visual Pathfinder",
        href: "https://criscoll-visual-pathfinder.netlify.app/"
    },
    projectDescription: "A graphical tool for anyone trying to wrap their heads around a variety of pathfinding algorithms or who wishes to compare how two algorithms work given the same graph layout. Each algorithm is run on a 2d grid where obstacles can be placed and the positions of the start and end positions can be modified. Once started the algorithm will begin to search the grid for the goal node according to its own rules and methods which can be seen in real time.",
    projectTechStack: `
    <ul>
        <li>JavaScript</li> 
        <li>React</li> 
    <ul>`
}

export const sortingAlgoVisualiserProject = {
    imgBtnProps: {
        imgUrl: sortingVisualiserCover,
        altText: "Sorting Visualiser Cover",
        projectTitle: "Sorting Algo Visualiser",
        href: "https://github.com/Criscoll/sorting-algo-visualiser"
    },
    projectDescription: "A program to visualise the behaviour of various sorting algorithms using bars with randomised heights. The algorithms currently included are: Merge Sort, Quick Sort, Heap Sort, Insertion Sort, Bubble Sort, Selection Sort. May decide to implement more obscure sorting algorithms in future :)",
    projectTechStack: `
<ul>
    <li>C++</li> 
    <li>SFML Graphics Library</li> 
<ul>`
}

export const photoproProject = {
    imgBtnProps: {
        imgUrl: photoproCover,
        altText: "Photopro Cover",
        projectTitle: "Photopro",
        href: "https://github.com/Criscoll/PhotoPro"
    },
    projectDescription: "A stock image hosting website that learns user behaviour for a more personalised experience. Users can upload a photo of their choosing which will appear on the web app with a watermarked added across the image. Other users may view this stock photo, like, comment and even follow other users if they enjoy their type of content.",
    projectTechStack: `
    <ul>
        <li>Python</li> 
        <li>Flask</li> 
        <li>PostgreSQL</li> 
        <li>React</li> 
        <li>Google Cloud (Now Heroku)</li> 
        <li>Google Vision AI</li> 
    <ul>`
}