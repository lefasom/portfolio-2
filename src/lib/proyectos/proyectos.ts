export interface Proyecto {
    id: number;
    name: string;
    src: string;
    cod: { [key: string]: string[] };
    tecno: string;
}


export const proyectos: Proyecto[] =  [
    {
        id: 1,
        name: "Chatea",
        src: "../images/chatea3.png",
        cod: {
            "front": ['https://github.com/lefasom/front-chatea', 'faCode'],
            "back": ['https://github.com/lefasom/back-chatea', 'faCode'],
            'demo': ["https://front-chatea.vercel.app/", 'faLink'],
        },
        tecno: "Vue - Vuex - Node - Firebase - MongoDB",
    },
    {
        id: 2,
        name: "La Consulta",
        src: "../images/verduleria.png",
        cod: {
            "front": ['https://github.com/lefasom/verduleria_la_consulta_next.js', 'faCode'],
            'demo': ["https://verdulerialaconsultanext.vercel.app/", 'faLink'],
        },
        tecno: "Next",

    },
    {
        id: 3,
        name: "La galeria",
        src: "../images/blog.png",
        cod: {
            "front": ['https://github.com/lefasom/blogs-of-photo', 'faCode'],
            "demo": ["https://blogs-of-photo-git-main-lefasom.vercel.app/", 'faLink'],
        },
        tecno: "React - Redux - Firebase",

    },
    {
        id: 4,
        name: "Clon de IG",
        src: "../images/Instagram-clone.png",
        cod: {
            "front": ['https://github.com/lefasom/clon-instagram', 'faCode'],
            'demo': ["https://my-red-social.vercel.app/Perfil", 'faLink'],
        },
        tecno: "React",


    },
    {
        id: 5,
        name: "Control de precios",
        src: "../images/apk.png",
        cod: {
            "front": ['https://github.com/lefasom/crud-native', 'faCode'],
            "Apk": ['https://expo.dev/artifacts/eas/2T8Y91k8CGEhD8KfJ7NNxV.apk', 'faLink'],
        },
        tecno: "React Native - Firebase",
    },
    {
        id: 6,
        name: "La Serafina",
        src: "../images/serafina.png",
        cod: {
            "front": ['https://github.com/lefasom/la-serafina-2.0', 'faCode'],
            'demo': ["https://la-serafina-2-0.vercel.app/", 'faLink'],
        },
        tecno: "Next - Firebase",
    }
    ,
    {
        id: 7,
        name: "Rec escolar",
        src: "../images/rec-escolar.png",
        cod: {
            "code": ['https://github.com/lefasom/recordatorio-escolar', 'faCode'],
            'demo': ["https://notificacionesappescolar.000webhostapp.com/", 'faLink'],
        },
        tecno: "PHP - MySql",
    }
    ,
    {
        id: 9,
        name: "Calculadora",
        src: "../images/calculadora.png",
        cod: {
            "code": ['https://github.com/lefasom/calculadora', 'faCode'],
            'demo': ["https://calculadora-theta-gules.vercel.app//", 'faLink'],
        },
        tecno: "JavaScript - HTML - CSS",
    }
    ,
    {
        id: 10,
        name: "Gestor de negocio",
        src: "../images/gestor.png",
        cod: {
            "code": ['https://github.com/lefasom/gestion-de-negocio', 'faCode'],
            "mp4": ['https://drive.google.com/file/d/1HsqSBHckmDiIbkKfDiiUZXs3C_3YRUs4/view?usp=sharing', 'faLink'],
        },
        tecno: "Node - ejs - SQL(XAMPP)",
    }
    ,
    {
        id: 11,
        name: "Exportar precios - Excel",
        src: "../images/python-crud.png",
        cod: {
            "code": ['https://github.com/lefasom/lista-de-precios', 'faCode'],
            "demo": ['https://lista-de-precios-2v50.onrender.com', 'faLink'],
        },
        tecno: "Python - Flask - MongoDB - JavaScript",
    }
    ,
    {
        id: 12,
        name: "Crud.exe",
        src: "../images/ejecutable.png",
        cod: {
            "code": ['https://github.com/lefasom/crud---Python---Tkinder---MySql', 'faCode'],
            "mp4": ['https://drive.google.com/file/d/12U0bGQxf-AGzGshqJEoUrvJF_93688hJ/view?usp=sharing', 'faLink'],
        },
        tecno: "Python - Tkinder - SQL(XAMPP) - XSLX - CSV",
    }
    ,
    {
        id: 13,
        name: "Crud_2.exe",
        src: "../images/pyqt6.png",
        cod: {
            "code": ['https://github.com/lefasom/Lista-de-productos', 'faCode'],
            "mp4": ['https://drive.google.com/file/d/1ufZhPdeH0vLlPXtZP9nkW80VCqYCuTy2/view?usp=sharing', 'faLink'],
        },
        tecno: "Python - PyQt6 - SQLite ",
    }
    ,
    {
        id: 14,
        name: "Galeria animada",
        src: "../images/astro.png",
        cod: {
            "code": ['https://github.com/lefasom/portfolio-2', 'faCode'],
            "demo": ['https://portfolio-2-puce.vercel.app/', 'faLink'],
        },
        tecno: "Astro - Svelte - Typescript - View-transition",
    }
];