interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Vision Developer Program",
        startDate: "07-08-2024",
        endDate: "07-31-2024",
        school: "Apple Codign Academy",
        location: "Online en directo",
        description: "Formación de 45 horas en el desarrollo de aplicaciones para Apple Vision Pro, en el que se profundiza en la computación espacial.",
        currentUni: false,
    },
    {
        title: "Programación Multiplataforma",
        startDate: "09-01-2017",
        endDate: "06-01-2019",
        school: "Ciudad Jardín",
        location: "Vitoria - Gasteiz",
        description: "Inicio en el mundo de la programación aprendiendo estructura de BD, logica de programación, concurrencia, etc.",
        currentUni: false,
    },
    {
        title: "Sistemas Microinformáticos y Redes",
        startDate: "09-01-2015",
        endDate: "06-01-2017",
        school: "Ciudad Jardín",
        location: "Vitoria - Gasteiz",
        description: "Conocimiento adquirido en el funcionamiento de sistemas informáticos y redes.",
        currentUni: false,
    },
];

export default education;