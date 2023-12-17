export interface Proyecto {
    id: number;
    name: string;
    src: string;
    cod: { [key: string]: string[] };
    tecno: string;
}


export const proyectos: Proyecto[] = [
    {
        id: 1,
        name: "Chatea",
        src: "../../../public/images/chatea3.png",
        cod: {
            front: ["https://github.com/lefasom/front-chatea", "faCode"],
            back: ["https://github.com/lefasom/back-chatea", "faCode"],
            demo: ["https://front-chatea.vercel.app/", "faLink"],
        },
        tecno: "Vue - Vuex - Node - Firebase - MongoDB",
    },
{
    id: 2,
    name: "La Consulta",
    src: "../../../public/images/verduleria.png",
    cod: {
        "front": ['https://github.com/lefasom/verduleria_la_consulta_next.js', 'faCode'],
        'demo': ["https://verdulerialaconsultanext.vercel.app/", 'faLink'],
    },
    tecno: "Next",

},
{
    id: 3,
    name: "La galeria",
    src: "../../../public/images/blog.png",
    cod: {
        "front": ['https://github.com/lefasom/blogs-of-photo', 'faCode'],
        "demo": ["https://blogs-of-photo-git-main-lefasom.vercel.app/", 'faLink'],
    },
    tecno: "React - Redux - Firebase",

},
{
    id: 4,
    name: "Clon de IG",
    src: "../../../public/images/Instagram-clone.png",
    cod: {
        "front": ['https://github.com/lefasom/clon-instagram', 'faCode'],
        'demo': ["https://my-red-social.vercel.app/Perfil", 'faLink'],
    },
    tecno: "React",


},
{
    id: 5,
    name: "Control de precios",
    src: "../../../public/images/apk.png",
    cod: {
        "front": ['https://github.com/lefasom/crud-native', 'faCode'],
        "Apk": ['https://expo.dev/artifacts/eas/2T8Y91k8CGEhD8KfJ7NNxV.apk', 'faLink'],
    },
    tecno: "React Native - Firebase",
},
    
];